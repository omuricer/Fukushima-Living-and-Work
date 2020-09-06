import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    intersectingPoint: {
      top: "50vh",
      right: "0",
      position: "absolute",
      height: "100%",
    },
    sideArea: {
      top: "10vh",
      right: "0",
      width: "40px",
      display: "flex",
      zIndex: 1,
      position: "fixed",
      flexFlow: "column",
    },
  })
);

interface ISideButtonAreaProps {
  onVisible: () => void;
  onHide: () => void;
}
const SideButtonArea: React.FC<ISideButtonAreaProps> = (props) => {
  const classes = useStyles();
  const intersectingPoint = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          props.onVisible();
        } else {
          props.onHide();
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver);
    if (intersectingPoint.current) {
      observer.observe(intersectingPoint.current);
    }
  }, []);

  return (
    <React.Fragment>
      <div ref={intersectingPoint} className={classes.intersectingPoint} />
      <div
        className={classes.sideArea}
        // style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};
export default SideButtonArea;
