import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import Sleep from "@/app/libs/sleep";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiButton-root
    root: {
      borderBottom: (props: ISquareButtonProps) => {
        if (props.color == "primary")
          return `solid 3px ${theme.palette.primary.dark}`;
        if (props.color == "secondary")
          return `solid 3px ${theme.palette.secondary.dark}`;
        return `solid 3px`;
      },
      '&:hover' : {
        boxShadow: 'none'
      }
    },
    // Override MuiButton-text
    text: {
      padding: "6px 20px",
    },
  })
);

interface ISquareButtonProps extends ButtonProps {}
const SquareButton: React.FC<ISquareButtonProps> = (props) => {
  const classes = useStyles(props);

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!props.onClick) return;
    await Sleep.waitRipple();
    props.onClick(e);
  };
  return (
    <Button
      classes={{ root: classes.root, text: classes.text }}
      {...props}
      style={props.disabled ? { borderBottom: `solid 3px #c8c8c8` } : {}} // HACK: ダサすぎる
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};
export default SquareButton;
