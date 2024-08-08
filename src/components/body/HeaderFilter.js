import { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { PiLineVertical } from "react-icons/pi";

import classes from "./HeaderFilter.module.css";

const HeaderFilter = (props) => {
  const [recommended, setRecommended] = useState(false);

  return (
    <>
      <div className={classes.filtermobile}>
        <div className={classes.filtermobilescreen}>FILTER</div>
        <PiLineVertical
          size={25}
          style={{ marginLeft: "4px" }}
        ></PiLineVertical>
        <div className={classes.recommendedmobile}>
          <div className={classes.recommendedmobiletext}>RECOMMENDED</div>
          <FaAngleDown
            size={16}
            className={classes.recommendedmobileicon}
            onClick={() => setRecommended(true)}
          ></FaAngleDown>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.text}>3425 ITEMS</div>
        {props.filter ? (
          <div className={classes.filter}>
            <IoChevronBackOutline
              size={20}
              className={classes.backicon}
            ></IoChevronBackOutline>
            <div className={classes.filtertext} onClick={props.onToggle}>
              HIDE FILTER
            </div>
          </div>
        ) : (
          <div className={classes.filter}>
            <IoIosArrowForward
              size={15}
              className={classes.backicon}
              style={{ marginTop: "13px" }}
            ></IoIosArrowForward>
            <div className={classes.filtertext} onClick={props.onToggle}>
              SHOW FILTER
            </div>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={classes.recommended}>
            <div className={classes.recommendedtext}>RECOMMENDED</div>
            <FaAngleDown
              size={20}
              className={classes.recommendedicon}
              onClick={() => setRecommended(true)}
            ></FaAngleDown>
          </div>
          {recommended && (
            <div className={classes.recommendedexpandfilter}>
              <div className={classes.recommendedexpandtitle}>
                <span className={classes.recommendedcorrecticon}>
                  <span className={classes.correcticon}>
                    <TiTick></TiTick>
                  </span>
                </span>
                <span className={classes.recommendedexpandhead}>
                  RECOMMENDED
                </span>
              </div>
              <div className={classes.filter1}>NEWEST FIRST</div>
              <div className={classes.filter2}>POPULAR</div>
              <div className={classes.filter3}>PRICE : HIGH TO LOW</div>
              <div className={classes.filter3}>PRICE : LOW TO HIGH</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderFilter;
