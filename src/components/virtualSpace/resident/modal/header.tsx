import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Image from "@/components/form/image";
import Sleep from "@/app/libs/sleep";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialogTitle-root
    root: {
      padding: "0",
      height: "50px",
      position: "relative",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    icon: {
      position: "absolute",
      height: "100px",
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
  })
);

export interface ITitleProps {
  icon: string;
  color?: string;
  closeModal: () => void;
}
/**
 * モーダルヘッダー部分
 * @param props
 */
const Header: React.FC<ITitleProps> = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DialogTitle
        classes={{ root: classes.root }}
        disableTypography={true}
        style={{ backgroundColor: props.color ?? "#485859" }}
      >
        <Image src={props.icon} className={classes.icon} />
        <IconButton
          onClick={async () => {
            await Sleep.waitRipple();
            props.closeModal();
          }}
          className={classes.close}
          color="secondary"
        >
          <Icon>close</Icon>
        </IconButton>
      </DialogTitle>
    </React.Fragment>
  );
};
export default Header;
