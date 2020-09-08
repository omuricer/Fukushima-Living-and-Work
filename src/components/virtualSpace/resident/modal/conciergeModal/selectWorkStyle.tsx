import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";
import SquareButton from "@/components/form/squareButton";
import Sleep from "@/app/libs/sleep";
import BackButton from "@/components/form/backButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      margin: "10px",
    },
    text: {
      margin: "20px",
    },
    selectButton: {
      width: "100%",
      height: "55px",
      marginBottom: "5px",
    },
    space: {
      flex: "1",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    hr: {
      width: "20vw",
      marginBottom: "30px",
      borderWidth: "2px",
      margin: '30px auto auto auto',
    },
  })
);

/**
 * しごとのスタイルを選ぶ
 * @param props
 */
const SelectWorkStyle: React.FC<IConciergeModalProps> = (props) => {
  const classes = useStyles();

  const changeModal = (key: string) => {
    props.closeModal();
    props.handleAnothers.openModal(key);
  };

  return (
    <React.Fragment>
      <Typography variant="h3" className={classes.h3}>
        {props.content.title}
      </Typography>
      <hr className={classes.hr} />
      <Typography className={classes.text}>総合相談はこちらから</Typography>
      <SquareButton
        variant="contained"
        color="secondary"
        onClick={async () => {
          await Sleep.waitRipple();
          // TODO: 9/23
        }}
        className={classes.selectButton}
      >
        就職総合相談
      </SquareButton>
      <SquareButton
        variant="contained"
        color="secondary"
        onClick={async () => {
          await Sleep.waitRipple();
          // TODO: 9/23
        }}
        className={classes.selectButton}
      >
        地域おこし協力隊総合相談
      </SquareButton>
      <hr className={classes.hr} />
      <Typography className={classes.text}>
        働きたいしごとのスタイルが
        <br />
        決まっている方はこちらから
      </Typography>
      <SquareButton
        variant="contained"
        color="secondary"
        onClick={async () => {
          await Sleep.waitRipple();
          changeModal("workingNature");
        }}
        className={classes.selectButton}
      >
        自然の中で働きたい
      </SquareButton>
      <SquareButton
        variant="contained"
        color="secondary"
        onClick={() => changeModal("workingStartBussiness")}
        className={classes.selectButton}
      >
        自分で仕事をつくりたい
      </SquareButton>
      <SquareButton
        variant="contained"
        color="secondary"
        onClick={() => changeModal("workingOfferLocals")}
        className={classes.selectButton}
      >
        地域の魅力を発信したい
      </SquareButton>
      <SquareButton
        variant="contained"
        color="secondary"
        onClick={() => changeModal("workingForLocals")}
        className={classes.selectButton}
      >
        地域貢献できて、安定した仕事がしたい
      </SquareButton>
      <SquareButton
        variant="contained"
        color="secondary"
        onClick={() => changeModal("workingIT")}
        className={classes.selectButton}
      >
        ITスキルを活かしたい
      </SquareButton>
      <div className={classes.space} />
      <BackButton
        onClick={props.closeModal}
        style={{
          marginTop: "15px",
        }}
      />
    </React.Fragment>
  );
};
export default SelectWorkStyle;
