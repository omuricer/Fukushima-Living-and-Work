import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import RoundButton from "@/components/form/roundButton";
import Modal, { IModalProps } from "./index";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import { BackHistoryContext } from "@/context/backHistory";
import { IsMobileContext } from "@/context/isMobile";
import TalkLive from "@/image/virtualSpace/projection/m_7f_01.png";
import BackButton from "@/components/form/backButton";

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
      left: (isMobileContext: boolean) => (isMobileContext ? "50%" : "75%"),
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
      end: "11:40",
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
      start: "14:00",
      end: "14:40",
    },
    {
      title: "人と人とのつながりで生まれる、\n空き家を通じた地域活性化とは？",
      subtitle: "今だからこそ、聞いておきたい！先輩移住者トーク③",
      start: "14:00",
      end: "14:40",
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
      >
        <Typography variant="h3" className={classes.h3}>
          {props.content.title}
        </Typography>
        <hr className={classes.hr} />
        <Typography className={classes.h3}>
          トークライブや自治体関連動画をチェック
        </Typography>
        <Image src={TalkLive} className={classes.image} />
        <Typography variant="h3" className={classes.h3}>
          プログラム
        </Typography>
        <ul className={classes.programs}>{programs}</ul>
        <Typography variant="h3" className={classes.h3}>
          ゲスト
        </Typography>
        <GuestLabel text={"地方での就職セミナー"} />
        <div className={classes.guests}>
          <Guest
            image={"image"}
            name={"金内　正"}
            job={"一般社団法人キャリア支援機構 理事長"}
          />
        </div>
        <GuestLabel text={"先輩移住者トーク①"} />
        <div className={classes.guests}>
          <Guest
            image={"image"}
            name={"斎藤　拓哉"}
            job={"空き家てらす\n隠れ家ゲストハウス"}
          />
          <Guest
            image={"image"}
            name={"齋藤　康平"}
            job={"空き家てらす(株)\nなちゅらる"}
          />
        </div>
        <GuestLabel text={"先輩移住者トーク②"} />
        <div className={classes.guests}>
          <Guest
            image={"image"}
            name={"渡部　允道"}
            job={"ヘルベチカデザイン（株）\nまちの人事部"}
          />
          <Guest
            image={"image"}
            name={"上神田　健太"}
            job={"家守舎桃ノ音アカリ\nFUKUSHIMA BONCHI"}
          />
        </div>
        <GuestLabel text={"先輩移住者トーク③"} />
        <div className={classes.guests}>
          <Guest
            image={"image"}
            name={"大和田　智之"}
            job={"南相馬市役所観光交流課\n交流推進係"}
          />
          <Guest
            image={"image"}
            name={"後藤　彩"}
            job={"南相馬へ\nサーフィンに通う"}
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
      width: "40%",
    },
    image: {
      marginBottom: "10px",
    },
    name: {
      fontWeight: 600,
      marginBottom: "10px",
    },
    job: {
      whiteSpace: "pre-wrap",
    },
  })
);
export interface IGuestProps {
  image: string;
  name: string;
  job: string;
}
const Guest: React.FC<IGuestProps> = (props) => {
  const classes = useStylesGuest();
  return (
    <div className={classes.root}>
      <Image src={props.image} className={classes.image} />
      <Typography className={classes.name}>{props.name}</Typography>
      <Typography className={classes.job}>{props.job}</Typography>
    </div>
  );
};
