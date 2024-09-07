'use client'

import Loading from '@/components/Loading';
import { NotFound } from '@/components/NotFound';
import PokemonDetail from '@/components/PokemonDetail';
import SearchPokemon from '@/components/SearchPokemon';
import { UseGetAllPokemon } from '@/custom-hooks/pokemon/useGetAllPokemon'
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';


export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPokemonName = searchParams.get('search') || '';
  const [pokemonName, setPokemonName] = useState(initialPokemonName);
  const [hasSearched, setHasSearched] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const { loading, data } = UseGetAllPokemon(pokemonName);

  const handleSearchPokemon = (name: string) => {
    setPokemonName(name);
    setHasSearched(true);
    router.push(`?search=${name}`);
  }
  useEffect(() => {
    data?.pokemon == null ? setIsFound(false) : setIsFound(true)
  }, [data])

  useEffect(() => {
    const nameFromUrl = searchParams.get('search');
    if (nameFromUrl) {
      setPokemonName(nameFromUrl);
      setHasSearched(true)
    }
  }, [searchParams]);

  const handleSearchEvolution = (name: string) => {
    setPokemonName(name);
    setHasSearched(true)
    router.push(`?search=${name}`);
  }

  return (
    <div className="">
      <SearchPokemon searchPokemon={handleSearchPokemon} pokemonName={pokemonName}/>
      <div className='max-w-md mx-auto py-8'>
        {loading && 
          <Loading />
        }
        { data?.pokemon && <PokemonDetail types={data?.pokemon.types} name={data?.pokemon.name} evolutions={data?.pokemon.evolutions} image={data?.pokemon.image} attacks={data?.pokemon.attacks} getEvolution={handleSearchEvolution}/>}
        {
          (hasSearched && !isFound && !loading) ? <NotFound /> : null
        }
      </div>
    </div>
  );
}
