export function part1(text) {
  const program = JSON.parse(`[${text.trim()}]`);

  return computerWithReplacements(program, 12, 2);
}

export function part2(text) {
  const program = JSON.parse(`[${text.trim()}]`);

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const result = computerWithReplacements([...program], noun, verb);
      if (result === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
}

function computerWithReplacements(program, noun, verb) {
  program[1] = noun;
  program[2] = verb;
  return computer(program);
}

export function computer(program) {
  let i = 0;
  let operation = program[0];

  while (operation !== 99) {
    const input1 = program[i + 1];
    const input2 = program[i + 2];
    const output = program[i + 3];

    if (operation === 1) {
      program[output] = program[input1] + program[input2];
    } else {
      program[output] = program[input1] * program[input2];
    }

    i += 4;
    operation = program[i];
  }

  return program[0];
}
