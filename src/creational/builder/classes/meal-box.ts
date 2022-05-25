import { MealCompositeInterface } from "../interfaces/meal-composite-interface";


export class MealBox implements MealCompositeInterface {

    private readonly _children: MealCompositeInterface[] = [];

    getPrice(): number {
        return this._children.reduce((acc, meal) => acc + meal.getPrice(), 0);
    }

    add(...meal: MealCompositeInterface[]): void {
        meal.forEach(item => this._children.push(item));
    }
}