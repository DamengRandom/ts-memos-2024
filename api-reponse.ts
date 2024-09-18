type APIResponse<T> =
  | { status: "success"; data: T; timeStamp: Date }
  | { status: "error"; message: string; timeStamp: Date };

// conditional type rendering !!!

let mockConditionOneResponse: APIResponse<number> = {
  status: "success",
  data: 100,
  timeStamp: new Date(),
};

let mockConditionTwoResponse: APIResponse<number> = {
  status: "error",
  message: "Error occurred, please fix on it ..",
  timeStamp: new Date(),
};
