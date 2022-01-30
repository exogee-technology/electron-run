"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBuild = void 0;
const common_1 = require("../common");
const find_paths_or_exit_1 = require("../utils/find-paths-or-exit");
const esbuild_1 = require("./esbuild");
async function runBuild({ entry, preloadScript, esbuildConfigFile, }) {
    // find entry first
    // TODO move to PathManager.ts
    const defaultEntryList = [
        './src/main/index.js',
        './src/main/index.ts',
        './src/index.js',
        './src/index.ts',
        './index.js',
        './index.ts',
    ];
    const entryScriptPath = await find_paths_or_exit_1.findPathOrExit(entry, defaultEntryList, common_1.cannotFoundEntryScriptOrViteRootPath(process.cwd()));
    await esbuild_1.runESBuildForMainProcess({
        isBuild: true,
        outDir: common_1.PathManager.shard.outDir,
        preloadScript,
        entryPath: entryScriptPath,
        esbuildConfigFile,
    }, (...errors) => common_1.diagnose(...errors), () => console.log(common_1.startMessage), () => { }, async () => {
        const tsconfigPath = await common_1.writeMainTSConfig();
        common_1.notFoundTSConfig(tsconfigPath);
        return tsconfigPath;
    });
    // TODO print some useful information when build finished.
    console.log(common_1.finishBuildMessage);
}
exports.runBuild = runBuild;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbWFuZHMvYnVpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBUW1CO0FBQ25CLG9FQUE2RDtBQUU3RCx1Q0FBcUQ7QUFROUMsS0FBSyxVQUFVLFFBQVEsQ0FBQyxFQUM3QixLQUFLLEVBQ0wsYUFBYSxFQUNiLGlCQUFpQixHQUNEO0lBQ2hCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsTUFBTSxnQkFBZ0IsR0FBRztRQUN2QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFlBQVk7S0FDYixDQUFDO0lBQ0YsTUFBTSxlQUFlLEdBQUcsTUFBTSxtQ0FBYyxDQUMxQyxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLDZDQUFvQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUNwRCxDQUFDO0lBRUYsTUFBTSxrQ0FBd0IsQ0FDNUI7UUFDRSxPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxvQkFBVyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ2hDLGFBQWE7UUFDYixTQUFTLEVBQUUsZUFBZTtRQUMxQixpQkFBaUI7S0FDbEIsRUFDRCxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQyxpQkFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQ2xDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVksQ0FBQyxFQUMvQixHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ1IsS0FBSyxJQUFJLEVBQUU7UUFDVCxNQUFNLFlBQVksR0FBRyxNQUFNLDBCQUFpQixFQUFFLENBQUM7UUFDL0MseUJBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQyxDQUNGLENBQUM7SUFFRiwwREFBMEQ7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBa0IsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUF6Q0QsNEJBeUNDIn0=