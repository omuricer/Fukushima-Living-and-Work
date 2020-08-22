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

  return (
    <React.Fragment>
      <div>気になるくらしのスタイルを\n選択してください</div>
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
export default SelectLifeStyle;
