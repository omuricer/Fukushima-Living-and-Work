import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SquareButton from "@/components/form/squareButton";
import Image from "@/components/form/image";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";
import ConciergeImage from "@/image/virtualSpace/concierge/m_1f_01.png";
import PresentImage from "@/image/virtualSpace/concierge/m_1f_02.png";
import BackButton from "@/components/form/backButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    answer: {
      display: "flex",
      width: "100%",
      justifyContent: "stretch",
      height: "60px",
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
      <Typography variant="h3" className={classes.h3}>
        {props.content.title}
      </Typography>
      <Typography className={classes.h3}>
        移住に関する質問を気軽に<br />ご相談ください
      </Typography>
      <Typography className={classes.h3}>
        【受付日時】<br />11/1　10:00～17:00
      </Typography>
      <div className={classes.wrap}>
        <div className={classes.answer}>
          <SquareButton
            variant="contained"
            color="primary"
            className={classes.answerButton}
            onClick={() => { }} // TODO: 9/23
            disabled
          >
            チャット相談受付中！
          </SquareButton>
        </div>
      </div>
      <Typography>
        ※現在受付時間外です
      </Typography>
      <BackButton onClick={props.closeModal} />
    </React.Fragment >
  );
};
export default Chat;
