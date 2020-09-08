import React, { useState, useEffect, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import RoundButton from "@/components/form/roundButton";
import { BackHistoryContext } from "@/context/backHistory";
import BackButton from "@/components/form/backButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      margin: "15px",
    },
    advidors: {
      display: "flex",
      flexFlow: "wrap",
    },
  })
);

export type WorkingContent = {
  title: string;
  icon: string;
  type: string;
  advisors: {
    name: string;
    id: string;
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
  const backHistoryContext = useContext(BackHistoryContext);

  const advisors = props.content.advisors.map((a, index) => (
    <Advisor key={index} color={props.headerColor} {...a} />
  ));

  return (
    <Modal
      {...props}
      headerColor={"#745F74"}
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
      <hr />
      <Typography className={classes.h3}>個別相談のご予約を受付中！</Typography>

      <ul className={classes.advidors}>{advisors}</ul>
      <BackButton onClick={props.closeModal} />
    </Modal>
  );
};
export default WorkingModal;

const useStylesAdvisor = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%",
    },
    li: {
      borderStyle: "solid",
      borderRadius: "4px",
      margin: "5px",
    },
    h3: {
      margin: "15px",
    },
    line: {
      display: "flex",
      alignItems: "center",
    },
    inCharge: {
      textAlign: "left",
      margin: "10px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      flex: 1,
    },
    inChargeLabel: {
      color: "#797979",
      margin: "0",
      marginBottom: "3px",
    },
    image: {
      width: "60px",
      borderRadius: "50%",
      margin: "5px",
    },
    name: {
      marginTop: "5px",
    },
  })
);

export interface IAdvisorProps {
  name: string;
  id: string;
  inCharge: {
    name: string;
    icon: string;
  };
  color: string;
}
const Advisor: React.FC<IAdvisorProps> = (props) => {
  const classes = useStylesAdvisor();
  return (
    <div className={classes.wrap}>
      <li className={classes.li} style={{ borderColor: props.color }}>
        <Typography variant="h3" className={classes.h3}>
          {props.name}
        </Typography>
        <div className={classes.line}>
          <Image src={props.inCharge.icon} className={classes.image} />
          <div className={classes.inCharge}>
            <Typography className={classes.inChargeLabel} variant="body2">
              担当
            </Typography>
            <Typography className={classes.name}>
              {props.inCharge.name}
            </Typography>
          </div>
          <a
            href={`https://xxx.xxx/aaa/${props.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RoundButton variant="contained" color="primary">
              個別相談
            </RoundButton>
          </a>
        </div>
      </li>
    </div>
  );
};
