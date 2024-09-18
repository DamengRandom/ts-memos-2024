import * as React from "react";

interface Person {
  type: "person";
  name: string;
  age: number;
}

interface Company {
  type: "company";
  name: string;
  numberOfEmployees: number;
}

type Entity = Person | Company;

// Bad approach
function isPerson(entity: Entity): boolean {
  return entity.type === "person";
}

export const BadApproachComponent: React.FC<{ entity: Entity }> = ({
  entity,
}) => {
  return isPerson(entity) ? (
    <div>
      <p>{entity.name}</p>
      <p>{(entity as Person).age}</p>
      {/* if not putting as Person, we are getting an error here: Property 'age' does not exist on type 'Entity'. */}
    </div>
  ) : (
    <div>
      <p>{entity.name}</p>
      <p>{(entity as Company).numberOfEmployees}</p>
    </div>
  );
};

// Good approach: TypeScript smart enough to understand entity is Person not company and then allocate the proper pro to specific part of code
function isPersonEntity(entity: Entity): entity is Person {
  return entity.type === "person";
}

export const GoodApproachComponent: React.FC<{ entity: Entity }> = ({
  entity,
}) => {
  return isPersonEntity(entity) ? (
    <div>
      <p>{entity.name}</p>
      <p>{entity.age}</p>
    </div>
  ) : (
    <div>
      <p>{entity.name}</p>
      <p>{entity.numberOfEmployees}</p>
    </div>
  );
};

export default GoodApproachComponent;
