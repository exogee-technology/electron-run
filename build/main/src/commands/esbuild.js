"use strict";
/**
 * Run main process using ESBuild
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runESBuildForMainProcess = exports.loadESBuildConfigFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const esbuild = __importStar(require("esbuild"));
const common_1 = require("../common");
const utils_1 = require("../utils");
function transformErrors(error) {
    return error.errors.map((e) => {
        return {
            location: e.location,
            message: e.text,
        };
    });
}
async function findExternal() {
    var _a;
    // find package.json
    if (!(await utils_1.exists(common_1.PathManager.shard.packageJsonPath))) {
        common_1.notFoundPackageJson();
    }
    const externals = new Set();
    const keys = ['dependencies', 'devDependencies', 'peerDependencies'];
    const pkg = await Promise.resolve().then(() => __importStar(require(common_1.PathManager.shard.packageJsonPath)));
    for (const key of keys) {
        const obj = (_a = pkg[key]) !== null && _a !== void 0 ? _a : {};
        for (const name of Object.keys(obj)) {
            externals.add(name);
        }
    }
    // find node_modules
    if (await utils_1.exists(common_1.PathManager.shard.nodeModulesPath)) {
        const children = await fs_1.default.promises.readdir(common_1.PathManager.shard.nodeModulesPath);
        for (const child of children) {
            externals.add(child);
        }
    }
    return Array.from(externals);
}
/** When provided with a filename, loads the esbuild js config from the file as a default export */
const loadESBuildConfigFromFile = (file) => {
    // No file provided
    if (!file)
        return {};
    const esbuildConfigPath = path_1.default.join(common_1.PathManager.shard.cwd, file);
    // File provided but does not exist.
    if (!fs_1.default.existsSync(esbuildConfigPath)) {
        common_1.notFoundESBuildConfig();
        return {};
    }
    try {
        return require(esbuildConfigPath);
    }
    catch (e) {
        // File exists but could not be loaded
        console.error('Could not load provided esbuild config file, ignoring');
        console.error(e);
    }
    return {};
};
exports.loadESBuildConfigFromFile = loadESBuildConfigFromFile;
const runESBuildForMainProcess = async ({ isBuild, outDir, preloadScript, entryPath, esbuildConfigFile }, reportError, _buildStart, buildComplete, notFoundTSConfig) => {
    // Load esbuild config file supplied by user
    const esbuildConfigExtra = exports.loadESBuildConfigFromFile(esbuildConfigFile);
    let tsconfigPath = path_1.default.join(common_1.PathManager.shard.mainPath, 'tsconfig.json');
    if (!fs_1.default.existsSync(tsconfigPath)) {
        tsconfigPath = await notFoundTSConfig();
    }
    let count = 0;
    const externals = await findExternal();
    const entryPoints = [entryPath];
    if (preloadScript) {
        if (!/^.*\.(js|ts|jsx|tsx)$/.test(preloadScript)) {
            console.log(common_1.warnPreloadMessage);
        }
        const preloadScriptPath = path_1.default.join(common_1.PathManager.shard.mainPath, preloadScript);
        if (await utils_1.exists(preloadScriptPath)) {
            entryPoints.push(preloadScriptPath);
            // Only valid during the development phase
            if (!isBuild) {
                common_1.PathManager.shard.setPreloadScriptPath(preloadScriptPath);
            }
        }
    }
    try {
        await esbuild.build(Object.assign({ outdir: outDir, entryPoints: entryPoints, tsconfig: tsconfigPath, format: 'cjs', logLevel: 'silent', logLimit: 0, incremental: !isBuild, platform: 'node', sourcemap: true, bundle: true, external: externals, watch: !isBuild
                ? {
                    onRebuild: async (error) => {
                        if (error) {
                            reportError(...transformErrors(error));
                        }
                        else {
                            count++;
                            buildComplete(outDir, count);
                        }
                    },
                }
                : false }, esbuildConfigExtra));
        count++;
        buildComplete(outDir, count);
    }
    catch (e) {
        if (!!e.errors && !!e.errors.length && e.errors.length > 0) {
            const error = e;
            reportError(...transformErrors(error));
        }
    }
};
exports.runESBuildForMainProcess = runESBuildForMainProcess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tYW5kcy9lc2J1aWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILDRDQUFvQjtBQUNwQixnREFBd0I7QUFFeEIsaURBQW1DO0FBRW5DLHNDQU1tQjtBQUVuQixvQ0FBa0M7QUFFbEMsU0FBUyxlQUFlLENBQUMsS0FBMkI7SUFDbEQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FDckIsQ0FBQyxDQUFDLEVBQWdCLEVBQUU7UUFDbEIsT0FBTztZQUNMLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNwQixPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELEtBQUssVUFBVSxZQUFZOztJQUN6QixvQkFBb0I7SUFDcEIsSUFBSSxDQUFDLENBQUMsTUFBTSxjQUFNLENBQUMsb0JBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtRQUN0RCw0QkFBbUIsRUFBRSxDQUFDO0tBQ3ZCO0lBRUQsTUFBTSxTQUFTLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDekMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNyRSxNQUFNLEdBQUcsR0FBRyx3REFBYSxvQkFBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUMsQ0FBQztJQUU1RCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtRQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUNBQUksRUFBRSxDQUFDO1FBQzNCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQyxT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