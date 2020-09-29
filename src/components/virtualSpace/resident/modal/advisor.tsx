import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IsMobileContext } from "@/context/isMobile";
import RoundButton from "@/components/form/roundButton";

const useStylesAdvisor = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "50%",
    },
    li: {
      borderStyle: "solid",
      borderRadius: "4px",
      margin: "5px",
      padding: "10px",
    },
    h3: {
      marginBottom: "10px",
    },
    line: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      marginBottom: "10px",
    },
    person: {
      display: "flex",
      width: (arg: { props: IAdvisorProps; isMobile: boolean }) =>
        arg.isMobile ? "auto" : "250px",
    },
    inCharge: {
      textAlign: "left",
      margin: "10px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
    },
    inChargeLabel: {
      color: "#797979",
      margin: "0",
      marginBottom: "3px",
    },
    image: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      margin: "5px",

      backgroundImage: (arg: { props: IAdvisorProps; isMobile: boolean }) =>
        `url(/image/virtualSpace/advisors/${arg.props.personImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    name: {
      marginTop: "5px",
    },
    button: {},
    // Override MuiButton-root
    buttonRoot: {
      borderRadius: "30px",
      backgroundColor: (arg: { props: IAdvisorProps; isMobile: boolean }) =>
        arg.props.color,
      borderBottom: (arg: { props: IAdvisorProps; isMobile: boolean }) =>
        `solid 3px ${arg.props.colorDark}`,
      "&:hover": {
        backgroundColor: (arg: { props: IAdvisorProps; isMobile: boolean }) =>
          arg.props.colorDark,
        boxShadow: "none",
      },
    },
    // Override MuiButton-contained
    buttonContained: {
      color: "#ffffff",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
  })
);
export interface IAdvisorProps {
  name: string;
  id: string;
  personName: string;
  personImage: string;
  color: string;
  colorDark: string;
}
const Advisor: React.FC<IAdvisorProps> = (props) => {
  const isMobileContext = useContext(IsMobileContext);
  const classes = useStylesAdvisor({ props: props, isMobile: isMobileContext });
  return (
    <div className={classes.wrap}>
      <li className={classes.li} style={{ borderColor: props.color }}>
        <Typography variant="h3" className={classes.h3}>
          {props.name}
        </Typography>
        <div className={classes.line}>
          <div className={classes.image} />
          <div className={classes.inCharge}>
            <Typography className={classes.inChargeLabel} variant="body2">
              担当
            </Typography>
            <Typography className={classes.name}>{props.personName}</Typography>
          </div>
        </div>
        <RoundButton
          variant="contained"
          classes={{
            root: classes.buttonRoot,
            contained: classes.buttonContained,
          }}
          onClick={() =>
            window.open(
              `https://needyou.jp/g/fukushima-kurashi-shigoto/ex/${props.id}`
            )
          }
        >
          個別相談
        </RoundButton>
      </li>
    </div>
  );
};
export default Advisor;
