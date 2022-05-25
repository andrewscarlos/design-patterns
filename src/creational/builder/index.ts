import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal()
console.log(mainDishBuilder.getMeal())
console.log(mainDishBuilder.getPrice())

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal()
console.log(veganDishBuilder.getMeal())