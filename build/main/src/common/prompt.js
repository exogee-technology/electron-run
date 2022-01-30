"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
const readline_1 = __importDefault(require("readline"));
const colorette_1 = require("colorette");
function prompt(question) {
    const input = process.stdin;
    const output = process.stdout;
    const rl = readline_1.default.createInterface({
        input,
        output,
    });
    const questionAndPrompt = `${colorette_1.green('?')} ${question} (Y/n) `;
    let answerResolve = () => { };
    const answerPromise = new Promise((r) => {
        answerResolve = r;
    });
    rl.question(questionAndPrompt, (answer) => {
        answerResolve(answer === 'Y' || answer == 'y');
        rl.close();
    });
    return [
        () => answerPromise,
        () => {
            console.log('');
            rl.close();
        },
    ];
}
exports.prompt = prompt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9wcm9tcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0RBQWdDO0FBRWhDLHlDQUFrQztBQUVsQyxTQUFnQixNQUFNLENBQUMsUUFBZ0I7SUFDckMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM1QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBRTlCLE1BQU0sRUFBRSxHQUFHLGtCQUFRLENBQUMsZUFBZSxDQUFDO1FBQ2xDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyxDQUFDO0lBRUgsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLGlCQUFLLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxTQUFTLENBQUM7SUFFN0QsSUFBSSxhQUFhLEdBQThCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUN4RCxNQUFNLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBVSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQy9DLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDeEMsYUFBYSxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTztRQUNMLEdBQUcsRUFBRSxDQUFDLGFBQWE7UUFDbkIsR0FBRyxFQUFFO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUE1QkQsd0JBNEJDIn0=