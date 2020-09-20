import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Image from "@/components/form/image";

import { ResidentCreater } from "@/app/resident/residentCreater";
import RegidentsDefinitions from "../resident/data";
import LinkIconsDefinitions from "../linkIcon/data";
import Icon from "../resident/icon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    image: {
      width: "100%",
    },
    icon: {
      position: "absolute",
    },
  })
);

interface IFloorProps {
  number: number;
  visual: string;
  openedModal: string | null;
  openModal: (modalKey: string) => void;
  closeModal: () => void;
}
const Floor = React.memo(
  React.forwardRef((props: IFloorProps, ref: React.Ref<HTMLDivElement>) => {
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

    return (
      <Grid container className={classes.root} ref={ref}>
        <Image src={props.visual} className={classes.image} />
        {residents}
        {linkIcons}
      </Grid>
    );
  })
);
export default Floor;
