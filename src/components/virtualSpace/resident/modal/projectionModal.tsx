import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useWindowDimensions } from "@/hooks/windowDimensions";
import RoundButton from "@/components/form/roundButton";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import { BackHistoryContext } from "@/context/backHistory";
import { IsMobileContext } from "@/context/isMobile";
import TalkLive from "@/image/virtualSpace/projection/m_7f_01.png";
import BackButton from "@/components/form/backButton";
import GuestImage1 from "@/image/virtualSpace/projection/guest_1.jpg";
import GuestImage2 from "@/image/virtualSpace/projection/guest_2.jpg";
import GuestImage3 from "@/image/virtualSpace/projection/guest_3.jpg";
import GuestImage4 from "@/image/virtualSpace/projection/guest_4.jpg";
import GuestImage5 from "@/image/virtualSpace/projection/guest_5.jpg";
import GuestImage6 from "@/image/virtualSpace/projection/guest_6.jpg";
import GuestImage7 from "@/image/virtualSpace/projection/guest_7.jpg";
import GuestImage8 from "@/image/virtualSpace/projection/guest_8.jpg";
import GuestImage9 from "@/image/virtualSpace/projection/guest_9.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-paper
    paper: {
      width: "91vw",
      margin: "0",
      maxHeight: "80vh",
      minHeight: "80vh",
      overflowY: "visible",
      top: "-10px",
      pointerEvents: "auto",
      maxWidth: (isMobileContext: boolean) =>
        isMobileContext ? "initial" : "470px",
    },
    // Override MuiDialog-contentRoot
    contentRoot: {
      padding: "5px 10px 20px",
      position: "relative",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "stretch",
    },
    h3: {
      marginTop: "15px",
      marginBottom: "15px",
    },
    image: {
      margin: "5px",
    },
    programs: {
      display: "flex",
      flexFlow: "wrap",
      marginBottom: "30px",
    },
    buttonConcierge: {
      position: "fixed",
      bottom: "30px",
      left: (isMobileContext: boolean) =>
        isMobileContext ? "50%" : "calc(50% + 235px)",
      transform: "translateX(-50%)",
      WebkitTransform: "translateX(-50%)",
      MsTransform: "translateX(-50%)",
      zIndex: 1301,
      width: "150px",
    },
    hr: {
      width: "80px",
      marginBottom: "30px",
      borderWidth: "2px",
      margin: "0 auto",
    },
    guests: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    buttonReserve: {
      margin: "10px auto",
    },
  })
);

export type ProjectionContent = {
  title: string;
  icon: string;
  type: string;
  youtubeDataAPI: {
    key: string;
    q: string;
    channelId: string;
  };
};
export const isProjectionContent = (v: unknown): v is ProjectionContent =>
  v !== null &&
  typeof v === "object" &&
  (v as { type: unknown }).type === "projection";

