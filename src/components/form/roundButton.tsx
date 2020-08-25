import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiButton-root
    root: {
      borderRadius: "30px",
      borderBottom: `solid 3px ${theme.palette.primary.dark}`,
    },
    // Override MuiButton-text
    text: {
      padding: "6px 20px",
    },
  })
);

interface IRoundButtonProps extends ButtonProps {}
const RoundButton: React.FC<IRoundButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <Button classes={{ root: classes.root, text: classes.text }} {...props}>
      {props.children}
    </Button>
  );
};
export default RoundButton;
