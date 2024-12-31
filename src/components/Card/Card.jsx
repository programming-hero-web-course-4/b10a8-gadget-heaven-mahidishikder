import { Link } from "react-router-dom"

function Card({tech}) {
  console.log(tech)
  const {price,description,category,product_id ,product_image,product_title,rating} = tech
   console.log(product_image)
  return (
    <div className="shadow-lg rounded bg-gray-100 p-6">
      <img  className="w-[282px] h-[260px] rounded-xl mb-6" src={product_image} alt="" />
      <p className="text-center">{product_title}</p>
      <p className="text-center">{price}</p>
      <div className="flex justify-center">
      <Link to={`/details/${product_id}`}>
      <button className=" py-2 hover:bg-violet-500 px-5 rounded-full ring-1 my-4 ring-violet-600">View Details</button>
      </Link>
      </div>
    </div>
  )
}

export default Card