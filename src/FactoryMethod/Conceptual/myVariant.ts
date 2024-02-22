abstract class ProductCreator {
  abstract factoryMethod(): IDataProduct
  public businessLogic(): string {
    const product = this.factoryMethod()
    return `This is the result of product business logic:  ${product.productOperation()}`
  }
}

interface IDataProduct {
  productOperation(): string
}

class FuturesDataProduct implements IDataProduct {
  productOperation(): string {
      return `This is FuturesDataProduct result`
  }
}

class SpotDataProduct implements IDataProduct {
  productOperation(): string {
      return `This is SpotDataProduct result`
  }
}

class FuturesDataCreator extends ProductCreator {
  factoryMethod(): IDataProduct {
      return new FuturesDataProduct()
  }
}

class SpotDataProductCreator extends ProductCreator {
  factoryMethod(): IDataProduct {
      return new SpotDataProduct()
  }
}

function clientCode(creator: ProductCreator) {
  return creator.businessLogic()
}


const creator1 = new FuturesDataCreator()
const creator2 = new SpotDataProductCreator()

console.log(`App launched with first`)
console.log(clientCode(creator1))
console.log(`App launched with second`)
console.log(clientCode(creator2))

