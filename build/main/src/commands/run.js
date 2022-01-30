"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const common_1 = require("../common");
const common_2 = require("../common");
const prompt_1 = require("../common/prompt");
const find_paths_or_exit_1 = require("../utils/find-paths-or-exit");
const esbuild_1 = require("./esbuild");
const run_electron_1 = require("./run-electron");
const run_vite_1 = require("./run-vite");
function reportError(...errors) {
    common_1.diagnose(...errors);
}
function buildStart() {
    console.log(common_2.startMessage);
}
// =============== run electron start ===============
let stopElectron = () => { };
let stopPromptToRunElectron = () => { };
async function runElectron(dir) {
    stopElectron();
    [, stopElectron] = await run_electron_1.startElectron({ path: dir });
}
async function buildComplete(dir, count) {
    stopPromptToRunElectron();
    console.log(common_2.finishMessage);
    if (count > 1) {
        const [readAnswer, stop] = prompt_1.prompt('Need rerun Electron?');
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
async function run(options) {
    const { withVite, preloadScript, entry, viteRoot, esbuildConfigFile, } = options;
    // Start vite server
    if (withVite) {
        // find root first
        // TODO move to PathManager.ts
        const defaultRootList = ['./src/renderer/', './src/', './'];
        const viteRootPath = await find_paths_or_exit_1.findPathOrExit(viteRoot, defaultRootList, common_1.cannotFoundEntryScriptOrViteRootPath(process.cwd()));
        await run_vite_1.startViteServer({
            configPath: common_1.PathManager.shard.viteConfigPath,
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
    const entryScriptPath = await find_paths_or_exit_1.findPathOrExit(entry, defaultEntryList, common_1.cannotFoundEntryScriptOrViteRootPath(process.cwd()));
    await esbuild_1.runESBuildForMainProcess({
        isBuild: false,
        outDir: common_1.PathManager.shard.devOutPath,
        preloadScript,
        entryPath: entryScriptPath,
        esbuildConfigFile,
    }, reportError, buildStart, buildComplete, async () => {
        const tsconfigPath = await common_1.writeMainTSConfig();
        common_1.notFoundTSConfig(tsconfigPath);
        return tsconfigPath;
    });
}
exports.run = run;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3J1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FPbUI7QUFDbkIsc0NBQXdEO0FBQ3hELDZDQUEwQztBQUMxQyxvRUFBNkQ7QUFFN0QsdUNBQXFEO0FBQ3JELGlEQUErQztBQUMvQyx5Q0FBNkM7QUFFN0MsU0FBUyxXQUFXLENBQUMsR0FBRyxNQUFzQjtJQUM1QyxpQkFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELFNBQVMsVUFBVTtJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFZLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQscURBQXFEO0FBRXJELElBQUksWUFBWSxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN4QyxJQUFJLHVCQUF1QixHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUVuRCxLQUFLLFVBQVUsV0FBVyxDQUFDLEdBQVc7SUFDcEMsWUFBWSxFQUFFLENBQUM7SUFDZixDQUFDLEVBQUUsWUFBWSxDQUFDLEdBQUcsTUFBTSw0QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUVELEtBQUssVUFBVSxhQUFhLENBQUMsR0FBVyxFQUFFLEtBQWE7SUFDckQsdUJBQXVCLEVBQUUsQ0FBQztJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFhLENBQUMsQ0FBQztJQUUzQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDYixNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLGVBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFELHVCQUF1QixHQUFHLElBQUksQ0FBQztRQUUvQixJQUFJLE1BQU0sVUFBVSxFQUFFLEVBQUU7WUFDdEIsTUFBTSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7S0FDRjtTQUFNO1FBQ0wsTUFBTSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEI7QUFDSCxDQUFDO0FBRUQsbURBQW1EO0FBRTVDLEtBQUssVUFBVSxHQUFHLENBQUMsT0FNekI7SUFDQyxNQUFNLEVBQ0osUUFBUSxFQUNSLGFBQWEsRUFDYixLQUFLLEVBQ0wsUUFBUSxFQUNSLGlCQUFpQixHQUNsQixHQUFHLE9BQU8sQ0FBQztJQUVaLG9CQUFvQjtJQUNwQixJQUFJLFFBQVEsRUFBRTtRQUNaLGtCQUFrQjtRQUNsQiw4QkFBOEI7UUFDOUIsTUFBTSxlQUFlLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxtQ0FBYyxDQUN2QyxRQUFRLEVBQ1IsZUFBZSxFQUNmLDZDQUFvQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUNwRCxDQUFDO1FBRUYsTUFBTSwwQkFBZSxDQUFDO1lBQ3BCLFVBQVUsRUFBRSxvQkFBVyxDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQzVDLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztLQUNKO0lBRUQsNkJBQTZCO0lBRTdCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsTUFBTSxnQkFBZ0IsR0FBRztRQUN2QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFlBQVk7S0FDYixDQUFDO0lBQ0YsTUFBTSxlQUFlLEdBQUcsTUFBTSxtQ0FBYyxDQUMxQyxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLDZDQUFvQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUNwRCxDQUFDO0lBRUYsTUFBTSxrQ0FBd0IsQ0FDNUI7UUFDRSxPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFBRSxvQkFBVyxDQUFDLEtBQUssQ0FBQyxVQUFVO1FBQ3BDLGFBQWE7UUFDYixTQUFTLEVBQUUsZUFBZTtRQUMxQixpQkFBaUI7S0FDbEIsRUFDRCxXQUFXLEVBQ1gsVUFBVSxFQUNWLGFBQWEsRUFDYixLQUFLLElBQUksRUFBRTtRQUNULE1BQU0sWUFBWSxHQUFHLE1BQU0sMEJBQWlCLEVBQUUsQ0FBQztRQUMvQyx5QkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFuRUQsa0JBbUVDIn0=