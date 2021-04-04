export type TOperator = "+" | "-" | "*" | "/";

export const operate = (operator: TOperator, first: number, second: number) => {
  switch (operator) {
    case "+": {
      return first + second;
    }
    case "-": {
      return first - second;
    }
    case "*": {
      return first * second;
    }
    case "/": {
      return first / second;
    }
    default: {
      return 0;
    }
  }
};
