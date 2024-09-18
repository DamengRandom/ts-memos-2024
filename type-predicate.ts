// one of Type narrowing techniques: type predicate (example):

type Square = {
  size: number;
};

type Circle = {
  radius: number;
};

type Shape = Square | Circle;

function isSquare(shape: Shape): shape is Square {
  // check is shape a square !!
  return "size" in shape;
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }

  return shape.radius * shape.radius * Math.PI;
}
