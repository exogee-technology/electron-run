import stream from 'stream';
import { removeJunkTransformOptions } from '../../src/utils';
describe('test remove junk', () => {
    it('should remove junk log from stream', async () => {
        const testStream = new stream.Readable();
        testStream.push('Hello World');
        testStream.push('2018-08-10 22:48:42.866 Electron[90311:4883863] *** ' +
            'WARNING: Textured window <AtomNSWindow: 0x7fb75f68a770>');
        testStream.push('[90789:0810/225804.894349:ERROR:CONSOLE(105)] "Uncaught' +
            ' (in promise) Error: Could not instantiate: ProductRegistryImpl.' +
            'Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)');
        testStream.push("ALSA lib confmisc.c:767:(parse_card) cannot find card '0'");
        testStream.push(null);
        const res = await new Promise((resolve) => {
            testStream
                .pipe(new stream.Transform(removeJunkTransformOptions))
                .on('data', (data) => {
                resolve(data.toString());
            });
        });
        expect(res).toEqual('Hello World');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWp1bmsudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3RzL3V0aWxzL3JlbW92ZS1qdW5rLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xELE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsVUFBVSxDQUFDLElBQUksQ0FDYixzREFBc0Q7WUFDdEQseURBQXlELENBQzFELENBQUM7UUFDRixVQUFVLENBQUMsSUFBSSxDQUNiLHlEQUF5RDtZQUN6RCxrRUFBa0U7WUFDbEUsMEVBQTBFLENBQzNFLENBQUM7UUFDRixVQUFVLENBQUMsSUFBSSxDQUNiLDJEQUEyRCxDQUM1RCxDQUFDO1FBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEQsVUFBVTtpQkFDUCxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUJBQ3RELEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==