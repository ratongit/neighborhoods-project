import { FaRegStar } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="mx-auto lg:bg-right bg-auto w-full h-[100vh] bg-no-repeat bg-[url('https://assets.website-files.com/64adec555c7df193ecf8a4a8/64adec565c7df193ecf8a705_MAP%20(1).svg')]">
            <div className='mt-12 relative flex flex-cols  '>
                <div className='md:w-2/3 font-bold'>
                    <h1 className='sm:text-2xl md:text-6xl'>
                        Fostering Connection In
                        <span className='primary-color'> Neighborhoods</span>
                    </h1>
                    <p className='mt-10'> NeighborGood's mission is to foster stronger, safer, and more interconnected communities. We empower individuals to come together for shared activities, bolster neighborhood security, and facilitate beneficial connections. We strive to rekindle the sense of community, where sharing and collaboration lead to enriched lives for all.</p>
                </div>


                    <div>
                        <div className=' left-80 -top-20'>

                            <div className="card w-44 card-compact bg-base-100 shadow-xl">
                                <figure><img className='w-40' src="https://assets.website-files.com/64adec555c7df193ecf8a4a8/64adec565c7df193ecf8a708_Rectangle%20286.svg" alt="Travle" /></figure>
                                <div className="card-body gap-0">

                                    <div className="flex justify-between">

                                        <h2 className="  card-title text-[10px] font-bold -my-3   leading-4 ">Luxury Travel Export</h2>
                                        <div className="flex gap-[2px] -mt-[6px]">
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                        </div>
                                    </div>


                                    <p className='  leading-3 font-semibold text-[10px]'>Always get adieus nature day course for common. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect.</p>
                                    <button className='primary-color  underline text-start'>read more</button>
                                </div>
                            </div>

                        </div>


                        <div className="right-20 absolute top-32">
                        <div className="card w-44 card-compact bg-base-100 shadow-xl">
                                <figure><img className='w-40' src="https://assets.website-files.com/64adec555c7df193ecf8a4a8/64adec565c7df193ecf8a70a_Rectangle%20286%20(2).svg" alt="Travle" /></figure>
                                <div className="card-body gap-0">

                                    <div className="flex justify-between">

                                        <h2 className="  card-title text-[10px] font-bold -my-3   leading-4 ">Bali Islands</h2>
                                        <div className="flex gap-[2px] -mt-[6px]">
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                        </div>
                                    </div>


                                    <p className='  leading-3 font-semibold text-[10px]'>Always get adieus nature day course for common. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect.</p>
                                    <button className='primary-color  underline text-start'>read more</button>
                                </div>
                            </div>
                            </div>

                           <div className="absolute top-96 right-1/2">
                            <div className="card w-44 card-compact bg-base-100 shadow-xl">
                                <figure><img className='w-40' src="https://assets.website-files.com/64adec555c7df193ecf8a4a8/64adec565c7df193ecf8a70b_Rectangle%20286%20(3).svg" alt="Travle" /></figure>
                                <div className="card-body gap-0">

                                    <div className="flex justify-between">

                                        <h2 className="  card-title text-[10px] font-bold -ms-2 -my-3   leading-4 ">Hotel The Mitsui Kyoto</h2>
                                        <div className="flex gap-[2px] -mt-[6px]">
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                            <FaRegStar style={{ fontSize: "7px" }} className="text-yellow-300 fill-yellow-400"></FaRegStar>
                                        </div>
                                    </div>


                                    <p className=' -ms-2 leading-3 font-semibold text-[10px]'>Always get adieus nature day course for common. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect.</p>
                                    <button className=' -ms-2 primary-color  underline text-start'>read more</button>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='font-bold'>
                <button>EXPLORE</button>
                <button>CONTACT</button>
            </div>
        </div>

    );
};

export default Banner;