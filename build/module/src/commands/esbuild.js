/**
 * Run main process using ESBuild
 */
import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';
import { notFoundESBuildConfig, notFoundPackageJson, PathManager, warnPreloadMessage, } from '../common';
import { exists } from '../utils';
function transformErrors(error) {
    return error.errors.map((e) => {
        return {
            location: e.location,
            message: e.text,
        };
    });
}
async function findExternal() {
    // find package.json
    if (!(await exists(PathManager.shard.packageJsonPath))) {
        notFoundPackageJson();
    }
    const externals = new Set();
    const keys = ['dependencies', 'devDependencies', 'peerDependencies'];
    const pkg = await import(PathManager.shard.packageJsonPath);
    for (const key of keys) {
        const obj = pkg[key] ?? {};
        for (const name of Object.keys(obj)) {
            externals.add(name);
        }
    }
    // find node_modules
    if (await exists(PathManager.shard.nodeModulesPath)) {
        const children = await fs.promises.readdir(PathManager.shard.nodeModulesPath);
        for (const child of children) {
            externals.add(child);
        }
    }
    return Array.from(externals);
}
/** When provided with a filename, loads the esbuild js config from the file as a default export */
export const loadESBuildConfigFromFile = (file) => {
    // No file provided
    if (!file)
        return {};
    const esbuildConfigPath = path.join(PathManager.shard.cwd, file);
    // File provided but does not exist.
    if (!fs.existsSync(esbuildConfigPath)) {
        notFoundESBuildConfig();
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
export const runESBuildForMainProcess = async ({ isBuild, outDir, preloadScript, entryPath, esbuildConfigFile }, reportError, _buildStart, buildComplete, notFoundTSConfig) => {
    // Load esbuild config file supplied by user
    const esbuildConfigExtra = loadESBuildConfigFromFile(esbuildConfigFile);
    let tsconfigPath = path.join(PathManager.shard.mainPath, 'tsconfig.json');
    if (!fs.existsSync(tsconfigPath)) {
        tsconfigPath = await notFoundTSConfig();
    }
    let count = 0;
    const externals = await findExternal();
    const entryPoints = [entryPath];
    if (preloadScript) {
        if (!/^.*\.(js|ts|jsx|tsx)$/.test(preloadScript)) {
            console.log(warnPreloadMessage);
        }
        const preloadScriptPath = path.join(PathManager.shard.mainPath, preloadScript);
        if (await exists(preloadScriptPath)) {
            entryPoints.push(preloadScriptPath);
            // Only valid during the development phase
            if (!isBuild) {
                PathManager.shard.setPreloadScriptPath(preloadScriptPath);
            }
        }
    }
    try {
        await esbuild.build({
            outdir: outDir,
            entryPoints: entryPoints,
            tsconfig: tsconfigPath,
            format: 'cjs',
            logLevel: 'silent',
            logLimit: 0,
            incremental: !isBuild,
            platform: 'node',
            sourcemap: true,
            bundle: true,
            external: externals,
            watch: !isBuild
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
                : false,
            ...esbuildConfigExtra,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tYW5kcy9lc2J1aWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3BCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUV4QixPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUVuQyxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsa0JBQWtCLEdBQ25CLE1BQU0sV0FBVyxDQUFDO0FBRW5CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsU0FBUyxlQUFlLENBQUMsS0FBMkI7SUFDbEQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FDckIsQ0FBQyxDQUFDLEVBQWdCLEVBQUU7UUFDbEIsT0FBTztZQUNMLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNwQixPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELEtBQUssVUFBVSxZQUFZO0lBQ3pCLG9CQUFvQjtJQUNwQixJQUFJLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUU7UUFDdEQsbUJBQW1CLEVBQUUsQ0FBQztLQUN2QjtJQUVELE1BQU0sU0FBUyxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDckUsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUU1RCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUks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