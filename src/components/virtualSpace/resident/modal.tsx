import { HandleAnothers } from "@/app/resident/types";
export interface IModalProps {
  open: boolean;
  closeModal: () => void;
  handleAnothers: HandleAnothers;
}
