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
      maxHeight: "85vh",
      overflowY: "visible",
    },
    // Override MuiDialogContent-root
    root: {
      padding: "5px 8px 20px 8px",
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
  modalKey: string;
  open: boolean;
  closeModal: () => void;
  onEnter: () => void;
  handleAnothers: HandleAnothers;
  headerColor: string;
  classes: Partial<Record<DialogClassKey, string>>;
  headerIcon: string;
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
        onEnter={props.onEnter}
        classes={{ ...{ paper: classes.paper }, ...props.classes }}
      >
        <Header
          icon={props.headerIcon}
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
