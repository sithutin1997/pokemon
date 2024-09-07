import { PokemonProps } from "@/helper/types";

export default function PokemonDetail({name, types, attacks, evolutions, image, getEvolution}: PokemonProps) {
  function  handleGetEvolution(name: string) {
    getEvolution(name);
  }
return (
  <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg" src={image || ''} alt="" />
      <div className="p-5">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{name}</h2>
        <h5 className="text-xl racking-tight font-bold mb-2">Types</h5>
        {
          types?.map((type,index) => (
            <p key={index}>{type}</p>
          ) )
        }
        <div>
          <h5 className="text-xl racking-tight font-bold my-4">Attacks</h5>
          <div className="flex flex-col space-y-6 mb-4">
            <div>
              <p className="text-md racking-tight font-bold"> Fast Attack</p>
              {
                attacks?.fast.map(attack => (
                  <div key={attack.name} className="grid grid-cols-3 gap-8">
                    <span className="text-left">{attack.name}</span>
                    <span className="text-left">{attack.type}</span>
                    <span className="text-left">{attack.damage}</span>
                  </div>
              ))
              }
            </div>
            <div>
              <p className="text-md racking-tight font-bold"> Special Attack</p>
              {
                attacks?.special.map(attack => (
                  <div key={attack.name} className="grid grid-cols-3 gap-8">
                    <span className="">{attack.name}</span>
                    <span className="">{attack.type}</span>
                    <span className="">{attack.damage}</span>
                  </div>
              ))
              }
            </div>
          </div>
          <h5 className="text-xl racking-tight font-bold mb-4">Evolutions</h5>
            {
              evolutions?.map(evolution => (
                <div key={evolution.name} className="">
                  <span className="text-left  cursor-pointer hover:font-bold" onClick={() => handleGetEvolution(evolution.name)}>{evolution.name}</span>
                </div>
            ))
            }
        </div>
      </div>
  </div>
)

}