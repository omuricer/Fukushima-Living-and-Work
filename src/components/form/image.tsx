import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import noimage from "@/image/no_image.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: "100%",
    },
  })
);

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
const Image: React.FC<IImageProps> = (props) => {
  const [src, setSrc] = useState<string | undefined>(props.src);
  const classes = useStyles();
  return (
    <img
      {...{
        ...props,
        ...{ src: src, onError: (e) => setSrc(noimage) },
      }}
      className={[classes.image, props.className].join(" ")}
    />
  );
};
export default Image;
