declare module "*.png";
declare module "*.jpg";
declare module "*.gif";

declare module "@/app/libs/sleep" {
  export var wait: (msec: number) => Promise<void>;
  export var waitRipple: () => Promise<void>;
}
