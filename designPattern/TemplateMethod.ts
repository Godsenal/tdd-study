// # 1
class TestCase {
  setUp() {}
  runTest() {}
  tearDown() {}

  public runBare() {
    this.setUp();
    try {
      this.runTest();
    } finally {
      this.tearDown();
    }
  }
}

class MyTest extends TestCase {
  setUp() {
    console.log("setUp");
  }
  runTest() {
    console.log("run test");
  }
  tearDown() {
    console.log("tearDown");
  }
}

class OtherTest extends TestCase {
  runTest() {
    console.log("run test");
  }
}

// # 2
export class Viewer {
  constructor() {}
  addEvent() {
    // common event
  }
  removeEvent() {
    // common event
  }
  setComponent() {
    // init component
  }
  removeComponent() {
    // destroy component
  }

  initialize() {
    this.addEvent();
    this.setComponent();
  }

  destroy() {
    this.removeEvent();
    this.removeComponent();
  }
}

export class InfViewer extends Viewer {
  constructor() {
    super();
  }
  addEvent() {
    console.log("inf viewer add event");
    // inf event
  }
  removeEvent() {
    // inf event
  }
  setComponent() {
    // init inf component
  }
  removeComponent() {
    // remove inf component
  }
}

export class ArticleViewer extends Viewer {
  constructor() {
    super();
  }
  addEvent() {
    console.log("article viewer add event");
    // article event
  }
  removeEvent() {
    // article event
  }
  setComponent() {
    // init article component
  }
  removeComponent() {
    // remove article component
  }
}

new ArticleViewer().initialize();
