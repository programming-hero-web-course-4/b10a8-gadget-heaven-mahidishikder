import BannerText from "../components/BannerText/BannerText";
import Banner from "../assets/banner.jpg";
import { Outlet, useLoaderData } from "react-router-dom";
import Categoris from "../components/Categoris/Categoris";


function Home() {
  const categoris = useLoaderData()
  console.log(categoris)


  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="relative">
        <BannerText></BannerText>
        <div className="">
        <img
          className="p-5 bg-transparent border  absolute md:top-[350px] top-[430px] left-1/2 transform -translate-x-1/2 w-[1062px] sm:h-[563px] h-[330px] rounded-md"
          src={Banner}
          alt=""
        />
        </div>
      </div>
       
      <div className="mt-96 ">
        <h2 className="text-3xl font-bold text-center mb-16">Explore Cutting-Edge Gadgets</h2>
      <div className="flex gap-8 justify-between">
        <div className="w-2/12">
      <Categoris categoris={categoris}></Categoris>
        </div>
      <div className="w-10/12 ">
      <Outlet></Outlet>
      </div>
      </div>
      </div>

    </div>
  );
}

export default Home;

