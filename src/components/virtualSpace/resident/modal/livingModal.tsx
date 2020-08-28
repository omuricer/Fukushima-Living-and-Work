import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import Button from "@material-ui/core/Button";
import { parallel } from "@/app/libs/thread";

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
  const [preLoadedImage, setPreLoadedImage] = useState<boolean>(false);
  const classes = useStyles();

  const advisors = props.content.advisors.map((a, index) => (
    <Advisor {...a} key={index} color={props.content.headerColor} />
  ));
  const changeModal = (key: string) => {
    props.closeModal();
    props.handleAnothers.openModal(key);
  };

  return (
    <Modal {...props} headerColor={props.content.headerColor}>
      <Typography variant="h3" className={classes.h3}>
        {props.content.title}
      </Typography>
      <div className={classes.visual}>
        <Image src={props.content.visual} />
        <Comment
          text={props.content.comment}
          direction={
            props.content.commentDirection == "left" ? "right" : "left"
          }
          className={classes.commentRight}
        />
      </div>
      <Typography className={classes.h3}>個別相談のご予約を受付中！</Typography>
      <ul className={classes.advidors}>{advisors}</ul>
      <Button onClick={() => changeModal("conciergeCounter")}>＜ 戻る</Button>
    </Modal>
  );
};
export default LivingModal;

const useStylesAdvisor = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: "50%",
      padding: 0,
    },
    li: {
      display: "flex",
      alignItems: "center",
      borderStyle: "solid",
      borderRadius: "4px",
      margin: "5px",
      position: "relative",
    },
    image: {
      width: "60px",
      borderRadius: "50%",
      margin: "5px",
    },
    name: {
      margin: "10px",
    },
    shadow: {
      borderBottom: "solid 4px rgba(0,0,0,0.2)",
      borderRadius: "7px",
      position: "absolute",
      width: "calc(100% + 4px)",
      height: "30px",
      top: "calc(100% + 2px)",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
      WebkitTransform: "translateY(-100%) translateX(-50%)",
    },
  })
);

export interface IAdvisorProps {
  image: string;
  name: string;
  id: string;
  color: string;
}
const Advisor: React.FC<IAdvisorProps> = (props) => {
  const classes = useStylesAdvisor();
  return (
    <Button
      className={classes.button}
      onClick={() => window.open(`https://xxx.xxx/aaa/${props.id}`)}
    >
      <li className={classes.li} style={{ borderColor: props.color }}>
        <Image src={props.image} className={classes.image} />
        <Typography className={classes.name}>{props.name}</Typography>
        <div className={classes.shadow} />
      </li>
    </Button>
  );
};

const useStylesComment = makeStyles((theme: Theme) =>
  createStyles({
    left: {
      display: "inline-block",
      padding: "7px 10px",
      minWidth: "120px",
      maxWidth: "100%",
      color: "#555",
      fontSize: "16px",
      background: "#ffffff",
      opacity: "0.8",
      whiteSpace: "nowrap",
      "&:before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "-30px",
        marginTop: "-15px",
        border: "15px solid transparent",
        borderRight: "15px solid #ffffff",
        opacity: "0.8",
      },
    },
    right: {
      display: "inline-block",
      padding: "7px 10px",
      minWidth: "120px",
      maxWidth: "100%",
      color: "#555",
      fontSize: "16px",
      background: "#ffffff",
      opacity: "0.8",
      whiteSpace: "nowrap",
      "&:before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "100%",
        marginTop: "-15px",
        border: "15px solid transparent",
        borderLeft: "15px solid #ffffff",
        opacity: "0.8",
      },
    },
    text: {
      margin: "0",
      padding: "0",
    },
  })
);

export interface ICommentProps extends React.ImgHTMLAttributes<HTMLDivElement> {
  text: string;
  direction?: "left" | "right";
}
const Comment: React.FC<ICommentProps> = (props) => {
  const classes = useStylesComment();
  const dilectionStyle =
    props.direction == "left" ? classes.left : classes.right;
  return (
    <div {...props} className={[dilectionStyle, props.className].join(" ")}>
      <Typography>{props.text}</Typography>
    </div>
  );
};
