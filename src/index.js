"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combatSystem = void 0;
// 燃焼
const buring = {
    damage: 10,
    duration: 10,
    attribute1: [0 /* Fire */],
    attribute2: [4 /* Straw */],
};
// 拡散
const diffusion = {
    damage: 10,
    duration: 10,
    attribute1: [2 /* Wind */],
    attribute2: [0 /* Fire */, 5 /* Ice */, 6 /* Rock */, 4 /* Straw */, 3 /* Thunder */, 1 /* Water */],
};
// 結晶
const crystal = {
    damage: 10,
    duration: 10,
    attribute1: [6 /* Rock */],
    attribute2: [0 /* Fire */, 5 /* Ice */, 4 /* Straw */, 3 /* Thunder */, 1 /* Water */, 2 /* Wind */],
};
// 融化
const fusion = {
    damage: 10,
    duration: 10,
    attribute1: [0 /* Fire */],
    attribute2: [5 /* Ice */],
};
// 蒸発
const evaporation = {
    damage: 10,
    duration: 10,
    attribute1: [0 /* Fire */],
    attribute2: [1 /* Water */],
};
// 過負荷
const overload = {
    damage: 10,
    duration: 10,
    attribute1: [0 /* Fire */],
    attribute2: [3 /* Thunder */],
};
// 凍結
const freeze = {
    damage: 10,
    duration: 10,
    attribute1: [1 /* Water */],
    attribute2: [5 /* Ice */],
};
// 感電
const electricShock = {
    damage: 10,
    duration: 10,
    attribute1: [1 /* Water */],
    attribute2: [3 /* Thunder */],
};
// 超電導
const superconductivity = {
    damage: 10,
    duration: 10,
    attribute1: [3 /* Thunder */],
    attribute2: [5 /* Ice */],
};
const elementalReactions = [
    buring, diffusion, crystal, fusion, evaporation,
    overload, freeze, electricShock, superconductivity
];
/**
 * 戦闘の計算
 *
 * @param state 攻撃対象の元素状態
 * @returns 元素反応
 */
function combatSystem(state) {
    const res = state.map(e => {
        return elementalReactions.map(er => {
            const ok = er.attribute1.find(a => a === e);
            if (ok != null) {
                return er;
            }
        }).filter(er => er);
    });
    const result = res.pop();
    const attributes = result ?
        result.filter((el) => Boolean(el))
            .map(el => el.attribute2.pop())
            .filter((el) => Boolean(el)) : [];
    return [...new Set(attributes)];
}
exports.combatSystem = combatSystem;
