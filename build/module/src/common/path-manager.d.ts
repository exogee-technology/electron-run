export declare class PathManager {
    static readonly shard: PathManager;
    static from(cwd: string): PathManager;
    cwd: string;
    constructor(cwd?: string);
    /**
     * Only valid during the development phase
     */
    private _preloadScriptPath?;
    /**
     * Only valid during the development phase
     * @see setPreloadScriptPath
     */
    get preloadSourceMapPath(): string | undefined;
    /**
     * Only valid during the development phase
     * @see preloadSourceMapPath
     */
    setPreloadScriptPath(path: string | undefined): void;
    get nodeModulesPath(): string;
    get packageJsonPath(): string;
    get defaultBaseTSConfigDir(): string;
    get defaultMainTSConfigDir(): string;
    get defaultRendererTSConfigDir(): string;
    get defaultViteConfigDir(): string;
    get devPath(): string;
    get devOutPath(): string;
    get srcPath(): string;
    get mainPath(): string;
    get rendererPath(): string;
    get outDir(): string;
    get outDirMain(): string;
    get outDirRenderer(): string;
    get distDir(): string;
    get viteConfigPath(): string;
    get entryPath(): string;
}
