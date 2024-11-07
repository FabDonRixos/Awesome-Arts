/// <reference types="vite-plugin-svgr/client" />
import { FC, SVGProps } from "react";
import Logo from "./icon/logo.svg?react";
import Linkedin from "./icon/linkedin.svg?react";
import Github from "./icon/github.svg?react";
import Fabian from "./icon/fabian.svg?react";

export type TSvgIcon = FC<SVGProps<SVGSVGElement>>;

export const IconLogo: TSvgIcon = Logo;
export const IconGithub: TSvgIcon = Github;
export const IconLinkedin: TSvgIcon = Linkedin;
export const IconFabian: TSvgIcon = Fabian;
