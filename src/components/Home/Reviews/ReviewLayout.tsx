import Slider from "react-slick";
import { ReviewCard } from "./ReviewCard";

import FacundoBonifazi from "../../../assets/jugadores/facundo-bonifazi/facundo-bonifazi.png"
import MartinFarias from "../../../assets/jugadores/martin-farias/martin-farias.png"
import JannensonSarmiento from "../../../assets/jugadores/jannenson-sarmiento/jannenson-sarmiento.png"

export const ReviewLayout = () => {

  const reviews = [
    {
      nombre: "Facundo Bonifazi",
      titulo: "Jugador profesional",
      imagen: FacundoBonifazi,
      texto: "Trabajar con ASF Agencia ha sido una experiencia transformadora para mi carrera. Su profesionalismo y dedicación me brindaron la confianza necesaria para concentrarme en mi rendimiento en el campo. Desde el primer día, se interesaron en mis objetivos y me ayudaron a encontrar las mejores oportunidades. Su apoyo constante y comunicación transparente han sido clave en mi desarrollo. Se los recomiendo a cualquier futbolista que busque un aliado comprometido. ¡Estoy muy agradecido por todo lo que han hecho por mí!"
    },
    {
      nombre: "Martin Farías",
      titulo: "Jugador profesional",
      imagen: MartinFarias,
      texto: "Trabajar con ASF Agencia ha sido una experiencia transformadora para mi carrera. Su profesionalismo y dedicación me brindaron la confianza necesaria para concentrarme en mi rendimiento en el campo. Desde el primer día, se interesaron en mis objetivos y me ayudaron a encontrar las mejores oportunidades. Su apoyo constante y comunicación transparente han sido clave en mi desarrollo. Se los recomiendo a cualquier futbolista que busque un aliado comprometido. ¡Estoy muy agradecido por todo lo que han hecho por mí!"
    },
    {
      nombre: "Jannenson Sarmiento",
      titulo: "Jugador profesional",
      imagen: JannensonSarmiento,
      texto: "Trabajar con ASF Agencia ha sido una experiencia transformadora para mi carrera. Su profesionalismo y dedicación me brindaron la confianza necesaria para concentrarme en mi rendimiento en el campo. Desde el primer día, se interesaron en mis objetivos y me ayudaron a encontrar las mejores oportunidades. Su apoyo constante y comunicación transparente han sido clave en mi desarrollo. Se los recomiendo a cualquier futbolista que busque un aliado comprometido. ¡Estoy muy agradecido por todo lo que han hecho por mí!"
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div className="">
      <div className="slider-container">
        <Slider {...settings}>
          {reviews.map((item:{nombre:string, titulo:string, imagen:string, texto:string}, index:number) => (
            <div key={index}>
              <ReviewCard 
                nombre={item.nombre}
                titulo={item.titulo}
                texto={item.texto}
                img={item.imagen}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}