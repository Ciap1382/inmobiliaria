import MenuBootstrap from "./Site/1-Encabezados/MenuBootstrap";
import CardBootstrap from "./Site/2-Contenidos/CardBootstrap";
import Slider from "./Site/2-Contenidos/CarouselBootstrap";
import slides from "./sources/json/movies.json";
import "./Assets/scss/index.scss";
import "./Assets/scss/slider.scss";
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
      <div className="cardContent"><CardBootstrap/></div>
      <div className="cardContent"><CardBootstrap/></div>
      <div className="cardContent"><CardBootstrap/></div>
    </div>
    </>
  );
};
export default App;