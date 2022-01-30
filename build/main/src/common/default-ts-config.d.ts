export declare const defaultBaseTSConfig: {
    compilerOptions: {
        target: string;
        noImplicitAny: boolean;
        removeComments: boolean;
        preserveConstEnums: boolean;
        allowJs: boolean;
        checkJs: boolean;
        strict: boolean;
        strictNullChecks: boolean;
        strictFunctionTypes: boolean;
        strictPropertyInitialization: boolean;
        strictBindCallApply: boolean;
        noImplicitThis: boolean;
        noImplicitReturns: boolean;
        experimentalDecorators: boolean;
        allowSyntheticDefaultImports: boolean;
        esModuleInterop: boolean;
        moduleResolution: string;
        importHelpers: boolean;
        sourceMap: boolean;
        baseUrl: string;
    };
    exclude: string[];
};
export declare const defaultMainTSConfig: {
    extends: string;
    compilerOptions: {
        target: string;
        module: string;
        outDir: string;
    };
    include: string[];
    exclude: string[];
};
export declare const defaultRendererTSConfig: {
    extends: string;
    compilerOptions: {
        target: string;
        module: string;
        lib: string[];
        types: string[];
    };
    include: string[];
    exclude: string[];
};
export declare const writeBaseTSConfig: () => Promise<string>;
export declare const writeMainTSConfig: () => Promise<string>;
export declare const writeRendererTSConfig: () => Promise<string>;
