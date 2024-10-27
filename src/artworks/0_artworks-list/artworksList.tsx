import {ReactNode} from "react";
import Template from "../0_template/Template.tsx"
import {EArtworkTags} from "./artworkTags.ts";

export interface ILink {
    name: string;
    href: string;
}

export interface IArtworkItem {
    component: ReactNode;
    titel: string;
    description: string;
    gitHubName: string;
    tags?: EArtworkTags[] | string[]
    backgroundColor?: `#${string}`;     // No transparent backgrounds
    full?: boolean;                     // Only use this if you really have no other but to claim more space.
    oneLink?: ILink;
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
        full: true,
        oneLink: {
            name: "fabian.li",
            href: "https://fabian.li"
        },
        editedAt: new Date("2024-10-26")
    },
]

export default artworksList;