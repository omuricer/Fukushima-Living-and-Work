import React, { useState, useEffect } from "react";
import noimage from "@/image/no_image.jpg";

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
const Image: React.FC<IImageProps> = (props) => {
  const [src, setSrc] = useState<string | undefined>(props.src);
  return (
    <img
      {...{
        ...props,
        ...{ src: src, onError: (e) => setSrc(noimage) },
      }}
    />
  );
};
export default Image;
