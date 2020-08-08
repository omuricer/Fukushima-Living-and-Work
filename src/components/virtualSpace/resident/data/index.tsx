import { IconProps, ModalProps, ModalContent } from "@/app/resident/types";
import LivingResidents from "./_livingResidents";
import ProjectionResidents from "./_projectionResidents";

type Resident = {
  icon: IconProps;
  modal: ModalProps<ModalContent>;
};
const Regidents: Resident[] = ([] as Resident[]).concat(
  LivingResidents,
  ProjectionResidents
);
export default Regidents;
