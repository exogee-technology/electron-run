import { cannotFoundEntryScriptOrViteRootPath, diagnose, notFoundTSConfig, PathManager, writeMainTSConfig, } from '../common';
import { finishMessage, startMessage } from '../common';
import { prompt } from '../common/prompt';
import { findPathOrExit } from '../utils/find-paths-or-exit';
import { runESBuildForMainProcess } from './esbuild';
import { startElectron } from './run-electron';
import { startViteServer } from './run-vite';
function reportError(...errors) {
    diagnose(...errors);
}
function buildStart() {
    console.log(startMessage);
}
// =============== run electron start ===============
let stopElectron = () => { };
let stopPromptToRunElectron = () => { };
async function runElectron(dir) {
    stopElectron();
    [, stopElectron] = await startElectron({ path: dir });
}
async function buildComplete(dir, count) {
    stopPromptToRunElectron();
    console.log(finishMessage);
    if (count > 1) {
        const [readAnswer, stop] = prompt('Need rerun Electron?');
        stopPromptToRunElectron = stop;
        if (await readAnswer()) {
            await runElectron(dir);
        }
    }
    else {
        await runElectron(dir);
    }
}
// =============== run electron end ===============
export async function run(options) {
    const { withVite, preloadScript, entry, viteRoot, esbuildConfigFile, } = options;
    // Start vite server
    if (withVite) {
        // find root first
        // TODO move to PathManager.ts
        const defaultRootList = ['./src/renderer/', './src/', './'];
        const viteRootPath = await findPathOrExit(viteRoot, defaultRootList, cannotFoundEntryScriptOrViteRootPath(process.cwd()));
        await startViteServer({
            configPath: PathManager.shard.viteConfigPath,
            root: viteRootPath,
        });
    }
    // Start dev for main process
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
        isBuild: false,
        outDir: PathManager.shard.devOutPath,
        preloadScript,
        entryPath: entryScriptPath,
        esbuildConfigFile,
    }, reportError, buildStart, buildComplete, async () => {
        const tsconfigPath = await writeMainTSConfig();
        notFoundTSConfig(tsconfigPath);
        return tsconfigPath;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3J1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsb0NBQW9DLEVBRXBDLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU3QyxTQUFTLFdBQVcsQ0FBQyxHQUFHLE1BQXNCO0lBQzVDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxTQUFTLFVBQVU7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQscURBQXFEO0FBRXJELElBQUksWUFBWSxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN4QyxJQUFJLHVCQUF1QixHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUVuRCxLQUFLLFVBQVUsV0FBVyxDQUFDLEdBQVc7SUFDcEMsWUFBWSxFQUFFLENBQUM7SUFDZixDQUFDLEVBQUUsWUFBWSxDQUFDLEdBQUcsTUFBTSxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQsS0FBSyxVQUFVLGFBQWEsQ0FBQyxHQUFXLEVBQUUsS0FBYTtJQUNyRCx1QkFBdUIsRUFBRSxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ2IsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxRCx1QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFFL0IsSUFBSSxNQUFNLFVBQVUsRUFBRSxFQUFFO1lBQ3RCLE1BQU0sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7U0FBTTtRQUNMLE1BQU0sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQUVELG1EQUFtRDtBQUVuRCxNQUFNLENBQUMsS0FBSyxVQUFVLEdBQUcsQ0FBQyxPQU16QjtJQUNDLE1BQU0sRUFDSixRQUFRLEVBQ1IsYUFBYSxFQUNiLEtBQUssRUFDTCxRQUFRLEVBQ1IsaUJBQWlCLEdBQ2xCLEdBQUcsT0FBTyxDQUFDO0lBRVosb0JBQW9CO0lBQ3BCLElBQUksUUFBUSxFQUFFO1FBQ1osa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5QixNQUFNLGVBQWUsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxNQUFNLFlBQVksR0FBRyxNQUFNLGNBQWMsQ0FDdkMsUUFBUSxFQUNSLGVBQWUsRUFDZixvQ0FBb0MsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDcEQsQ0FBQztRQUVGLE1BQU0sZUFBZSxDQUFDO1lBQ3BCLFVBQVUsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWM7WUFDNUMsSUFBSSxFQUFFLFlBQVk7U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7SUFFRCw2QkFBNkI7SUFFN0IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixNQUFNLGdCQUFnQixHQUFHO1FBQ3ZCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osWUFBWTtLQUNiLENBQUM7SUFDRixNQUFNLGVBQWUsR0FBRyxNQUFNLGNBQWMsQ0FDMUMsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixvQ0FBb0MsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDcEQsQ0FBQztJQUVGLE1BQU0sd0JBQXdCLENBQzVCO1FBQ0UsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVO1FBQ3BDLGFBQWE7UUFDYixTQUFTLEVBQUUsZUFBZTtRQUMxQixpQkFBaUI7S0FDbEIsRUFDRCxXQUFXLEVBQ1gsVUFBVSxFQUNWLGFBQWEsRUFDYixLQUFLLElBQUksRUFBRTtRQUNULE1BQU0sWUFBWSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztRQUMvQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMifQ==