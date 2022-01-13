"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathManager = void 0;
const path_1 = __importDefault(require("path"));
class PathManager {
    constructor(cwd) {
        if (cwd) {
            this.cwd = cwd;
        }
        else {
            this.cwd = process.cwd();
        }
    }
    static from(cwd) {
        return new PathManager(cwd);
    }
    /**
     * Only valid during the development phase
     * @see setPreloadScriptPath
     */
    get preloadSourceMapPath() {
        if (!this._preloadScriptPath) {
            return undefined;
        }
        const basename = path_1.default.basename(this._preloadScriptPath, path_1.default.extname(this._preloadScriptPath));
        return path_1.default.join(this.devOutPath, basename + '.js.map');
    }
    /**
     * Only valid during the development phase
     * @see preloadSourceMapPath
     */
    setPreloadScriptPath(path) {
        this._preloadScriptPath = path;
    }
    get nodeModulesPath() {
        return path_1.default.join(this.cwd, './node_modules');
    }
    get packageJsonPath() {
        return path_1.default.join(this.cwd, './package.json');
    }
    get defaultBaseTSConfigDir() {
        return path_1.default.join(this.devPath, 'tsconfig');
    }
    get defaultMainTSConfigDir() {
        return path_1.default.join(this.devPath, 'tsconfig/src/main');
    }
    get defaultRendererTSConfigDir() {
        return path_1.default.join(this.devPath, 'tsconfig/src/renderer');
    }
    get defaultViteConfigDir() {
        return this.devPath;
    }
    get devPath() {
        return path_1.default.join(this.nodeModulesPath, '.electron-run');
    }
    get devOutPath() {
        return path_1.default.join(this.devPath, 'app');
    }
    get srcPath() {
        return path_1.default.join(this.cwd, './src');
    }
    get mainPath() {
        return path_1.default.join(this.cwd, './src/main');
    }
    get rendererPath() {
        return path_1.default.join(this.cwd, './src/renderer');
    }
    get outDir() {
        return path_1.default.join(this.cwd, './app');
    }
    get outDirMain() {
        return path_1.default.join(this.cwd, './app/main');
    }
    get outDirRenderer() {
        return path_1.default.join(this.cwd, './app/renderer');
    }
    get distDir() {
        return path_1.default.join(this.cwd, './dist');
    }
    get viteConfigPath() {
        return path_1.default.join(this.cwd, 'vite.config');
    }
    // TODO removing this, see run.ts and search defaultEntryList
    get entryPath() {
        return path_1.default.join(this.mainPath, 'index.ts');
    }
}
exports.PathManager = PathManager;
PathManager.shard = new PathManager();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9wYXRoLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLE1BQWEsV0FBVztJQVN0QixZQUFZLEdBQVk7UUFDdEIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBWk0sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFXO1FBQzVCLE9BQU8sSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWlCRDs7O09BR0c7SUFDSCxJQUFXLG9CQUFvQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsTUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLFFBQVEsQ0FDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUN0QyxDQUFDO1FBQ0YsT0FBTyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQkFBb0IsQ0FBQyxJQUF3QjtRQUNsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQVcsY0FBYztRQUN2QixPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQVcsY0FBYztRQUN2QixPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsU0FBUztRQUNsQixPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDOztBQWhISCxrQ0FpSEM7QUFoSHdCLGlCQUFLLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9