interface ISimpleCommand {
    doStuff(): string
}

class SimpleStuffClass implements ISimpleCommand {
    private payload: string

    constructor(payload: string) {
        this.payload = payload
    }
    doStuff(): string {
        return `This is simple command and this is payload: ${this.payload}`
    }
}

class ComplexStuffCommand implements ISimpleCommand {
    private receiver: SimpleReceiver
    private first: string
    private second: string

    constructor(receiver: SimpleReceiver, first: string, second: string) {
        this.receiver = receiver
        this.first = first
        this.second = second
    }


    doStuff(): string {
        this.receiver.doMainThing(this.first)
        this.receiver.doSecondaryThing(this.second)
        return `Complex Stuff`
    }
}

class SimpleReceiver {
    public doMainThing(first: string): void {
        console.log(`Main thing do first: ${first}`)
    }

    public doSecondaryThing(second: string): void {
        console.log(`And then I do second thing: ${second}`)
    }
}

class SimpleInvoker {
    private onStart: ISimpleCommand
    private onFinish: ISimpleCommand

    setOnStart(c: ISimpleCommand) {
        this.onStart = c
    }

    setOnFinish(c: ISimpleCommand) {
        this.onFinish = c
    }

    veryImportantStuff() {
        console.log(`beginning`)
        console.log(`start`)
        
        console.log(this.onStart.doStuff())
        console.log(`end`)
        console.log(this.onFinish.doStuff())
    }
}

const mySimpleInvoker = new SimpleInvoker()
const mySimpleReceiver = new SimpleReceiver()

mySimpleInvoker.setOnStart(new SimpleStuffClass('on start test'))
mySimpleInvoker.setOnFinish(new ComplexStuffCommand(mySimpleReceiver, 'Buy cow', 'Love meet'))
mySimpleInvoker.veryImportantStuff()
