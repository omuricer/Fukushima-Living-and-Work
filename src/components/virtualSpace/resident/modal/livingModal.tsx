import React, { useState, useEffect, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import { BackHistoryContext } from "@/context/backHistory";
import BackButton from "@/components/form/backButton";
import RoundButton from "@/components/form/roundButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      margin: "15px",
    },
    visual: {
      position: "relative",
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
  const [preLoadedImage, setPreLoadedImage] = useState<boolean>(false);
  const classes = useStyles();
  const backHistoryContext = useContext(BackHistoryContext);

  const advisors = props.content.advisors.map((a, index) => (
    <Advisor key={index} color={props.content.headerColor} colorDark={props.content.headerColorDark} {...a} />
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
      <div className={classes.visual}>
        <Image src={props.content.visual} />
      </div>
      <Typography className={classes.h3}>個別相談のご予約を受付中！</Typography>
      <ul className={classes.advidors}>{advisors}</ul>
      <BackButton onClick={props.closeModal} />
    </Modal>
  );
};
export default LivingModal;

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
      margin: "10px",
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
    button: {
      margin: "15px",
    },
    // Override MuiButton-root
    buttonRoot: {
      borderRadius: "30px",
      backgroundColor: (props: IAdvisorProps) => props.color,
      borderBottom: (props: IAdvisorProps) => `solid 3px ${props.colorDark}`,
    },
  })
);
export interface IAdvisorProps {
  name: string;
  id: string;
  personName: string;
  personImage: string;
  color: string;
  colorDark: string;
}
const Advisor: React.FC<IAdvisorProps> = (props) => {
  const classes = useStylesAdvisor(props);
  return (
    <div className={classes.wrap}>
      <li className={classes.li} style={{ borderColor: props.color }}>
        <Typography variant="h3" className={classes.h3}>
          {props.name}
        </Typography>
        <div className={classes.line}>
          <Image src={props.personImage} className={classes.image} />
          <div className={classes.inCharge}>
            <Typography className={classes.inChargeLabel} variant="body2">
              担当
            </Typography>
            <Typography className={classes.name}>
              {props.personName}
            </Typography>
          </div>
          <a
            // href={`https://needyou.jp/g/fukushima-kurashi-shigoto/ex/${props.id}`}
            href={`https://needyou.jp/g/fukushima-kurashi-shigoto/ex/1040`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.button}
          >
            <RoundButton variant="contained" color="secondary" classes={{ root: classes.buttonRoot }}>

              個別相談
            </RoundButton>
          </a>
        </div>
      </li>
    </div>
  );
};
