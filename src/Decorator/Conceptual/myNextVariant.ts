interface IBaseHouseInterface {
    build(): string
}

class BaseHouse implements IBaseHouseInterface {
    build(): string {
        return `BaseHouse`
    }
}

class BaseHouseDecorator implements IBaseHouseInterface {
    private base: IBaseHouseInterface 

    constructor(base: IBaseHouseInterface) {
        this.base = base
    }

    build(): string {
        return this.base.build()
    }
}

class SmallHousesDecorator extends BaseHouseDecorator {
    build(): string {
        return `Small house with ${super.build()}`
    }
}

class BigHousesDecorator extends BaseHouseDecorator {
    build(): string {
        return `Big houses with ${super.build()}`
    }
}


const createMyAHouse = (builder: IBaseHouseInterface) => {
    console.log(builder.build())
}

console.log(`app by default`)
const baseHouse = new BaseHouse()
createMyAHouse(baseHouse)

console.log(`app with dec 1`)
const small = new SmallHousesDecorator(baseHouse)
createMyAHouse(small)
console.log(`app with dec 2`)
const big = new BigHousesDecorator(baseHouse)
createMyAHouse(big)
