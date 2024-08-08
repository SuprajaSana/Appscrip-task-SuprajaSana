import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.heading}>
          <div className={classes.expand}>X</div>
          <div className={classes.logo}>x</div>
          <h2 className={classes.headertext}>LOGO</h2>
          <div className={classes.icons}>
            <CiSearch size={24}></CiSearch>
            <IoIosHeartEmpty size={24}></IoIosHeartEmpty>
            <IoBagRemoveOutline size={24}></IoBagRemoveOutline>
            <HiOutlineUser size={24} className={classes.user}></HiOutlineUser>
            <span className={classes.lang}>
              <span className={classes.language}>ENG</span>
              <FaAngleDown
                className={classes.downarrow}
                size={16}
              ></FaAngleDown>
            </span>
          </div>
        </div>
        <div className={classes.tabs}>
          <span>SHOP</span>
          <span>SKILLS</span>
          <span>STORIES</span>
          <span>ABOUT</span>
          <span>CONTACT US</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
