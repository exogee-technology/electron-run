import fs from 'fs';
import { green } from 'colorette';
import { createServer } from 'vite';
import { consoleViteMessagePrefix, notFoundViteConfig, PathManager, writeDefaultViteConfig, } from '../common';
import { exists, LoggerPlugin } from '../utils';
// serve electron preload script sourcemap
const ElectronPreloadSourceMapPlugin = () => {
    return {
        name: 'electron-preload-sourcemap',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.originalUrl &&
                    req.originalUrl == PathManager.shard.preloadSourceMapPath) {
                    fs.createReadStream(PathManager.shard.preloadSourceMapPath).pipe(res);
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
        if (await exists(fullPath))
            return fullPath;
    }
    return;
}
export async function startViteServer(options) {
    const { configPath, root } = options;
    let viteConfigPath = await tryViteConfig(configPath);
    if (!viteConfigPath) {
        // vite config not exits
        const writePath = await writeDefaultViteConfig(root);
        notFoundViteConfig(writePath);
        viteConfigPath = writePath;
    }
    const server = await createServer({
        configFile: viteConfigPath,
        logLevel: 'silent',
        plugins: [LoggerPlugin(), ElectronPreloadSourceMapPlugin()],
    });
    await server.listen();
    // TODO fix eslint
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const address = server.httpServer.address();
    if (address && typeof address === 'object') {
        const port = address.port;
        console.log(green(consoleViteMessagePrefix), green(`Dev server running at: localhost:${port}`));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXZpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbWFuZHMvcnVuLXZpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRXBCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsc0JBQXNCLEdBQ3ZCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWhELDBDQUEwQztBQUMxQyxNQUFNLDhCQUE4QixHQUFHLEdBQVcsRUFBRTtJQUNsRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxlQUFlLENBQUMsTUFBTTtZQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hDLElBQ0UsR0FBRyxDQUFDLFdBQVc7b0JBQ2YsR0FBRyxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUN6RDtvQkFDQSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEUsT0FBTztpQkFDUjtnQkFDRCxJQUFJLEVBQUUsQ0FBQztZQUNULENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixLQUFLLFVBQVUsYUFBYSxDQUFDLFFBQWdCO0lBQzNDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1FBQ3hCLE1BQU0sUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQztLQUM3QztJQUNELE9BQU87QUFDVCxDQUFDO0FBRUQsTUFBTSxDQUFDLEtBQUssVUFBVSxlQUFlLENBQUMsT0FHckM7SUFDQyxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUVyQyxJQUFJLGNBQWMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ25CLHdCQUF3QjtRQUN4QixNQUFNLFNBQVMsR0FBRyxNQUFNLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLGNBQWMsR0FBRyxTQUFTLENBQUM7S0FDNUI7SUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQztRQUNoQyxVQUFVLEVBQUUsY0FBYztRQUMxQixRQUFRLEVBQUUsUUFBUTtRQUNsQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSw4QkFBOEIsRUFBRSxDQUFDO0tBQzVELENBQUMsQ0FBQztJQUVILE1BQU0sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRXRCLGtCQUFrQjtJQUNsQixvRUFBb0U7SUFDcEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDMUMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUNULEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxFQUMvQixLQUFLLENBQUMsb0NBQW9DLElBQUksRUFBRSxDQUFDLENBQ2xELENBQUM7S0FDSDtBQUNILENBQUMifQ==