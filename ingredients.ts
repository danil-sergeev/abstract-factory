export abstract class Dough {}
export abstract class Sauce {}
export abstract class Veggies {}
export abstract class Cheese {}
export abstract class Pepperoni {}
export abstract class Clams {}

/**
 * @description
 * Concrete ingredients
 */
export class ThinCrustDough extends Dough {}
export class MarinaraSauce extends Sauce {}
export class ReggianoCheese extends Cheese {}
export class Garlic extends Veggies {}
export class Onion extends Veggies {}
export class Mushroom extends Veggies {}
export class RedPepper extends Veggies {}
export class SlicedPepperoni extends Pepperoni {}
export class FreshClams extends Clams {}
export class FreezedClams extends Clams {}

export class Spinach extends Veggies {}
export class MozarellaCheese extends Cheese {}
export class PlumTomatoSauce extends Cheese {}
export class ThickCrustDough extends Sauce {}
