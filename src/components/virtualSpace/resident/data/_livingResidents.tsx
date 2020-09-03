import { Resident } from "@/app/resident/types";
import { LivingContent } from "@/components/virtualSpace/resident/modal/livingModal";
import livingCultureImage from "@/image/no_image.jpg"; // TODO: 正式な画像を設定
// TODO: すべての画像をimportする

const LivingRegidents: Resident<LivingContent>[] = [
  // TODO: 9/23
  // {
  //   floor: 3,
  //   key: "livingSea",
  //   icon: {
  //     image: "image/virtualSpace/icons/icon.png",
  //     positionX: 10,
  //     positionY: 10,
  //   },
  //   modal: {
  //     content: {
  //       type: "living",
  //       icon: "animal",
  //       headerColor: "blue",
  //       title: "水辺でのくらし",
  //       visual: "kuma",
  //       comment: "水の恵みを感じる！\n海や湖などが\n身近にある暮らし",
  //       commentDirection: "right",
  //       advisors: [
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //       ],
  //     },
  //   },
  // },
  // {
  //   floor: 4,
  //   key: "livingMountain",
  //   icon: {
  //     image: "image/virtualSpace/icons/icon.png",
  //     positionX: 10,
  //     positionY: 10,
  //   },
  //   modal: {
  //     content: {
  //       type: "living",
  //       icon: "animal",
  //       headerColor: "green",
  //       title: "自然豊かな山あいのくらし",
  //       visual: "kuma",
  //       comment: "自然とともに暮らす\nアウトドアを満喫\nできる暮らし",
  //       commentDirection: "right",
  //       advisors: [
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //       ],
  //     },
  //   },
  // },
  // {
  //   floor: 5,
  //   key: "livingCity",
  //   icon: {
  //     image: "image/virtualSpace/icons/icon.png",
  //     positionX: 10,
  //     positionY: 10,
  //   },
  //   modal: {
  //     content: {
  //       type: "living",
  //       icon: "animal",
  //       headerColor: "red",
  //       title: "便利な街でのくらし",
  //       visual: "kuma",
  //       comment: "生活に便利な\n商業施設や娯楽施設が\nある街での暮らし",
  //       commentDirection: "left",
  //       advisors: [
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //         {
  //           name: "○○",
  //           image: "image",
  //           id: "1",
  //         },
  //       ],
  //     },
  //   },
  // },
];
export default LivingRegidents;
