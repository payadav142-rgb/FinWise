export type Formula = {
  title: string;
  formula: string;
  explanation: string;
};

export type Example = {
  title: string;
  description: string;
};

export type ArticleSection = {
  heading: string;
  content: string;
};

export type CalculatorArticle = {
  title: string;

  introduction?: string;

  sections: ArticleSection[];

  formula?: Formula;

  example?: Example;

  advantages?: string[];

  disadvantages?: string[];

  tips?: string[];

  mistakes?: string[];

  conclusion?: string;
};