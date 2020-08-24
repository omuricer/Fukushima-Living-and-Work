import { Resident } from "@/app/resident/types";
import { ProjectionContent } from "@/components/virtualSpace/resident/modal/projectionModal";

const ProjectionRegidents: Resident<ProjectionContent>[] = [
  {
    key: "projection",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 30,
      positionY: 10,
    },
    modal: {
      content: {
        title: "動画配信シアター",
        icon: "icon", // TODO:
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
