/**
 * Паттерн Декоратор
 *
 * Назначение: Позволяет динамически добавлять объектам новую функциональность,
 * оборачивая их в полезные «обёртки».
 */

/**
 * Базовый интерфейс Компонента определяет поведение, которое изменяется
 * декораторами.
 */
interface IBaseInterface {
    operation(): string;
}

/**
 * Конкретные Компоненты предоставляют реализации поведения по умолчанию. Может
 * быть несколько вариаций этих классов.
 */
class ComponentWithDefaultOperation implements IBaseInterface {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

/**
 * Базовый класс Декоратора следует тому же интерфейсу, что и другие компоненты.
 * Основная цель этого класса - определить интерфейс обёртки для всех конкретных
 * декораторов. Реализация кода обёртки по умолчанию может включать в себя поле
 * для хранения завёрнутого компонента и средства его инициализации.
 */
class DecoratorClass implements IBaseInterface {
    protected component: IBaseInterface;

    constructor(component: IBaseInterface) {
        this.component = component;
    }

    /**
     * Декоратор делегирует всю работу обёрнутому компоненту.
     */
    public operation(): string {
        return this.component.operation();
    }
}

/**
 * Конкретные Декораторы вызывают обёрнутый объект и изменяют его результат
 * некоторым образом.
 */
class DecoratorFirst extends DecoratorClass {
    /**
     * Декораторы могут вызывать родительскую реализацию операции, вместо того,
     * чтобы вызвать обёрнутый объект напрямую. Такой подход упрощает расширение
     * классов декораторов.
     */
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

/**
 * Декораторы могут выполнять своё поведение до или после вызова обёрнутого
 * объекта.
 */
class DecoratorSecond extends DecoratorClass {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

/**
 * Клиентский код работает со всеми объектами, используя интерфейс Компонента.
 * Таким образом, он остаётся независимым от конкретных классов компонентов, с
 * которыми работает.
 */
function clientCode(component: IBaseInterface) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

/**
 * Таким образом, клиентский код может поддерживать как простые компоненты...
 */
const componentExample = new ComponentWithDefaultOperation();
console.log('Client: I\'ve got a simple component:');
clientCode(componentExample);
console.log('');

/**
 * ...так и декорированные.
 *
 * Обратите внимание, что декораторы могут обёртывать не только простые
 * компоненты, но и другие декораторы.
 */
const decorator1 = new DecoratorFirst(componentExample);
const decorator2 = new DecoratorSecond(componentExample);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator1);
clientCode(decorator2);
