import React, { useState, useContext } from "react";
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
import PlayView from "@/components/youtube/playView";
import Thumbnails from "@/components/youtube/thumbnails";

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
  const [videoId, setVideoId] = useState<string | undefined>("F5GSa8mc4i8");
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
      title: "テレワーク×○○～地域とつながることで広がる可能性～",
      subtitle: "11月11日（水）",
      start: "19:00",
      end: "20:40",
    },
    {
      title:
        "FPが教える！地方移住するなら知っておきたいお金事情～ふくしまぐらし。の実践者から学ぶ～",
      subtitle: "11月17日（火）",
      start: "19:00",
      end: "20:30",
    },
    {
      title: "転職者に聞く！都市部とは違う！？地方で働くということ",
      subtitle: "11月25日（水）",
      start: "19:15",
      end: "20:45",
    },
    {
      title:
        "子育ての悩み、福島の移住コーディネーター視点で解決！～先輩ママパパの本音もお伝えします～",
      subtitle: "11月29日（日）",
      start: "10:00",
      end: "11:30",
    },
  ].map((p, i) => <Program {...p} key={i} />);

  const LiveWidth = isMobileContext ? Math.round(width * 0.85) : 420;
  const LiveHeight = isMobileContext ? Math.round(LiveWidth * 0.8) : 360;

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
        <PlayView
          videoId={videoId}
          opts={{
            height: `${LiveHeight}px`,
            width: `${LiveWidth}px`,
          }}
        />
        <Thumbnails
          videos={[
            {
              videoId: "F5GSa8mc4i8",
              thumbnail: {
                url: "http://img.youtube.com/vi/F5GSa8mc4i8/mq1.jpg",
                width: 320,
                height: 180,
              },
              videoTitle: "求人票ではわからない、地方企業の魅力",
            },
            {
              videoId: "g9nYRGkNn0g",
              thumbnail: {
                url: "http://img.youtube.com/vi/g9nYRGkNn0g/mq1.jpg",
                width: 320,
                height: 180,
              },
              videoTitle: "ゆるゆるランチタイムトーク",
            },
            {
              videoId: "meauXficQlw",
              thumbnail: {
                url: "http://img.youtube.com/vi/meauXficQlw/mq1.jpg",
                width: 320,
                height: 180,
              },
              videoTitle: "ゆるゆるおやつタイムトーク",
            },
          ]}
          setPlayVideoId={setVideoId}
        />
        <Typography className={classes.h3}>
          「求人票ではわからない、地方企業の魅力」ご視聴後アンケートにご協力をお願いします。
        </Typography>
        <RoundButton
          onClick={() => window.open("https://questant.jp/q/fukushimasankasya")}
          variant="contained"
          color="primary"
          className={classes.buttonReserve}
        >
          アンケートに回答する
        </RoundButton>
        <Typography variant="h3" className={classes.h3}>
          福島くらし＆しごとセミナー
        </Typography>
        <Typography className={classes.h3}>
          Zoomを使用したオンラインセミナー
        </Typography>
        <ul className={classes.programs}>{programs}</ul>
        <div>
          <RoundButton
            onClick={() =>
              window.open(
                "http://www.task-asp.net/cu/eg/lar070009.task?app=202000182"
              )
            }
            variant="contained"
            color="primary"
            className={classes.buttonReserve}
          >
            セミナーに申し込む
          </RoundButton>
        </div>
        <div>
          <RoundButton
            onClick={() =>
              window.open(
                "https://www.pref.fukushima.lg.jp/site/fui/menu-seminar.html"
              )
            }
            variant="contained"
            color="primary"
            className={classes.buttonReserve}
          >
            セミナー情報詳細
          </RoundButton>
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
        <Typography className={classes.subtitleText}>
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
