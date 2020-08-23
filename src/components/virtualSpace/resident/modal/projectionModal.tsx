import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-paper TODO: 
    paper: {
      width: "90vw",
      margin: "0",
      maxHeight: "80vh",
      top: "-40px",
    },
    h3: {
      margin: "15px",
    },
    image: {
      margin: "5px",
    },
    programs: {
      display: "flex",
      flexFlow: "wrap",
    },
  })
);

export type ProjectionContent = {
  title: string;
  icon: string;
  type: string;
  youtubeDataAPI: {
    key: string;
    q: string;
    channelId: string;
  };
};
export const isProjectionContent = (v: unknown): v is ProjectionContent =>
  v !== null &&
  typeof v === "object" &&
  (v as { type: unknown }).type === "projection";

export interface IProjectionModalProps extends IModalProps {
  content: ProjectionContent;
}
const ProjectionModal: React.FC<IProjectionModalProps> = (props) => {
  const classes = useStyles();

  const changeModal = (key: string) => {
    props.closeModal();
    props.handleAnothers.openModal(key);
  };

  return (
    <Modal {...props} headerColor={"#F6E9A3"}>
      <Typography variant="h3" className={classes.h3}>
        {props.content.title}
      </Typography>
      <Image src={"image"} className={classes.image} />
      <Typography variant="h3" className={classes.h3}>
        プログラム
      </Typography>

      <ul className={classes.programs}>
        <Program title="program1" start="10:00" end="12:00" />
        <Program title="program2" start="10:00" end="12:00" />
        <Program title="program3" start="10:00" end="12:00" />
        <Program title="program4" start="10:00" end="12:00" />
      </ul>
    </Modal>
  );
};
export default ProjectionModal;

const useStylesProgram = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%",
    },
    li: {
      width: "100%",
      display: "flex",
      borderTop: "1px solid #000000",
      padding: "5px",
      "&:nth-child(odd)": {
        backgroundColor: "lightgray",
      },
      "&:last-child": {
        borderBottom: "1px solid #000000",
      },
    },
    h3: {
      margin: "15px",
    },
    timeTable: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    time: {
      color: "#797979",
    },
    title: {
      flex: 1,
      textAlign: "left",
    },
  })
);

export interface IProgramProps {
  title: string;
  start: string;
  end: string;
}
const Program: React.FC<IProgramProps> = (props) => {
  const classes = useStylesProgram();
  return (
    <li className={classes.li}>
      <div className={classes.timeTable}>
        <Typography variant="body2" className={classes.time}>
          {props.start}
        </Typography>
        <Typography variant="body2" className={classes.time}>
          ～
        </Typography>
        <Typography variant="body2" className={classes.time}>
          {props.end}
        </Typography>
      </div>
      <Typography className={classes.title}>{props.title}</Typography>
    </li>
  );
};
