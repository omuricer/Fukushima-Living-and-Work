import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Image from "@/components/form/image";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h3: {
      marginTop: "10px",
      marginBottom: "10px",
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
      <Typography>
        気になるしごとのスタイルを
        <br />
        選択してください
      </Typography>
      <Button onClick={() => changeModal("workingNature")}>
        自然の中で働きたい
      </Button>
      <Button onClick={() => changeModal("workingStartBussiness")}>
        自分で仕事をつくりたい
      </Button>
      <Button onClick={() => changeModal("workingOfferLocals")}>
        地域の魅力を発信したい
      </Button>
      <Button onClick={() => changeModal("workingForLocals")}>
        地域貢献できて、安定した仕事がしたい
      </Button>
      <Button onClick={() => changeModal("workingIT")}>
        ITスキルを活かしたい
      </Button>
      <Button onClick={() => changeModal("conciergeCounter")}>＜ 戻る</Button>
    </React.Fragment>
  );
};
export default SelectWorkStyle;
