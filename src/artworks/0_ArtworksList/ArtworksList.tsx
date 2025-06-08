import { ReactNode } from "react";
import { EArtworkTags } from "./artworkTags.ts";
import { ColorModel, Cube, YinYang, AtomModel, EvilEye, CameraShutter, Pokeball } from "./lazyLoad.ts";

interface ILink {
    name: string;
    href: string;
}

export interface IArtworkItem {
    component: ReactNode;
    title: string;
    description: string;
    gitHubName: string;
    tags?: EArtworkTags[] | string[];
    backgroundColor?: `#${string}`; // No transparent backgrounds
    textColor?: `#${string}`;
    full?: boolean; // Only use this if you really have no other but to claim more space.
    oneLink?: ILink;
    createdAt: Date;
}

const artworksList: IArtworkItem[] = [
    {
        component: <YinYang />,
        title: "Yin Yang",
        description: "The Symbol of Balance between everything.",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.GRAPHICS, EArtworkTags.ANIMATIONS],
        backgroundColor: "#ffffff",
        textColor: "#000000",
        createdAt: new Date("2024-11-27"),
    },
    {
        component: <ColorModel />,
        title: "Color Model",
        description: "A Color Model that displays all RGB colors and there mixes and the opposite the CMYK Model.",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.SIMPLE, EArtworkTags.ILLUSTRATIONS],
        backgroundColor: "#f8f9fa",
        textColor: "#000000",
        createdAt: new Date("2025-01-06"),
    },
    {
        component: <Cube />,
        title: "3D Cube",
        description: "A never ending, 3D rotating Cube with different Color.",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.THREE_D, EArtworkTags.SHAPES, EArtworkTags.ANIMATIONS],
        backgroundColor: "#597585",
        textColor: "#ffffff",
        createdAt: new Date("2025-01-24"),
    },
    {
        component: <AtomModel />,
        title: "Atom Model",
        description: "A Atom Model of the Silicon Semimetal, a mix between a Rutherford and Bohr model in 3D.",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.COMPLEX, EArtworkTags.THREE_D, EArtworkTags.NATURE, EArtworkTags.ANIMATIONS],
        backgroundColor: "#97bafd",
        textColor: "#000000",
        createdAt: new Date("2025-04-26"),
    },
    {
        component: <EvilEye />,
        title: "Evil Eye",
        description: "Protective charm against harm or bad luck caused by envious or malevolent gazes.",
        gitHubName: "3epge",
        tags: [EArtworkTags.ILLUSTRATIONS, EArtworkTags.ANIMATIONS, EArtworkTags.SIMPLE],
        backgroundColor: "#e4f0fc",
        textColor: "#000000",
        createdAt: new Date("2025-05-02"),
    },
    {
        component: <CameraShutter />,
        title: "Leaf Shutter",
        description:
            "A Leaf Shutter, from a Canon Lens, with Hue circle colors as the individual Leafs instead of black.",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.COMPLEX, EArtworkTags.FILM_SERIES_VIDEOS, EArtworkTags.ANIMATIONS],
        backgroundColor: "#87ceeb",
        textColor: "#000000",
        createdAt: new Date("2025-06-06"),
    },
    {
        component: <Pokeball />,
        title: "Pokéball",
        description: "Ball to catch the famous Pokémon from the Classic Games.",
        gitHubName: "FabDonRixos",
        tags: [EArtworkTags.ILLUSTRATIONS, EArtworkTags.GAMES, EArtworkTags.FILM_SERIES_VIDEOS],
        backgroundColor: "#a7ecab",
        textColor: "#000000",
        createdAt: new Date("2025-06-08"),
    },
];

export default artworksList;
