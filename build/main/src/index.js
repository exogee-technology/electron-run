"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const package_json_1 = __importDefault(require("../package.json"));
const commands_1 = require("./commands");
const program = new commander_1.default.Command(package_json_1.default.name).version(package_json_1.default.version);
program
    .command('dev [entry]', { isDefault: true })
    .description('⚡️Start to dev your electron app.')
    .option('--vite [root dir]', 'The flag indicates whether to open the vite server.')
    .option('--preload <file>', "Electron preload filer relative to the main src. Won't be bundled.")
    .option('--esbuild-config-file <file>', 'Custom config js file to use with esbuild')
    .option('--clean-cache', 'Clean build cache.')
    .action(async (entryFile, options) => {
    console.log(options.cleanCache);
    const withVite = !!options.vite;
    let viteRootPath;
    if (typeof options.vite === 'string') {
        viteRootPath = options.vite;
    }
    if (options.cleanCache) {
        await commands_1.clean();
    }
    await commands_1.run({
        entry: entryFile,
        withVite,
        preloadScript: options.preload,
        viteRoot: viteRootPath,
        esbuildConfigFile: options.esbuildConfigFile,
    });
});
program
    .command('build [entry]')
    .description('Build your Electron main process code in main src.')
    .option('--preload <file>', "Electron preload script path relative to the main src. Won't be bundled.")
    .option('--esbuild-config-file <file>', 'Custom config js file to use with esbuild')
    .action(async (entryFile, options) => {
    await commands_1.runBuild({
        preloadScript: options.preload,
        entry: entryFile,
        esbuildConfigFile: options.esbuildConfigFile,
    });
});
program.command('clean').action(commands_1.clean);
program.addHelpText('beforeAll', `Repository: ${package_json_1.default.repository}\n`);
program.parseAsync(process.argv).then();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBa0M7QUFFbEMsbUVBQWtDO0FBRWxDLHlDQUFrRDtBQUVsRCxNQUFNLE9BQU8sR0FBRyxJQUFJLG1CQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLHNCQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFckUsT0FBTztLQUNKLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDM0MsV0FBVyxDQUFDLG1DQUFtQyxDQUFDO0tBQ2hELE1BQU0sQ0FDTCxtQkFBbUIsRUFDbkIscURBQXFELENBQ3REO0tBQ0EsTUFBTSxDQUNMLGtCQUFrQixFQUNsQixvRUFBb0UsQ0FDckU7S0FDQSxNQUFNLENBQ0wsOEJBQThCLEVBQzlCLDJDQUEyQyxDQUM1QztLQUNBLE1BQU0sQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7S0FDN0MsTUFBTSxDQUNMLEtBQUssRUFDSCxTQUE2QixFQUM3QixPQUtDLEVBQ0QsRUFBRTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2hDLElBQUksWUFBZ0MsQ0FBQztJQUVyQyxJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDcEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDN0I7SUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7UUFDdEIsTUFBTSxnQkFBSyxFQUFFLENBQUM7S0FDZjtJQUVELE1BQU0sY0FBRyxDQUFDO1FBQ1IsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUTtRQUNSLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTztRQUM5QixRQUFRLEVBQUUsWUFBWTtRQUN0QixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCO0tBQzdDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDO0FBRUosT0FBTztLQUNKLE9BQU8sQ0FBQyxlQUFlLENBQUM7S0FDeEIsV0FBVyxDQUFDLG9EQUFvRCxDQUFDO0tBQ2pFLE1BQU0sQ0FDTCxrQkFBa0IsRUFDbEIsMEVBQTBFLENBQzNFO0tBQ0EsTUFBTSxDQUNMLDhCQUE4QixFQUM5QiwyQ0FBMkMsQ0FDNUM7S0FDQSxNQUFNLENBQ0wsS0FBSyxFQUNILFNBQTZCLEVBQzdCLE9BQXVELEVBQ3ZELEVBQUU7SUFDRixNQUFNLG1CQUFRLENBQUM7UUFDYixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU87UUFDOUIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtLQUM3QyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQztBQUVKLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFLLENBQUMsQ0FBQztBQUV2QyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxlQUFlLHNCQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztBQUVwRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyJ9