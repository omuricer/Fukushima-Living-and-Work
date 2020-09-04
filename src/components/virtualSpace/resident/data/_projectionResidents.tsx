import { Resident } from "@/app/resident/types";
import { ProjectionContent } from "@/components/virtualSpace/resident/modal/projectionModal";
import fox from "@/image/virtualSpace/icons/icon_7.png";
import foxTitle from "@/image/virtualSpace/modalTitleIcon/m_top_7.png";

const ProjectionRegidents: Resident<ProjectionContent>[] = [
  {
    floor: 7,
    key: "projection",
    icon: {
      image: fox,
      positionY: 51,
      positionX: 14,
    },
    modal: {
      content: {
        title: "動画シアター",
        icon: foxTitle,
        type: "projection",
        youtubeDataAPI: {
          key: "AIzaSyCOdHoXvxi2fferydOqo4O4Z-6o4p0s0fE",
          q: "ふくしま",
          channelId: "UCdZsC9AS5zcZEKOm6eIAC5w",
        },
      },
    },
  },
];
export default ProjectionRegidents;
