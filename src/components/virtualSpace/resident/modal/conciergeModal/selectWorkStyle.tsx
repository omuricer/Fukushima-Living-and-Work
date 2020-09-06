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
      margin: "30px",
    },
    selectButton: {
      width: "100%",
      height: "55px",
      marginBottom: "5px",
    },
    commingSoon: {
      display: "flex",
      flex: "1",
      alignItems: "center",
      color: "lightgray",
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
      {/* <Typography className={classes.h3}> //TODO: 9/23
        気になるしごとのスタイルを
        <br />
        選択してください
      </Typography>
      <SquareButton
        variant="contained"
        color="primary"
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
        color="primary"
        onClick={() => changeModal("workingStartBussiness")}
        className={classes.selectButton}
      >
        自分で仕事をつくりたい
      </SquareButton>
      <SquareButton
        variant="contained"
        color="primary"
        onClick={() => changeModal("workingOfferLocals")}
        className={classes.selectButton}
      >
        地域の魅力を発信したい
      </SquareButton>
      <SquareButton
        variant="contained"
        color="primary"
        onClick={() => changeModal("workingForLocals")}
        className={classes.selectButton}
      >
        地域貢献できて、安定した仕事がしたい
      </SquareButton>
      <SquareButton
        variant="contained"
        color="primary"
        onClick={() => changeModal("workingIT")}
        className={classes.selectButton}
      >
        ITスキルを活かしたい
      </SquareButton> */}
      <div className={classes.commingSoon}>
        <Typography variant="body2">Comming Soon</Typography>
      </div>
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
