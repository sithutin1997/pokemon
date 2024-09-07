import { SearchPokemonProps } from "@/helper/types"
import { useEffect, useState } from "react"

export default function SearchPokemon({searchPokemon, pokemonName}: SearchPokemonProps) {
  function  handleSearch(e: React.FormEvent) {
    e.preventDefault();
    searchPokemon(name);
  }
  const [name, setName] = useState(pokemonName)
  useEffect(() => {
    setName(pokemonName)
  }, [pokemonName])

return (
<form className="max-w-md mx-auto py-8">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
      <input type="search" 
        id="default-search" 
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Search Pokemon by Name" required 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <button 
        type="submit" 
        className={`text-white absolute end-2.5 bottom-2.5 bg-blue-700 ${name == "" ? null :"hover:bg-blue-800" } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2`}
        onClick={(e: React.FormEvent) => handleSearch(e)}
        disabled={name == "" ? true : false}
        >
        Search
      </button>
    </div>
</form>
)


}