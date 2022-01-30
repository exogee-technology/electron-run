export interface CompileError {
    location: {
        column: number;
        file: string;
        length: number;
        line: number;
        lineText: string;
    } | undefined | null;
    message: string;
}
export declare function formatCompileError(error: CompileError): string;
