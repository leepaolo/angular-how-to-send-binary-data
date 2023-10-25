export interface IShoe {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface IShoesCollection {
  shoes: IShoe[];
}
