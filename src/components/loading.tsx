import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      width: "100%",
      height: "100vh",
      backgroundColor: "#FFFFFF",
      position: "fixed",
      zIndex: 9990,
    },
    animation: {
      display: "inline-block",
      position: "fixed",
      top: "50%",
      left: "50%",
      WebkitTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
    },
  })
);

interface ILoadingProps {
  display: boolean;
}
const Loading: React.FC<ILoadingProps> = (props) => {
  const classes = useStyles();

  // const noScroll = (event: Event) => {
  //   event.preventDefault();
  // };
  // const opts: AddEventListenerOptions & EventListenerOptions = {
  //   passive: true,
  // };

  if (!props.display) {
    //   // スクロール禁止を解除(SP)
    //   document.removeEventListener("touchmove", noScroll, opts);
    //   // スクロール禁止を解除(PC)
    //   document.removeEventListener("mousewheel", noScroll, opts);
    return <React.Fragment></React.Fragment>;
  }

  // // スクロール禁止(SP)
  // document.addEventListener("touchmove", noScroll, opts);
  // // スクロール禁止(PC)
  // document.addEventListener("mousewheel", noScroll, opts);

  return (
    <div className={classes.loading}>
      <img className={classes.animation} src="image/loading/star.gif" />
    </div>
  );
};
export default Loading;
