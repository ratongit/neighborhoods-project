import { FaBars } from "react-icons/fa";
import './Navber.css'

const Navber = () => {

  const nabitem = <>

    <li><a href='/' className='font-semibold  max-lg:hover:bg-base-300   text-lg max-lg:pe-44 max-lg:rounded-2xl  max-lg:ps-4 max-lg:py-2 '>Home</a></li>
    <li><a href='/Location' className='font-semibold  max-lg:hover:bg-base-300   text-lg max-lg:pe-44 max-lg:rounded-2xl  max-lg:ps-4 max-lg:py-2'> About</a></li>
    <li><a href='/support' className='font-semibold  max-lg:hover:bg-base-300   text-lg max-lg:pe-44 max-lg:rounded-2xl  max-lg:ps-4 max-lg:py-2'> Testimonials</a></li>
    <li><a href='/PartnerHome' className='font-semibold  max-lg:hover:bg-base-300   text-lg max-lg:pe-44 max-lg:rounded-2xl  max-lg:ps-4 max-lg:py-2'> Contact</a></li>

    

  </>
  return (
    <div className="max-w-6xl  mx-auto px-5  navbar h-60">
      <div className="navbar-start">
        <div className=' w-60 rounded-2xl'>

        {/* logo */}
        <div className="text-3xl font-bold flex  w-[450px]  ">
         <h1 className="text-3xl font-bold  pt-20 ">Neigh</h1>

         <div className=" bg-[url('https://assets.website-files.com/64adec555c7df193ecf8a4a8/64adec565c7df193ecf8a704_bg%20style.svg')] bg-no-repeat  inline-block  h-72 w-[900px] bg-cover  pt-20">borgood   </div> 
        </div>

        </div>



      </div>
      <div className="navbar-center -mt-20  hidden lg:flex">
        <ul className="menu uppercase menu-horizontal -ms-20">
          {nabitem}
        </ul>
      </div>

      <div className="navbar-end -mt-20 flex gap-10 max-md:invisible">
      <a href='/' className='font-semibold   text-lg  rounded-2xl  ps-4 py-2 max-sm:hidden'>Login</a>
        <a className="btn 
         bg-white max-sm:invisible
         font-bold  px-10
          md:me-10  
        btnDownload   text-green-600
        hover:md:translate-x-1 hover:md:translate-y-1
        ">Visit The App</a>
      </div>
      
      <div className="dropdown -mt-16  ">
        <label tabIndex={0} className="btn btn-ghost  -mt-16  text-2xl lg:hidden ">
          <FaBars  />
        </label>
        <ul tabIndex={0} className="dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-[300px]  absolute right-0 flex flex-col gap-5 p-8">
{nabitem}  

<div className="md:hidden ">
      <a href='/' className='font-semibold  max-lg:hover:bg-base-300   text-lg max-lg:pe-44 max-lg:rounded-2xl  max-lg:ps-4 max-lg:py-2 '>Login</a>
        <a className="btn 
         bg-white 
         font-bold  
        btnDownload   text-green-600
        hover:md:translate-x-1 mt-3 hover:md:translate-y-1 px-16 text-center
        ">Visit The App</a>
      </div>


 </ul>


      </div>

    </div>
  );
};

export default Navber;