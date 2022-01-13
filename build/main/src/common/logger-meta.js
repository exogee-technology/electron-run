"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnPreloadMessage = exports.finishBuildMessage = exports.finishMessage = exports.startMessage = exports.cannotFoundPackageJsonMessage = exports.cannotFoundEntryScriptOrViteRootPath = exports.cannotFoundESBuildConfigMessage = exports.cannotFoundViteConfigMessage = exports.cannotFoundTSConfigMessage = exports.consoleViteMessagePrefix = exports.consoleMessagePrefix = void 0;
const colorette_1 = require("colorette");
const package_json_1 = __importDefault(require("../../package.json"));
exports.consoleMessagePrefix = `[${package_json_1.default.name}]`;
exports.consoleViteMessagePrefix = '[vite]';
const cannotFoundTSConfigMessage = (writePath) => colorette_1.yellow(`Could not find a valid 'tsconfig.json'. A default one has been written in:\n`) + writePath;
exports.cannotFoundTSConfigMessage = cannotFoundTSConfigMessage;
const cannotFoundViteConfigMessage = (writePath) => colorette_1.yellow(`Could not find a valid vite config. A default one has been written in:\n`) + writePath;
exports.cannotFoundViteConfigMessage = cannotFoundViteConfigMessage;
exports.cannotFoundESBuildConfigMessage = colorette_1.yellow(`Could not find the specified esbuild config.`);
const cannotFoundEntryScriptOrViteRootPath = (cwd) => colorette_1.red(`Could not find the entry script path or vite root directory path for main process in ${cwd}. See the solutions below:`) +
    colorette_1.cyan(`
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
exports.cannotFoundEntryScriptOrViteRootPath = cannotFoundEntryScriptOrViteRootPath;
exports.cannotFoundPackageJsonMessage = "Could not find a valid 'package.json'.";
exports.startMessage = colorette_1.cyan(`${exports.consoleMessagePrefix} Start compile main process...`);
exports.finishMessage = colorette_1.green(`${exports.consoleMessagePrefix} Finished compiled. Rerun electron main process...`);
exports.finishBuildMessage = colorette_1.green(`${exports.consoleMessagePrefix} Finish Build.`);
exports.warnPreloadMessage = `warn preload path.`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLW1ldGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2xvZ2dlci1tZXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlDQUFxRDtBQUVyRCxzRUFBcUM7QUFFeEIsUUFBQSxvQkFBb0IsR0FBRyxJQUFJLHNCQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDdkMsUUFBQSx3QkFBd0IsR0FBRyxRQUFRLENBQUM7QUFFMUMsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLFNBQWlCLEVBQVUsRUFBRSxDQUN0RSxrQkFBTSxDQUNKLDhFQUE4RSxDQUMvRSxHQUFHLFNBQVMsQ0FBQztBQUhILFFBQUEsMEJBQTBCLDhCQUd2QjtBQUVULE1BQU0sNEJBQTRCLEdBQUcsQ0FBQyxTQUFpQixFQUFVLEVBQUUsQ0FDeEUsa0JBQU0sQ0FDSiwwRUFBMEUsQ0FDM0UsR0FBRyxTQUFTLENBQUM7QUFISCxRQUFBLDRCQUE0QixnQ0FHekI7QUFFSCxRQUFBLCtCQUErQixHQUMxQyxrQkFBTSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFFbEQsTUFBTSxvQ0FBb0MsR0FBRyxDQUFDLEdBQVcsRUFBVSxFQUFFLENBQzFFLGVBQUcsQ0FDRCx3RkFBd0YsR0FBRyw0QkFBNEIsQ0FDeEg7SUFDRCxnQkFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCTixDQUFDLENBQUM7QUFyQlUsUUFBQSxvQ0FBb0Msd0NBcUI5QztBQUVVLFFBQUEsNkJBQTZCLEdBQ3hDLHdDQUF3QyxDQUFDO0FBQzlCLFFBQUEsWUFBWSxHQUFHLGdCQUFJLENBQzlCLEdBQUcsNEJBQW9CLGdDQUFnQyxDQUN4RCxDQUFDO0FBQ1csUUFBQSxhQUFhLEdBQUcsaUJBQUssQ0FDaEMsR0FBRyw0QkFBb0Isb0RBQW9ELENBQzVFLENBQUM7QUFDVyxRQUFBLGtCQUFrQixHQUFHLGlCQUFLLENBQ3JDLEdBQUcsNEJBQW9CLGdCQUFnQixDQUN4QyxDQUFDO0FBQ1csUUFBQSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyJ9