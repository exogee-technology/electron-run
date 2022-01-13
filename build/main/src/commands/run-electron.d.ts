/// <reference types="node" />
import { ChildProcess } from 'child_process';
export declare function startElectron({ path, silent, }: {
    path?: string;
    silent?: boolean;
}): Promise<[ChildProcess, () => void]>;
