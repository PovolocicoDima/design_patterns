class MyPrototype {
    public primitive: string|number;
    public component: object;
    public circularReference: MyComponentWithCircularRefference;

    public clone(): this {
        const clone = Object.create(this)
        clone.component = Object.create(this.component)

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this }
        }


        return clone
    }
}

class MyComponentWithCircularRefference {
    public prototype;

    constructor(prototype: MyPrototype) {
        this.prototype = prototype
    }
}

function clientCode() {
    const p1 = new MyPrototype()
    p1.primitive = 245
    p1.component = new Date()
    p1.circularReference = new MyComponentWithCircularRefference(p1)

    const p2 = p1.clone()

    console.log(`primitive`)
    console.log(p1.primitive === p2.primitive)
    console.log(`component`)
    console.log(p1.component === p2.component)
    console.log(`circular refference`)
    console.log(p1.circularReference === p2.circularReference)
    // return p2 === p1
}

clientCode()