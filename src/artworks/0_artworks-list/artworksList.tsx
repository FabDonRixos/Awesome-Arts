import { ReactNode } from "react";
import { EArtworkTags } from "./artworkTags.ts";
import YinYang from "../YinYang/YinYang.tsx";

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
];

export default artworksList;
