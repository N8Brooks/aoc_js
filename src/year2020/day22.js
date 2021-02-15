export function part1(text) {
  const [player1, player2] = players(text);

  while (player1.length && player2.length) {
    const card1 = player1.shift();
    const card2 = player2.shift();

    if (card1 < card2) {
      player2.push(card2, card1);
    } else {
      player1.push(card1, card2);
    }
  }

  return score(player1.length ? player1 : player2);
}

export function part2(text) {
  return score(combat(...players(text), false));

  function combat(player1, player2, subGame = true) {
    if (subGame && Math.max(...player1) > Math.max(...player2)) {
      return true;
    }

    let won;
    const rounds = new Map();
    while (player1.length && player2.length && !(won = containsAdd(player1, player2, rounds))) {
      const card1 = player1.shift();
      const card2 = player2.shift();
      if ((won = isWinner(player1, player2, card1, card2))) {
        player1.push(card1, card2);
      } else {
        player2.push(card2, card1);
      }
    }

    return subGame ? won : player1.length ? player1 : player2;
  }

  function containsAdd(player1, player2, rounds1) {
    const key1 = player1.toString();
    const key2 = player2.toString();
    const rounds2 = rounds1.get(key1);
    if (rounds2 !== undefined) {
      if (rounds2.has(key2)) {
        return true;
      }
      rounds2.add(key2);
    } else {
      rounds1.set(key1, new Set([key2]));
    }
    return false;
  }

  function isWinner(player1, player2, card1, card2) {
    return player1.length < card1 || player2.length < card2
      ? card2 < card1
      : combat(player1.slice(0, card1), player2.slice(0, card2));
  }
}

function players(text) {
  return text
    .trim()
    .split("\n\n")
    .map((player) => player.split("\n").slice(1).map(Number));
}

function score(player) {
  return player.reverse().reduce((sum, card, i) => sum + card * (i + 1), 0);
}
