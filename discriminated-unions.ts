// one of Type narrowing techniques: discriminated union (example):

type CircleType = {
  kind: "circle";
  radius: number;
};

type SquareType = {
  kind: "square";
  size: number;
};

type Triangle = {
  kind: "triangle";
  b: number;
  n: number;
};

type UnknownShapeType<T> = {
  kind: "unknown";
  prop: T;
};

type ShapeType = CircleType | SquareType | Triangle | UnknownShapeType<number>;

function shapeCalculator(shape: ShapeType) {
  switch (shape.kind) {
    case "circle":
      return shape.radius * shape.radius * Math.PI;
    case "square":
      return shape.size * shape.size;
    case "triangle":
      return (shape.b * shape.n) / 2;
    default:
      return shape.prop;
  }
}
