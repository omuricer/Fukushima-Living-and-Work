import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal, { IModalProps } from "./index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // actionsRoot: {
    //   background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
    //   paddingLeft: "2rem",
    //   paddingRight: "2rem",
    //   paddingBottom: "1rem",
    //   justifyContent: "center",
    // },
  })
);

export type LivingContent = {
  type: string;
  icon: string;
  title: string;
  visual: string;
  comment: string;
  commentDirection: "left" | "right";
  advisors: {
    name: string;
    image: string;
  }[];
};
export const isLivingContent = (v: unknown): v is LivingContent =>
  v !== null &&
  typeof v === "object" &&
  typeof (v as { title: unknown }).title === "string" &&
  (v as { type: unknown }).type === "living";

export interface ILivingModalProps extends IModalProps {
  content: LivingContent;
}
const LivingModal: React.FC<ILivingModalProps> = (props) => {
  const classes = useStyles();

  return (
    <Modal {...props}>
      <div>{props.content.title}</div>
    </Modal>
  );
};
export default LivingModal;
