"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCompileError = void 0;
const os_1 = __importDefault(require("os"));
const colorette_1 = require("colorette");
const utils_1 = require("../utils");
function formatCompileError(error) {
    if (!error.location)
        return error.message;
    const pathMessage = colorette_1.cyan(error.location.file) +
        ':' +
        colorette_1.yellow(error.location.line) +
        ':' +
        colorette_1.yellow(error.location.column);
    const categoryMessage = colorette_1.red('error:');
    const code = colorette_1.gray(error.location.line) +
        ' ' +
        error.location.lineText +
        os_1.default.EOL +
        utils_1.repeatString(' ', error.location.column + `${error.location.line}`.length + 1 + 1) +
        colorette_1.red(utils_1.repeatString('~', error.location.length)) +
        utils_1.repeatString(' ', error.location.lineText.length -
            error.location.column -
            error.location.length);
    return `${pathMessage} - ${categoryMessage} ${error.message} ${os_1.default.EOL} ${code}`;
}
exports.formatCompileError = formatCompileError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vY29tcGlsZS1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0Q0FBb0I7QUFFcEIseUNBQW9EO0FBRXBELG9DQUF3QztBQWdCeEMsU0FBZ0Isa0JBQWtCLENBQUMsS0FBbUI7SUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBRTFDLE1BQU0sV0FBVyxHQUNmLGdCQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDekIsR0FBRztRQUNILGtCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsR0FBRztRQUNILGtCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxNQUFNLGVBQWUsR0FBRyxlQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEMsTUFBTSxJQUFJLEdBQ1IsZ0JBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN6QixHQUFHO1FBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRO1FBQ3ZCLFlBQUUsQ0FBQyxHQUFHO1FBQ04sb0JBQVksQ0FDVixHQUFHLEVBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNoRTtRQUNELGVBQUcsQ0FBQyxvQkFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLG9CQUFZLENBQ1YsR0FBRyxFQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3JCLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUN4QixDQUFDO0lBRUosT0FBTyxHQUFHLFdBQVcsTUFBTSxlQUFlLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxZQUFFLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ2xGLENBQUM7QUE3QkQsZ0RBNkJDIn0=