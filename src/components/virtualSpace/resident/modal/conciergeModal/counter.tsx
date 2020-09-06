import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
    },
    answerButton: {
      width: "100%",
      height: "50px",
      margin: "5px",
    },
    registerUser: {
      display: "flex",
      width: "70%",
      marginTop: "15px",
      justifyContent: "stretch",
    },
  })
);

/**
 * 相談カウンター
 * @param props
 */
const Counter: React.FC<IConciergeModalProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h3" className={classes.h3}>
        {props.content.title}
      </Typography>
      <Image src={ConciergeImage} />
      <Typography
        variant="h3"
        className={classes.h3}
        style={{
          marginTop: "20px",
        }}
      >
        オンライン相談の流れ
      </Typography>
      <Flow
        index={1}
        description={
          "相談したい市町村・団体を見つけましょう\n\nくらし・しごと どちらのご相談ですか？\n何から相談してよいか\nわからない方は総合相談へ！"
        }
      >
        <div className={classes.answer} style={{ marginTop: "15px" }}>
          <SquareButton
            variant="contained"
            color="primary"
            className={classes.answerButton}
            onClick={() => {
              props.closeModal();
              props.handleAnothers.openModal("conciergeSelectLifeStyle");
            }}
          >
            くらし
          </SquareButton>
          <SquareButton
            variant="contained"
            color="primary"
            className={classes.answerButton}
            onClick={() => {
              props.closeModal();
              props.handleAnothers.openModal("conciergeSelectWorkStyle");
            }}
          >
            しごと
          </SquareButton>
        </div>
        <div className={classes.answer}>
          <SquareButton
            variant="contained"
            color="primary"
            className={classes.answerButton}
            onClick={() => {}} // TODO: 9/23
            disabled
          >
            総合相談
          </SquareButton>
        </div>
      </Flow>
      <Flow
        index={2}
        description={
          "相談したい市町村・団体を見つけたら\nご相談のためのユーザー登録を\nお願いいたします"
        }
      >
        <div className={classes.registerUser}>
          <SquareButton
            variant="contained"
            color="primary"
            className={classes.answerButton}
            onClick={() => {}} // TODO: 9/23
            disabled
          >
            ユーザー登録
          </SquareButton>
        </div>
      </Flow>
      <Flow
        index={3}
        description={"ご希望の日時を選択ください"}
        subDescription={
          "予約を確定するとメールが届きます。相談用URL等については各市町村から後程お送りします。登録後はユーザーマイページで自分の予約状況が確認できます。"
        }
      />
      <Flow
        index={4}
        description={
          "予約日時になったら\nご自身のアプリケーションから\n相談を開始してください"
        }
        subDescription={
          "Zoom、Skype等、対応可能なアプリケーションを事前にご登録をお願いします。"
        }
      />
      <Flow
        index={5}
        description={
          "相談終了後\nアンケートに答えてくれた方には\n抽選で福島の特産品が当たる！"
        }
      >
        <div>
          <Image src={PresentImage} />
        </div>
      </Flow>
      <BackButton onClick={props.closeModal} />
    </React.Fragment>
  );
};
export default Counter;

const useStylesFlow = makeStyles((theme: Theme) =>
  createStyles({
    circle: {
      width: "40px",
      height: "40px",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "40px",
      borderRadius: "50%",
      borderColor: "#797979",
      borderStyle: "solid",
      marginTop: "35px",
      marginBottom: "15px",
      fontSize: "18px",
      color: "#797979",
    },
    description: {
      whiteSpace: "pre-wrap",
    },
    subDescription: {
      marginTop: "12px",
      marginLeft: "10px",
      marginRight: "10px",
      fontSize: "12.5px",
      color: "#797979",
      textAlign: "left",
      position: "relative",
      paddingLeft: "1rem",
      "&:before": {
        content: '"※"',
        position: "absolute",
        left: "0",
      },
    },
  })
);
export interface IFlowProps {
  index: number;
  description: string;
  subDescription?: string;
}
/**
 * オンライン相談の流れ
 * @param props
 */
const Flow: React.FC<IFlowProps> = (props) => {
  const classes = useStylesFlow();

  return (
    <React.Fragment>
      <div className={classes.circle}>{props.index}</div>
      <Typography className={classes.description}>
        {props.description}
      </Typography>
      {props.subDescription && (
        <Typography className={classes.subDescription}>
          {props.subDescription}
        </Typography>
      )}
      {props.children}
    </React.Fragment>
  );
};
