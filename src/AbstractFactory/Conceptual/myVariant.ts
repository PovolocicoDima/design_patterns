interface IAbstractBuilder {
    createHouse(): IHouse;
    createGarage(): IGarage;
}

class TownBuilder implements IAbstractBuilder {
    createHouse(): IHouse {
        return new BigHouse()
    }
    createGarage(): IGarage {
        return new BigGarage()
    }
}

class WillageBuilder implements IAbstractBuilder {
    createHouse(): IHouse {
        return new SmallHouse()
    }
    createGarage(): IGarage {
        return new SmallGarage()
    }
}

interface IHouse {
    isHouse(): string
}

interface IGarage {
    isGarage(): string
}

class BigHouse implements IHouse {
    isHouse(): string {
        return `This is big house`
    }
}

class SmallHouse implements IHouse {
    isHouse(): string {
        return `This is small house`
    }
}

class BigGarage implements IGarage {
    isGarage(): string {
        return `This is big garage`
    }
}

class SmallGarage implements IGarage {
    isGarage(): string {
        return `This is small garage`
    }
}

function letsBuild(factory: IAbstractBuilder) {
    const house = factory.createHouse()
    const garage = factory.createGarage()

    console.log(`${house.isHouse()}`)
    console.log(`${garage.isGarage()}`)
}

console.log('App1')
letsBuild(new TownBuilder())
console.log('App2')
letsBuild(new WillageBuilder())