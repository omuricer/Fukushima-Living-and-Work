import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SquareButton from "@/components/form/squareButton";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";
import BackButton from "@/components/form/backButton";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      margin: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      margin: "20px",
      lineHeight: "1.6rem",
    },
    icon: {
      color: "#E9A75B",
      marginRight: "5px",
    },
    answerButton: {
      width: "100%",
      height: "50px",
      margin: "5px",
    },
    registerUser: {
      width: "70%",
      height: "60px",
      marginTop: "15px",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
    },
    wrap: {
      width: "100%",
      height: "75px",
      position: "relative",
    },
    back: {
      position: "absolute",
      bottom: "20px",
    },
  })
);

/**
 * チャット相談
 * @param props
 */
const Chat: React.FC<IConciergeModalProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.h3}>
        <ChatBubbleIcon className={classes.icon} />
        <Typography variant="h3">{props.content.title}</Typography>
      </div>
      <Typography className={classes.text}>
        移住に関する質問を気軽に
        <br />
        ご相談ください
      </Typography>
      <Typography className={classes.text}>
        【受付日時】
        <br />
        11/1　10:00～17:00
      </Typography>
      <div className={classes.wrap}>
        <div className={classes.registerUser}>
          <SquareButton
            variant="contained"
            color="primary"
            className={classes.answerButton}
            onClick={() => {
              window.open("https://page.line.me/egj5830s");
            }}
            disabled
          >
            チャット相談受付中！
          </SquareButton>
        </div>
      </div>
      <Typography>※現在受付時間外です</Typography>
      <BackButton onClick={props.closeModal} className={classes.back} />
    </React.Fragment>
  );
};
export default Chat;
