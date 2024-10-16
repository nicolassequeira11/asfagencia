interface ServiceCardProps {
  img: string;
  title: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({img, title}) => {
  return(
    <div 
      className="text-center w-[300px] h-full px-4 py-6 mx-auto
        shadow-[rgba(0,0,0,_0.05)_0px_9px_30px] rounded-[25px]"
    >
      <img 
        src={img} 
        alt={title} 
        className="border-4 border-gold-base rounded-full w-[150px] h-[150px] object-cover mx-auto"
      />
      <p className="text-[20px] font-[600] my-auto mt-4 text-black-base">
        {title}
      </p>
    </div>
  )
}