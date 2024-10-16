interface ReviewProps {
  texto: string;
  nombre: string;
  titulo: string;
  img: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({texto, nombre, titulo, img}) => {
  return(
    <div className="w-6/12 max-md:w-10/12 mx-auto flex justify-center gap-8 font-montserrat max-md:flex-col">
      {/* Imagen */}
      <div className="w-1/4 h-full max-md:w-full">
        <img 
          src={img} 
          alt={nombre} 
          className="w-[170px] h-[170px] mx-auto rounded-full object-cover object-top"
        />
      </div>
      
      {/* Reseña */}
      <div className="w-3/4 max-md:w-full">
        <p className="text-justify text-[14px] max-sm:text-[16px] italic">
          "{texto}"
        </p>
        <p className="font-[600] text-[18px] mt-4 leading-[20px]">
          {nombre}
        </p>
        <p className="font-[300] text-[15px] mb-6">
          {titulo}
        </p>
      </div>
    </div>
  )
}