import os from 'os';
import { magentaBright } from 'colorette';
import { formatCompileError } from './compile-error';
import { consoleMessagePrefix } from './logger-meta';
function formatDiagnosticsMessage(errors) {
    const messages = errors.map((e) => formatCompileError(e));
    const errorMessage = `Found ${errors.length} errors. Watching for file changes.`;
    let diagnosticDetail = '';
    messages.forEach((item, index, { length }) => {
        diagnosticDetail += item
            .split(os.EOL)
            .map((i) => '  ' + i)
            .join(os.EOL);
        if (index + 1 !== length) {
            diagnosticDetail += os.EOL;
        }
    });
    const res = magentaBright(`${consoleMessagePrefix} Some typescript compilation errors occurred:`) +
        '\n' +
        diagnosticDetail +
        '\n' +
        magentaBright(errorMessage);
    return res;
}
export function diagnose(...errors) {
    const output = formatDiagnosticsMessage(errors);
    console.error(output);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2RpYWdub3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUVwQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBZ0Isa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsU0FBUyx3QkFBd0IsQ0FBQyxNQUFzQjtJQUN0RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELE1BQU0sWUFBWSxHQUFHLFNBQVMsTUFBTSxDQUFDLE1BQU0scUNBQXFDLENBQUM7SUFFakYsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQzNDLGdCQUFnQixJQUFJLElBQUk7YUFDckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7YUFDYixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7YUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ3hCLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDNUI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sR0FBRyxHQUNQLGFBQWEsQ0FDWCxHQUFHLG9CQUFvQiwrQ0FBK0MsQ0FDdkU7UUFDRCxJQUFJO1FBQ0osZ0JBQWdCO1FBQ2hCLElBQUk7UUFDSixhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFOUIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFHLE1BQXNCO0lBQ2hELE1BQU0sTUFBTSxHQUFHLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQyJ9