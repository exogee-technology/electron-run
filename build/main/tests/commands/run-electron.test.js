"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_exists_1 = __importDefault(require("process-exists"));
const commands_1 = require("../../src/commands");
const utils_1 = require("../../src/utils");
const COUNT = 5;
describe('test run electron', () => {
    it('should run electron correctly synchronously', async function () {
        const processList = [];
        let stop = () => { };
        for (let i = 0; i < COUNT; i++) {
            stop();
            const [cp, s] = await commands_1.startElectron({ silent: true });
            stop = s;
            processList.push(cp);
        }
        await utils_1.delay(200);
        for (const [i, cp] of processList.entries()) {
            if (i + 1 < COUNT) {
                expect(await process_exists_1.default(cp.pid)).toBe(false);
            }
            else {
                expect(await process_exists_1.default(cp.pid)).toBe(true);
            }
        }
        stop();
    });
    it('should run electron correctly concurrently', async function () {
        const processList = [];
        expect.assertions(5);
        return new Promise((resolve) => {
            for (let i = 0; i < COUNT; i++) {
                commands_1.startElectron({ silent: true }).then(async ([cp, stop]) => {
                    processList.push(cp);
                    if (i + 1 === COUNT) {
                        await utils_1.delay(2000);
                        for (const [i, cp] of processList.entries()) {
                            if (i + 1 < COUNT) {
                                expect(await process_exists_1.default(cp.pid)).toBe(false);
                            }
                            else {
                                expect(await process_exists_1.default(cp.pid)).toBe(true);
                            }
                        }
                        stop();
                        resolve();
                    }
                });
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLWVsZWN0cm9uLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi90ZXN0cy9jb21tYW5kcy9ydW4tZWxlY3Ryb24udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG9FQUF1QztBQUV2QyxpREFBbUQ7QUFDbkQsMkNBQXdDO0FBRXhDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztBQUVoQixRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxLQUFLO1FBQ3JELE1BQU0sV0FBVyxHQUF3QixFQUFFLENBQUM7UUFFNUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELElBQUksR0FBRyxDQUFDLENBQUM7WUFDVCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsTUFBTSxhQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFO2dCQUNqQixNQUFNLENBQUMsTUFBTSx3QkFBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxNQUFNLENBQUMsTUFBTSx3QkFBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QztTQUNGO1FBRUQsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLO1FBQ3BELE1BQU0sV0FBVyxHQUF3QixFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUIsd0JBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDeEQsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTt3QkFDbkIsTUFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRWxCLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUU7NEJBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUU7Z0NBQ2pCLE1BQU0sQ0FBQyxNQUFNLHdCQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUM3QztpQ0FBTTtnQ0FDTCxNQUFNLENBQUMsTUFBTSx3QkFBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDNUM7eUJBQ0Y7d0JBRUQsSUFBSSxFQUFFLENBQUM7d0JBQ1AsT0FBTyxFQUFFLENBQUM7cUJBQ1g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9