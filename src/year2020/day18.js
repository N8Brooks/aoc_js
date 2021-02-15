export function part1(text) {
  return text.split("\n").reduce((sum, expression) => sum + evaluate(expression), 0);

  function evaluate(expression) {
    const stack = [];
    let operand = 0;
    let operate = add;

    for (const token of expression.replaceAll(" ", "")) {
      switch (token) {
        case "+":
          operate = add;
          break;
        case "*":
          operate = mult;
          break;
        case "(":
          stack.push(operand, operate);
          operand = 0;
          operate = add;
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
  return text.split("\n").reduce((sum, expression) => sum + evaluate(expression), 0);

  function evaluate(expression) {
    const stack = [];
    let operand = 0;
    let operate = add;

    for (const token of expression.replaceAll(" ", "")) {
      switch (token) {
        case "+":
          operate = add;
          break;
        case "*":
          stack.push(operand, mult);
          operand = 0;
          operate = add;
          break;
        case "(":
          stack.push(operand, operate, undefined);
          operand = 0;
          operate = add;
          break;
        case ")":
          while (stack.pop() !== undefined) {
            operand *= stack.pop();
          }
          if (stack[stack.length - 1] === add) {
            stack.pop();
            operand += stack.pop();
          }
          break;
        default:
          operand = operate(operand, +token);
      }
    }

    return operand * stack.filter(Number.isInteger).reduce(mult, 1);
  }
}

function add(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}
