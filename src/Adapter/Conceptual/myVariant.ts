class MyTarget1 {
    public request(): string {
        return `Target: The default target\'s behavior.`
    }
}

class MyAdaptee {
    public specificRequest(): string {
        return `.eetpadA eht fo roivaheb laicepS`
    }
}

class MyAdapter extends MyTarget1 {
    private myAdaptee: MyAdaptee

    constructor(myAdaptee: MyAdaptee) {
        super()
        this.myAdaptee = myAdaptee
    }

    public request(): string {
        const result = this.myAdaptee.specificRequest().split('').reverse().join('')
        return `Adapter: (TRANSLATED) ${result}`
    }
}

function adapterClientCode(target: MyTarget1) {
    console.log(target.request())
}

console.log(`I'm target and I can work with standart request`);
const target1 = new MyTarget1()
adapterClientCode(target1)

console.log(`But I cant work with unstandart reques`)
const adaptee12 = new MyAdaptee()
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee12.specificRequest()}`);

const adapter123 = new MyAdapter(adaptee12)
clientCode(adapter123)