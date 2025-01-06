import { ReactNode } from "react";
import { EArtworkTags } from "./artworkTags.ts";
import YinYang from "../YinYang/YinYang.tsx";
import ColorModel from "../ColorModel/ColorModel.tsx";

export interface ILink {
    name: string;
    href: string;
}

export interface IArtworkItem {
    component: ReactNode;
    titel: string;
    description: string;
    gitHubName: string;
    tags?: EArtworkTags[] | string[];
    backgroundColor?: `#${string}`; // No transparent backgrounds
    textColor?: `#${string}`;
    full?: boolean; // Only use this if you really have no other but to claim more space.
    oneLink?: ILink;
    editedAt: Date;
}

const artworksList: IArtworkItem[] = [
    {
        component: <YinYang />,
        titel: "Yin Yang",
        description: "The Symbol of Balance between everything",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.GRAPHICS, EArtworkTags.ANIMATIONS],
        backgroundColor: "#fff",
        textColor: "#000",
        editedAt: new Date("2024-11-27"),
    },
    {
        component: <ColorModel />,
        titel: "Color Modal",
        description: "A Color Model that displays all RGB colors and there mixes and the opposite the CMYK Model",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.SIMPLE, EArtworkTags.ILLUSTRATIONS],
        backgroundColor: "#f8f9fa",
        textColor: "#000",
        editedAt: new Date("2025-01-06"),
    },
];

export default artworksList;
