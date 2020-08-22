import {
  LivingContent,
  isLivingContent,
} from "@/components/virtualSpace/resident/modal/livingModal";
import {
  ProjectionContent,
  isProjectionContent,
} from "@/components/virtualSpace/resident/modal/projectionModal";
import {
  ConciergeContent,
  isConciergeContent,
} from "@/components/virtualSpace/resident/modal/conciergeModal/index";
import {
  WorkingContent,
  isWorkingContent,
} from "@/components/virtualSpace/resident/modal/workingModal";

export type Resident<T> = {
  key: string;
  icon?: IconProps;
  modal: ModalProps<T>;
};
export type IconProps = {
  image: string;
  positionX: number;
  positionY: number;
};
export type ModalProps<T> = {
  content: T;
};
export type ModalContent =
  | LivingContent
  | ProjectionContent
  | ConciergeContent
  | WorkingContent;

export const isLivingModal = (v: unknown): v is ModalProps<LivingContent> =>
  v !== null &&
  typeof v === "object" &&
  isLivingContent((v as { content: unknown }).content);

export const isProjectionModal = (
  v: unknown
): v is ModalProps<ProjectionContent> =>
  v !== null &&
  typeof v === "object" &&
  isProjectionContent((v as { content: unknown }).content);

export const isConciergeModal = (
  v: unknown
): v is ModalProps<ConciergeContent> =>
  v !== null &&
  typeof v === "object" &&
  isConciergeContent((v as { content: unknown }).content);

export const isWorkingModal = (v: unknown): v is ModalProps<WorkingContent> =>
  v !== null &&
  typeof v === "object" &&
  isWorkingContent((v as { content: unknown }).content);

export type HandleAnothers = {
  openModal: (residentKey: string) => void;
};
