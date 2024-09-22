import ArtTrending from "./ArtTrending/ArtTrending"
import GamingTrending from "./GamingTrending/GamingTrending"
import PFPsTrending from "./PFPsTrending/PFPsTrending"
import PopArt from "./PopArt/PopArt"
import Slider from "./Sliders/Sliders"
import TopImages from "./TopImages/TopImages"
import TopUsers from "./TopUsers/TopUsers"

const { default: Banner } = require("./Banner/Banner")

const Home = () =>{
    return(
        <>
        <Banner></Banner>
        <Slider></Slider>
        <TopImages></TopImages>
        <TopUsers></TopUsers>
        <PopArt></PopArt>
        <ArtTrending></ArtTrending>
        <GamingTrending></GamingTrending>
        <PFPsTrending></PFPsTrending>
        </>
    )
}
export default Home