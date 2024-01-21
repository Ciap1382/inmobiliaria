import MenuBootstrap from "./Site/1-Encabezados/MenuBootstrap";
import House from "./Site/2-Contenidos/CardBootstrap";
import Slider from "./Site/2-Contenidos/CarouselBootstrap";
import slides from "./sources/json/movies.json";
//import houses from "./sources/json/houses.json";
import "./Assets/scss/index.scss";
import "./Assets/scss/slider.scss";
import "./Assets/scss/chakra.scss";
const App =() => {
  return (
    <>
    <div className="menu">
      <MenuBootstrap/>
    </div>
    <div className="carousel">
      <Slider slides={slides}/>
    </div>
    <div className="gallery">
      <House/>
    </div>
    </>
  );
};
export default App;