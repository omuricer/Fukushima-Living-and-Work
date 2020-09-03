import React, { useState, useEffect, useContext } from "react";
import Modal, { IModalProps } from "../index";
import Counter from "./counter";
import SelectLifeStyle from "./selectLifeStyle";
import SelectWorkStyle from "./selectWorkStyle";
import { BackHistoryContext } from "@/context/backHistory";

export type ConciergeContent = {
  title: string;
  icon: string;
  headerColor: string;
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
  const backHistoryContext = useContext(BackHistoryContext);

  return (
    <Modal
      {...props}
      headerColor={props.content.headerColor}
      onEnter={() =>
        backHistoryContext.push(() => {
          props.handleAnothers.openModal(props.modalKey);
        })
      }
    >
      {content()}
    </Modal>
  );
};
export default ConciergeModal;
