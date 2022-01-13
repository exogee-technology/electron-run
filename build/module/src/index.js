import commander from 'commander';
import pkg from '../package.json';
import { clean, run, runBuild } from './commands';
const program = new commander.Command(pkg.name).version(pkg.version);
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
        await clean();
    }
    await run({
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
    await runBuild({
        preloadScript: options.preload,
        entry: entryFile,
        esbuildConfigFile: options.esbuildConfigFile,
    });
});
program.command('clean').action(clean);
program.addHelpText('beforeAll', `Repository: ${pkg.repository}\n`);
program.parseAsync(process.argv).then();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBRWxDLE9BQU8sR0FBRyxNQUFNLGlCQUFpQixDQUFDO0FBRWxDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVsRCxNQUFNLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFckUsT0FBTztLQUNKLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDM0MsV0FBVyxDQUFDLG1DQUFtQyxDQUFDO0tBQ2hELE1BQU0sQ0FDTCxtQkFBbUIsRUFDbkIscURBQXFELENBQ3REO0tBQ0EsTUFBTSxDQUNMLGtCQUFrQixFQUNsQixvRUFBb0UsQ0FDckU7S0FDQSxNQUFNLENBQ0wsOEJBQThCLEVBQzlCLDJDQUEyQyxDQUM1QztLQUNBLE1BQU0sQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7S0FDN0MsTUFBTSxDQUNMLEtBQUssRUFDSCxTQUE2QixFQUM3QixPQUtDLEVBQ0QsRUFBRTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2hDLElBQUksWUFBZ0MsQ0FBQztJQUVyQyxJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDcEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDN0I7SUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7UUFDdEIsTUFBTSxLQUFLLEVBQUUsQ0FBQztLQUNmO0lBRUQsTUFBTSxHQUFHLENBQUM7UUFDUixLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRO1FBQ1IsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPO1FBQzlCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7S0FDN0MsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUM7QUFFSixPQUFPO0tBQ0osT0FBTyxDQUFDLGVBQWUsQ0FBQztLQUN4QixXQUFXLENBQUMsb0RBQW9ELENBQUM7S0FDakUsTUFBTSxDQUNMLGtCQUFrQixFQUNsQiwwRUFBMEUsQ0FDM0U7S0FDQSxNQUFNLENBQ0wsOEJBQThCLEVBQzlCLDJDQUEyQyxDQUM1QztLQUNBLE1BQU0sQ0FDTCxLQUFLLEVBQ0gsU0FBNkIsRUFDN0IsT0FBdUQsRUFDdkQsRUFBRTtJQUNGLE1BQU0sUUFBUSxDQUFDO1FBQ2IsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPO1FBQzlCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7S0FDN0MsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUM7QUFFSixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV2QyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxlQUFlLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0FBRXBFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDIn0=