// Basic version:
// export type IconSize = "xs" | "sm" | Omit<string, "xs" | "sm">;

// Advanced loose autocomplete:

type LooseAutoComplete<T extends string> = T | Omit<string, T>;

export type IconSize = LooseAutoComplete<"xs" | "sm">;
