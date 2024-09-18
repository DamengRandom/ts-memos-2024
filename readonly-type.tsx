import * as React from "react";

// Assumed: defined in another file
export type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

interface NamedModelProps {
  title: string;
  content: string;
}

type ReadonlyComponentProps = ReadOnlyProps<NamedModelProps>;

const ComponentA: React.FC<{ props: ReadonlyComponentProps }> = ({ props }) => {
  // props.title = "failed - because title is readonly prop now"; // failed
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default React.memo(ComponentA);
