export const enum E {
  Fire, // 火
  Water, // 水
  Wind, // 風
  Thunder, // 雷
  Straw, // 草
  Ice, // 氷
  Rock, // 岩
}

export type ElementalReaction = {
  damage: number,
  duration: number,
  attribute1: E[],
  attribute2: E[]
}

// 燃焼
const buring: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Fire],
  attribute2: [E.Straw],
}

// 拡散
const diffusion: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Wind],
  attribute2: [E.Fire, E.Ice, E.Rock, E.Straw, E.Thunder, E.Water],
}

// 結晶
const crystal: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Rock],
  attribute2: [E.Fire, E.Ice, E.Straw, E.Thunder, E.Water, E.Wind],
}

// 融化
const fusion: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Fire],
  attribute2: [E.Ice],
}

// 蒸発
const evaporation: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Fire],
  attribute2: [E.Water],
}

// 過負荷
const overload: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Fire],
  attribute2: [E.Thunder],
}

// 凍結
const freeze: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Water],
  attribute2: [E.Ice],
}

// 感電
const electricShock: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Water],
  attribute2: [E.Thunder],
}

// 超電導
const superconductivity: ElementalReaction = {
  damage: 10,
  duration: 10,
  attribute1: [E.Thunder],
  attribute2: [E.Ice],
}

const elementalReactions: ElementalReaction[] = [
  buring, diffusion, crystal, fusion, evaporation, 
  overload, freeze, electricShock, superconductivity
]

/**
 * 戦闘の計算
 * 
 * @param state 攻撃対象の元素状態
 * @returns 元素反応
 */
export function combatSystem(state: E[]): E[] {
  const res = state.map(e => {
    return elementalReactions.map(er => {
      const ok = er.attribute1.find(a => a === e);
      if (ok != null) {
        return er;
      }
    }).filter(er => er);
  });
  const maybeAttributes = res.pop();
  const attributes: E[] = maybeAttributes ?
    maybeAttributes.filter((el): el is Required<ElementalReaction> => Boolean(el))
      .map(el => el.attribute2.pop())
      .filter((e): e is Required<E> => Boolean(e)) : []

  return [...new Set(attributes)];
}
