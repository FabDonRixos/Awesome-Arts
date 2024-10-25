import {ReactNode} from "react";
import Template from "../1_Template/Template.tsx"
import {EArtworkTags} from "./artworkTags.ts";

export interface IArtworkItem {
    component: ReactNode;
    titel: string;
    description: string;
    gitHubName: string;
    tags?: EArtworkTags[] | string[]
    backgroundColor?: `#${string}`;     // No transparent backgrounds
    oneLink?: string;
    editedAt?: Date;
}

const artworksList: IArtworkItem[] = [
    {
        component: <Template />,
        titel: "circle",
        description: "round circle",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.SIMPLE],
        backgroundColor: "#000",
        oneLink: "https://fabian.li",
        editedAt: new Date("2024-10-26")
    },
    {
        component: <Template />,
        titel: "circle",
        description: "round circle",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.SIMPLE],
        backgroundColor: "#000",
        oneLink: "https://fabian.li",
        editedAt: new Date("2024-10-26")
    },
    {
        component: <Template />,
        titel: "circle",
        description: "round circle",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.SIMPLE],
        backgroundColor: "#000",
        oneLink: "https://fabian.li",
        editedAt: new Date("2024-10-26")
    }
]

export default artworksList;