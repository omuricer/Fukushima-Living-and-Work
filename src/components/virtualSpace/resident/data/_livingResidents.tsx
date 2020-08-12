import { IconProps, ModalProps } from "@/app/resident/types";
import { LivingContent } from "@/components/virtualSpace/resident/modal/livingModal";

type Resident = {
  icon: IconProps;
  modal: ModalProps<LivingContent>;
};
const LivingRegidents: Resident[] = [
  {
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
