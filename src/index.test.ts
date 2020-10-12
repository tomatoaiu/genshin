import {E, combatSystem}  from "./index";

test('炎なら草、氷、水、雷', () => {
  expect(combatSystem([E.Fire])).toEqual(expect.arrayContaining([E.Straw, E.Ice, E.Water, E.Thunder]))
});
