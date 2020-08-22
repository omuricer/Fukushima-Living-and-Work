import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    comment: {},
  })
);

export type LivingContent = {
  type: string;
  icon: string;
  headerColor: string;
  title: string;
  visual: string;
  comment: string;
  commentDirection: "left" | "right";
  advisors: {
    name: string;
    image: string;
    id: string;
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

  const advisors = props.content.advisors.map((a, index) => (
    <Advisor key={index} {...a} />
  ));

  return (
    <Modal {...props} headerColor={props.content.headerColor}>
      <Typography variant="h3" className={classes.h3}>
        {props.content.title}
      </Typography>
      <div>
        <Image src={props.content.visual} />
        <p className={classes.comment}>{props.content.comment}</p>
      </div>
      <Typography className={classes.h3}>個別相談のご予約を受付中！</Typography>
      {advisors}
    </Modal>
  );
};
export default LivingModal;

const useStylesAdvisor = makeStyles((theme: Theme) =>
  createStyles({
    image: {},
  })
);

export interface IAdvisorProps {
  image: string;
  name: string;
  id: string;
}
const Advisor: React.FC<IAdvisorProps> = (props) => {
  const classes = useStylesAdvisor();
  return (
    <a
      href={`https://xxx.xxx/aaa/${props.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={props.image} className={classes.image} />
      <p>{props.name}</p>
    </a>
  );
};
