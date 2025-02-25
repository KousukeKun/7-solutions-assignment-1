export enum Category {
  FRUIT = 'Fruit',
  VEGETABLE = 'Vegetable',
};

export type TodoItem = {
  type: Category;
  name: string;
};

export const TodoList: TodoItem[] = [
  {
      type: Category.FRUIT,
      name: 'Apple',
  },
  {
      type: Category.VEGETABLE,
      name: 'Broccoli',
  },
  {
      type: Category.VEGETABLE,
      name: 'Mushroom',
  },
  {
      type: Category.FRUIT,
      name: 'Banana',
  },
  {
      type: Category.VEGETABLE,
      name: 'Tomato',
  },
  {
      type: Category.FRUIT,
      name: 'Orange',
  },
  {
      type: Category.FRUIT,
      name: 'Mango',
  },
  {
      type: Category.FRUIT,
      name: 'Pineapple',
  },
  {
      type: Category.VEGETABLE,
      name: 'Cucumber',
  },
  {
      type: Category.FRUIT,
      name: 'Watermelon',
  },
  {
      type: Category.VEGETABLE,
      name: 'Carrot',
  },
];
