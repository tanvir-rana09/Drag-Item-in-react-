import Fourground from "./Fourground"


const Background = () => {
  return (
	<div className="w-full h-screen flex items-center justify-center bg-zinc-800 relative">
		<h1 className="text-8xl font-bold tracking-tighter text-zinc-700">Drag</h1>
		<Fourground/>
	</div>
  )
}

export default Background