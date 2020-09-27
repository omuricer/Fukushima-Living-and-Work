import React, { useContext } from "react";
import { BackHistoryContext } from "@/context/backHistory";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";

interface ICloseButtonProps extends IconButtonProps {}
const CloseButton: React.FC<ICloseButtonProps> = (props) => {
  const backHistoryContext = useContext(BackHistoryContext);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) props.onClick(e);
    backHistoryContext.flush();
  };
  return (
    <IconButton {...props} onClick={onClick}>
      <Icon style={{ fontSize: "2rem" }}>close</Icon>
    </IconButton>
  );
};
export default CloseButton;
