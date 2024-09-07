import { gql } from '@apollo/client';


export const GET_POKEMONS_BY_NAME = gql`
fragment PokemonFragment on Pokemon {
  id
  number
  name
  classification
  types
  resistant
  weaknesses
  fleeRate
  maxCP
  maxHP
  image
  attacks{
    fast{
      name
      type
      damage
    }
    special{
      name
      type
      damage
    }
  }
}

query pokemon($name: String){
  pokemon(name: $name){
  ...PokemonFragment
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    attacks{
      fast{
        name
        type
        damage
      }
      special{
        name
        type
        damage
      }
    }
    evolutions {
      ...PokemonFragment
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
`;

