export type Ingredient = {
  id: string;
  name: string;
};

export type Meal = {
  id: string;
  name: string;
  difficulty: string;
  prepTime: number;
  totalTime: number;
  ingredients: Ingredient[];
  budgetFriendly: boolean;
  vegan: boolean;
  vegetarian: boolean;
  picturePath: string;
};
