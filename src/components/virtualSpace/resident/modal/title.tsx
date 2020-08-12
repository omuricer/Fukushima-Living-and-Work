import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Image from "@/components/form/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    icon: {
      width: "60px",
    },
  })
);

export interface ITitleProps {
  icon: string;
  title: string;
  onClose: () => void;
}
/**
 * モーダルタイトル部分
 * @param props
 */
const Title: React.FC<ITitleProps> = (props) => {
  const classes = useStyles();
  return (
    <DialogTitle>
      <div className={classes.root}>
        <Image src={props.icon} className={classes.icon} />
        {props.title}
        <IconButton onClick={props.onClose}>
          <Icon>close</Icon>
        </IconButton>
      </div>
    </DialogTitle>
  );
};
export default Title;
