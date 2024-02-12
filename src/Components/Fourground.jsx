import { useRef } from 'react'
import Card from './Card'

const Fourground = () => {
	const ref = useRef()
	const data = [
		{
			Name:"MD. Tanvir Rana",
			Bio: 'Kushtia Polytechnic Institute',
			Roll:530058,
			Reg:1592048520,
			Dep:"Computer",
			bgColor:"bg-gray-700",
			btn:true
			
		},
		{
			Name:"MD. Sabbir Ahamed",
			Bio: 'Kushtia Polytechnic Institute',
			Roll:530036,
			Reg:1554131521,
			Dep:"Computer",
			bgColor:"bg-green-700"
		},
		{
			Name:"MD. Nasim Ahamed",
			Bio: 'Kushtia Polytechnic Institute',
			Roll:530059,
			Reg:1554048522,
			Dep:"Computer",
			bgColor:"bg-sky-700"
		}
	]
  return (
	<div ref={ref} className="absolute top-0 left-0 p-5 w-full h-full flex gap-4 flex-wrap">
		{
			data.map((item,index)=>{ 
				return <Card key={index} data={item} refrence={ref}/>
			})
		}
	</div>
  )
}

export default Fourground