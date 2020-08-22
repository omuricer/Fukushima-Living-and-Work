import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Image from "@/components/form/image";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";

const useStyles = makeStyles((theme: Theme) =>
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

/**
 * くらしのスタイルを選ぶ
 * @param props
 */
const SelectLifeStyle: React.FC<IConciergeModalProps> = (props) => {
  const classes = useStyles();

  const changeModal = (key: string) => {
    props.closeModal();
    props.handleAnothers.openModal(key);
  };

  return (
    <React.Fragment>
      <div>気になるくらしのスタイルを\n選択してください</div>
      <ul className={classes.lifeStyles}>
        <li
          className={classes.lifeStyle}
          onClick={() => changeModal("livingMountain")}
        >
          <Image src={"mountain"} />
          <Typography>山のあるくらし</Typography>
        </li>
        <li
          className={classes.lifeStyle}
          onClick={() => changeModal("livingSea")}
        >
          <Image src={"sea"} />
          <Typography>海・湖のあるくらし</Typography>
        </li>
        <li
          className={classes.lifeStyle}
          onClick={() => changeModal("livingCity")}
        >
          <Image src={"culture"} />
          <Typography>文化のあるくらし</Typography>
        </li>
        <li
          className={classes.lifeStyle}
          onClick={() => changeModal("livingCulture")}
        >
          <Image src={"city"} />
          <Typography>街のあるくらし</Typography>
        </li>
      </ul>
      <Button onClick={() => changeModal("conciergeCounter")}>＜ 戻る</Button>
    </React.Fragment>
  );
};
export default SelectLifeStyle;
