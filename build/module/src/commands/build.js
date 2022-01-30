import { cannotFoundEntryScriptOrViteRootPath, diagnose, finishBuildMessage, notFoundTSConfig, PathManager, startMessage, writeMainTSConfig, } from '../common';
import { findPathOrExit } from '../utils/find-paths-or-exit';
import { runESBuildForMainProcess } from './esbuild';
export async function runBuild({ entry, preloadScript, esbuildConfigFile, }) {
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
    const entryScriptPath = await findPathOrExit(entry, defaultEntryList, cannotFoundEntryScriptOrViteRootPath(process.cwd()));
    await runESBuildForMainProcess({
        isBuild: true,
        outDir: PathManager.shard.outDir,
        preloadScript,
        entryPath: entryScriptPath,
        esbuildConfigFile,
    }, (...errors) => diagnose(...errors), () => console.log(startMessage), () => { }, async () => {
        const tsconfigPath = await writeMainTSConfig();
        notFoundTSConfig(tsconfigPath);
        return tsconfigPath;
    });
    // TODO print some useful information when build finished.
    console.log(finishBuildMessage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbWFuZHMvYnVpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLG9DQUFvQyxFQUNwQyxRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGlCQUFpQixHQUNsQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBUXJELE1BQU0sQ0FBQyxLQUFLLFVBQVUsUUFBUSxDQUFDLEVBQzdCLEtBQUssRUFDTCxhQUFhLEVBQ2IsaUJBQWlCLEdBQ0Q7SUFDaEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixNQUFNLGdCQUFnQixHQUFHO1FBQ3ZCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osWUFBWTtLQUNiLENBQUM7SUFDRixNQUFNLGVBQWUsR0FBRyxNQUFNLGNBQWMsQ0FDMUMsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixvQ0FBb0MsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDcEQsQ0FBQztJQUVGLE1BQU0sd0JBQXdCLENBQzVCO1FBQ0UsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ2hDLGFBQWE7UUFDYixTQUFTLEVBQUUsZUFBZTtRQUMxQixpQkFBaUI7S0FDbEIsRUFDRCxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsRUFDbEMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFDL0IsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNSLEtBQUssSUFBSSxFQUFFO1FBQ1QsTUFBTSxZQUFZLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1FBQy9DLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUMsQ0FDRixDQUFDO0lBRUYsMERBQTBEO0lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsQyxDQUFDIn0=