// In TypeScript, set noUncheckedIndexedAccess to true in tsconfig.json file, you will get the auto error detector for preventing runtime error !!

export const records: Record<string, string[]> = {};

records.x.push("x");
// because records.x does not exist, so it will return type error
