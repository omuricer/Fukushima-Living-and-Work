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

  return (
    <React.Fragment>
      <div>SelectWorkStyle</div>
    </React.Fragment>
  );
};
export default SelectWorkStyle;
