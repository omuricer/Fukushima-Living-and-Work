import { Resident, ModalContent } from "@/app/resident/types";
import LivingResidents from "./_livingResidents";
import ProjectionResidents from "./_projectionResidents";
import ConciergeResidents from "./_conciergeResidents";
import WorkingResidents from "./_workingResidents";

let regidents: Resident<ModalContent>[] = [] as Resident<ModalContent>[];
regidents = regidents.concat(LivingResidents);
regidents = regidents.concat(ProjectionResidents);
regidents = regidents.concat(ConciergeResidents);
regidents = regidents.concat(WorkingResidents);
export default regidents;
