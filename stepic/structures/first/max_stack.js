class StackWithSteroid {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(value) {
    this.stack.push(value);
    console.log(this.maxStack);
    if (
      !this.maxStack.length ||
      this.maxStack[this.maxStack.length - 1][1] < value
    ) {
      this.maxStack.push([1, value]);
    } else if (this.maxStack[this.maxStack.length - 1][1] === value) {
      ++this.maxStack[this.maxStack.length - 1][0];
    }
  }

  pop() {
    let removedValue = this.stack.pop();
    if (this.maxStack[this.maxStack.length - 1][1] === removedValue) {
      --this.maxStack[this.maxStack.length - 1][0];
    }

    if (!this.maxStack[this.maxStack.length - 1][0]) {
      this.maxStack.pop();
    }

    return removedValue;
  }

  max() {
    return this.maxStack[this.maxStack.length - 1][1];
  }
}

let obj = new StackWithSteroid();
function wrapperOperation(inputStr) {
  switch (inputStr) {
    case inputStr.includes("push"):
      let pushValue = parseInt(inputStr.replace(/push /g, ""));
      obj.push(pushValue);
      break;

    case "pop":
      return obj.pop();

    case "max":
      return obj.max();
  }
}
