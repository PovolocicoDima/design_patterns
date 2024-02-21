abstract class MainCreator {
  /**
   * фабричный метод, который в каждом конкретном создателе
   * возвращает конкретный продукт, но тип у продукта должен
   * соответствовать основному интерфейсу, в данном случа Product
   */
  abstract factoryMethod(): Product

  /**
   * стандартная логика по работе с продуктами
   * продукт получают вызывая также фабричный метод, а не через new
   */
  public someLogic(): string {
    const product = this.factoryMethod()
    return product.operation()
  }
}

/**
 * Основной интерфейс, с которым взаимодействуют фабрики
 * они именно его и должны возвращать
 */
interface Product {
  operation(): string
}

/**
 * конкретный создатель, который наследуется от основного создателя
 * и переписывает фабричный метод, создавая конкретный продукт 
 * используя new, но интерфейс совпадает с основным
 */
class Concrete1Creator extends MainCreator {
  public factoryMethod(): Product {
    return new Concrete1Product()
  }
}

/**
 * конкретный создатель, который наследуется от основного создателя
 * и переписывает фабричный метод, создавая конкретный продукт 
 * используя new, но интерфейс совпадает с основным
 */
class Concrete2Creator extends MainCreator {
  public factoryMethod(): Product {
    return new Concrete2Product()
  }
}

/**
 * конкретный продукт, который создает конкретный создатель
 * у данном продукта есть своя имплементация метода, описанного в 
 * интерфейсе
 */
class Concrete1Product implements Product {
  operation(): string {
      return `Concrete1 implementation of operation` 
  }
}

/**
 * конкретный продукт, который создает конкретный создатель
 * у данном продукта есть своя имплементация метода, описанного в 
 * интерфейсе
 */
class Concrete2Product implements Product {
  operation(): string {
      return `Concrete2 implementation of operation` 
  }
}