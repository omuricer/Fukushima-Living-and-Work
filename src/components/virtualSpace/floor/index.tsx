import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Image from "@/components/form/image";

import { ResidentCreater } from "@/app/resident/residentCreater";
import RegidentsDefinitions from "../resident/data";
import LinkIconsDefinitions from "../linkIcon/data";
import Icon from "../resident/icon";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    image: {
      width: "100%",
    },
    image2: {
      width: "100%",
      position: "absolute",
      pointerEvents: 'none',
    },
    icon: {
      position: "absolute",
    },
    popper: {
      left: "-10vw!important",
    },
  })
);

interface IFloorProps {
  number: number;
  visual: string;
  visual2?: string;
  openedModal: string | null;
  openModal: (modalKey: string) => void;
  closeModal: () => void;
  toolTipTitle: string,
  toolTipText: string,
}
const Floor: React.FC<IFloorProps> = React.memo((props) => {
  const classes = useStyles();

  // Residentコンポーネントを生成
  const residentCreater = new ResidentCreater({
    openModal: props.openModal,
  });
  const residents: JSX.Element[] = RegidentsDefinitions.filter(
    (d) => d.floor === props.number + 1
  ).map((d, index: number) => {
    return residentCreater
      .create(index.toString(), d.key, d.icon ?? null, d.modal)
      .element(
        props.openedModal == d.key,
        () => props.openModal(d.key),
        () => props.closeModal()
      );
  });

  // linkのみIconコンポーネントを生成
  const linkIcons: JSX.Element[] = LinkIconsDefinitions.filter(
    (i) => i.floor === props.number + 1
  ).map((i, index: number) => {
    return <Icon image={i.icon.image} positionX={i.icon.positionX} positionY={i.icon.positionY} onClick={i.icon.onclick} />;
  });

  const visual2 = (props.visual2) ? <Image src={props.visual2} className={classes.image2} /> : <React.Fragment />

  return (
    <Grid container className={classes.root}>
      <Tooltip title={<React.Fragment>
        <Typography variant="h3" color="textSecondary">{props.toolTipTitle}</Typography>
        <Typography color="textSecondary">{props.toolTipText}</Typography>
      </React.Fragment>} placement="right-start" classes={{ popper: classes.popper }}>
        <Image src={props.visual} className={classes.image} />
      </Tooltip>
      {residents}
      {linkIcons}
      {visual2}
    </Grid>
  );
});
export default Floor;
