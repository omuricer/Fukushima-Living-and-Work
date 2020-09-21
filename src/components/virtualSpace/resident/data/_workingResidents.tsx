import { Resident } from "@/app/resident/types";
import { WorkingContent } from "@/components/virtualSpace/resident/modal/workingModal";
import workingGirlTitle from "@/image/virtualSpace/modalTitleIcon/m_top_2.png";

const Working: Resident<WorkingContent>[] = [
  {
    floor: 1,
    key: "workingNature",
    modal: {
      content: {
        type: "working",
        title: "自然の中で働きたい",
        icon: workingGirlTitle,
        advisors: [
          { "id": "1", "name": "喜多方市", "personName": "小林浩紀", "personImage": "1-15.JPG" },
          { "id": "2", "name": "古殿町", "personName": "郡司和泉", "personImage": "2-15.jpg" },
          { "id": "3", "name": "大玉村", "personName": "増子光", "personImage": "3-15.JPG" },
          { "id": "7", "name": "昭和村", "personName": "山内翔吾", "personImage": "7-15.JPG" },
          { "id": "8", "name": "福島市", "personName": "米尾啓之", "personImage": "8-15.jpg" },
          { "id": "9", "name": "湯川村", "personName": "大越惇", "personImage": "9-15.JPEG" },
          { "id": "10", "name": "西会津町。", "personName": "齋藤淳", "personImage": "10-15.jpg" },
          { "id": "11", "name": "只見町", "personName": "吉津瑞穂", "personImage": "11-15.jpg" },
          { "id": "12", "name": "三春町", "personName": "伊本絵里", "personImage": "12-15.JPG" },
          { "id": "13", "name": "南会津町", "personName": "星良栄", "personImage": "13-15.png" },
          { "id": "14", "name": "下郷町", "personName": "佐藤夕夏", "personImage": "14-15.jpg" },
          { "id": "15", "name": "新地町", "personName": "阿部友幸", "personImage": "15-15.jpg" },
          { "id": "16", "name": "桑折町", "personName": "早田圭一郎", "personImage": "16-15.jpg" },
          { "id": "17", "name": "富岡町", "personName": "企画課職員", "personImage": "17-15.JPG" },
          { "id": "18", "name": "会津若松市", "personName": "鈴木", "personImage": "18-15.jpg" },
          { "id": "19", "name": "会津美里町", "personName": "長谷川祥子（はせがわしょうこ）", "personImage": "19-15.jpg" },
          { "id": "21", "name": "須賀川市", "personName": "宗形望", "personImage": "21-15.jpg" },
          { "id": "23", "name": "猪苗代町", "personName": "歌川早苗", "personImage": "23-15.JPG" },
          { "id": "26", "name": "二本松市", "personName": "守岡志のぶ", "personImage": "26-15.JPG" },
          { "id": "27", "name": "白河市", "personName": "企画政策課・佐藤", "personImage": "27-15.jpeg" },
          { "id": "29", "name": "国見町", "personName": "横山裕子", "personImage": "29-15.jpg" },
          { "id": "32", "name": "柳津町", "personName": "小島", "personImage": "32-15.JPG" },
          { "id": "33", "name": "田村市", "personName": "石井聡子", "personImage": "33-15.jpeg" },
        ],
      },
    },
  },
  {
    floor: 1,
    key: "workingStartBussiness",
    modal: {
      content: {
        type: "working",
        title: "自分で仕事をつくりたい",
        icon: workingGirlTitle,
        advisors: [
          { "id": "3", "name": "大玉村", "personName": "増子光", "personImage": "3-15.JPG" },
          { "id": "4", "name": "本宮市", "personName": "佐藤英之", "personImage": "4-15.JPG" },
          { "id": "5", "name": "南相馬市", "personName": "鈴木三貴子", "personImage": "5-15.jpg" },
          { "id": "8", "name": "福島市", "personName": "米尾啓之", "personImage": "8-15.jpg" },
          { "id": "9", "name": "湯川村", "personName": "大越惇", "personImage": "9-15.JPEG" },
          { "id": "10", "name": "西会津町。", "personName": "齋藤淳", "personImage": "10-15.jpg" },
          { "id": "12", "name": "三春町", "personName": "伊本絵里", "personImage": "12-15.JPG" },
          { "id": "13", "name": "南会津町", "personName": "星良栄", "personImage": "13-15.png" },
          { "id": "16", "name": "桑折町", "personName": "早田圭一郎", "personImage": "16-15.jpg" },
          { "id": "17", "name": "富岡町", "personName": "企画課職員", "personImage": "17-15.JPG" },
          { "id": "18", "name": "会津若松市", "personName": "鈴木", "personImage": "18-15.jpg" },
          { "id": "19", "name": "会津美里町", "personName": "長谷川祥子（はせがわしょうこ）", "personImage": "19-15.jpg" },
          { "id": "20", "name": "鏡石町", "personName": "石井秀樹", "personImage": "20-15.JPG" },
          { "id": "21", "name": "須賀川市", "personName": "宗形望", "personImage": "21-15.jpg" },
          { "id": "22", "name": "浪江町", "personName": "菅野孝明：（一社）まちづくりなみえ", "personImage": "22-15.JPG" },
          { "id": "23", "name": "猪苗代町", "personName": "歌川早苗", "personImage": "23-15.JPG" },
          { "id": "25", "name": "矢吹町", "personName": "鈴木徳人", "personImage": "25-15.jpeg" },
          { "id": "27", "name": "白河市", "personName": "企画政策課・佐藤", "personImage": "27-15.jpeg" },
          { "id": "28", "name": "郡山市", "personName": "橋本真寿", "personImage": "28-15.jpg" },
          { "id": "29", "name": "国見町", "personName": "横山裕子", "personImage": "29-15.jpg" },
          { "id": "32", "name": "福島県柳津町", "personName": "小島", "personImage": "32-15.JPG" },
          { "id": "33", "name": "田村市", "personName": "石井聡子", "personImage": "33-15.jpeg" },
        ],
      },
    },
  },
  {
    floor: 1,
    key: "workingForLocals",
    modal: {
      content: {
        type: "working",
        title: "地域と関わる仕事がしたい",
        icon: workingGirlTitle,
        advisors: [
          { "id": "3", "name": "大玉村", "personName": "増子光", "personImage": "3-15.JPG" },
          { "id": "5", "name": "南相馬市", "personName": "鈴木三貴子", "personImage": "5-15.jpg" },
          { "id": "6", "name": "伊達市", "personName": "小林夫妻", "personImage": "6-15.jpg" },
          { "id": "8", "name": "福島市", "personName": "米尾啓之", "personImage": "8-15.jpg" },
          { "id": "9", "name": "湯川村", "personName": "大越惇", "personImage": "9-15.JPEG" },
          { "id": "10", "name": "西会津町。", "personName": "齋藤淳", "personImage": "10-15.jpg" },
          { "id": "11", "name": "只見町", "personName": "吉津瑞穂", "personImage": "11-15.jpg" },
          { "id": "12", "name": "三春町", "personName": "伊本絵里", "personImage": "12-15.JPG" },
          { "id": "13", "name": "南会津町", "personName": "星良栄", "personImage": "13-15.png" },
          { "id": "14", "name": "下郷町", "personName": "佐藤夕夏", "personImage": "14-15.jpg" },
          { "id": "16", "name": "桑折町", "personName": "早田圭一郎", "personImage": "16-15.jpg" },
          { "id": "17", "name": "富岡町", "personName": "企画課職員", "personImage": "17-15.JPG" },
          { "id": "18", "name": "会津若松市", "personName": "鈴木", "personImage": "18-15.jpg" },
          { "id": "19", "name": "会津美里町", "personName": "長谷川祥子（はせがわしょうこ）", "personImage": "19-15.jpg" },
          { "id": "20", "name": "鏡石町", "personName": "石井秀樹", "personImage": "20-15.JPG" },
          { "id": "21", "name": "須賀川市", "personName": "宗形望", "personImage": "21-15.jpg" },
          { "id": "22", "name": "浪江町", "personName": "菅野孝明：（一社）まちづくりなみえ", "personImage": "22-15.JPG" },
          { "id": "23", "name": "猪苗代町", "personName": "歌川早苗", "personImage": "23-15.JPG" },
          { "id": "25", "name": "矢吹町", "personName": "鈴木徳人", "personImage": "25-15.jpeg" },
          { "id": "26", "name": "二本松市", "personName": "守岡志のぶ", "personImage": "26-15.JPG" },
          { "id": "27", "name": "白河市", "personName": "企画政策課・佐藤", "personImage": "27-15.jpeg" },
          { "id": "28", "name": "郡山市", "personName": "橋本真寿", "personImage": "28-15.jpg" },
          { "id": "29", "name": "国見町", "personName": "横山裕子", "personImage": "29-15.jpg" },
          { "id": "32", "name": "福島県柳津町", "personName": "小島", "personImage": "32-15.JPG" },
          { "id": "33", "name": "田村市", "personName": "石井聡子", "personImage": "33-15.jpeg" },
        ],
      },
    },
  },
  {
    floor: 1,
    key: "workingIT",
    modal: {
      content: {
        type: "working",
        title: "ITスキルを活かしたい",
        icon: workingGirlTitle,
        advisors: [
          { "id": "8", "name": "福島市", "personName": "米尾啓之", "personImage": "8-15.jpg" },
          { "id": "12", "name": "三春町", "personName": "伊本絵里", "personImage": "12-15.JPG" },
          { "id": "17", "name": "富岡町", "personName": "企画課職員", "personImage": "17-15.JPG" },
          { "id": "18", "name": "会津若松市", "personName": "鈴木", "personImage": "18-15.jpg" },
          { "id": "20", "name": "鏡石町", "personName": "石井秀樹", "personImage": "20-15.JPG" },
          { "id": "21", "name": "須賀川市", "personName": "宗形望", "personImage": "21-15.jpg" },
          { "id": "23", "name": "猪苗代町", "personName": "歌川早苗", "personImage": "23-15.JPG" },
          { "id": "27", "name": "白河市", "personName": "企画政策課・佐藤", "personImage": "27-15.jpeg" },
        ],
      },
    },
  },
];
export default Working;
