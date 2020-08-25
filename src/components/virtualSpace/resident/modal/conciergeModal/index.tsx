import React, { useState, useEffect } from "react";
import Modal, { IModalProps } from "../index";
import Counter from "./counter";
import SelectLifeStyle from "./selectLifeStyle";
import SelectWorkStyle from "./selectWorkStyle";

export type ConciergeContent = {
  title: string;
  icon: string;
  type: string;
  phase: "counter" | "selectLifeStyle" | "selectWorkStyle";
};
export const isConciergeContent = (v: unknown): v is ConciergeContent =>
  v !== null &&
  typeof v === "object" &&
  (v as { type: unknown }).type === "concierge";

export interface IConciergeModalProps extends IModalProps {
  content: ConciergeContent;
}
/**
 * コンシェルジュモーダルコンポーネント
 * @param props
 */
const ConciergeModal: React.FC<IConciergeModalProps> = (props) => {
  const content = () => {
    if (props.content.phase == "counter") return <Counter {...props} />;
    if (props.content.phase == "selectLifeStyle")
      return <SelectLifeStyle {...props} />;
    if (props.content.phase == "selectWorkStyle")
      return <SelectWorkStyle {...props} />;
  };

  return (
    <Modal {...props} headerColor={"#F6E9A3"}>
      {content()}
    </Modal>
  );
};
export default ConciergeModal;