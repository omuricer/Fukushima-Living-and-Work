import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { IModalProps } from "../modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      minWidth: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        minWidth: "auto",
      },
    },
    actionsRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      justifyContent: "center",
    },
  })
);

export type LivingContent = {
  title: string;
  icon: string;
  advisors: {
    name: string;
    image: string;
    comment: string;
  }[];
};
export const isLivingContent = (v: unknown): v is LivingContent =>
  v !== null &&
  typeof v === "object" &&
  typeof (v as { title: unknown }).title === "string" &&
  (v as { advisors: unknown }).advisors instanceof Array;

export interface ILivingModalProps extends IModalProps {
  content: LivingContent;
}
const LivingModal: React.FC<ILivingModalProps> = (props) => {
  const classes = useStyles();

  const advisors = props.content.advisors.map((a, index) => (
    <li key={index}>{a.name}</li>
  ));

  return (
    <Dialog open={props.open} onClose={props.closeModal}>
      <DialogContent className={classes.contentRoot}>
        <div>{props.content.title}</div>
        {advisors}
      </DialogContent>
      <DialogActions className={classes.actionsRoot}>
        <Button variant="outlined" onClick={props.closeModal} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default LivingModal;
