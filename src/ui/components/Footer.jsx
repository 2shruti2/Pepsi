import { onLog } from "firebase/app"
import { FaFacebook } from "react-icons/fa";

const Footer = () => {

  const aarr = [
   {"name" : "facebook"}, 
   {"name" : "instagram"}, 
   {"name" : "youtube"}, 
   {"name" : "x"}, 
  ]

  const arr = [
    {"name":"Home"},
    {"name":"Product"},
    {"name":"About us"},
    {"name":"Blog"},
    {"name":"our Team"}
  ]
  return (
    <div className="w-full section-padding flex flex-col ">
      <div className="w-full flex justify-center gap-4 bg-red-200">
     {aarr.map(links => {
      return (
        <span className="inline-block p-4 "> <FaFacebook size={20}/></span>
    )
     })}
     </div>
     <div className="flex justify-center gap-4 bg-red-500">
        {arr.map(lucky =>{
          return(
          
            <span>{lucky.name}</span>
           )
        })
        }
</div>
      </div>
    
  )
}

export default Footer