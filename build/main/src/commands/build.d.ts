interface RunBuildOptions {
    entry?: string /** Entry Point */;
    preloadScript?: string /** Filename of the preload script */;
    esbuildConfigFile?: string /** Filename of the esbuild config to use */;
}
export declare function runBuild({ entry, preloadScript, esbuildConfigFile, }: RunBuildOptions): Promise<void>;
export {};
