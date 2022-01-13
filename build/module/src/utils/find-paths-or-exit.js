import path from 'path';
import { exists } from './';
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
export async function findPathOrExit(specificPath, defaultPaths, notFoundMessage) {
    // TODO 也许可以在这里校验是否存在
    // 但是不应该在这里做太多事情，也许用户有其他 hack 将失效？？
    if (specificPath) {
        return specificPath;
    }
    let res = specificPath;
    for (const defaultPlace of defaultPaths) {
        const entry = path.join(process.cwd(), defaultPlace);
        if (await exists(entry)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1wYXRocy1vci1leGl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2ZpbmQtcGF0aHMtb3ItZXhpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFFeEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksQ0FBQztBQUU1Qjs7Ozs7Ozs7Ozs7RUFXRTtBQUNGLE1BQU0sQ0FBQyxLQUFLLFVBQVUsY0FBYyxDQUNsQyxZQUFnQyxFQUNoQyxZQUFzQixFQUN0QixlQUF1QjtJQUV2QixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLElBQUksWUFBWSxFQUFFO1FBQ2hCLE9BQU8sWUFBWSxDQUFDO0tBQ3JCO0lBRUQsSUFBSSxHQUFHLEdBQXVCLFlBQVksQ0FBQztJQUUzQyxLQUFLLE1BQU0sWUFBWSxJQUFJLFlBQVksRUFBRTtRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNyRCxJQUFJLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDWixNQUFNO1NBQ1A7S0FDRjtJQUVELElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyJ9