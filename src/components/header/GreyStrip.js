import classes from "./GreyStrip.module.css";

const GreyStrip = () => {
  return (
    <div className={classes.main}>
      <div className={classes.div}>
        <span className={classes.icon}>x</span>
        <span className={classes.text}>Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default GreyStrip;
