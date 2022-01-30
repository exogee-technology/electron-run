"use strict";
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walk = exports.exists = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function exists(path) {
    try {
        await fs_1.default.promises.stat(path);
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.exists = exists;
function walk(dir) {
    return __asyncGenerator(this, arguments, function* walk_1() {
        var e_1, _a;
        try {
            for (var _b = __asyncValues(yield __await(fs_1.default.promises.opendir(dir))), _c; _c = yield __await(_b.next()), !_c.done;) {
                const d = _c.value;
                const entry = path_1.default.join(dir, d.name);
                if (d.isDirectory())
                    yield __await(yield* __asyncDelegator(__asyncValues(walk(entry))));
                else if (d.isFile())
                    yield yield __await(entry);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield __await(_a.call(_b));
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
exports.walk = walk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUVqQixLQUFLLFVBQVUsTUFBTSxDQUFDLElBQWlCO0lBQzVDLElBQUk7UUFDRixNQUFNLFlBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFBQyxXQUFNO1FBQ04sT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7QUFQRCx3QkFPQztBQUVELFNBQXVCLElBQUksQ0FBQyxHQUFXOzs7O1lBQ3JDLEtBQXNCLElBQUEsS0FBQSxjQUFBLGNBQU0sWUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxJQUFBO2dCQUF6QyxNQUFNLENBQUMsV0FBQSxDQUFBO2dCQUNoQixNQUFNLEtBQUssR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtvQkFBRSxjQUFBLEtBQUssQ0FBQyxDQUFDLGlCQUFBLGNBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFDO3FCQUNuQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQUUsb0JBQU0sS0FBSyxDQUFBLENBQUM7YUFDbEM7Ozs7Ozs7OztJQUNILENBQUM7Q0FBQTtBQU5ELG9CQU1DIn0=