class InnerService {
    public calculate(): string {
        return `This is default calculation`
    }
}

class NeedToBeAdapted {
    specificCalculation(): string {
        return `.eetpadA eht fo roivaheb laicepS`
    }
}

class InnerServiceAdapter extends InnerService {
    service: NeedToBeAdapted

    constructor(needToBeAdapted: NeedToBeAdapted) {
        super()
        this.service = needToBeAdapted
    }

    public calculate(): string {
        return this.service.specificCalculation().split('').reverse().join('')
    }
}


function clienCodeForMyAdapter(code: InnerService) {
    console.log(code.calculate())
}

console.log(`default behavior`)
const innerService = new InnerService()

clienCodeForMyAdapter(innerService)


console.log(`adaptive behavior`)

const thisIsMyService = new NeedToBeAdapted() 

const myInnerServiceAdapter = new InnerServiceAdapter(thisIsMyService)
clienCodeForMyAdapter(myInnerServiceAdapter)