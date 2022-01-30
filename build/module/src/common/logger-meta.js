import { cyan, green, red, yellow } from 'colorette';
import pkg from '../../package.json';
export const consoleMessagePrefix = `[${pkg.name}]`;
export const consoleViteMessagePrefix = '[vite]';
export const cannotFoundTSConfigMessage = (writePath) => yellow(`Could not find a valid 'tsconfig.json'. A default one has been written in:\n`) + writePath;
export const cannotFoundViteConfigMessage = (writePath) => yellow(`Could not find a valid vite config. A default one has been written in:\n`) + writePath;
export const cannotFoundESBuildConfigMessage = yellow(`Could not find the specified esbuild config.`);
export const cannotFoundEntryScriptOrViteRootPath = (cwd) => red(`Could not find the entry script path or vite root directory path for main process in ${cwd}. See the solutions below:`) +
    cyan(`
  - 1. Add an argument that indicates the entry path for the main process and the option
       that indicates the root path for vite. Example:
          run \`elecrun dev ./index.js --vite ./index.html\`
  - 2. Elecrun will automatically find the entry path and vite root path by the following
       list while you didn't specify the entry path argument.
          Entry script for main process:
            - ./src/main/index.js
            - ./src/main/index.ts
            - ./src/index.js
            - ./src/index.ts
            - ./index.js
            - ./index.ts
          Vite root directory path:
            - ./src/renderer/
            - ./src/
            - ./
`);
export const cannotFoundPackageJsonMessage = "Could not find a valid 'package.json'.";
export const startMessage = cyan(`${consoleMessagePrefix} Start compile main process...`);
export const finishMessage = green(`${consoleMessagePrefix} Finished compiled. Rerun electron main process...`);
export const finishBuildMessage = green(`${consoleMessagePrefix} Finish Build.`);
export const warnPreloadMessage = `warn preload path.`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLW1ldGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2xvZ2dlci1tZXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckQsT0FBTyxHQUFHLE1BQU0sb0JBQW9CLENBQUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDcEQsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsUUFBUSxDQUFDO0FBRWpELE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLENBQUMsU0FBaUIsRUFBVSxFQUFFLENBQ3RFLE1BQU0sQ0FDSiw4RUFBOEUsQ0FDL0UsR0FBRyxTQUFTLENBQUM7QUFFaEIsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUcsQ0FBQyxTQUFpQixFQUFVLEVBQUUsQ0FDeEUsTUFBTSxDQUNKLDBFQUEwRSxDQUMzRSxHQUFHLFNBQVMsQ0FBQztBQUVoQixNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FDMUMsTUFBTSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFFekQsTUFBTSxDQUFDLE1BQU0sb0NBQW9DLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRSxDQUMxRSxHQUFHLENBQ0Qsd0ZBQXdGLEdBQUcsNEJBQTRCLENBQ3hIO0lBQ0QsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCTixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FDeEMsd0NBQXdDLENBQUM7QUFDM0MsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FDOUIsR0FBRyxvQkFBb0IsZ0NBQWdDLENBQ3hELENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUNoQyxHQUFHLG9CQUFvQixvREFBb0QsQ0FDNUUsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FDckMsR0FBRyxvQkFBb0IsZ0JBQWdCLENBQ3hDLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyJ9