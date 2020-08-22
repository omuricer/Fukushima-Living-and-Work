import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import noimage from "@/image/no_image.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    unLoaded: {
      display: "none",
    },
    loaded: {
      display: "block",
    },
    image: {
      maxWidth: "100%",
      margin: "0 auto",
    },
  })
);

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
const Image: React.FC<IImageProps> = (props) => {
  const [loaded, setLoaded] = React.useState(false);
  const [src, setSrc] = useState<string | undefined>(props.src);
  const classes = useStyles();

  const image = loaded ? classes.loaded : classes.unLoaded;

  return (
    <div {...props}>
      <img
        {...{
          ...props,
          ...{ src: src, onError: (e) => setSrc(noimage) },
        }}
        className={[image, classes.image, props.className].join(" ")}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
  // }

  return <div />;
};
export default Image;
