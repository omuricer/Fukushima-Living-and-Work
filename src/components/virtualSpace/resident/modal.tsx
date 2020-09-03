import { HandleAnothers } from "@/app/resident/types";
export interface IModalProps {
  modalKey: string;
  open: boolean;
  closeModal: () => void;
  handleAnothers: HandleAnothers;
}
