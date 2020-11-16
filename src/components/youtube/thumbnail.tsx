import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "50%",
      padding: "10px",
      display: "flex",
      flexFlow: "column",
    },
    image: {
      width: "100%",
    },
    title: {
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
        <Typography variant="body2" className={classes.title}>
          {props.title}
        </Typography>
      )}
    </div>
  );
};
export default Thumbnail;
