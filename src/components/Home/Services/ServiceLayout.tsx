import { ServiceCard } from "./ServiceCard";
import Captacion from "../../../assets/captacion-de-talentos.jpg"
import Representacion from "../../../assets/representacion-de-futbolistas.jpg"
import Asesoramiento from "../../../assets/asesoramiento-legal.webp"

export const ServicesLayout = () => {
  const services = [
    {
      title: "Representación de futbolístas",
      img: Representacion,
    },
    {
      title: "Captación de talentos",
      img: Captacion,
    },
    {
      title: "Asesoramiento integral",
      img: Asesoramiento,
    },
  ]

  return(
    <div>
      <div 
        className="flex max-sm:flex-col my-8 gap-14 justify-center font-montserrat"
      >
        {services.map((item:{title:string, img:string}, index:number) => (
          <div key={index}>
            <ServiceCard
              title={item.title}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  )
}