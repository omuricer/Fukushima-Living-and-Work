import { Resident } from "@/app/resident/types";
import { LivingContent } from "@/components/virtualSpace/resident/modal/livingModal";

const LivingRegidents: Resident<LivingContent>[] = [
  {
    key: "living1",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 10,
    },
    modal: {
      content: {
        title: "タイトル1",
        icon: "icon", // TODO:
        advisors: [
          {
            name: "アドバイザー1-1",
            image: "image", // TODO:
            comment: "コメント",
          },
          {
            name: "アドバイザー1-2",
            image: "image", // TODO:
            comment: "コメント",
          },
        ],
      },
    },
  },
  {
    key: "living2",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 20,
      positionY: 10,
    },
    modal: {
      content: {
        title: "タイトル2",
        icon: "icon", // TODO:
        advisors: [
          {
            name: "アドバイザー2-1",
            image: "image", // TODO:
            comment: "コメント",
          },
          {
            name: "アドバイザー2-2",
            image: "image", // TODO:
            comment: "コメント",
          },
        ],
      },
    },
  },
];
export default LivingRegidents;
