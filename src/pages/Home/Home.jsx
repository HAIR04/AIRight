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
        </>
    )
}
export default Home