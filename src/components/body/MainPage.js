import Filters from "./Filters";
import Products from "./Products";

import classes from "./MainPage.module.css";

const MainPage = (props) => {
  return (
    <div className={classes.main}>
      {props.filter && <Filters></Filters>}
      <Products val={props.filter}></Products>
    </div>
  );
};

export default MainPage;
