import Button from "../Button/button";
import Imageone from "../../assets/images/client-databiz.svg/"
import Imagetwo from "../../assets/images/client-audiophile.svg/"
import Imagethree from "../../assets/images/client-meet.svg/"
import Imagefour from "../../assets/images/client-maker.svg/"
import Icon from "../../assets/images/image-hero-desktop.png/"
import "./Home.css"
const Home = () => {
    return (
        <div className="Body">
            <div className="Side">
            <h1>Make <br /> remote work</h1>
            <p>Get your team in sync, no matter your location. <br />Streamline processes, create team rituals, and <br />watch productivity soar.</p> <br />
            <Button /> <br />
            <img src={Imageone} alt="" />
            <img src={Imagetwo} alt="" />
            <img src={Imagethree} alt="" />
            <img src={Imagefour} alt="" />
            </div>
            

            <div className="Hero">
                <img src={Icon} alt="" />
            </div>
        </div>
        
        
    );
}

export default Home;