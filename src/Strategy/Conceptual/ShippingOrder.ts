class Order {
    lineItems = []
    shipping: Shipping
  
    getTotal(): number { return 1}
    getTotalWeight(): number {return 2}
    setShippingType(shipping: Shipping) {}
    getShippingDate() {}
    getShippingCost() {
        return this.shipping.getCost(this)
    }
}
  

  
interface Shipping {
    getCost(order: Order): number
    getDate(order: Order): number
}
  
interface Ground extends Shipping {
    getCost(order: Order): number
    getDate(order: Order): number
}
  
interface Air extends Shipping {
    getCost(order: Order): number
    getDate(order: Order): number
}

const order = new Order()


function getCost() {
    if (order.getTotal() > 100) {
        return 0
    }

    return Math.max(10, order.getTotalWeight() * 1.5)
}