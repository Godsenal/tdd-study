// # 1

interface Figure {}

class Drawing {
  addFigure(figure: Figure) {}
  display() {}
  log() {}
}

class RectangleFigure implements Figure {
  constructor() {}
}

it("rectangle 그리기 테스트", () => {
  const d = new Drawing();
  d.addFigure(new RectangleFigure());
  d.display();
  expect("rectangle").toBe(d.log());
});

// Rectangle 변경 없이 Oval 이라는걸 테스트 해보고 싶으면

class OvalFigure implements Figure {
  constructor() {}
}

it("oval 그리기 테스트", () => {
  const d = new Drawing();
  d.addFigure(new OvalFigure());
  d.display();
  expect("oval").toBe(d.log());
});

// # 2
class Component {
  name!: string;
  render() {
    console.log("render");
  }
}

class NullComponent {
  render() {}
}

class View {
  components: Component[] = [];
  getComponent(name: string) {
    return this.components.find((v) => v.name === name) || new NullComponent();
  }
}

new View().getComponent("notice").render();

// 근데 js에서는 이러면 더 편하지 않을까..
new View().getComponent("notice")?.render();
