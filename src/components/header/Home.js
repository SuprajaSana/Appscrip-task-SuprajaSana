import { PiLineVertical } from "react-icons/pi";

import classes from "./Home.module.css";

const HomeMain = () => {
  return (
    <div className={classes.main}>
      <div className={classes.home}>HOME</div>
      <PiLineVertical className={classes.icon}></PiLineVertical>
      <div className={classes.shop}>SHOP</div>
    </div>
  );
};

export default HomeMain;
