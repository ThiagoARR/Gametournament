import Picture from "../../Assets/pp.jpg"
import { BsCreditCardFill, BsFillChatRightFill } from "react-icons/bs";


const Perfil = () => {
    return(
        <section className="md:w-56 lg:w-60 xl:w-64 2xl:w-72 rounded-md shadow-md bg-secondary">
            <div className="p-5">
                <div className="flex gap-5 items-center">
                    <div className="sm:w-20 md:w-20 lg:w-20">
                        <img src={Picture} className="shadow-lg rounded-md w-full"/>
                    </div>
                    <div className="">
                        <div className="text-white text-xl">thiago_arr</div>
                        <div className="text-gray-400 text-sm">Game Profile</div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="w-full h-1.5 bg-white rounded">
                    </div>
                    <div className="flex justify-between my-2">
                        <span className="text-gray-400 text-sm">
                            Immortal
                        </span>
                        <span className="text-gray-300 text-sm">
                            7,600 / 7,800
                        </span>
                    </div>
                </div>
                <div className="flex justify-around gap-4">
                    <div className="flex flex-1 justify-around items-center p-3 gap-2 bg-opacity-10 bg-orange-600 rounded">
                        <BsCreditCardFill color="orange" size={15}/>
                        <div className="flex items-center gap-2 text-white font-semibold text-xs">82,254</div>
                    </div>
                    <div className="flex flex-1 justify-around items-center p-3 gap-2 bg-opacity-10 bg-orange-600 rounded">
                        <BsCreditCardFill color="orange" size={15} />
                        <div className="flex items-center gap-2 text-white font-semibold text-xs">82,254</div>
                    </div>
                </div>
                <div className="flex flex-1 bg-orange-600 rounded mt-6">
                    <div className="flex flex-1 justify-between items-center p-3" >
                        <div className="flex items-center gap-4 text-white">
                            <BsFillChatRightFill color="white" size={14}/>
                            <button className="text-xs">Messages</button>
                        </div>
                        <div className="flex text-white">
                            <span className="text-xs">5</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Perfil;