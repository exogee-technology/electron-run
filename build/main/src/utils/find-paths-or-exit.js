"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPathOrExit = void 0;
const path_1 = __importDefault(require("path"));
const _1 = require("./");
/*
  Until elecrun v2.0, doesn't have an argument 'entry file' on dev command.
  It means we lose some flexibility. So I add this argument.

  But when the user migrate from v2.0 to a newer version, the old command 'dev'
  won't work anymore because 'entry file' is not be set. So I add a list that
  indicates the default places to find the entry file. Then, the old command
  will work in the new version.

  Anyway, this function does this. Besides 'entry file', like 'entry file' in
  build command and 'vite root path' need the logic in this function.
*/
async function findPathOrExit(specificPath, defaultPaths, notFoundMessage) {
    // TODO 也许可以在这里校验是否存在
    // 但是不应该在这里做太多事情，也许用户有其他 hack 将失效？？
    if (specificPath) {
        return specificPath;
    }
    let res = specificPath;
    for (const defaultPlace of defaultPaths) {
        const entry = path_1.default.join(process.cwd(), defaultPlace);
        if (await _1.exists(entry)) {
            res = entry;
            break;
        }
    }
    if (!res) {
        console.error(notFoundMessage);
        process.exit();
    }
    return res;
}
exports.findPathOrExit = findPathOrExit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1wYXRocy1vci1leGl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2ZpbmQtcGF0aHMtb3ItZXhpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBd0I7QUFFeEIseUJBQTRCO0FBRTVCOzs7Ozs7Ozs7OztFQVdFO0FBQ0ssS0FBSyxVQUFVLGNBQWMsQ0FDbEMsWUFBZ0MsRUFDaEMsWUFBc0IsRUFDdEIsZUFBdUI7SUFFdkIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxJQUFJLFlBQVksRUFBRTtRQUNoQixPQUFPLFlBQVksQ0FBQztLQUNyQjtJQUVELElBQUksR0FBRyxHQUF1QixZQUFZLENBQUM7SUFFM0MsS0FBSyxNQUFNLFlBQVksSUFBSSxZQUFZLEVBQUU7UUFDdkMsTUFBTSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDckQsSUFBSSxNQUFNLFNBQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ1osTUFBTTtTQUNQO0tBQ0Y7SUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDaEI7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUEzQkQsd0NBMkJDIn0=