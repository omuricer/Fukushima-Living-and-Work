import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { IModalProps } from "../modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      minWidth: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        minWidth: "auto",
      },
    },
    actionsRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      justifyContent: "center",
    },
  })
);

export type ProjectionContent = {
  title: string;
  icon: string;
  youtubeURLs: string[];
};
export const isProjectionContent = (v: unknown): v is ProjectionContent =>
  v !== null &&
  typeof v === "object" &&
  (v as { youtubeURLs: unknown }).youtubeURLs instanceof Array;

export interface IProjectionModalProps extends IModalProps {
  content: ProjectionContent;
}
const ProjectionModal: React.FC<IProjectionModalProps> = (props) => {
  const classes = useStyles();

  const youtubeURLs = props.content.youtubeURLs.map((URL, index) => (
    <li key={index}>{URL}</li>
  ));

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent className={classes.contentRoot}>
        <div>{props.content.title}</div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OWoKzNxZWw8"
          seamless
          allow="autoplay; encrypted-media"
        ></iframe>
        {youtubeURLs}
      </DialogContent>
      <DialogActions className={classes.actionsRoot}>
        <Button variant="outlined" onClick={props.onClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ProjectionModal;
