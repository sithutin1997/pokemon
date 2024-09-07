'use client'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS_BY_NAME } from '@/graphql/queries/pokemonQueries'

export const UseGetAllPokemon = (name: string) => {

    return useQuery(GET_POKEMONS_BY_NAME,{
      variables: {
        name
      },
      fetchPolicy: 'cache-first',
    });

}
