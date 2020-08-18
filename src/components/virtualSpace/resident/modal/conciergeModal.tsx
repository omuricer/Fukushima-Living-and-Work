import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { IModalProps } from "../modal";
import Title from "./title";
import Image from "@/components/form/image";
import CommentatorAnimal from "./commentatorAnimal";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-paper
    paper: {
      width: "90vw",
      margin: "0",
      maxHeight: "80vh",
    },
    // Override MuiDialogContent-root
    root: {
      // background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      padding: "8px 10px",
    },
    flow: {
      textAlign: "center",
      marginTop: "20px",
    },
    divideLine: {
      margin: "15px 20px",
    },
    answer: {
      display: "flex",
    },
    answerButton: {
      width: "100%",
      margin: "5px",
    },
  })
);

export type ConciergeContent = {
  title: string;
  icon: string;
  type: string;
};
export const isConciergeContent = (v: unknown): v is ConciergeContent =>
  v !== null &&
  typeof v === "object" &&
  (v as { type: unknown }).type === "concierge";

export interface IConciergeModalProps extends IModalProps {
  content: ConciergeContent;
}
/**
 * コンシェルジュモーダルコンポーネント
 * @param props
 */
const ConciergeModal: React.FC<IConciergeModalProps> = (props) => {
  const [content, setContent] = useState<JSX.Element>(
    <CounterContent
      viewSelectLifeStyle={() => {
        setContent(<SelectLifeStyleContent aaaaaa={() => {}} />);
      }}
    />
  );

  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.closeModal}
        classes={{ paper: classes.paper }}
      >
        <Title
          icon={"icon/icon"}
          title={props.content.title}
          closeModal={props.closeModal}
        />
        <DialogContent classes={{ root: classes.root }}>
          {content}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default ConciergeModal;

const useStylesFirstContent = makeStyles((theme: Theme) =>
  createStyles({
    flow: {
      textAlign: "center",
      marginTop: "20px",
    },
    divideLine: {
      margin: "15px 20px",
    },
    answer: {
      display: "flex",
    },
    answerButton: {
      width: "100%",
      margin: "5px",
    },
  })
);
export interface ICounterContentProps {
  viewSelectLifeStyle: () => void;
}
/**
 * ご相談カウンター
 * @param props
 */
const CounterContent: React.FC<ICounterContentProps> = (props) => {
  const classes = useStylesFirstContent();

  return (
    <React.Fragment>
      {/* TODO: srcを設定 */}
      <Image src={"concierge"} />
      <div className={classes.flow}>
        <Typography>オンライン相談の流れ</Typography>
        <Typography>・・・</Typography>
      </div>
      <hr className={classes.divideLine} />
      <CommentatorAnimal
        icon={"concierge"}
        comment={"くらし・しごと\nどちらのご相談ですか？"}
      />
      <div className={classes.answer}>
        <Button
          className={classes.answerButton}
          onClick={props.viewSelectLifeStyle}
        >
          くらし
        </Button>
        <Button
          className={classes.answerButton}
          onClick={() => {
            alert("click!!!"); // TODO:予約サイトへ
          }}
        >
          しごと
        </Button>
      </div>
    </React.Fragment>
  );
};

const useStylesSelectLifeStyle = makeStyles((theme: Theme) =>
  createStyles({
    lifeStyles: {
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "center",
      marginTop: "15px",
      marginBottom: "25px",
    },
    lifeStyle: {
      width: "50%",
      padding: "5px",
      textAlign: "center",
    },
  })
);
export interface ISelectLifeStyleContentProps {
  aaaaaa: () => void;
}
/**
 * ご相談カウンター
 * @param props
 */
const SelectLifeStyleContent: React.FC<ISelectLifeStyleContentProps> = (
  props
) => {
  const classes = useStylesSelectLifeStyle();

  return (
    <React.Fragment>
      <CommentatorAnimal
        icon={"concierge"}
        comment={"気になるくらしのスタイルを\n選択してください"}
      />
      <div className={classes.lifeStyles}>
        <div className={classes.lifeStyle}>
          <Image src={"mountain"} />
          <Typography>山のあるくらし</Typography>
        </div>
        <div className={classes.lifeStyle}>
          <Image src={"sea"} />
          <Typography>海・湖のあるくらし</Typography>
        </div>
        <div className={classes.lifeStyle}>
          <Image src={"culture"} />
          <Typography>文化のあるくらし</Typography>
        </div>
        <div className={classes.lifeStyle}>
          <Image src={"city"} />
          <Typography>街のあるくらし</Typography>
        </div>
      </div>
    </React.Fragment>
  );
};
