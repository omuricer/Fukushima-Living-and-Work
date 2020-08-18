import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { IModalProps } from "../modal";
import Title from "./title";
import Image from "@/components/form/image";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-paper
    paper: {
      width: "90vw",
      margin: "0",
      maxHeight: "80vh",
    },
    contentRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      minWidth: "600px",

      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        minWidth: "auto",
      },
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
  // const [movies, setMovies] = useState<TSearchResponse>([]);
  // const [playVideoId, setPlayVideoId] = useState<string | undefined>(undefined);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        classes={{ paper: classes.paper }}
      >
        <Title
          icon={"icon/icon"}
          title={props.content.title}
          onClose={props.onClose}
        />
        <DialogContent className={classes.contentRoot}>
          {/* TODO: srcを設定 */}
          <Image src={"concierge"} />
          <Typography>オンライン相談の流れ</Typography>
          <Typography>・・・</Typography>
          <hr />
          <div>
            <Image src={"concierge"} />
            <Typography>{"くらし・しごと\nどちらのご相談ですか？"}</Typography>
            <Button
              onClick={() => {
                alert("click!!!");
              }}
            >
              くらし
            </Button>
            <Button
              onClick={() => {
                alert("click!!!");
              }}
            >
              しごと
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default ConciergeModal;
