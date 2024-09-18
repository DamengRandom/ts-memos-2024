interface UserAsExample {
  name: string;
  age: number;
  gender: string;
}

type PartialUserAsExample = Partial<UserAsExample>;

const user: PartialUserAsExample = {};

// later on add new props, the PartialUserAsExample also can read it since its a Partial
