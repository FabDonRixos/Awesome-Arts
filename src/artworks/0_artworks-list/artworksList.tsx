import {ReactNode} from "react";
import Template from "../1_Template/Template.tsx"

export interface IArtworkItem {
    component: ReactNode;
    githubName: string;
    oneLink?: string;
}

const artworksList: IArtworkItem[] = [
    {
        component: <Template />,
        githubName: "FabDonRixos",
        oneLink: "https://fabian.li"
    }
]

export default artworksList;