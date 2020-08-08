import { IconProps, ModalProps } from "@/app/resident/types";
import { ProjectionContent } from "@/components/virtualSpace/resident/modal/projectionModal";

type Resident = {
  icon: IconProps;
  modal: ModalProps<ProjectionContent>;
};
const ProjectionRegidents: Resident[] = [
  {
    icon: {
      image: "image/loading/star.gif",
      positionX: 30,
      positionY: 10,
    },
    modal: {
      content: {
        title: "タイトル1",
        icon: "icon", // TODO:
        youtubeURLs: [
          "https://www.youtube.com/embed/mGYhDIW-rIQ",
          "https://www.youtube.com/embed/mGYhDIW-rIQ",
          "https://www.youtube.com/embed/mGYhDIW-rIQ",
        ],
      },
    },
  },
];
export default ProjectionRegidents;
