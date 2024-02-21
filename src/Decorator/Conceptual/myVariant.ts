interface MyComponent {
    operation(): string
}

class MyConcreteComponent implements MyComponent {
    public operation(): string {
        return `MyConcreteComponent`
    }
}

class MyDecorator implements MyComponent {
    protected component: MyComponent

    constructor(component: MyComponent) {
        this.component = component
    }

    public operation(): string {
        return this.component.operation()
    }
}

class MyConcreteDecoratorA extends MyDecorator {
    public operation(): string {
        return `MyConcreteDecoratorA: ${super.operation()}`
    }
}

class MyConcreteDecoratorB extends MyDecorator {
    public operation(): string {
        return `MyConcreteDecoratorB: ${super.operation()}`
    }
}

function clientCode(component: MyComponent) {
    console.log(component.operation())
}

const simpleExample = new MyConcreteComponent()
clientCode(simpleExample)

console.log('```````')

const dec1 = new MyConcreteDecoratorA(simpleExample)
const dec2 = new MyConcreteDecoratorB(dec1)
clientCode(dec2)