class MyUserModel {
    private _name: string = ''

    get name(): string {
        return this._name
    }

    setName(name: string): void {
        this._name = name;
        this.notifyObservers()
    }

    private observers: MyUserView[] = [];

    addObserver(observer: MyUserView): void {
        this.observers.push(observer)
    }

    private notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update()
        }
    }
}

class MyUserView {
    private model: MyUserModel

    constructor(model: MyUserModel) {
        this.model = model
        this.model.addObserver(this)
    }

    update(): void {
        console.log(`View: Users name updated to ${this.model.name}`)
    }

    display(): void {
        console.log(`View: Users name is ${this.model.name}`)
    }
}

class MyUserController {
    private model: MyUserModel

    constructor(model: MyUserModel) {
        this.model = model
    }

    changeUserName(newName: string): void {
        this.model.setName(newName)
    }
}

const userModel = new MyUserModel();
const userView = new MyUserView(userModel)
const myuserController = new MyUserController(userModel)

userView.display()

myuserController.changeUserName('dima')