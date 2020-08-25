import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog, { DialogClassKey } from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Header from "./header";
import { HandleAnothers } from "@/app/resident/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-paper
    paper: {
      width: "91vw",
      margin: "0",
      maxHeight: "85v",
      overflowY: "visible",
    },
    // Override MuiDialogContent-root
    root: {
      padding: "5px 5px",
      textAlign: "center",
    },
    flow: {
      textAlign: "center",
      marginTop: "20px",
    },
    divideLine: {
      margin: "15px 20px",
    },
    answer: {
      display: "flex",
    },
    answerButton: {
      width: "100%",
      margin: "5px",
    },
  })
);

export interface IModalProps {
  open: boolean;
  closeModal: () => void;
  handleAnothers: HandleAnothers;
  headerColor: string;
  classes: Partial<Record<DialogClassKey, string>>;
}
/**
 * モーダルコンポーネント
 * @param props
 */
const Modal: React.FC<IModalProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.closeModal}
        classes={{ ...{ paper: classes.paper }, ...props.classes }}
      >
        <Header
          icon={"icon/icon"}
          color={props.headerColor}
          closeModal={props.closeModal}
        />
        <DialogContent classes={{ root: classes.root }}>
          {props.children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default Modal;