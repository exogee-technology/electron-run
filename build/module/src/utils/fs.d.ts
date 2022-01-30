/// <reference types="node" />
import fs from 'fs';
export declare function exists(path: fs.PathLike): Promise<boolean>;
export declare function walk(dir: string): AsyncGenerator<string>;
