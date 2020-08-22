import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal, { IModalProps } from "./index";

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

export type WorkingContent = {
  title: string;
  icon: string;
  type: string;
  advisors: {
    name: string;
    inCharge: {
      name: string;
      icon: string;
    };
  }[];
};
export const isWorkingContent = (v: unknown): v is WorkingContent =>
  v !== null &&
  typeof v === "object" &&
  (v as { type: unknown }).type === "working";

export interface IWorkingModalProps extends IModalProps {
  content: WorkingContent;
}
const WorkingModal: React.FC<IWorkingModalProps> = (props) => {
  const classes = useStyles();

  return (
    <Modal {...props}>
      <div>{props.content.title}</div>
    </Modal>
  );
};
export default WorkingModal;