export interface IProjectionModalProps extends IModalProps {
  content: ProjectionContent;
}
const ProjectionModal: React.FC<IProjectionModalProps> = (props) => {
  const backHistoryContext = useContext(BackHistoryContext);
  const isMobileContext = useContext(IsMobileContext);
  const { width, height } = useWindowDimensions();
  const classes = useStyles(isMobileContext);

  const changeModal = (key: string) => {
    props.closeModal();
    props.handleAnothers.openModal(key);
  };

  const programs = [
    {
      title: "オープニング",
      subtitle: "",
      start: "10:00",
      end: "",
    },
    {
      title: "求人票ではわからない、地方企業の魅力",
      subtitle: "地方での就職セミナー",
      start: "10:10",
      end: "10:45",
    },
    {
      title:
        "都会での仕事にモヤモヤ？？「地方ならではの仕事の流儀」お伝えします！",
      subtitle: "今だからこそ、聞いておきたい！先輩移住者トーク①",
      start: "11:00",
      end: "11:50",
    },
    {
      title: "市町村PR（ランチタイムトーク）",
      subtitle: "",
      start: "12:00",
      end: "12:40",
    },
    {
      title: "サーフィンが繋いでくれた、\n地方満喫ライフとは？",
      subtitle: "今だからこそ、聞いておきたい！先輩移住者トーク②",
      start: "13:00",
      end: "13:50",
    },
    {
      title: "人と人とのつながりで生まれる、\n空き家を通じた地域活性化とは？",
      subtitle: "今だからこそ、聞いておきたい！先輩移住者トーク③",
      start: "14:00",
      end: "14:50",
    },
    {
      title: "市町村PR（おやつタイムトーク）",
      subtitle: "",
      start: "15:00",
      end: "15:40",
    },
    {
      title: "終了",
      subtitle: "",
      start: "",
      end: "17:00",
    },
  ].map((p, i) => <Program {...p} key={i} />);

  const LiveWidth = isMobileContext ? Math.round(width * 0.85) : 420;

  return (
    <React.Fragment>
      <Modal
        {...props}
        headerColor={"#AE3345"}
        onEnter={() =>
          backHistoryContext.push(() => {
            props.handleAnothers.openModal(props.modalKey);
          })
        }
        headerIcon={props.content.icon}
        classes={{ paper: classes.paper }}
        classesContent={{ root: classes.contentRoot }}
      >
        <Typography variant="h3" className={classes.h3}>
          {props.content.title}
        </Typography>
        <hr className={classes.hr} />
        <Typography className={classes.h3}>
          トークライブや自治体関連動画をチェック
        </Typography>
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffukushima.furusato%2Fvideos%2F422647588725249%2F&width=${LiveWidth}`}
          width={LiveWidth}
          height="360"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          // allowTransparency={true}
          allowFullScreen={true}
        />
        <RoundButton
          onClick={() => window.open("https://questant.jp/q/fukushima_yoyaku")}
          variant="contained"
          color="primary"
          className={classes.buttonReserve}
        >
          オンライン参加に予約する
        </RoundButton>
        <Typography variant="h3" className={classes.h3}>
          プログラム
        </Typography>
        <ul className={classes.programs}>{programs}</ul>
        <Typography variant="h3" className={classes.h3}>
          ゲスト
        </Typography>
        <GuestLabel text={"地方での就職セミナー"} />
        <Typography variant="h3" style={{ marginBottom: "10px" }}>
          求人票ではわからない、地方企業の魅力
        </Typography>
        <Typography style={{ marginBottom: "20px" }}>
          県内企業に自ら赴き、直接経営者や社員からお話しを伺っている金内さんだからこそ知る地方企業の魅力を伺います！
        </Typography>
        <div className={classes.guests}>
          <Guest
            image={GuestImage1}
            role={"ゲスト"}
            name={"金内　正"}
            job={"一般社団法人\nキャリア支援機構"}
          />
          <Guest
            image={GuestImage2}
            role={"ファシリテーター"}
            name={"大宮　美咲"}
            job={"コーディネーター\nキャリアコンサルタント"}
          />
        </div>
        <GuestLabel text={"先輩移住者トーク①"} />
        <Typography variant="h3" style={{ marginBottom: "10px" }}>
          都会での仕事にモヤモヤ？？
          <br />
          「地方ならではの仕事の流儀」お伝えします！
        </Typography>
        <Typography style={{ marginBottom: "20px" }}>
          本業と副業という区切りではない、複数の仕事をこなすゲストのお２人から、仕事と暮らしがつながる「地方ならではの仕事の流儀」や新しい働き方についてお話しを伺います。
        </Typography>
        <div className={classes.guests}>
          <Guest
            image={GuestImage5}
            role={"ゲスト"}
            name={"渡部　允道"}
            job={"一般社団法人\nブルーバード"}
          />
          <Guest
            image={GuestImage6}
            role={"ゲスト"}
            name={"上神田　健太"}
            job={"株式会社\n家守舎桃ノ音アカリ"}
          />
        </div>
        <GuestLabel text={"先輩移住者トーク②"} />
        <Typography variant="h3" style={{ marginBottom: "10px" }}>
          サーフィンがつないでくれた、
          <br />
          地方満喫ライフとは？
        </Typography>
        <Typography style={{ marginBottom: "20px" }}>
          自称「つながりメーカー」大和田さんが繋いだ、サーフィン女子後藤さんと南相馬市の海。地方で実現したいリア充な暮らしを伺います。
        </Typography>
        <div className={classes.guests}>
          <Guest
            image={GuestImage7}
            role={"ゲスト"}
            name={"大和田　智之"}
            job={"南相馬市役所観光交流課\n交流推進係"}
          />
          <Guest
            image={GuestImage8}
            role={"ゲスト"}
            name={"後藤　彩"}
            job={"製薬会社勤務\n毎週末南相馬へ通うサーフィン初心者"}
          />
        </div>
        <GuestLabel text={"先輩移住者トーク③"} />
        <Typography variant="h3" style={{ marginBottom: "10px" }}>
          人と人との繋がりで生まれる、
          <br />
          空き家を通じた地域活性化とは？
        </Typography>
        <Typography style={{ marginBottom: "20px" }}>
          人と人が出会える場所として「ゲストハウス」を運営する拓哉さんと、拓哉さんの師匠である「おせっかいな建設屋」である康平さんが生み出す、人を繋げる空き家再生について伺います。
        </Typography>
        <div className={classes.guests}>
          <Guest
            image={GuestImage3}
            role={"ゲスト"}
            name={"斎藤　拓哉"}
            job={"隠れ家ゲストハウス\n空き家てらす"}
          />
          <Guest
            image={GuestImage4}
            role={"ゲスト"}
            name={"齋藤　康平"}
            job={"wowroom\n空き家てらす"}
          />
        </div>
        <GuestLabel text={"先輩移住者トーク①～③"} />
        <Typography style={{ marginBottom: "20px" }}>
          ライターであり、ご自身も移住者である立場から、それぞれの先輩移住者や地域で暮らす方々のリアルなお話しを聞き出します！
        </Typography>
        <div className={classes.guests}>
          <Guest
            image={GuestImage9}
            role={"ファシリテーター"}
            name={"山根　麻衣子"}
            job={"ライター\nいわき経済新聞編集長"}
          />
        </div>
        <BackButton onClick={props.closeModal} />
      </Modal>
      {props.open && (
        <RoundButton
          onClick={() => {
            props.closeModal();
            props.handleAnothers.openModal("conciergeCounter");
          }}
          variant="contained"
          color="primary"
          className={classes.buttonConcierge}
        >
          総合案内
        </RoundButton>
      )}
    </React.Fragment>
  );
};
export default ProjectionModal;

const useStylesProgram = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%",
    },
    li: {
      width: "100%",
      display: "flex",
      borderTop: "1px solid #000000",
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "10px",
      paddingBottom: "10px",
      "&:nth-child(odd)": {
        backgroundColor: "#fbedef",
      },
      "&:last-child": {
        borderBottom: "1px solid #000000",
      },
    },
    h3: {
      margin: "15px",
    },
    timeTable: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    time: {
      color: "#797979",
    },
    title: {
      flex: 1,
      textAlign: "left",
      marginLeft: "10px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
    },
    titleText: {
      whiteSpace: "pre-wrap",
    },
    subtitleText: {
      letterSpacing: "0",
      fontSize: "10px",
      marginTop: "5px",
      marginBottom: "5px",
      color: "#AE3345",
    },
  })
);

export interface IProgramProps {
  title: string;
  subtitle: string;
  start: string;
  end: string;
}
const Program: React.FC<IProgramProps> = (props) => {
  const classes = useStylesProgram();
  return (
    <li className={classes.li}>
      <div className={classes.timeTable}>
        <Typography variant="body2" className={classes.time}>
          {props.start}
        </Typography>
        <Typography variant="body2" className={classes.time}>
          ～
        </Typography>
        <Typography variant="body2" className={classes.time}>
          {props.end}
        </Typography>
      </div>
      <div className={classes.title}>
        <Typography variant="body2" className={classes.subtitleText}>
          {props.subtitle}
        </Typography>
        <Typography className={classes.titleText}>{props.title}</Typography>
      </div>
    </li>
  );
};

const useStylesGuestLabel = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      border: "solid 2px #AE3345",
      borderRadius: "18px",
      padding: "7px",
      color: "#AE3345",
      fontWeight: 600,
      marginBottom: "10px",
    },
  })
);
export interface IGuestLabelProps {
  text: string;
}
const GuestLabel: React.FC<IGuestLabelProps> = (props) => {
  const classes = useStylesGuestLabel();
  return <div className={classes.text}>{props.text}</div>;
};

const useStylesGuest = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "30px",
      width: "45%",
    },
    image: {
      marginBottom: "10px",
    },
    role: {
      marginBottom: "10px",
    },
    name: {
      // fontWeight: 600,
      marginBottom: "10px",
    },
    job: {
      whiteSpace: "pre-wrap",
    },
  })
);
export interface IGuestProps {
  image: string;
  role: string;
  name: string;
  job: string;
}
const Guest: React.FC<IGuestProps> = (props) => {
  const classes = useStylesGuest();
  return (
    <div className={classes.root}>
      <Image src={props.image} className={classes.image} />
      <Typography className={classes.role}>{props.role}</Typography>
      <Typography className={classes.name} variant="h3">
        {props.name}
      </Typography>
      <Typography className={classes.job}>{props.job}</Typography>
    </div>
  );
};
