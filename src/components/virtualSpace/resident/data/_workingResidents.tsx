import { Resident } from "@/app/resident/types";
import { WorkingContent } from "@/components/virtualSpace/resident/modal/workingModal";

const Working: Resident<WorkingContent>[] = [
  {
    key: "workingNature",
    modal: {
      content: {
        type: "working",
        title: "自然の中で働きたい",
        icon: "icon", // TODO:
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },
  {
    key: "workingStartBussiness",
    modal: {
      content: {
        type: "working",
        title: "自分で仕事をつくりたい",
        icon: "icon", // TODO:
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },

  {
    key: "workingOfferLocals",
    modal: {
      content: {
        type: "working",
        title: "地域の魅力を発信したい",
        icon: "icon", // TODO:
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },
  {
    key: "workingForLocals",
    modal: {
      content: {
        type: "working",
        title: "地域貢献できて、安定した仕事がしたい",
        icon: "icon", // TODO:
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },
  {
    key: "workingIT",
    modal: {
      content: {
        type: "working",
        title: "ITスキルを活かしたい",
        icon: "icon", // TODO:
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },
];
export default Working;
