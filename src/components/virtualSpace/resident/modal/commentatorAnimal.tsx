import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/form/image";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commentatorAnimal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    commentator: {
      width: "80px",
    },
    comment: {
      whiteSpace: "pre-wrap",
    },
  })
);

export interface ICommentatorAnimalProps {
  icon: string;
  comment: string;
}
/**
 * コメンテーターアニマルコンポーネント
 * @param props
 */
const CommentatorAnimal: React.FC<ICommentatorAnimalProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.commentatorAnimal}>
      <Image src={props.icon} className={classes.commentator} />
      <Typography className={classes.comment}>{props.comment}</Typography>
    </div>
  );
};
export default CommentatorAnimal;
