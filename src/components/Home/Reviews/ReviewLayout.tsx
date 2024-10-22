import Slider from "react-slick";
import { ReviewCard } from "./ReviewCard";

import MatiasSantos from "../../../assets/jugadores/matias-santos/matias-santos.png"


export const ReviewLayout = () => {

  const reviews = [
    {
      nombre: "Matias Santos",
      titulo: "Jugador profesional",
      imagen: MatiasSantos,
      texto: [
        "Alejandro y yo tenemos una relación especial porque, antes de ser mi representante, fue y es mi amigo. Empezamos como vecinos y nuestras familias se volvieron cercanas. Cuando atravesé una situación complicada en México, mi representante me abandonó, pero Alejandro me ayudó a retomar mi carrera en Uruguay, en Defensor Sp. Desde entonces, seguimos trabajando juntos. Ha estado conmigo en todos los lugares donde jugué y, recientemente, me visitó en Chile. Confío plenamente en él, ya que entiende cómo pienso y veo el fútbol, lo que me da mucha tranquilidad. Lo que más valoro de él es la confianza.",
      ]
    },
    // {
    //   nombre: "Martin Farías",
    //   titulo: "Jugador profesional",
    //   imagen: MartinFarias,
    //   texto: "Trabajar con ASF Agencia ha sido una experiencia transformadora para mi carrera. Su profesionalismo y dedicación me brindaron la confianza necesaria para concentrarme en mi rendimiento en el campo. Desde el primer día, se interesaron en mis objetivos y me ayudaron a encontrar las mejores oportunidades. Su apoyo constante y comunicación transparente han sido clave en mi desarrollo. Se los recomiendo a cualquier futbolista que busque un aliado comprometido. ¡Estoy muy agradecido por todo lo que han hecho por mí!"
    // },
    // {
    //   nombre: "Jannenson Sarmiento",
    //   titulo: "Jugador profesional",
    //   imagen: JannensonSarmiento,
    //   texto: "Trabajar con ASF Agencia ha sido una experiencia transformadora para mi carrera. Su profesionalismo y dedicación me brindaron la confianza necesaria para concentrarme en mi rendimiento en el campo. Desde el primer día, se interesaron en mis objetivos y me ayudaron a encontrar las mejores oportunidades. Su apoyo constante y comunicación transparente han sido clave en mi desarrollo. Se los recomiendo a cualquier futbolista que busque un aliado comprometido. ¡Estoy muy agradecido por todo lo que han hecho por mí!"
    // },
  ]

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div className="">
      <div className="slider-container">
        <Slider {...settings}>
          {reviews.map((item:{nombre:string, titulo:string, imagen:string, texto:string[]}, index:number) => (
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