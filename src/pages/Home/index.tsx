import { BannerHome } from "../../components/Home/Banner"
import { About } from "../../components/Home/About"
import { Services } from "../../components/Home/Services"
import { Contact } from "../../components/Home/Contact"
import { Review } from "../../components/Home/Reviews/Review"

export const Home = () => {
  return(
    <div>
      <BannerHome />
      <div className="2xl:w-[70rem] mx-auto">

        <About />
        <Services />
        <Review />
        <Contact />
              
      </div>
    </div>
  )
}