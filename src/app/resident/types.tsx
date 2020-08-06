import {
  LivingContent,
  isLivingContent,
} from "@/components/virtualSpace/resident/modal/livingModal";

export type IconProps = {
  image: string;
  positionX: number;
  positionY: number;
};
export type ModalProps<T> = {
  content: T;
};
export type ModalContent = LivingContent | string;

export const isLivingModal = (v: unknown): v is ModalProps<LivingContent> =>
  v !== null &&
  typeof v === "object" &&
  isLivingContent((v as { content: unknown }).content);
