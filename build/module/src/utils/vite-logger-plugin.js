import { gray, yellow } from 'colorette';
import { consoleViteMessagePrefix, PathManager } from '../common';
// TODO 打印 vite 错误
export function LoggerPlugin() {
    return {
        name: 'electron-scripts-logger',
        handleHotUpdate: (ctx) => {
            for (const file of ctx.modules) {
                if (!file.file)
                    continue;
                const path = file.file.replace(PathManager.shard.srcPath, '');
                console.log(yellow(consoleViteMessagePrefix), yellow('hmr update'), gray(path));
            }
            return ctx.modules;
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml0ZS1sb2dnZXItcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL3ZpdGUtbG9nZ2VyLXBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUd6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxFLGtCQUFrQjtBQUNsQixNQUFNLFVBQVUsWUFBWTtJQUMxQixPQUFPO1FBQ0wsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN2QixLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtvQkFBRSxTQUFTO2dCQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FDVCxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQ1gsQ0FBQzthQUNIO1lBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyJ9