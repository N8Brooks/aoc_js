import { Counter } from "../utils/collections.js";

export function part1(text) {
  const [ingredients, allergens] = process(text);
  const counts = ingredients.counts;

  for (const possible of allergens.values()) {
    possible.forEach((allergen) => void counts.delete(allergen));
  }

  return Array.from(counts.values()).reduce((sum, count) => sum + count, 0);
}

export function part2(text) {
  const [, allergens] = process(text);
  const dangerous = new Map();
  const stack = Array.from(allergens);

  while (stack.length) {
    stack.sort(([, possibleA], [, possibleB]) => possibleB.size - possibleA.size);
    do {
      const [allergen, possibleA] = stack.pop();
      for (const ingredient of Array.from(possibleA)) {
        if (!dangerous.has(ingredient)) {
          dangerous.set(ingredient, allergen);
          stack.forEach(([, possibleB]) => possibleB.delete(ingredient));
        }
      }
    } while (stack[stack.length - 1]?.[1].size === 1);
  }

  return Array.from(dangerous)
    .sort(([, allergenA], [, allergenB]) => allergenA.localeCompare(allergenB))
    .map(([ingredient]) => ingredient)
    .join(",");
}

function process(text) {
  const allIngredients = new Counter();
  const allAllergens = new Map();
  const pattern = /(.*) \(contains (.*)\)/;

  for (const line of text.trim().split("\n")) {
    const [, rawIngredients, rawAllergens] = pattern.exec(line);
    const ingredients = rawIngredients.split(" ");
    allIngredients.update(ingredients);

    for (const allergen of rawAllergens.split(", ")) {
      const oldAllergens = allAllergens.get(allergen);
      if (oldAllergens === undefined) {
        allAllergens.set(allergen, new Set(ingredients));
      } else {
        allAllergens.set(allergen, new Set(ingredients.filter((i) => oldAllergens.has(i))));
      }
    }
  }

  return [allIngredients, allAllergens];
}
