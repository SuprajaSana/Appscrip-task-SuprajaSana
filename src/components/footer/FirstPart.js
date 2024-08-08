import { FaDiamond } from "react-icons/fa6";
import { usFlag } from "../../assets/usaicon.png";

import classes from "./FirstPart.module.css";

const FirstPart = () => {
  return (
    <div className={classes.main}>
      <div className={classes.col}>
        <div className={classes.text}>BE THE FIRST TO KNOW</div>
        <div className={classes.subtext}>
          Sign up for updates from mettā muse.
        </div>
        <div className={classes.subscribe}>
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className={classes.input}
          ></input>
          <button className={classes.button}>SUBSCRIBE</button>
        </div>
        <div className={classes.line1}></div>
      </div>
      <div className={classes.col}>
        <div className={classes.contactus}>CONTACT US</div>
        <div className={classes.contactdetails}>
          <div>+44 221 133 5360</div>
          <div>customercare@mettamuse.com</div>
        </div>
        <div className={classes.currency}>CURRENCY</div>
        <div className={classes.language}>
          <img src={usFlag} alt="" size={24}></img>
          <FaDiamond size={12}></FaDiamond>
          <div className={classes.dollar}>USD</div>
        </div>
        <div className={classes.transactions}>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
