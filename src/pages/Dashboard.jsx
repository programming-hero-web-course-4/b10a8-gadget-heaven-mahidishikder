import { PiSortAscendingLight, PiSortDescendingDuotone } from "react-icons/pi"

function Dashboard() {
  return (
    <div className=" max-w-screen-2xl mx-auto   ">
     <div className="bg-[#9538E2] py-10 rounded-b-xl">
     <h2 className="text-4xl text-center font-bold text-white/90">Dashboard</h2>
     <p  className="text-lg text-center mt-4 mb-8 text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />  the coolest accessories, we have it all!</p>
      <div className="flex justify-center gap-4">
      <button className="btn px-12 rounded-full text-[#9538E2] text-lg font-bold">
        cart
      </button>
      <button className=" ring-white ring-1 bg-transparent rounded-full px-12 text-[#ffffffe1]">
      Wishlist
      </button>
      </div>
     
     </div>
     <div>


     <div className="flex justify-between mt-20 items-center">
        <h2 className="font-bold text-2xl">Card</h2>
        <div className="flex justify-center items-center gap-6">
          <h2 className="text-2xl font-bold">Total Cost : </h2>
          <button className=" ring-1 ring-[#9538E2] rounded-full flex justify-center items-center py-3 px-8 font-semibold text-[#9538E2]">
          Sort by Price <PiSortAscendingLight />
          </button>
          <button className="bg-[#9538E2] text-white rounded-full py-3 px-8">Purchase</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Dashboard