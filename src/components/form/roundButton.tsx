import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import Sleep from "@/app/libs/sleep";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiButton-root
    root: {
      borderRadius: "30px",
      borderBottom: (props: IRoundButtonProps) => {
        if (props.color == "primary")
          return `solid 3px ${theme.palette.primary.dark}`;
        if (props.color == "secondary")
          return `solid 3px ${theme.palette.secondary.dark}`;
        return `solid 3px`;
      },
      "&:hover": {
        boxShadow: "none",
      },
    },
    contained: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
    containedSecondary: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
    // Override MuiButton-text
    text: {
      padding: "6px 20px",
    },
  })
);

interface IRoundButtonProps extends ButtonProps {}
const RoundButton: React.FC<IRoundButtonProps> = (props) => {
  const classes = useStyles(props);

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!props.onClick) return;
    await Sleep.waitRipple();
    props.onClick(e);
  };
  return (
    <Button
      classes={{
        root: classes.root,
        text: classes.text,
        contained: classes.contained,
        containedSecondary: classes.containedSecondary,
      }}
      {...props}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};
export default RoundButton;
