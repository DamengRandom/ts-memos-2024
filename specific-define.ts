// bad approach
type BadAreaProps = {
  type: string;
  height?: number;
  radius?: number;
  size?: number;
  width?: number;
};

function calculateArea(props: BadAreaProps) {
  switch (props.type) {
    case "circle":
      return Math.PI * (props?.radius || 0) ** 2;
    case "rectangle":
      return (props?.width || 0) * (props?.height || 0);
    case "square":
      return (props?.size || 0) ** 2;
    default:
      return 0;
  }
}

// Good approach
type GoodAreaProps =
  | { type: "circle"; radius: number }
  | { type: "rectangle"; width: number; height: number }
  | { type: "square"; size: number };

function calArea(props: GoodAreaProps) {
  switch (props.type) {
    case "circle":
      return Math.PI * props.radius ** 2;
    case "rectangle":
      return props.width * props.height;
    case "square":
      return props.size ** 2;
    default:
      return 0;
  }
}
