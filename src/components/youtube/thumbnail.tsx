import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "45%",
      margin: "10px",
    },
    image: {
      width: "100%",
    },
    titile: {
      width: "45%",
      marginTop: "10px",
    },
  })
);

export interface IThumbnailProps {
  url: string;
  onClick: () => void;
  title?: string;
}
const Thumbnail: React.FC<IThumbnailProps> = (props) => {
  const classes = useStyles();

  return (
    <div onClick={props.onClick} className={classes.root}>
      <img src={props.url} className={classes.image} />
      {props.title && (
        <Typography className={classes.title}>{props.title}</Typography>
      )}
    </div>
  );
};
export default Thumbnail;
