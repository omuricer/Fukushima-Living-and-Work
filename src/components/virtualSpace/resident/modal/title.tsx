import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Image from "@/components/form/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialogTitle-root
    // root: {
    //   padding: "10px 10px",
    // },
    header: {
      height: "90px",
      position: "relative",
    },
    // rapper: {
    //   display: "flex",
    //   justifyContent: "space-between",
    //   alignItems: "center",
    // },
    icon: {
      position: "absolute",
      height: "150px",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      marginTop: "auto",
      marginBottom: "0",
      marginLeft: "auto",
      marginRight: "auto",
    },
    close: {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "10px",
    },
    title: {
      textAlign: "center",
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
    <React.Fragment>
      <div className={classes.header}>
        <Image src={props.icon} className={classes.icon} />
        <IconButton onClick={props.closeModal} className={classes.close}>
          <Icon>close</Icon>
        </IconButton>
      </div>
      <DialogTitle className={classes.title}>{props.title}</DialogTitle>
    </React.Fragment>
  );
};
export default Title;
