import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import gpay from "../../assets/gpay.png";

import classes from "./SecondPart.module.css";

const SecondPart = () => {
  return (
    <div className={classes.main}>
      <div className={classes.col}>
        <div className={classes.maintext}>mettā muse</div>
        <div className={classes.submain}>
          <div className={classes.text}>About Us</div>
          <div className={classes.text}>Stories</div>
          <div className={classes.text}>Artisans</div>
          <div className={classes.text}>Boutiques</div>
          <div className={classes.text}>Contact Us</div>
          <div className={classes.text}>EU Compliances Docs</div>
        </div>
      </div>
      <div className={classes.col}>
        <div className={classes.maintext}>QUICK LINKS</div>
        <div className={classes.submain}>
          <div className={classes.text}>Orders & Shipping</div>
          <div className={classes.text}>Join/Login as a Seller</div>
          <div className={classes.text}>Payment & Pricing</div>
          <div className={classes.text}>Return & Refunds</div>
          <div className={classes.text}>FAQs</div>
          <div className={classes.text}>Privacy Policy</div>
          <div className={classes.text}>Terms & Conditions</div>
        </div>
      </div>
      <div className={classes.col}>
        <div className={classes.maintext}>FOLLOW US</div>
        <div className={classes.icons}>
          <div className={classes.media}>
            <AiFillInstagram
              size={22}
              color="white"
              style={{ marginTop: "6px" }}
            ></AiFillInstagram>
          </div>
          <div className={classes.media}>
            <FaLinkedin
              size={20}
              color="white"
              style={{ marginTop: "6px" }}
            ></FaLinkedin>
          </div>
        </div>
        <div className={classes.subtext}>mettā muse ACCEPTS</div>
        {/* <div className={classes.cardsframe}>
          <div className={classes.cards}>
            <img src={gpay} alt=""></img>
          </div>
          <div className={classes.cards}></div>
          <div className={classes.cards}></div>
          <div className={classes.cards}></div>
          <div className={classes.cards}></div>
          <div className={classes.cards}></div>
        </div> */}
      </div>
    </div>
  );
};

export default SecondPart;
