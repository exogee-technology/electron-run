"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnose = void 0;
const os_1 = __importDefault(require("os"));
const colorette_1 = require("colorette");
const compile_error_1 = require("./compile-error");
const logger_meta_1 = require("./logger-meta");
function formatDiagnosticsMessage(errors) {
    const messages = errors.map((e) => compile_error_1.formatCompileError(e));
    const errorMessage = `Found ${errors.length} errors. Watching for file changes.`;
    let diagnosticDetail = '';
    messages.forEach((item, index, { length }) => {
        diagnosticDetail += item
            .split(os_1.default.EOL)
            .map((i) => '  ' + i)
            .join(os_1.default.EOL);
        if (index + 1 !== length) {
            diagnosticDetail += os_1.default.EOL;
        }
    });
    const res = colorette_1.magentaBright(`${logger_meta_1.consoleMessagePrefix} Some typescript compilation errors occurred:`) +
        '\n' +
        diagnosticDetail +
        '\n' +
        colorette_1.magentaBright(errorMessage);
    return res;
}
function diagnose(...errors) {
    const output = formatDiagnosticsMessage(errors);
    console.error(output);
}
exports.diagnose = diagnose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2RpYWdub3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUVwQix5Q0FBMEM7QUFFMUMsbURBQW1FO0FBQ25FLCtDQUFxRDtBQUVyRCxTQUFTLHdCQUF3QixDQUFDLE1BQXNCO0lBQ3RELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGtDQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsTUFBTSxZQUFZLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxxQ0FBcUMsQ0FBQztJQUVqRixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUMxQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDM0MsZ0JBQWdCLElBQUksSUFBSTthQUNyQixLQUFLLENBQUMsWUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNiLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUNwQixJQUFJLENBQUMsWUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDeEIsZ0JBQWdCLElBQUksWUFBRSxDQUFDLEdBQUcsQ0FBQztTQUM1QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxHQUFHLEdBQ1AseUJBQWEsQ0FDWCxHQUFHLGtDQUFvQiwrQ0FBK0MsQ0FDdkU7UUFDRCxJQUFJO1FBQ0osZ0JBQWdCO1FBQ2hCLElBQUk7UUFDSix5QkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTlCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFHLE1BQXNCO0lBQ2hELE1BQU0sTUFBTSxHQUFHLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUhELDRCQUdDIn0=