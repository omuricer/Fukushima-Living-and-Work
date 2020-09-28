import React, { useState, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import { BackHistoryContext } from "@/context/backHistory";
import BackButton from "@/components/form/backButton";
import Advisor from "./advisor";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      margin: "15px",
    },
    visual: {
      width: "100%",
      maxWidth: "420px",
      margin: "0 auto",
    },
    commentRight: {
      position: "absolute",
      top: "50%",
      left: "60%",
      transform: "translateY(-50%) translateX(-50%)",
      WebkitTransform: "translateY(-50%) translateX(-50%)",
    },
    commentLeft: {
      position: "absolute",
      top: "50%",
      left: "60%",
      transform: "translateY(-50%) translateX(-50%)",
      WebkitTransform: "translateY(-50%) translateX(-50%)",
    },
    advidors: {
      display: "flex",
      flexFlow: "wrap",
      marginBottom: "20px",
    },
    commingSoon: {
      flex: "1",
      color: "lightgray",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    commingSoonText: {
      margin: "10px",
    },
  })
);

export type LivingContent = {
  type: string;
  icon: string;
  headerColor: string;
  headerColorDark: string;
  title: string;
  visual: string;
  advisors: {
    name: string;
    id: string;
    personName: string;
    personImage: string;
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
  const backHistoryContext = useContext(BackHistoryContext);

  const advisors = props.content.advisors.map((a, index) => (
    <Advisor
      key={index}
      color={props.content.headerColor}
      colorDark={props.content.headerColorDark}
      {...a}
    />
  ));

  return (
    <Modal
      {...props}
      headerColor={props.content.headerColor}
      onEnter={() =>
        backHistoryContext.push(() => {
          props.handleAnothers.openModal(props.modalKey);
        })
      }
      headerIcon={props.content.icon}
    >
      <Typography variant="h3" className={classes.h3}>
        {props.content.title}
      </Typography>
      <Image src={props.content.visual} className={classes.visual} />
      <Typography className={classes.h3}>個別相談のご予約を受付中！</Typography>
      <ul className={classes.advidors}>{advisors}</ul>
      <BackButton onClick={props.closeModal} />
    </Modal>
  );
};
export default LivingModal;
