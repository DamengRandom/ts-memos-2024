import * as React from "react";

type MaleProps = {
  gender: "male";
  age: number;
};

type FemaleProps = {
  gender: "female";
  salary: number;
};

type ChildProps = {
  name: string;
} & (MaleProps | FemaleProps);

const ChildComponent = (props: ChildProps) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.gender}</p>
      {props.gender === "male" && props?.age && <p>{props.age}</p>}
      {props.gender === "female" && props?.salary && <p>{props.salary}</p>}
    </div>
  );
};

// Now we can differentiate the different gender based conditional props & its types

export const MaleParentComponent = () => {
  return <ChildComponent name="damon" gender="male" age={34} />;
};

export const FemaleParentComponent = () => {
  return <ChildComponent name="damon" gender="female" salary={34} />;
};
