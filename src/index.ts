import commander from 'commander';

import pkg from '../package.json';

import { clean, run, runBuild } from './commands';

const program = new commander.Command(pkg.name).version(pkg.version);

program
  .command('dev [entry]', { isDefault: true })
  .description('⚡️Start to dev your electron app.')
  .option(
    '--vite [root dir]',
    'The flag indicates whether to open the vite server.'
  )
  .option(
    '--preload <file>',
    "Electron preload filer relative to the main src. Won't be bundled."
  )
  .option(
    '--esbuild-config-file <file>',
    'Custom config js file to use with esbuild'
  )
  .option('--clean-cache', 'Clean build cache.')
  .action(
    async (
      entryFile: string | undefined,
      options: {
        vite: string | boolean;
        preload: string;
        cleanCache: boolean;
        esbuildConfigFile: string;
      }
    ) => {
      console.log(options.cleanCache);
      const withVite = !!options.vite;
      let viteRootPath: string | undefined;

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
    }
  );

program
  .command('build [entry]')
  .description('Build your Electron main process code in main src.')
  .option(
    '--preload <file>',
    "Electron preload script path relative to the main src. Won't be bundled."
  )
  .option(
    '--esbuild-config-file <file>',
    'Custom config js file to use with esbuild'
  )
  .action(
    async (
      entryFile: string | undefined,
      options: { preload: string; esbuildConfigFile: string }
    ) => {
      await runBuild({
        preloadScript: options.preload,
        entry: entryFile,
        esbuildConfigFile: options.esbuildConfigFile,
      });
    }
  );

program.command('clean').action(clean);

program.addHelpText('beforeAll', `Repository: ${pkg.repository}\n`);

program.parseAsync(process.argv).then();
