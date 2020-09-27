import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      marginBottom: "5px",
      whiteSpace: "nowrap",
      fontweight: 400,
    },
    text: {
      whiteSpace: "nowrap",
      fontweight: 400,
    },
  })
);

interface ITooltipContentProps {
  title: string;
  text: string;
}
const TooltipContent: React.FC<ITooltipContentProps> = React.memo((props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" color="textSecondary" className={classes.title}>
        {props.title}
      </Typography>
      <Typography color="textSecondary" className={classes.text}>
        {props.text}
      </Typography>
    </div>
  );
});
export default TooltipContent;
