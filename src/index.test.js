"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test('炎なら草、氷、水、雷', () => {
    expect(index_1.combatSystem([0 /* Fire */])).toEqual(expect.arrayContaining([4 /* Straw */, 5 /* Ice */, 1 /* Water */, 3 /* Thunder */]));
});
