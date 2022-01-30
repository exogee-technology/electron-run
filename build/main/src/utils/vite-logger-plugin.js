"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerPlugin = void 0;
const colorette_1 = require("colorette");
const common_1 = require("../common");
// TODO 打印 vite 错误
function LoggerPlugin() {
    return {
        name: 'electron-scripts-logger',
        handleHotUpdate: (ctx) => {
            for (const file of ctx.modules) {
                if (!file.file)
                    continue;
                const path = file.file.replace(common_1.PathManager.shard.srcPath, '');
                console.log(colorette_1.yellow(common_1.consoleViteMessagePrefix), colorette_1.yellow('hmr update'), colorette_1.gray(path));
            }
            return ctx.modules;
        },
    };
}
exports.LoggerPlugin = LoggerPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml0ZS1sb2dnZXItcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL3ZpdGUtbG9nZ2VyLXBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBeUM7QUFHekMsc0NBQWtFO0FBRWxFLGtCQUFrQjtBQUNsQixTQUFnQixZQUFZO0lBQzFCLE9BQU87UUFDTCxJQUFJLEVBQUUseUJBQXlCO1FBQy9CLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3ZCLEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO29CQUFFLFNBQVM7Z0JBQ3pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FDVCxrQkFBTSxDQUFDLGlDQUF3QixDQUFDLEVBQ2hDLGtCQUFNLENBQUMsWUFBWSxDQUFDLEVBQ3BCLGdCQUFJLENBQUMsSUFBSSxDQUFDLENBQ1gsQ0FBQzthQUNIO1lBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQWhCRCxvQ0FnQkMifQ==