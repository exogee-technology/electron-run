"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeRendererTSConfig = exports.writeMainTSConfig = exports.writeBaseTSConfig = exports.defaultRendererTSConfig = exports.defaultMainTSConfig = exports.defaultBaseTSConfig = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const path_manager_1 = require("./path-manager");
exports.defaultBaseTSConfig = {
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
exports.defaultMainTSConfig = {
    extends: '../../tsconfig.json',
    compilerOptions: {
        target: 'ES2018',
        module: 'CommonJS',
        outDir: '../../app',
    },
    include: ['../main/**/*', '../common/**/*'],
    exclude: ['../renderer/**/*'],
};
exports.defaultRendererTSConfig = {
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
    const filePath = path_1.default.join(dir, 'tsconfig.json');
    await fs.promises.writeFile(filePath, str);
    return filePath;
}
const writeBaseTSConfig = () => writeTSConfig(exports.defaultBaseTSConfig, path_manager_1.PathManager.shard.defaultBaseTSConfigDir);
exports.writeBaseTSConfig = writeBaseTSConfig;
const writeMainTSConfig = () => writeTSConfig(exports.defaultMainTSConfig, path_manager_1.PathManager.shard.defaultMainTSConfigDir);
exports.writeMainTSConfig = writeMainTSConfig;
const writeRendererTSConfig = () => writeTSConfig(exports.defaultRendererTSConfig, path_manager_1.PathManager.shard.defaultRendererTSConfigDir);
exports.writeRendererTSConfig = writeRendererTSConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC10cy1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2RlZmF1bHQtdHMtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUI7QUFDekIsZ0RBQXdCO0FBRXhCLGlEQUE2QztBQUVoQyxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLGVBQWUsRUFBRTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsT0FBTyxFQUFFLElBQUk7UUFDYixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxJQUFJO1FBQ1osZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLDRCQUE0QixFQUFFLElBQUk7UUFDbEMsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixjQUFjLEVBQUUsSUFBSTtRQUNwQixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLHNCQUFzQixFQUFFLElBQUk7UUFDNUIsNEJBQTRCLEVBQUUsSUFBSTtRQUNsQyxlQUFlLEVBQUUsSUFBSTtRQUNyQixnQkFBZ0IsRUFBRSxNQUFNO1FBQ3hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFNBQVMsRUFBRSxJQUFJO1FBQ2YsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztDQUN6QyxDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLGVBQWUsRUFBRTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDO0lBQzNDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO0NBQzlCLENBQUM7QUFFVyxRQUFBLHVCQUF1QixHQUFHO0lBQ3JDLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsZUFBZSxFQUFFO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7UUFDdEMsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7SUFDL0MsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO0NBQzFCLENBQUM7QUFFRixLQUFLLFVBQVUsYUFBYSxDQUMxQixNQUFjLEVBQ2QsR0FBVztJQUVYLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNqRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRU0sTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUUsQ0FDcEMsYUFBYSxDQUFDLDJCQUFtQixFQUFFLDBCQUFXLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFEbEUsUUFBQSxpQkFBaUIscUJBQ2lEO0FBRXhFLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFLENBQ3BDLGFBQWEsQ0FBQywyQkFBbUIsRUFBRSwwQkFBVyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRGxFLFFBQUEsaUJBQWlCLHFCQUNpRDtBQUV4RSxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRSxDQUN4QyxhQUFhLENBQ1gsK0JBQXVCLEVBQ3ZCLDBCQUFXLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUM3QyxDQUFDO0FBSlMsUUFBQSxxQkFBcUIseUJBSTlCIn0=