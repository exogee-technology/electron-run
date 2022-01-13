/**
 * Run main process using ESBuild
 */
import * as esbuild from 'esbuild';
import { MainCommand } from '../types';
/** When provided with a filename, loads the esbuild js config from the file as a default export */
export declare const loadESBuildConfigFromFile: (file?: string | undefined) => Partial<esbuild.BuildOptions>;
export declare const runESBuildForMainProcess: MainCommand;
