import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";
import SquareButton from "@/components/form/squareButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    selectButton: {
      width: "100%",
      marginBottom: "5px",
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
      <Typography className={classes.h3}>
        気になるしごとのスタイルを
        <br />
        選択してください
      </Typography>
      <SquareButton
        variant="contained"
        color="primary"
        onClick={() => changeModal("workingNature")}
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
      </SquareButton>
      <Button onClick={() => changeModal("conciergeCounter")}>＜ 戻る</Button>
    </React.Fragment>
  );
};
export default SelectWorkStyle;