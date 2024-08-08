import { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

import classes from "./Filters.module.css";

const Filters = () => {
  const [expandIdeal, setExpandIdeal] = useState(false);
  const [expandOccasion, setExpandOccasion] = useState(false);
  const [expandWork, setExpandWork] = useState(false);
  const [expandIFabric, setExpandFabric] = useState(false);
  const [expandSegment, setExpandSegment] = useState(false);
  const [expandSuitable, setExpandSuitable] = useState(false);
  const [expandRaw, setExpandRaw] = useState(false);
  const [expandPattern, setExpandPattern] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.customizble}>
        <input type="checkbox" className={classes.checkbox}></input>
        <span className={classes.customizabletext}>CUSTOMIZABLE</span>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>IDEAL FOR</div>
          {!expandIdeal && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandIdeal(true)}
            ></FaAngleDown>
          )}
          {expandIdeal && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandIdeal(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandIdeal && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>OCCASION</div>
          {!expandOccasion && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandOccasion(true)}
            ></FaAngleDown>
          )}
          {expandOccasion && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandOccasion(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandOccasion && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>WORK</div>
          {!expandWork && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandWork(true)}
            ></FaAngleDown>
          )}
          {expandWork && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandWork(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandWork && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>FABRIC</div>
          {!expandIFabric && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandFabric(true)}
            ></FaAngleDown>
          )}
          {expandIFabric && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandFabric(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandIFabric && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>SEGMENT</div>
          {!expandSegment && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandSegment(true)}
            ></FaAngleDown>
          )}
          {expandSegment && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandSegment(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandSegment && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>SUITABLE FOR</div>
          {!expandSuitable && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandSuitable(true)}
            ></FaAngleDown>
          )}
          {expandSuitable && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandSuitable(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandSuitable && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>RAW MATERIALS</div>
          {!expandRaw && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandRaw(true)}
            ></FaAngleDown>
          )}
          {expandRaw && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandRaw(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandRaw && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
      <div className={classes.filter}>
        <div className={classes.name}>
          <div className={classes.nametext}>PATTERN</div>
          {!expandPattern && (
            <FaAngleDown
              size={16}
              className={classes.arrow}
              onClick={() => setExpandPattern(true)}
            ></FaAngleDown>
          )}
          {expandPattern && (
            <FaChevronUp
              size={15}
              className={classes.arrow}
              onClick={() => setExpandPattern(false)}
            ></FaChevronUp>
          )}
        </div>
        <div className={classes.all}>All</div>
      </div>
      {expandPattern && (
        <div className={classes.filtervalues}>
          <div className={classes.filtervaluetext}>Unselect all</div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Men</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Women</span>
          </div>
          <div className={classes.filtervaluename}>
            <input type="checkbox" className={classes.filtervalueinput}></input>
            <span className={classes.filtervaluespan}>Baby & Kids</span>
          </div>
        </div>
      )}
      <div className={classes.separator}></div>
    </div>
  );
};

export default Filters;
