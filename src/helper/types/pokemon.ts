export type PokemonProps = {
  name: string;
  image?: string;
  number?: string;
  weight?: Weight;
  types?: string[];
  weakness?: string[];
  resistant?: string[];
  classification?: string;
  attacks?: Attacks;
  evolutions?: Pokemon[];
  getEvolution: (name: string) => void;
}

export type Pokemon = {
  name: string;
  image?: string;
  number?: string;
  weight?: Weight;
  type?: string[];
  weakness?: string[];
  resistant?: string[];
  classification?: string;
  attack: Attacks;
  evolution: Pokemon;
}

export type Weight = {
  minimum: string;
  maximum: string;
}

export type Attack = {
  name: string;
  type: string;
  damage: number;
}

export type Attacks = {
  fast: Attack[];
  special: Attack[];
}
