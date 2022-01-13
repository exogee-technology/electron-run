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
Object.defineProperty(exports, "__esModule", { value: true });
exports.startElectron = void 0;
const childProcess = __importStar(require("child_process"));
const stream = __importStar(require("stream"));
const colorette_1 = require("colorette");
const utils_1 = require("../utils");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const electron = require('electron');
const stopList = [];
let exitByScripts = false;
async function startElectron({ path, silent = false, }) {
    for (const stop of stopList) {
        stop();
    }
    const electronProcess = childProcess.spawn(electron, [path !== null && path !== void 0 ? path : '', '--color']);
    electronProcess.on('exit', (code) => {
        if (!exitByScripts) {
            console.log(colorette_1.gray(`Electron exited with code ${code}`));
            process.exit();
        }
        exitByScripts = true;
    });
    function createStop() {
        let called = false;
        return () => {
            if (!called && electronProcess) {
                electronProcess.removeAllListeners();
                process.kill(electronProcess.pid);
                exitByScripts = true;
            }
            called = true;
        };
    }
    const stop = createStop();
    stopList.push(stop);
    if (!silent) {
        const removeElectronLoggerJunkOut = new stream.Transform(utils_1.removeJunkTransformOptions);
        const removeElectronLoggerJunkErr = new stream.Transform(utils_1.removeJunkTransformOptions);
        // TODO fix eslint
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        electronProcess
            .stdout.pipe(removeElectronLoggerJunkOut)
            .pipe(process.stdout);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        electronProcess
            .stderr.pipe(removeElectronLoggerJunkErr)
            .pipe(process.stderr);
    }
    return [electronProcess, stop];
}
exports.startElectron = startElectron;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLWVsZWN0cm9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3J1bi1lbGVjdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNERBQThDO0FBQzlDLCtDQUFpQztBQUVqQyx5Q0FBaUM7QUFFakMsb0NBQXNEO0FBRXRELDhEQUE4RDtBQUM5RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFckMsTUFBTSxRQUFRLEdBQXNCLEVBQUUsQ0FBQztBQUN2QyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFFbkIsS0FBSyxVQUFVLGFBQWEsQ0FBQyxFQUNsQyxJQUFJLEVBQ0osTUFBTSxHQUFHLEtBQUssR0FJZjtJQUNDLEtBQUssTUFBTSxJQUFJLElBQUksUUFBUSxFQUFFO1FBQzNCLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksYUFBSixJQUFJLGNBQUosSUFBSSxHQUFJLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlFLGVBQWUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFJLENBQUMsNkJBQTZCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEI7UUFDRCxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxVQUFVO1FBQ2pCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLElBQUksZUFBZSxFQUFFO2dCQUM5QixlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDdEI7WUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNLElBQUksR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUUxQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxNQUFNLDJCQUEyQixHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FDdEQsa0NBQTBCLENBQzNCLENBQUM7UUFDRixNQUFNLDJCQUEyQixHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FDdEQsa0NBQTBCLENBQzNCLENBQUM7UUFFRixrQkFBa0I7UUFFbEIsb0VBQW9FO1FBQ3BFLGVBQWU7YUFDWixNQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsb0VBQW9FO1FBQ3BFLGVBQWU7YUFDWixNQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7SUFFRCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUF4REQsc0NBd0RDIn0=