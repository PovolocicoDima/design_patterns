interface MyComponent1 {
    operation(): string
}

class MyConcreteComponent1 implements MyComponent1 {
    public operation(): string {
        return `MyConcreteComponent1`
    }
}

class MyDecorator1 implements MyComponent1 {
    protected component: MyComponent1
    constructor(component: MyComponent1) {
        this.component = component
    }

    public operation(): string {
        return this.component.operation()
    }
}

class MyConcreteDecorator1 extends MyDecorator1 {
    public operation(): string {
        return `MyConcreteDecorator1: ${super.operation()}`
    }
}

class MyConcreteDecorator2 extends MyDecorator1 {
    public operation(): string {
        return `MyConcreteDecorator2: ${super.operation()}`
    }
}

function clientCode12(component: MyComponent1) {
    console.log(component.operation())
}

const test1 = new MyConcreteComponent1()
const test2 = new MyConcreteDecorator1(test1)
const test3 = new MyConcreteDecorator2(test2)
clientCode12(test3)