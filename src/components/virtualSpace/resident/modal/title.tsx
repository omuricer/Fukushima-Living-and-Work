import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Image from "@/components/form/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialogTitle-root
    root: {
      padding: "10px 10px",
    },
    rapper: {
      display: "flex",
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
  closeModal: () => void;
}
/**
 * モーダルタイトル部分
 * @param props
 */
const Title: React.FC<ITitleProps> = (props) => {
  const classes = useStyles();
  return (
    <DialogTitle classes={{ root: classes.root }}>
      <div className={classes.rapper}>
        <Image src={props.icon} className={classes.icon} />
        {props.title}
        <IconButton onClick={props.closeModal}>
          <Icon>close</Icon>
        </IconButton>
      </div>
    </DialogTitle>
  );
};
export default Title;
