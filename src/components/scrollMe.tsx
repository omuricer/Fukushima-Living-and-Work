import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/form/image";
import Scroll from "@/image/scroll.png";
import { useSpring, animated } from "react-spring";
import Sleep from "@/app/libs/sleep";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "50px",
      margin: "0 auto",
    },
  })
);

interface IScrollMeProps {
  sclolled: boolean;
}
const ScrollMe: React.FC<IScrollMeProps> = (props) => {
  const [drawCount, setDrawCount] = useState<number>(1);
  const classes = useStyles();

  const springProps = useSpring({
    from: {
      transform: "translateY(-20px)",
      visibility: "hidden",
    },
    to: {
      transform: "translateY(0)",
      visibility: "visible",
    },
    delay: 800,
  });

  useEffect(() => {
    const asyncs = async () => {
      await Sleep.wait(1500);
      setDrawCount(drawCount + 1);
    };
    asyncs();
  }, []);

  return (
    <animated.div style={springProps}>
      <Image src={Scroll} className={classes.image} />
    </animated.div>
  );
};
export default ScrollMe;
