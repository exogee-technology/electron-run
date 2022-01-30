"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundESBuildConfig = exports.notFoundPackageJson = exports.notFoundViteConfig = exports.notFoundTSConfig = void 0;
const colorette_1 = require("colorette");
const logger_meta_1 = require("./logger-meta");
function notFoundTSConfig(writePath) {
    console.warn(logger_meta_1.cannotFoundTSConfigMessage(writePath));
}
exports.notFoundTSConfig = notFoundTSConfig;
function notFoundViteConfig(writePath) {
    console.warn(logger_meta_1.cannotFoundViteConfigMessage(writePath));
}
exports.notFoundViteConfig = notFoundViteConfig;
function notFoundPackageJson() {
    console.error(colorette_1.red(logger_meta_1.cannotFoundPackageJsonMessage));
    process.exit();
}
exports.notFoundPackageJson = notFoundPackageJson;
function notFoundESBuildConfig() {
    console.warn(logger_meta_1.cannotFoundESBuildConfigMessage);
}
exports.notFoundESBuildConfig = notFoundESBuildConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9ub3QtZm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQWdDO0FBRWhDLCtDQUt1QjtBQUV2QixTQUFnQixnQkFBZ0IsQ0FBQyxTQUFpQjtJQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsU0FBaUI7SUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQywwQ0FBNEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFGRCxnREFFQztBQUVELFNBQWdCLG1CQUFtQjtJQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQUcsQ0FBQywyQ0FBNkIsQ0FBQyxDQUFDLENBQUM7SUFDbEQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFIRCxrREFHQztBQUVELFNBQWdCLHFCQUFxQjtJQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUErQixDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUZELHNEQUVDIn0=