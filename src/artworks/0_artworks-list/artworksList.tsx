import { ReactNode } from "react";
import { EArtworkTags } from "./artworkTags.ts";
import { ColorModel, Cube, YinYang } from "./lazyLoad.ts";

interface ILink {
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
        backgroundColor: "#ffffff",
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
    {
        component: <Cube />,
        titel: "3D Cube",
        description: "A never ending, 3D rotating Cube with different Color ",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.THREE_D, EArtworkTags.SHAPES, EArtworkTags.ANIMATIONS],
        backgroundColor: "#737c81",
        textColor: "#fff",
        editedAt: new Date("2025-01-24"),
    },
];

export default artworksList;
