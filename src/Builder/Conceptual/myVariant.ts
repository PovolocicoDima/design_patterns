interface MyBuilder {
    myProducePartA(): void;
    myProducePartB(): void;
    myProducePartC(): void;
}

class MyConcreteBuilder1 implements MyBuilder {
    private product: MyProduct1;

    constructor() {
        this.reset()
    }

    public reset(): void {
        this.product = new MyProduct1()
    }


    myProducePartA(): void {
        this.product.parts.push('PartA')
    }
    myProducePartB(): void {
        this.product.parts.push('PartB')
    }
    myProducePartC(): void {
        this.product.parts.push('PartC')
    }

    getProduct(): MyProduct1 {
        const result = this.product
        this.reset()
        return result
    }
}

class MyProduct1 {
    public parts: string[] = []

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class MyDirector {
    private builder: MyBuilder

    setBuilder(builder: MyBuilder): void {
        this.builder = builder
    }

    public buildMVP(): void {
        this.builder.myProducePartA()
    }

    public buildFull(): void {
        this.builder.myProducePartA()
        this.builder.myProducePartB()
        this.builder.myProducePartC()
    }
}

function clientCode(director: MyDirector) {
    const builder = new MyConcreteBuilder1()
    director.setBuilder(builder)

    console.log('basic product')
    director.buildMVP()
    builder.getProduct().listParts();

    console.log('full product')
    director.buildFull()
    builder.getProduct().listParts()
}

const myDirector = new MyDirector()
clientCode(myDirector)