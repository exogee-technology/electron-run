"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
function delay(duration) {
    return new Promise((r) => {
        setTimeout(() => {
            r();
        }, duration);
    });
}
exports.delay = delay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvZGVsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsS0FBSyxDQUFDLFFBQWdCO0lBQ3BDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsQ0FBQyxFQUFFLENBQUM7UUFDTixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFORCxzQkFNQyJ9