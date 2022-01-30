"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startViteServer = void 0;
const fs_1 = __importDefault(require("fs"));
const colorette_1 = require("colorette");
const vite_1 = require("vite");
const common_1 = require("../common");
const utils_1 = require("../utils");
// serve electron preload script sourcemap
const ElectronPreloadSourceMapPlugin = () => {
    return {
        name: 'electron-preload-sourcemap',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.originalUrl &&
                    req.originalUrl == common_1.PathManager.shard.preloadSourceMapPath) {
                    fs_1.default.createReadStream(common_1.PathManager.shard.preloadSourceMapPath).pipe(res);
                    return;
                }
                next();
            });
        },
    };
};
async function tryViteConfig(basePath) {
    const tryExt = ['.js', '.ts'];
    for (const ext of tryExt) {
        const fullPath = basePath + ext;
        if (await utils_1.exists(fullPath))
            return fullPath;
    }
    return;
}
async function startViteServer(options) {
    const { configPath, root } = options;
    let viteConfigPath = await tryViteConfig(configPath);
    if (!viteConfigPath) {
        // vite config not exits
        const writePath = await common_1.writeDefaultViteConfig(root);
        common_1.notFoundViteConfig(writePath);
        viteConfigPath = writePath;
    }
    const server = await vite_1.createServer({
        configFile: viteConfigPath,
        logLevel: 'silent',
        plugins: [utils_1.LoggerPlugin(), ElectronPreloadSourceMapPlugin()],
    });
    await server.listen();
    // TODO fix eslint
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const address = server.httpServer.address();
    if (address && typeof address === 'object') {
        const port = address.port;
        console.log(colorette_1.green(common_1.consoleViteMessagePrefix), colorette_1.green(`Dev server running at: localhost:${port}`));
    }
}
exports.startViteServer = startViteServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXZpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbWFuZHMvcnVuLXZpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBRXBCLHlDQUFrQztBQUNsQywrQkFBNEM7QUFFNUMsc0NBS21CO0FBQ25CLG9DQUFnRDtBQUVoRCwwQ0FBMEM7QUFDMUMsTUFBTSw4QkFBOEIsR0FBRyxHQUFXLEVBQUU7SUFDbEQsT0FBTztRQUNMLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsZUFBZSxDQUFDLE1BQU07WUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN4QyxJQUNFLEdBQUcsQ0FBQyxXQUFXO29CQUNmLEdBQUcsQ0FBQyxXQUFXLElBQUksb0JBQVcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQ3pEO29CQUNBLFlBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEUsT0FBTztpQkFDUjtnQkFDRCxJQUFJLEVBQUUsQ0FBQztZQUNULENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixLQUFLLFVBQVUsYUFBYSxDQUFDLFFBQWdCO0lBQzNDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1FBQ3hCLE1BQU0sUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxNQUFNLGNBQU0sQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQztLQUM3QztJQUNELE9BQU87QUFDVCxDQUFDO0FBRU0sS0FBSyxVQUFVLGVBQWUsQ0FBQyxPQUdyQztJQUNDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBRXJDLElBQUksY0FBYyxHQUFHLE1BQU0sYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsd0JBQXdCO1FBQ3hCLE1BQU0sU0FBUyxHQUFHLE1BQU0sK0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsMkJBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsY0FBYyxHQUFHLFNBQVMsQ0FBQztLQUM1QjtJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sbUJBQVksQ0FBQztRQUNoQyxVQUFVLEVBQUUsY0FBYztRQUMxQixRQUFRLEVBQUUsUUFBUTtRQUNsQixPQUFPLEVBQUUsQ0FBQyxvQkFBWSxFQUFFLEVBQUUsOEJBQThCLEVBQUUsQ0FBQztLQUM1RCxDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUV0QixrQkFBa0I7SUFDbEIsb0VBQW9FO0lBQ3BFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQzFDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FDVCxpQkFBSyxDQUFDLGlDQUF3QixDQUFDLEVBQy9CLGlCQUFLLENBQUMsb0NBQW9DLElBQUksRUFBRSxDQUFDLENBQ2xELENBQUM7S0FDSDtBQUNILENBQUM7QUFoQ0QsMENBZ0NDIn0=