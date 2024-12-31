import { useLoaderData, useParams } from "react-router-dom"
import Card from "../Card/Card"
import { useEffect, useState } from "react"

function TechCard() {
  const data = useLoaderData()
  console.log(data)
  const {category} = useParams()
  const [techs , setTechs] = useState([])
  useEffect(() => {
   if(category){
    const filterByCagegoy = [...data].filter(single =>single.category === category)
    setTechs(filterByCagegoy)
   }
   else{
    setTechs(data.slice(0,8))
   }
  },[category,data])
 
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          techs.map(tech => <Card tech={tech} key={tech.id}></Card>)
        }
      </div>
    </div>
  )
}

export default TechCard