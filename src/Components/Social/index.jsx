import Pic from "../../Assets/5.webp";
import Pic2 from "../../Assets/6.webp";
import Pic3 from "../../Assets/7.webp";
import Pic4 from "../../Assets/8.webp";
import { BsCreditCardFill, BsFillChatRightFill, BsFilter } from "react-icons/bs";


const Social = () =>{
    return(
        <section className="md:w-56 lg:w-60 xl:w-64 2xl:w-72 rounded-md shadow-md bg-secondary">
            <div className="p-5">
                <div className="flex items-center justify-between py-1.5">
                    <div>
                        <h1 className="text-2xl text-white font-semibold">Players</h1>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 rounded text-white bg-gray-600 bg-opacity-30">
                        <BsFilter size={18} />
                        <button className="text-xs">
                            Filters
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex gap-2 items-center justify-between flex-1">
                        <div className="w-12">
                            <img src={Pic} className="rounded w-full"/>
                        </div>
                        <div className="">
                            <div className="text-white text-sm">
                                TranQuility#5163
                            </div>
                            <div className="flex text-sm items-center text-gray-500">
                                <div>264 ELO • Valorant</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-500 bg-opacity-10">
                            <span className="text-white">1</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between flex-1">
                        <div className="w-12">
                            <img src={Pic2} className="rounded w-full"/>
                        </div>
                        <div className="">
                            <div className="text-white text-sm">
                                TranQuility#5163
                            </div>
                            <div className="flex text-sm items-center text-gray-500">
                                <div>264 ELO • Valorant</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-500 bg-opacity-10">
                            <span className="text-white">2</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between flex-1">
                        <div className="w-12">
                            <img src={Pic3} className="rounded w-full"/>
                        </div>
                        <div className="">
                            <div className="text-white text-sm">
                                TranQuility#5163
                            </div>
                            <div className="flex text-sm items-center text-gray-500">
                                <div>264 ELO • Valorant</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-500 bg-opacity-10">
                            <span className="text-white">3</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between flex-1">
                        <div className="w-12">
                            <img src={Pic4} className="rounded w-full"/>
                        </div>
                        <div className="">
                            <div className="text-white text-sm">
                                TranQuility#5163
                            </div>
                            <div className="flex text-sm items-center text-gray-500">
                                <div>264 ELO • Valorant</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-500 bg-opacity-10">
                            <span className="text-white">4</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social;