import CardBootstrap from "./Site/2-Contenidos/CardBootstrap";
import CarouselMDB from "./Site/2-Contenidos/CarouselMDB";
import MenuBootstrap from "./Site/1-Encabezados/MenuBootstrap";
import "./Assets/scss/index.scss"
const App =() => {
  return (
    <>
    <div className="menu">
      <MenuBootstrap/>
    </div>
    <div className="carousel">
      <CarouselMDB/>
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