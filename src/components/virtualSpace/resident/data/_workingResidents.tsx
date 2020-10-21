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
          {
            id: "1001",
            name: "喜多方市",
            personName: "小林浩紀",
            personImage: "1-15.jpg",
          },
          {
            id: "1003",
            name: "古殿町",
            personName: "郡司和泉",
            personImage: "2-15.jpg",
          },
          {
            id: "1005",
            name: "大玉村",
            personName: "増子光",
            personImage: "3-15.jpg",
          },
          {
            id: "1017",
            name: "昭和村",
            personName: "山内翔吾",
            personImage: "7-15.jpg",
          },
          {
            id: "1021",
            name: "福島市",
            personName: "米尾啓之",
            personImage: "8-15.jpg",
          },
          {
            id: "1025",
            name: "湯川村",
            personName: "大越惇",
            personImage: "9-15.jpg",
          },
          {
            id: "1027",
            name: "西会津町",
            personName: "齋藤淳",
            personImage: "10-15.jpg",
          },
          {
            id: "1029",
            name: "只見町",
            personName: "吉津瑞穂",
            personImage: "11-15.jpg",
          },
          {
            id: "1035",
            name: "三春町",
            personName: "伊本絵里",
            personImage: "12-15.jpg",
          },
          {
            id: "1039",
            name: "南会津町",
            personName: "星良栄",
            personImage: "13-15.jpg",
          },
          {
            id: "1041",
            name: "下郷町",
            personName: "佐藤夕夏",
            personImage: "14-15.jpg",
          },
          {
            id: "1045",
            name: "新地町",
            personName: "阿部友幸",
            personImage: "15-15.jpg",
          },
          {
            id: "1049",
            name: "桑折町",
            personName: "早田圭一郎",
            personImage: "16-15.jpg",
          },
          {
            id: "1053",
            name: "富岡町",
            personName: "企画課職員",
            personImage: "17-15.jpg",
          },
          {
            id: "1055",
            name: "会津若松市",
            personName: "鈴木（左）、渡部（右）",
            personImage: "18-15.jpg",
          },
          {
            id: "1057",
            name: "会津美里町",
            personName: "長谷川祥子",
            personImage: "19-15.jpg",
          },
          {
            id: "1065",
            name: "須賀川市",
            personName: "宗形望",
            personImage: "21-15.jpg",
          },
          {
            id: "1071",
            name: "猪苗代町",
            personName: "歌川早苗",
            personImage: "23-15.jpg",
          },
          {
            id: "1079",
            name: "二本松市",
            personName: "守岡志のぶ",
            personImage: "26-15.jpg",
          },
          {
            id: "1085",
            name: "白河市",
            personName: "企画政策課",
            personImage: "27-15.jpg",
          },
          {
            id: "1089",
            name: "国見町",
            personName: "横山裕子",
            personImage: "29-15.jpg",
          },
          {
            id: "1095",
            name: "柳津町",
            personName: "小島",
            personImage: "32-15.jpg",
          },
          {
            id: "1097",
            name: "田村市",
            personName: "石井聡子",
            personImage: "33-15.jpg",
          },
          {
            id: "1111",
            name: "北塩原村",
            personName: "佐藤雅英",
            personImage: "36-15.jpg",
          },
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
          {
            id: "1005",
            name: "大玉村",
            personName: "増子光",
            personImage: "3-15.jpg",
          },
          {
            id: "1009",
            name: "本宮市",
            personName: "佐藤英之",
            personImage: "4-15.jpg",
          },
          {
            id: "1013",
            name: "南相馬市",
            personName: "鈴木三貴子",
            personImage: "5-15.jpg",
          },
          {
            id: "1021",
            name: "福島市",
            personName: "米尾啓之",
            personImage: "8-15.jpg",
          },
          {
            id: "1025",
            name: "湯川村",
            personName: "大越惇",
            personImage: "9-15.jpg",
          },
          {
            id: "1027",
            name: "西会津町",
            personName: "齋藤淳",
            personImage: "10-15.jpg",
          },
          {
            id: "1035",
            name: "三春町",
            personName: "伊本絵里",
            personImage: "12-15.jpg",
          },
          {
            id: "1039",
            name: "南会津町",
            personName: "星良栄",
            personImage: "13-15.jpg",
          },
          {
            id: "1049",
            name: "桑折町",
            personName: "早田圭一郎",
            personImage: "16-15.jpg",
          },
          {
            id: "1053",
            name: "富岡町",
            personName: "企画課職員",
            personImage: "17-15.jpg",
          },
          {
            id: "1055",
            name: "会津若松市",
            personName: "鈴木（左）、渡部（右）",
            personImage: "18-15.jpg",
          },
          {
            id: "1057",
            name: "会津美里町",
            personName: "長谷川祥子",
            personImage: "19-15.jpg",
          },
          {
            id: "1061",
            name: "鏡石町",
            personName: "石井秀樹",
            personImage: "20-15.jpg",
          },
          {
            id: "1065",
            name: "須賀川市",
            personName: "宗形望",
            personImage: "21-15.jpg",
          },
          {
            id: "1069",
            name: "浪江町",
            personName: "菅野孝明",
            personImage: "22-15.jpg",
          },
          {
            id: "1071",
            name: "猪苗代町",
            personName: "歌川早苗",
            personImage: "23-15.jpg",
          },
          {
            id: "1077",
            name: "矢吹町",
            personName: "鈴木徳人",
            personImage: "25-15.jpg",
          },
          {
            id: "1085",
            name: "白河市",
            personName: "佐藤",
            personImage: "27-15.jpg",
          },
          {
            id: "1087",
            name: "郡山市",
            personName: "橋本真寿",
            personImage: "28-15.jpg",
          },
          {
            id: "1089",
            name: "国見町",
            personName: "横山裕子",
            personImage: "29-15.jpg",
          },
          {
            id: "1095",
            name: "柳津町",
            personName: "小島",
            personImage: "32-15.jpg",
          },
          {
            id: "1097",
            name: "田村市",
            personName: "石井聡子",
            personImage: "33-15.jpg",
          },
          {
            id: "1111",
            name: "北塩原村",
            personName: "佐藤雅英",
            personImage: "36-15.jpg",
          },
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
          {
            id: "1005",
            name: "大玉村",
            personName: "増子光",
            personImage: "3-15.jpg",
          },
          {
            id: "1013",
            name: "南相馬市",
            personName: "鈴木三貴子",
            personImage: "5-15.jpg",
          },
          {
            id: "1015",
            name: "伊達市",
            personName: "小林夫妻",
            personImage: "6-15.jpg",
          },
          {
            id: "1021",
            name: "福島市",
            personName: "米尾啓之",
            personImage: "8-15.jpg",
          },
          {
            id: "1025",
            name: "湯川村",
            personName: "大越惇",
            personImage: "9-15.jpg",
          },
          {
            id: "1027",
            name: "西会津町",
            personName: "齋藤淳",
            personImage: "10-15.jpg",
          },
          {
            id: "1029",
            name: "只見町",
            personName: "吉津瑞穂",
            personImage: "11-15.jpg",
          },
          {
            id: "1035",
            name: "三春町",
            personName: "伊本絵里",
            personImage: "12-15.jpg",
          },
          {
            id: "1039",
            name: "南会津町",
            personName: "星良栄",
            personImage: "13-15.jpg",
          },
          {
            id: "1041",
            name: "下郷町",
            personName: "佐藤夕夏",
            personImage: "14-15.jpg",
          },
          {
            id: "1049",
            name: "桑折町",
            personName: "早田圭一郎",
            personImage: "16-15.jpg",
          },
          {
            id: "1053",
            name: "富岡町",
            personName: "企画課職員",
            personImage: "17-15.jpg",
          },
          {
            id: "1055",
            name: "会津若松市",
            personName: "鈴木（左）、渡部（右）",
            personImage: "18-15.jpg",
          },
          {
            id: "1057",
            name: "会津美里町",
            personName: "長谷川祥子",
            personImage: "19-15.jpg",
          },
          {
            id: "1061",
            name: "鏡石町",
            personName: "石井秀樹",
            personImage: "20-15.jpg",
          },
          {
            id: "1065",
            name: "須賀川市",
            personName: "宗形望",
            personImage: "21-15.jpg",
          },
          {
            id: "1069",
            name: "浪江町",
            personName: "菅野孝明",
            personImage: "22-15.jpg",
          },
          {
            id: "1071",
            name: "猪苗代町",
            personName: "歌川早苗",
            personImage: "23-15.jpg",
          },
          {
            id: "1077",
            name: "矢吹町",
            personName: "鈴木徳人",
            personImage: "25-15.jpg",
          },
          {
            id: "1079",
            name: "二本松市",
            personName: "守岡志のぶ",
            personImage: "26-15.jpg",
          },
          {
            id: "1085",
            name: "白河市",
            personName: "佐藤",
            personImage: "27-15.jpg",
          },
          {
            id: "1087",
            name: "郡山市",
            personName: "橋本真寿",
            personImage: "28-15.jpg",
          },
          {
            id: "1089",
            name: "国見町",
            personName: "横山裕子",
            personImage: "29-15.jpg",
          },
          {
            id: "1095",
            name: "柳津町",
            personName: "小島",
            personImage: "32-15.jpg",
          },
          {
            id: "1097",
            name: "田村市",
            personName: "石井聡子",
            personImage: "33-15.jpg",
          },
          {
            id: "1103",
            name: "IWAKIふるさと誘致センター",
            personName: "鈴木美由紀",
            personImage: "35-15.jpg",
          },
          {
            id: "1111",
            name: "北塩原村",
            personName: "佐藤雅英",
            personImage: "36-15.jpg",
          },
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
          {
            id: "1021",
            name: "福島市",
            personName: "米尾啓之",
            personImage: "8-15.jpg",
          },
          {
            id: "1035",
            name: "三春町",
            personName: "伊本絵里",
            personImage: "12-15.jpg",
          },
          {
            id: "1053",
            name: "富岡町",
            personName: "企画課職員",
            personImage: "17-15.jpg",
          },
          {
            id: "1055",
            name: "会津若松市",
            personName: "鈴木（左）、渡部（右）",
            personImage: "18-15.jpg",
          },
          {
            id: "1061",
            name: "鏡石町",
            personName: "石井秀樹",
            personImage: "20-15.jpg",
          },
          {
            id: "1065",
            name: "須賀川市",
            personName: "宗形望",
            personImage: "21-15.jpg",
          },
          {
            id: "1071",
            name: "猪苗代町",
            personName: "歌川早苗",
            personImage: "23-15.jpg",
          },
          {
            id: "1085",
            name: "白河市",
            personName: "佐藤",
            personImage: "27-15.jpg",
          },
          {
            id: "1111",
            name: "北塩原村",
            personName: "佐藤雅英",
            personImage: "36-15.jpg",
          },
        ],
      },
    },
  },
];
export default Working;
