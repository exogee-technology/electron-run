import { red } from 'colorette';
import { cannotFoundESBuildConfigMessage, cannotFoundPackageJsonMessage, cannotFoundTSConfigMessage, cannotFoundViteConfigMessage, } from './logger-meta';
export function notFoundTSConfig(writePath) {
    console.warn(cannotFoundTSConfigMessage(writePath));
}
export function notFoundViteConfig(writePath) {
    console.warn(cannotFoundViteConfigMessage(writePath));
}
export function notFoundPackageJson() {
    console.error(red(cannotFoundPackageJsonMessage));
    process.exit();
}
export function notFoundESBuildConfig() {
    console.warn(cannotFoundESBuildConfigMessage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9ub3QtZm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVoQyxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLDZCQUE2QixFQUM3QiwwQkFBMEIsRUFDMUIsNEJBQTRCLEdBQzdCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxTQUFpQjtJQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxTQUFpQjtJQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUI7SUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDaEQsQ0FBQyJ9