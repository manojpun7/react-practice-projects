import "./App.css";
import QrCodeGenerator from "./qr-code-generator/QrCodeGenerator";
import StarRating from "./star-rating/StarRating";
import ImageSlider from "./image-slider/ImageSlider";
import LoadMoreButton from "./load-more-button/LoadMoreButton";
import TreeView from "./tree-view/TreeView";
import sideMenus from "./tree-view/data";
import LightDarkMode from "./light-dark-mode/LightDarkMode";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";
import SearchAutocomplete from "./search-autocomplete/SearchAutocomplete";
function App() {
  return (
    <div className="App">
      {/* ------------------STAR  RATING---------------- */}
      <StarRating noOfStars={10}/>

      {/* 
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* <LoadMoreButton/> */}

      {/* tree view menu ui */}
      {/* <TreeView menus={sideMenus}/> */}

      {/* Qr code Generator */}
      {/* <QrCodeGenerator/> */}

      {/* light dark change theme */}
      {/* <LightDarkMode/> */}

      {/* scroll indicator  */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* 
      search auto complete  */}
      {/* <SearchAutocomplete /> */}
    </div>
  );
}

export default App;
