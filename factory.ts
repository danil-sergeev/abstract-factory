import {
    Cheese,
    Clams,
    Dough, FreezedClams, FreshClams,
    Garlic,
    MarinaraSauce, MozarellaCheese,
    Mushroom,
    Onion,
    Pepperoni, PlumTomatoSauce, RedPepper, ReggianoCheese,
    Sauce, SlicedPepperoni, Spinach, ThickCrustDough,
    ThinCrustDough,
    Veggies
} from "./ingredients";

/**
 * @description
 * Abstract Factory interface
 */
export interface IngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClam(): Clams;
}

/**
 * @description
 * Concrete Implementation of factories
 */
export class NYPizzaIngredientFactory implements IngredientFactory {
    createDough(): Dough {
       return new ThinCrustDough();
    }
    createSauce(): Sauce {
        return new MarinaraSauce();
    }
    createVeggies(): Veggies[] {
        return [
            new Garlic(),
            new Onion(),
            new Mushroom(),
        ]

        // Massive is static, because for pattern showcase we do not really need nontrivial solution.
    }

    createCheese(): Cheese {
        return new ReggianoCheese();
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }
    createClam(): Clams {
        return new FreshClams();
    }
}

export class CAPizzaIngredientFactory implements IngredientFactory {
    createDough(): Dough {
        return new ThickCrustDough();
    }

    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    createCheese(): Cheese {
        return new MozarellaCheese();
    }

    createVeggies(): Veggies[] {
        return [
            new Spinach(),
            new Garlic(),
            new Mushroom(),
            new RedPepper(),
        ]

        // Massive is static, because for pattern showcase we do not really need nontrivial solution.
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClam(): Clams {
        return new FreezedClams();
    }
}
