import RecipeReviewCard from "./Site/2-Contenidos/CardMaterialUI";
import AccountMenu from "./Site/1-Encabezados/MenuMaterialUI";
import "./Assets/css/index.css"
const App =() => {
  return (
    <>
    <div className="menu">
      <AccountMenu/>
    </div>
    <div className="gallery">
      <div className="cardContent"><RecipeReviewCard/></div>
      <div className="cardContent"><RecipeReviewCard/></div>
      <div className="cardContent"><RecipeReviewCard/></div>      
    </div>
    </>
  );
};
export default App;