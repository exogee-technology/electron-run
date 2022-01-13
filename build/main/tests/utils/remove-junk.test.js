"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = __importDefault(require("stream"));
const utils_1 = require("../../src/utils");
describe('test remove junk', () => {
    it('should remove junk log from stream', async () => {
        const testStream = new stream_1.default.Readable();
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
                .pipe(new stream_1.default.Transform(utils_1.removeJunkTransformOptions))
                .on('data', (data) => {
                resolve(data.toString());
            });
        });
        expect(res).toEqual('Hello World');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWp1bmsudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3RzL3V0aWxzL3JlbW92ZS1qdW5rLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsMkNBQTZEO0FBRTdELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xELE1BQU0sVUFBVSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQ2Isc0RBQXNEO1lBQ3RELHlEQUF5RCxDQUMxRCxDQUFDO1FBQ0YsVUFBVSxDQUFDLElBQUksQ0FDYix5REFBeUQ7WUFDekQsa0VBQWtFO1lBQ2xFLDBFQUEwRSxDQUMzRSxDQUFDO1FBQ0YsVUFBVSxDQUFDLElBQUksQ0FDYiwyREFBMkQsQ0FDNUQsQ0FBQztRQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2hELFVBQVU7aUJBQ1AsSUFBSSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxTQUFTLENBQUMsa0NBQTBCLENBQUMsQ0FBQztpQkFDdEQsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9