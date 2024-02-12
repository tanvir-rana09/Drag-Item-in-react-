import { motion } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ data, refrence }) => {
	const notify = () => toast("Downloading !!");
	return (
		<div>
			<motion.div
				animate={{ x: 100 }}
				transition={{ ease: "easeOut", duration: 2 }}
				drag dragConstraints={refrence} className="cursor-grab w-56 h-72 text-white rounded-xl overflow-hidden flex flex-col items-center justify-between bg-slate-900 ">
				<div className="flex flex-col items-center gap-2">
					<i className="fa-solid fa-user text-4xl pt-5"></i>
					<h1 className="text-xl font-medium">{data.Name}</h1>
				</div>

				<div className="flex flex-col items-start gap-3">
					<div className="text-xs text-center "> {data.Bio} </div>
					<div className="text-xs text-center "> {data.Roll} </div>
					<div className="text-xs text-center "> {data.Reg} </div>
					<div className="text-xs text-center "> {data.Dep} </div>

				</div>
				<div className={`${data.bgColor} w-full `} >
					{
						data.btn === true ? (<button onClick={notify} className="flex justify-between w-full px-5 py-3 text-center">Download</button>) : (<div className="flex justify-between w-full px-5 py-4">
							<i className="fa-solid fa-download"></i>
							<i className="fa-solid fa-circle-info"></i>
						</div>)
					}
				</div>
			</motion.div>
			<ToastContainer />
		</div>
	)
}

export default Card