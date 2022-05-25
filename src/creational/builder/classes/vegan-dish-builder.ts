import { MealBuilderInterface } from "../interfaces/meal-builder.interface";
import { MealBox } from "./meal-box";
import { Beans, Macarrao, Meat, Pizza, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderInterface {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 50);
        const beans = new Beans('Feijão', 3);
        this._meal.add(rice, beans)
        return this;
    }

    makeMacarrao(): this {
        const macarrao = new Macarrao('Macarrão', 5);
        this._meal.add(macarrao)
        return this;
    }

    makePizza(): this {
        const pizza = new Pizza('Pizza', 10);
        this._meal.add(pizza)
        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice()
    }
}

