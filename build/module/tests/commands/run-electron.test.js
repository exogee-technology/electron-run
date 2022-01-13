import pidExists from 'process-exists';
import { startElectron } from '../../src/commands';
import { delay } from '../../src/utils';
const COUNT = 5;
describe('test run electron', () => {
    it('should run electron correctly synchronously', async function () {
        const processList = [];
        let stop = () => { };
        for (let i = 0; i < COUNT; i++) {
            stop();
            const [cp, s] = await startElectron({ silent: true });
            stop = s;
            processList.push(cp);
        }
        await delay(200);
        for (const [i, cp] of processList.entries()) {
            if (i + 1 < COUNT) {
                expect(await pidExists(cp.pid)).toBe(false);
            }
            else {
                expect(await pidExists(cp.pid)).toBe(true);
            }
        }
        stop();
    });
    it('should run electron correctly concurrently', async function () {
        const processList = [];
        expect.assertions(5);
        return new Promise((resolve) => {
            for (let i = 0; i < COUNT; i++) {
                startElectron({ silent: true }).then(async ([cp, stop]) => {
                    processList.push(cp);
                    if (i + 1 === COUNT) {
                        await delay(2000);
                        for (const [i, cp] of processList.entries()) {
                            if (i + 1 < COUNT) {
                                expect(await pidExists(cp.pid)).toBe(false);
                            }
                            else {
                                expect(await pidExists(cp.pid)).toBe(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLWVsZWN0cm9uLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi90ZXN0cy9jb21tYW5kcy9ydW4tZWxlY3Ryb24udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztBQUVoQixRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxLQUFLO1FBQ3JELE1BQU0sV0FBVyxHQUF3QixFQUFFLENBQUM7UUFFNUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdEQsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNULFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEI7UUFFRCxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QztTQUNGO1FBRUQsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLO1FBQ3BELE1BQU0sV0FBVyxHQUF3QixFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUIsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUN4RCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUVyQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFO3dCQUNuQixNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFbEIsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRTs0QkFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRTtnQ0FDakIsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDN0M7aUNBQU07Z0NBQ0wsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDNUM7eUJBQ0Y7d0JBRUQsSUFBSSxFQUFFLENBQUM7d0JBQ1AsT0FBTyxFQUFFLENBQUM7cUJBQ1g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9