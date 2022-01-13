"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDefaultViteConfig = exports.defaultViteConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const path_manager_1 = require("./path-manager");
const defaultViteConfig = (root) => `
import { defineConfig } from "vite";

const rendererPath = "${root}";
const outDirRenderer = "./build";

export default defineConfig({
  base: "./",
  root: rendererPath,
  build: {
    outDir: outDirRenderer,
    emptyOutDir: true,
  },
});
`;
exports.defaultViteConfig = defaultViteConfig;
const writeDefaultViteConfig = async (root) => {
    await fs_1.default.promises.mkdir(path_manager_1.PathManager.shard.defaultViteConfigDir, {
        recursive: true,
    });
    const filePath = path_1.default.join(path_manager_1.PathManager.shard.defaultViteConfigDir, 'vite.config.ts');
    await fs_1.default.promises.writeFile(filePath, exports.defaultViteConfig(root));
    return filePath;
};
exports.writeDefaultViteConfig = writeDefaultViteConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12aXRlLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGVmYXVsdC12aXRlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0Q0FBb0I7QUFDcEIsZ0RBQXdCO0FBRXhCLGlEQUE2QztBQUV0QyxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQzs7O3dCQUduQyxJQUFJOzs7Ozs7Ozs7OztDQVczQixDQUFDO0FBZFcsUUFBQSxpQkFBaUIscUJBYzVCO0FBRUssTUFBTSxzQkFBc0IsR0FBRyxLQUFLLEVBQUUsSUFBWSxFQUFtQixFQUFFO0lBQzVFLE1BQU0sWUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsMEJBQVcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUU7UUFDOUQsU0FBUyxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FDeEIsMEJBQVcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQ3RDLGdCQUFnQixDQUNqQixDQUFDO0lBQ0YsTUFBTSxZQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUseUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFWVyxRQUFBLHNCQUFzQiwwQkFVakMifQ==