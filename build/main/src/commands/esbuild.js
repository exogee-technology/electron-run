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
/** Attempt to return esbuild from the project, if it exists */
const findESBuildForProject = () => {
    const esBuildPath = path_1.default.join(common_1.PathManager.shard.nodeModulesPath, 'esbuild');
    if (fs_1.default.existsSync(esBuildPath)) {
        console.log("Using esbuild from ", esBuildPath);
        return require(esBuildPath);
    }
    else {
        return require('esbuild');
    }
};
const runESBuildForMainProcess = async ({ isBuild, outDir, preloadScript, entryPath, esbuildConfigFile }, reportError, _buildStart, buildComplete, notFoundTSConfig) => {
    const esbuild = findESBuildForProject();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tYW5kcy9lc2J1aWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILDRDQUFvQjtBQUNwQixnREFBd0I7QUFJeEIsc0NBTW1CO0FBRW5CLG9DQUFrQztBQUVsQyxTQUFTLGVBQWUsQ0FBQyxLQUFtQjtJQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNyQixDQUFDLENBQUMsRUFBZ0IsRUFBRTtRQUNsQixPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ3BCLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsS0FBSyxVQUFVLFlBQVk7O0lBQ3pCLG9CQUFvQjtJQUNwQixJQUFJLENBQUMsQ0FBQyxNQUFNLGNBQU0sQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO1FBQ3RELDRCQUFtQixFQUFFLENBQUM7S0FDdkI7SUFFRCxNQUFNLFNBQVMsR0FBZ0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN6QyxNQUFNLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sR0FBRyxHQUFHLHdEQUFhLG9CQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBQyxDQUFDO0lBRTVELEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLE1BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQ0FBSSxFQUFFLENBQUM7UUFDM0IsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLFNBQVMsQ0FBQyxHQUFH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