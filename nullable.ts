type Nullable<T> = { [K in keyof T]: T[K] | null };

interface Person {
  name: string;
  age: number;
  job: string;
}

type JoblessPerson = Nullable<Omit<Person, "job">>;
// If you hover JoblessPerson, you can see the person is without job property defined.
