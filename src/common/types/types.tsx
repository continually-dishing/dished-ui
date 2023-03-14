export type Ingredient = {
    id: string,
    name: string,
  }

  export type Meal = { 
    name: string,
    difficulty: string,
    prepTime: number,
    totalTime: number,
    ingredients: Ingredient[],
    budgetFriendly: boolean,
    vegan: boolean,
    vegetarian: boolean,
  }
  