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
class Viewer {
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

class InfViewer extends Viewer {
  constructor() {
    super();
  }
  addEvent() {
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

class ArticleViewer extends Viewer {
  constructor() {
    super();
  }
  addEvent() {
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
