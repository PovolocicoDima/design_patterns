interface MyAbstractFactory {
    createProductX(): abstractProductX
    createProductY(): abstractProductY
}

class ConcreteFactory3 implements MyAbstractFactory {
    createProductX(): abstractProductX {
        return new ConcreteProductX3()
    }

    createProductY(): abstractProductY {
        return new ConcreteProductY3()
    }
}

class ConcreteFactory4 implements MyAbstractFactory {
    createProductX(): abstractProductX {
        return new ConcreteProductX4()
    }

    createProductY(): abstractProductY {
        return new ConcreteProductY4()
    }
}

interface abstractProductX {
    usefulFunctionX(): string
}

interface abstractProductY {
    usefulFunctionY(): number
}

class ConcreteProductX3 implements abstractProductX {
    public usefulFunctionX(): string {
        return `useful function from concrete product 3`
    }
}

class ConcreteProductY3 implements abstractProductY {
    public usefulFunctionY(): number {
        return 3
    }
}

class ConcreteProductX4 implements abstractProductX {
    public usefulFunctionX(): string {
        return `useful function from concrete product 4`
    }
}

class ConcreteProductY4 implements abstractProductY {
    public usefulFunctionY(): number {
        return 4
    }
}

function clientCode1(factory: MyAbstractFactory) {
    const productX = factory.createProductX()
    const productY = factory.createProductY()

    console.log(productX.usefulFunctionX())
    console.log(productY.usefulFunctionY())
}

clientCode1(new ConcreteFactory3())
console.log('``````````````')
clientCode1(new ConcreteFactory4())