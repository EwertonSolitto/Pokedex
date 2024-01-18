import PokemonCard from "./components/PokemonCard";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-[70rem] h-[50rem] bg-red-600 flex items-center justify-center">
        <div className="w-[50rem] h-[30rem] bg-gray-800 flex justify-center items-center">
          <ol>
            <PokemonCard />
          </ol>
        </div>
      </div>
    </div>
  )
}
