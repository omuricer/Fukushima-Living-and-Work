import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import backgroundImage from "@/image/background.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${backgroundImage})`,
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

  if (!props.display) {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <div className={classes.loading}>
      <img className={classes.animation} src="image/loading/star.gif" />
    </div>
  );
};
export default Loading;
