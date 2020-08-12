import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import noimage from "@/image/no_image.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    a: {
      textDecoration: "none",
      WebkitTransition: "0.5s",
      MozTransition: "0.5s",
      OTransition: "0.5s",
      MsTransition: "0.5s",
      transition: "0.5s",
      "&:hover": {
        color: theme.palette.text.secondary,
      },
    },
  })
);

interface IImageProps extends React.HTMLProps<HTMLImageElement> {}
const Image: React.FC<IImageProps> = (props) => {
  const classes = useStyles();
  return <img {...props} />;
};
export default Image;
