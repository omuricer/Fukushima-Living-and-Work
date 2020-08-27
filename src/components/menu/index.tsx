import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
import Grid from "@material-ui/core/Grid";
import Button from "./button";
import List from "./list";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    intersectingPoint: {
      top: "50vh",
      right: "0",
      position: "absolute",
      height: "100%",
    },
  })
);

interface IMenuProps {
  sclollToFloors: (() => void)[];
}
const Menu: React.FC<IMenuProps> = (props) => {
  const [isVisibleButton, setIsVisibleButton] = useState<boolean>(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const classes = useStyles();
  const intersectingPoint = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setIsVisibleButton(true);
        } else {
          setIsVisibleButton(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver);
    if (intersectingPoint.current) {
      observer.observe(intersectingPoint.current);
    }
  }, []);

  const openMenu = () => {
    setIsVisibleButton(false);
    setIsVisibleMenu(true);
  };
  const closeMenu = () => {
    setIsVisibleButton(true);
    setIsVisibleMenu(false);
  };

  return (
    <React.Fragment>
      <div ref={intersectingPoint} className={classes.intersectingPoint} />
      <Button
        isVisible={isVisibleButton}
        onClick={() => {
          if (isVisibleButton) openMenu();
        }}
      />
      <List
        isVisible={isVisibleMenu}
        closeMenu={closeMenu}
        sclollToFloors={props.sclollToFloors}
      />
    </React.Fragment>
  );
};
export default Menu;
