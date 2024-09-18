type Props = "PropA" | "PropB";

type MappedProps = {
  [P in Props]?: boolean;
};

type GenericMappedProps<T extends string | symbol | number, K> = {
  [P in T]: K;
};

type NewGenericMappedProps = GenericMappedProps<Props, boolean>;
