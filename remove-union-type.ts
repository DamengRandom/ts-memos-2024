export type Letters = "a" | "b" | "c";

// type RemoveC<TType> = TType extends "c" ? never : TType; // "a" | "b"
type RemoveC<TType> = TType extends "c" ? "d" : TType; // "a" | "b" | "d"

export type TypeWithoutC = RemoveC<Letters>;
