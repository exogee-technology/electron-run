import path from 'path';
export class PathManager {
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
        const basename = path.basename(this._preloadScriptPath, path.extname(this._preloadScriptPath));
        return path.join(this.devOutPath, basename + '.js.map');
    }
    /**
     * Only valid during the development phase
     * @see preloadSourceMapPath
     */
    setPreloadScriptPath(path) {
        this._preloadScriptPath = path;
    }
    get nodeModulesPath() {
        return path.join(this.cwd, './node_modules');
    }
    get packageJsonPath() {
        return path.join(this.cwd, './package.json');
    }
    get defaultBaseTSConfigDir() {
        return path.join(this.devPath, 'tsconfig');
    }
    get defaultMainTSConfigDir() {
        return path.join(this.devPath, 'tsconfig/src/main');
    }
    get defaultRendererTSConfigDir() {
        return path.join(this.devPath, 'tsconfig/src/renderer');
    }
    get defaultViteConfigDir() {
        return this.devPath;
    }
    get devPath() {
        return path.join(this.nodeModulesPath, '.electron-run');
    }
    get devOutPath() {
        return path.join(this.devPath, 'app');
    }
    get srcPath() {
        return path.join(this.cwd, './src');
    }
    get mainPath() {
        return path.join(this.cwd, './src/main');
    }
    get rendererPath() {
        return path.join(this.cwd, './src/renderer');
    }
    get outDir() {
        return path.join(this.cwd, './app');
    }
    get outDirMain() {
        return path.join(this.cwd, './app/main');
    }
    get outDirRenderer() {
        return path.join(this.cwd, './app/renderer');
    }
    get distDir() {
        return path.join(this.cwd, './dist');
    }
    get viteConfigPath() {
        return path.join(this.cwd, 'vite.config');
    }
    // TODO removing this, see run.ts and search defaultEntryList
    get entryPath() {
        return path.join(this.mainPath, 'index.ts');
    }
}
PathManager.shard = new PathManager();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9wYXRoLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE1BQU0sT0FBTyxXQUFXO0lBU3RCLFlBQVksR0FBWTtRQUN0QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFaTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQVc7UUFDNUIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBaUJEOzs7T0FHRztJQUNILElBQVcsb0JBQW9CO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQ3RDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9CQUFvQixDQUFDLElBQXdCO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O0FBL0dzQixpQkFBSyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMifQ==