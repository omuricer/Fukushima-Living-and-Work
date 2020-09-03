import React, { useContext } from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { BackHistoryContext } from "@/context/backHistory";

interface IBackButtonProps extends ButtonProps {}
const BackButton: React.FC<IBackButtonProps> = (props) => {
  const backHistoryContext = useContext(BackHistoryContext);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) props.onClick(e);
    backHistoryContext.back();
  };
  return (
    <Button {...props} onClick={onClick}>
      ＜ 戻る
    </Button>
  );
};
export default BackButton;
