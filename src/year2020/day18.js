export function part1(text) {
  return text.split("\n").reduce((sum, line) => sum + calculate(line), 0);

  function calculate(expression) {
    const stack = [];
    let operate = add;
    let operand = 0;

    for (const [token] of expression.matchAll(/\+|\*|\(|\)|\d+/g)) {
      switch (token) {
        case "+":
          operate = add;
          break;
        case "*":
          operate = mult;
          break;
        case "(":
          stack.push(operand, operate);
          operate = add;
          operand = 0;
          break;
        case ")":
          operand = stack.pop()(stack.pop(), operand);
          break;
        default:
          operand = operate(operand, +token);
      }
    }

    return operand;
  }
}

export function part2(text) {
  return text.split("\n").reduce((sum, line) => sum + calculate(line), 0);

  function calculate(expression) {
    const operates = [];
    const operands = [];

    for (const [token] of expression.matchAll(/\+|\*|\(|\)|\d+/g)) {
      switch (token) {
        case "+":
          operates.push(add);
          break;
        case "*":
          while (operates.length && operates[operates.length - 1] === add) {
            compute(operates, operands);
          }
          operates.push(mult);
          break;
        case "(":
          operates.push(undefined);
          break;
        case ")":
          while (operates.length && operates[operates.length - 1] !== undefined) {
            compute(operates, operands);
          }
          operates.pop();
          break;
        default:
          operands.push(+token);
      }
    }

    while (operates.length) {
      compute(operates, operands);
    }

    return operands[0] ?? 0;
  }
}

function add(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function compute(operates, operands) {
  operands.push(operates.pop()(operands.pop(), operands.pop()));
}
