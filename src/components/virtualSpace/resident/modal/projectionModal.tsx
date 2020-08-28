import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import RoundButton from "@/components/form/roundButton";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import talkLiveImage from "@/image/no_image.jpg"; // TODO: 正式な画像を設定

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-paper
    // paper: {
    //   width: "91vw",
    //   margin: "0",
    //   maxHeight: "80vh",
    //   overflowY: "visible",
    //   top: "-40px",
    // },
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
    buttonConcierge: {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      WebkitTransform: "translateX(-50%)",
      MsTransform: "translateX(-50%)",
      zIndex: 1301,
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

  const programs = [
    {
      title: "参加者へのアンケート",
      subtitle: "アイスブレイク",
      start: "00:00",
      end: "00:00",
    },
    {
      title: "地方だからこそ！地方の魅力的な仕事",
      subtitle: "しごとトークセッション①",
      start: "00:00",
      end: "00:00",
    },
    {
      title: "地方で求められる人材像とは",
      subtitle: "しごとトークセッション②",
      start: "00:00",
      end: "00:00",
    },
    {
      title: "空き家 × 自然くらし",
      subtitle: "ゲストトーク① 会津地域",
      start: "00:00",
      end: "00:00",
    },
    {
      title: "まちの仕掛人 × 街なかくらし",
      subtitle: "ゲストトーク② 中通り地域",
      start: "00:00",
      end: "00:00",
    },
    {
      title: "サーフィン × 海のあるくらし",
      subtitle: "ゲストトーク③ 浜通り地域",
      start: "00:00",
      end: "00:00",
    },
  ].map((p, i) => <Program {...p} key={i} />);

  return (
    <React.Fragment>
      <Modal
        {...props}
        headerColor={"red"} // TODO: 正式な色にする
        // classes={{ paper: classes.paper }}
      >
        <Typography variant="h3" className={classes.h3}>
          {props.content.title}
        </Typography>
        <Image src={talkLiveImage} className={classes.image} />
        <Typography variant="h3" className={classes.h3}>
          プログラム
        </Typography>

        <ul className={classes.programs}>{programs}</ul>
      </Modal>
      {/* {props.open && (
        <RoundButton
          onClick={() => {
            props.closeModal();
            props.handleAnothers.openModal("conciergeCounter");
          }}
          variant="contained"
          color="primary"
          className={classes.buttonConcierge}
        >
          個別相談受付
        </RoundButton>
      )} */}
    </React.Fragment>
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
        backgroundColor: "#ebebeb",
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
      marginLeft: "10px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
    },
    subtitle: {
      cmarginBottom: "5px",
      color: "#919191",
    },
  })
);

export interface IProgramProps {
  title: string;
  subtitle: string;
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
      <div className={classes.title}>
        <Typography variant="body2">{props.subtitle}</Typography>
        <Typography>{props.title}</Typography>
      </div>
    </li>
  );
};
