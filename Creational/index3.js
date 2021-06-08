import { FirstSingleton } from "./index.js";
import { SecondSingleton } from "./index2.js";
import { DishFactory } from "./Pattern_factory.js";

new FirstSingleton();
new SecondSingleton();

let dishFactory = new DishFactory();
let shrimpEntree = dishFactory.createDish("Shrimp Cutlets", "entree");
let lambMain = dishFactory.createDish("Lamb Chops", "main course");
let baklavaDessert = dishFactory.createDish("Baklava", "dessert");

console.log(shrimpEntree, lambMain, baklavaDessert);
