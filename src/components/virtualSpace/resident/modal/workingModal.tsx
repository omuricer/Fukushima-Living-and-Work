import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import { BackHistoryContext } from "@/context/backHistory";
import BackButton from "@/components/form/backButton";
import Advisor from "./advisor";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      margin: "10px",
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
    personName: string;
    personImage: string;
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
    <Advisor key={index} color={"#745F74"} colorDark={"#514251"} {...a} />
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
      <Typography className={classes.h3}>個別相談のご予約を受付中！</Typography>

      <ul className={classes.advidors}>{advisors}</ul>
      <BackButton onClick={props.closeModal} />
    </Modal>
  );
};
export default WorkingModal;
