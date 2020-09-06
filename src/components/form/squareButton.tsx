import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiButton-root
    root: {
      borderBottom: `solid 3px ${theme.palette.primary.dark}`,
    },
    // Override MuiButton-text
    text: {
      padding: "6px 20px",
    },
  })
);

interface ISquareButtonProps extends ButtonProps {}
const SquareButton: React.FC<ISquareButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <Button
      classes={{ root: classes.root, text: classes.text }}
      {...props}
      style={props.disabled ? { borderBottom: `solid 3px #c8c8c8` } : {}} // HACK: ダサすぎる
    >
      {props.children}
    </Button>
  );
};
export default SquareButton;
