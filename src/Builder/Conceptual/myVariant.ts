interface IStructureBuilder {
    createFoundation(): void;
    createFacade(): void;
    createRoof(): void;
    createFloor(): void;
    createStairs(): void;
}

class HouseBuilder implements IStructureBuilder {
    product: Structure

    constructor() {
        this.reset()
    }

    reset(): void {
        this.product = new Structure()
    }

    createFoundation(): void {
        this.product.structureParts.push('house_foundation')
    }

    createFacade(): void {
        this.product.structureParts.push('house_facade')
    }

    createFloor(): void {
        this.product.structureParts.push('house_floor')
    }

    createRoof(): void {
        this.product.structureParts.push('house_roof')
    }

    createStairs(): void {
        this.product.structureParts.push('house_stairs')
    }

    getStructure(): Structure {
        const result = this.product
        this.reset()
        return result;
    }
}

class GarageBuilder implements IStructureBuilder {
    product: Structure

    constructor() {
        this.reset()
    }

    reset(): void {
        this.product = new Structure()
    }

    createFoundation(): void {
        this.product.structureParts.push('garage_foundation')
    }
    createFacade(): void {
        this.product.structureParts.push('garage_facade')
    }
    createRoof(): void {
        this.product.structureParts.push('garage_roof')
    }
    createFloor(): void {
        this.product.structureParts.push('garage_floor')
    }
    createStairs(): void {
        this.product.structureParts.push('garage_stairs')
    }

    getStructure(): Structure {
        const result = this.product
        this.reset()
        return result;
    }
}

class Structure {
    structureParts: string[] = []
    showParts(): void {
        console.log(this.structureParts.join(', '))
    }
}

class BuilderDirector {
    private builder: IStructureBuilder

    setStructureBuilder(builder: IStructureBuilder): void {
        this.builder = builder
    }

    createSmallStructure() {
        this.builder.createFoundation()
        this.builder.createFloor()
        this.builder.createRoof()
    }

    createBigStructure() {
        this.builder.createFoundation()
        this.builder.createFloor()
        this.builder.createFloor()
        this.builder.createFloor()
        this.builder.createFloor()
        this.builder.createFloor()
        this.builder.createStairs()
        this.builder.createStairs()
        this.builder.createStairs()
        this.builder.createStairs()
        this.builder.createStairs()
        this.builder.createFacade()
        this.builder.createRoof()
    }
}

function clientCodeForBuilder(director: BuilderDirector) {
    const houseBuilder = new HouseBuilder()
    director.setStructureBuilder(houseBuilder)

    console.log(`big houses`)
    director.createBigStructure()
    houseBuilder.getStructure().showParts()

    console.log(`small houses`)
    director.createSmallStructure()
    houseBuilder.getStructure().showParts()

    const garageBuilder = new GarageBuilder()
    director.setStructureBuilder(garageBuilder)

    console.log(`big garage`)
    director.createBigStructure()
    garageBuilder.getStructure().showParts()

    console.log(`small garage`)
    director.createSmallStructure()
    garageBuilder.getStructure().showParts()
}

const builderDirector = new BuilderDirector()
console.log(clientCodeForBuilder(builderDirector))