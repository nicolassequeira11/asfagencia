import NicolasSequeira from "../../assets/nicolas-sequeira.png"

export const Footer = () => {
  return(
    <div className="bg-black-base py-6 font-montserrat">
      <div className="flex justify-between w-full mx-auto px-8 max-sm:flex-col">
        <p className="text-center text-white my-auto text-[13px] font-[400]">
          © Copyright 2024 ASF AGENCIA - URUGUAY
        </p>
        <a 
          href="https://www.linkedin.com/in/nicolas-sequeira-dev/"
          target="_blank"
          className="text-white text-[13px] items-center my-auto hover:text-gold-base flex gap-2 
            max-sm:mx-auto max-sm:mt-5"
        >
          Powered by
          <img 
            src={NicolasSequeira} 
            alt="Nicolas Sequeira Web Developer" 
            className="w-10 object-contain"
          />
        </a>
      </div>
    </div>
  )
}