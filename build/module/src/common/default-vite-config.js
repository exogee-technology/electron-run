import fs from 'fs';
import path from 'path';
import { PathManager } from './path-manager';
export const defaultViteConfig = (root) => `
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
export const writeDefaultViteConfig = async (root) => {
    await fs.promises.mkdir(PathManager.shard.defaultViteConfigDir, {
        recursive: true,
    });
    const filePath = path.join(PathManager.shard.defaultViteConfigDir, 'vite.config.ts');
    await fs.promises.writeFile(filePath, defaultViteConfig(root));
    return filePath;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12aXRlLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGVmYXVsdC12aXRlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDcEIsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQVksRUFBVSxFQUFFLENBQUM7Ozt3QkFHbkMsSUFBSTs7Ozs7Ozs7Ozs7Q0FXM0IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLEtBQUssRUFBRSxJQUFZLEVBQW1CLEVBQUU7SUFDNUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFO1FBQzlELFNBQVMsRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQztJQUNILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3hCLFdBQVcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQ3RDLGdCQUFnQixDQUNqQixDQUFDO0lBQ0YsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUMifQ==