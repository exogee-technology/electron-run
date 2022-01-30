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
exports.clean = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
const common_1 = require("../common");
const utils_1 = require("../utils");
async function rmRecursively(path, excludes) {
    if (!(await utils_1.exists(path))) {
        return;
    }
    if (path.substr(0, 1) !== '/' && path.indexOf(':') === -1) {
        path = path_1.resolve(path);
    }
    const excludeFiles = (excludes !== null && excludes !== void 0 ? excludes : []).map((i) => {
        return path_1.resolve(path, i);
    });
    let files = [path];
    while (files.length > 0) {
        // TODO fix eslint
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const last = files.pop();
        const stat = await fs.promises.lstat(last);
        if (last === path && !stat.isDirectory) {
            return;
        }
        if (excludeFiles.includes(last)) {
            continue;
        }
        if (stat.isSymbolicLink()) {
            await fs.promises.unlink(last);
        }
        else if (!stat.isDirectory()) {
            await fs.promises.rm(last);
        }
        else {
            const children = await (await fs.promises.readdir(last)).map((p) => {
                return path_1.join(last, p);
            });
            if (children.length === 0) {
                await fs.promises.rmdir(last);
            }
            else {
                if (last !== path) {
                    files.push(last);
                }
                files = files.concat(children);
            }
        }
    }
    if ((await fs.promises.readdir(path)).length === 0) {
        await fs.promises.rmdir(path);
    }
}
async function clean() {
    await rmRecursively(common_1.PathManager.shard.devPath).then();
    await rmRecursively(common_1.PathManager.shard.outDir, [
        'package.json',
        'yarn.lock',
        'package-lock.json',
    ]).then();
    await rmRecursively(common_1.PathManager.shard.distDir).then();
}
exports.clean = clean;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbWFuZHMvY2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QiwrQkFBcUM7QUFFckMsc0NBQXdDO0FBQ3hDLG9DQUFrQztBQUVsQyxLQUFLLFVBQVUsYUFBYSxDQUFDLElBQVksRUFBRSxRQUF3QjtJQUNqRSxJQUFJLENBQUMsQ0FBQyxNQUFNLGNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLE9BQU87S0FDUjtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDekQsSUFBSSxHQUFHLGNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QjtJQUNELE1BQU0sWUFBWSxHQUFHLENBQUMsUUFBUSxhQUFSLFFBQVEsY0FBUixRQUFRLEdBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDOUMsT0FBTyxjQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxLQUFLLEdBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2QixrQkFBa0I7UUFFbEIsb0VBQW9FO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLFNBQVM7U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzlCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pFLE9BQU8sV0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsQjtnQkFDRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNoQztTQUNGO0tBQ0Y7SUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbEQsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUM7QUFFTSxLQUFLLFVBQVUsS0FBSztJQUN6QixNQUFNLGFBQWEsQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RCxNQUFNLGFBQWEsQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDNUMsY0FBYztRQUNkLFdBQVc7UUFDWCxtQkFBbUI7S0FDcEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1YsTUFBTSxhQUFhLENBQUMsb0JBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEQsQ0FBQztBQVJELHNCQVFDIn0=