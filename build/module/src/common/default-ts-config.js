import * as fs from 'fs';
import path from 'path';
import { PathManager } from './path-manager';
export const defaultBaseTSConfig = {
    compilerOptions: {
        target: 'ES2018',
        noImplicitAny: true,
        removeComments: true,
        preserveConstEnums: true,
        allowJs: true,
        checkJs: true,
        strict: true,
        strictNullChecks: true,
        strictFunctionTypes: true,
        strictPropertyInitialization: true,
        strictBindCallApply: true,
        noImplicitThis: true,
        noImplicitReturns: true,
        experimentalDecorators: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        moduleResolution: 'node',
        importHelpers: true,
        sourceMap: true,
        baseUrl: './src',
    },
    exclude: ['node_modules', 'app', 'dist'],
};
export const defaultMainTSConfig = {
    extends: '../../tsconfig.json',
    compilerOptions: {
        target: 'ES2018',
        module: 'CommonJS',
        outDir: '../../app',
    },
    include: ['../main/**/*', '../common/**/*'],
    exclude: ['../renderer/**/*'],
};
export const defaultRendererTSConfig = {
    extends: '../../tsconfig.json',
    compilerOptions: {
        target: 'esnext',
        module: 'esnext',
        lib: ['DOM', 'DOM.Iterable', 'ESNext'],
        types: ['vite/client'],
    },
    include: ['../renderer/**/*', '../common/**/*'],
    exclude: ['../main/**/*'],
};
async function writeTSConfig(config, dir) {
    await fs.promises.mkdir(dir, { recursive: true });
    const str = JSON.stringify(config);
    const filePath = path.join(dir, 'tsconfig.json');
    await fs.promises.writeFile(filePath, str);
    return filePath;
}
export const writeBaseTSConfig = () => writeTSConfig(defaultBaseTSConfig, PathManager.shard.defaultBaseTSConfigDir);
export const writeMainTSConfig = () => writeTSConfig(defaultMainTSConfig, PathManager.shard.defaultMainTSConfigDir);
export const writeRendererTSConfig = () => writeTSConfig(defaultRendererTSConfig, PathManager.shard.defaultRendererTSConfigDir);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC10cy1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2RlZmF1bHQtdHMtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3pCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUV4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUc7SUFDakMsZUFBZSxFQUFFO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsY0FBYyxFQUFFLElBQUk7UUFDcEIsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLElBQUk7UUFDWixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsNEJBQTRCLEVBQUUsSUFBSTtRQUNsQyxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsc0JBQXNCLEVBQUUsSUFBSTtRQUM1Qiw0QkFBNEIsRUFBRSxJQUFJO1FBQ2xDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLGdCQUFnQixFQUFFLE1BQU07UUFDeEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsU0FBUyxFQUFFLElBQUk7UUFDZixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0NBQ3pDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQyxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLGVBQWUsRUFBRTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDO0lBQzNDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO0NBQzlCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRztJQUNyQyxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLGVBQWUsRUFBRTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDO1FBQ3RDLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUN2QjtJQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO0lBQy9DLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztDQUMxQixDQUFDO0FBRUYsS0FBSyxVQUFVLGFBQWEsQ0FDMUIsTUFBYyxFQUNkLEdBQVc7SUFFWCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDakQsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRSxDQUNwQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRS9FLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRSxDQUNwQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRS9FLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRSxDQUN4QyxhQUFhLENBQ1gsdUJBQXVCLEVBQ3ZCLFdBQVcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQzdDLENBQUMifQ==