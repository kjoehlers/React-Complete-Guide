// eslint-disable-next-line
import REACT from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return (
    <div>
      {/* <ExpensesFilter /> */}
      <div className={classes}>{props.children}</div>
    </div>
  );
};

export default Card;
