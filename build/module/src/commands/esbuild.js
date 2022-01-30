/**
 * Run main process using ESBuild
 */
import fs from 'fs';
import path from 'path';
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
/** Attempt to return esbuild from the project, if it exists */
const findESBuildForProject = () => {
    const esBuildPath = path.join(PathManager.shard.nodeModulesPath, 'esbuild');
    if (fs.existsSync(esBuildPath)) {
        console.log("Using esbuild from ", esBuildPath);
        return require(esBuildPath);
    }
    else {
        return require('esbuild');
    }
};
export const runESBuildForMainProcess = async ({ isBuild, outDir, preloadScript, entryPath, esbuildConfigFile }, reportError, _buildStart, buildComplete, notFoundTSConfig) => {
    const esbuild = findESBuildForProject();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tYW5kcy9lc2J1aWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3BCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUl4QixPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsa0JBQWtCLEdBQ25CLE1BQU0sV0FBVyxDQUFDO0FBRW5CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsU0FBUyxlQUFlLENBQUMsS0FBbUI7SUFDMUMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FDckIsQ0FBQyxDQUFDLEVBQWdCLEVBQUU7UUFDbEIsT0FBTztZQUNMLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNwQixPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELEtBQUssVUFBVSxZQUFZO0lBQ3pCLG9CQUFvQjtJQUNwQixJQUFJLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUU7UUFDdEQsbUJBQW1CLEVBQUUsQ0FBQztLQUN2QjtJQUVELE1BQU0sU0FBUyxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDckUsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUU1RCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtRQUN0QixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMs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