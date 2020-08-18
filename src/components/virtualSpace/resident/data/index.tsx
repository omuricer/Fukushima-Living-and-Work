import { IconProps, ModalProps, ModalContent } from "@/app/resident/types";
import LivingResidents from "./_livingResidents";
import ProjectionResidents from "./_projectionResidents";
import ConciergeResidents from "./_conciergeResidents";

type Resident = {
  icon: IconProps;
  modal: ModalProps<ModalContent>;
};
let regidents: Resident[] = [] as Resident[];
regidents = regidents.concat(LivingResidents);
regidents = regidents.concat(ProjectionResidents);
regidents = regidents.concat(ConciergeResidents);
export default regidents;
