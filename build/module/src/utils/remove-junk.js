export const removeJunkTransformOptions = {
    decodeStrings: false,
    transform: (chunk, _encoding, done) => {
        const source = chunk.toString();
        // Example: 2018-08-10 22:48:42.866 Electron[90311:4883863] *** WARNING: Textured window <AtomNSWindow: 0x7fb75f68a770>
        if (/\d+-\d+-\d+ \d+:\d+:\d+\.\d+ Electron(?: Helper)?\[\d+:\d+] /.test(source)) {
            return false;
        }
        // Example: [90789:0810/225804.894349:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
        if (/\[\d+:\d+\/|\d+\.\d+:ERROR:CONSOLE\(\d+\)\]/.test(source)) {
            return false;
        }
        // Example: ALSA lib confmisc.c:767:(parse_card) cannot find card '0'
        if (/ALSA lib [a-z]+\.c:\d+:\([a-z_]+\)/.test(source)) {
            return false;
        }
        done(null, chunk);
        return;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWp1bmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvcmVtb3ZlLWp1bmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQTRCO0lBQ2pFLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDcEMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLHVIQUF1SDtRQUN2SCxJQUNFLDhEQUE4RCxDQUFDLElBQUksQ0FDakUsTUFBTSxDQUNQLEVBQ0Q7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsMk1BQTJNO1FBQzNNLElBQUksNkNBQTZDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxxRUFBcUU7UUFDckUsSUFBSSxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEIsT0FBTztJQUNULENBQUM7Q0FDRixDQUFDIn0=