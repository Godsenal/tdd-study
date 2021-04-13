// # 1

class Money {
  amount: number;
  currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  // new Money(amount, "USD") 보다 더 표현이 명확함. Money.dollar(amount)
  // 단, 객체가 생성된다는 사실이 명확하지는 않다는 단점이 있음.
  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }
}

// # 2

import { Viewer, InfViewer, ArticleViewer } from "./TemplateMethod";
class Parser {
  constructor(viewer: Viewer) {}
  render() {}
}

abstract class HomeBuilder {
  constructor() {}

  render() {
    // new InfViewer(), new ArticleViewer() 알 필요 없음
    const viewer = this.createViewer();
    viewer.initialize();

    const parser = new Parser(viewer);
    parser.render();
  }

  abstract createViewer(): Viewer;
}

class InfHomeBuilder extends HomeBuilder {
  createViewer() {
    return new InfViewer();
  }
}

class ArticleHomeBuilder extends HomeBuilder {
  createViewer() {
    return new ArticleViewer();
  }
}

new InfHomeBuilder().render();
