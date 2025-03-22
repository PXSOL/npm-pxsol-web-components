export declare const componentsList: ({
    name: string;
    component: import("react").FunctionComponent<{}>;
    props: {
        titleHero: {
            name: string;
            type: string;
            dataType: string;
            content: string;
        };
        subtitleHero?: undefined;
        groupTextHero?: undefined;
        ctaButtonHero?: undefined;
        videoHero?: undefined;
    };
} | {
    name: string;
    component: import("react").FunctionComponent<{}>;
    props: {
        titleHero: {
            name: string;
            type: string;
            dataType: string;
            content: string;
        };
        subtitleHero: {
            name: string;
            type: string;
            dataType: string;
            content: string;
        };
        groupTextHero: {
            name: string;
            type: string;
            content: {
                dataType: string;
                content: string;
            }[];
        };
        ctaButtonHero: {
            name: string;
            type: string;
            content: {
                textButton: string;
                link: string;
            };
        };
        videoHero: {
            name: string;
            type: string;
            videoSrc: string;
            typeReproduction: string;
        };
    };
} | {
    name: string;
    component: import("react").FunctionComponent<{}>;
    props?: undefined;
} | {
    name: string;
    component: () => import("react/jsx-runtime").JSX.Element;
    props?: undefined;
})[];
