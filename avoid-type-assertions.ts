type User = {
  id: string;
  name: string;
};

function getUser(user: User) {
  return user;
}

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// Reason: no hobby as prop get defined in User type
getUser({ id: "1", name: "unknown", hobby: "unexpected variable" } as User);
// How to avoid this hacking code?
// Solution 1: define object before pass into function !!!!!!!!!!
// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
const userProps: User = {
  id: "1",
  name: "unknown",
  hobby: "unexpected variable",
};
// So now, hobby is get detected, which is not part of User type
// Will report error to developer !!
getUser(userProps);

// Solution 2: start using type predicates !!!!!!!!!!
// (Personally, this approach is a bit longer but accurate !!!!!!!!)
// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
const readUserProps = {
  id: "2",
  name: "Undefined",
};

function isUser(readUserProps: User): readUserProps is User {
  return Boolean(readUserProps && readUserProps?.id && readUserProps?.name);
}

function run(readUserProps: User) {
  if (isUser(readUserProps)) getUser(readUserProps);
}

run(readUserProps);

// Now, the user is has proper type defined !!
