import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.main}>
      <FirstPart></FirstPart>
      <div className={classes.separator}></div>
      <SecondPart></SecondPart>
      <div className={classes.copywrite}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
