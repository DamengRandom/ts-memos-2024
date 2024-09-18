export const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

const objectKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

objectKeys(myObject).forEach((key) => {
  console.log(myObject[key]);
});
