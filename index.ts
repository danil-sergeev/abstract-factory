import {Cheese, Clams, Dough, Pepperoni, Sauce, Veggies} from "./ingredients";
import {IngredientFactory, NYPizzaIngredientFactory} from "./factory";


abstract class Pizza {
    set name(value: string) {
        this.#_name = value;
    }

    get name(): string {
        return this.#_name;
    }

    #_name: string = '';

    dough!: Dough;
    sauce!: Sauce;
    veggies!: Veggies[];
    cheese!: Cheese;
    pepperoni!: Pepperoni;
    clam!: Clams;


    abstract prepare(): void;

    bake(): void {
        console.info('Bake for 25 minutes at 350');
    }

    cut(): void {
        console.info('Cutting the pizza into diagonal slices');
    }

    box(): void {
        console.info('Place pizza in official Pizza Store Box')
    }
}


class CheesePizza extends Pizza {
    constructor(
        private ingredientFactory: IngredientFactory,
    ) {
        super();
    }

    prepare(): void {
        console.info(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

class ClamPizza extends Pizza {
    constructor(
        private ingredientFactory: IngredientFactory,
    ) {
        super();
    }

    prepare(): void  {
        console.info(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clam = this.ingredientFactory.createClam();
    }
}

abstract class PizzaStore {
    protected abstract createPizza(type: string): Pizza | undefined;

    orderPizza(type: string): Pizza {
        const pizzaInstance = this.createPizza(type);

        if (!pizzaInstance) throw new Error(`Pizza with type ${type} does not exist`);

        pizzaInstance.prepare();
        pizzaInstance.bake();
        pizzaInstance.cut();
        pizzaInstance.box();

        return pizzaInstance;
    }
}

class NYPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza | undefined {
        const ingredientFactory = new NYPizzaIngredientFactory();
        let pizza;
        if (type === 'cheese') {
            pizza = new CheesePizza(ingredientFactory);
            pizza.name = 'New York Style Cheese Pizza';
        }
        if (type === 'clam') {
            pizza = new ClamPizza(ingredientFactory);
            pizza.name= 'New York Style Clam Pizza';
        }

        return pizza;
    }
}

// same with CA Pizza Store...

(function () {
    const pizzaStore = new NYPizzaStore();
    pizzaStore.orderPizza('clam');
})();
