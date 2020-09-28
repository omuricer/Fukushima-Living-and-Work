import React, { useContext } from "react";
import { BackHistoryContext } from "@/context/backHistory";
import { IsMobileContext } from "@/context/isMobile";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog, { DialogClassKey } from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { BackdropProps } from "@material-ui/core/Backdrop";
import Header from "./header";
import { HandleAnothers } from "@/app/resident/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-root
    root: (isMobileContext: boolean) =>
      isMobileContext
        ? {
            position: "fixed",
            zIndex: 1300,
            right: "0px",
            bottom: "0px",
            top: "0px",
            left: "0px",
          }
        : {
            position: "fixed",
            zIndex: 1300,
            right: "0px",
            bottom: "0px",
            top: "0px",
            left: "auto!important",
            width: "50vw",
            pointerEvents: "none",
          },
    // Override MuiDialog-paper
    paper: {
      width: "90%",
      margin: "0",
      maxHeight: "85vh",
      minHeight: "85vh",
      overflowY: "visible",
      pointerEvents: "auto",
      boxShadow: "0 0 10px grey",
      maxWidth: (isMobileContext: boolean) =>
        isMobileContext ? "initial" : "470px",
    },
    // Override MuiDialog-scrollPaper
    scrollPaper: {
      justifyContent: "initial",
    },
    // Override MuiDialogContent-root
    contentRoot: {
      padding: (isMobileContext: boolean) =>
        isMobileContext ? "5px 8px 20px 8px" : "5px 40px 20px 40px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "stretch",
      position: "relative",
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
  const backHistoryContext = useContext(BackHistoryContext);
  const isMobileContext = useContext(IsMobileContext);
  const classes = useStyles(isMobileContext);

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={() => {
          props.closeModal();
          backHistoryContext.flush();
        }}
        onEnter={props.onEnter}
        onEntered={() => {
          document.body.style.overflow = "";
          document.body.style.padding = "0px";
        }}
        classes={{
          ...{
            root: classes.root,
            paper: classes.paper,
            scrollPaper: classes.scrollPaper,
          },
          ...props.classes,
        }}
        BackdropComponent={isMobileContext ? undefined : DummyBackdrop}
        disableBackdropClick={!isMobileContext} // PC版の場合Backdropは無いが、Modalの周りでonCloseが発生してしまうため必要
      >
        <Header
          icon={props.headerIcon}
          color={props.headerColor}
          closeModal={props.closeModal}
        />
        <DialogContent classes={{ root: classes.contentRoot }}>
          {props.children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default Modal;

const DummyBackdrop: React.FC<BackdropProps> = (props) => {
  return <React.Fragment />;
};
