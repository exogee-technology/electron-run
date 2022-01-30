import * as childProcess from 'child_process';
import * as stream from 'stream';
import { gray } from 'colorette';
import { removeJunkTransformOptions } from '../utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const electron = require('electron');
const stopList = [];
let exitByScripts = false;
export async function startElectron({ path, silent = false, }) {
    for (const stop of stopList) {
        stop();
    }
    const electronProcess = childProcess.spawn(electron, [path ?? '', '--color']);
    electronProcess.on('exit', (code) => {
        if (!exitByScripts) {
            console.log(gray(`Electron exited with code ${code}`));
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
        const removeElectronLoggerJunkOut = new stream.Transform(removeJunkTransformOptions);
        const removeElectronLoggerJunkErr = new stream.Transform(removeJunkTransformOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLWVsZWN0cm9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3J1bi1lbGVjdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEtBQUssWUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWpDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV0RCw4REFBOEQ7QUFDOUQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sUUFBUSxHQUFzQixFQUFFLENBQUM7QUFDdkMsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBRTFCLE1BQU0sQ0FBQyxLQUFLLFVBQVUsYUFBYSxDQUFDLEVBQ2xDLElBQUksRUFDSixNQUFNLEdBQUcsS0FBSyxHQUlmO0lBQ0MsS0FBSyxNQUFNLElBQUksSUFBSSxRQUFRLEVBQUU7UUFDM0IsSUFBSSxFQUFFLENBQUM7S0FDUjtJQUVELE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlFLGVBQWUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQjtRQUNELGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLFVBQVU7UUFDakIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sSUFBSSxlQUFlLEVBQUU7Z0JBQzlCLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsYUFBYSxHQUFHLElBQUksQ0FBQzthQUN0QjtZQUNELE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU0sSUFBSSxHQUFHLFVBQVUsRUFBRSxDQUFDO0lBRTFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUN0RCwwQkFBMEIsQ0FDM0IsQ0FBQztRQUNGLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUN0RCwwQkFBMEIsQ0FDM0IsQ0FBQztRQUVGLGtCQUFrQjtRQUVsQixvRUFBb0U7UUFDcEUsZUFBZTthQUNaLE1BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7YUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixvRUFBb0U7UUFDcEUsZUFBZTthQUNaLE1BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7YUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QjtJQUVELE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQyJ9