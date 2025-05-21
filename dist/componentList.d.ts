export declare const componentsList: ({
    name: string;
    component: (props: any) => import("react/jsx-runtime").JSX.Element;
    props: {
        titleHero: {
            name: string;
            type: string;
            dataType: string;
            content: string;
            styleData: {
                titleColor: {
                    name: string;
                    styleType: string;
                    styleContent: string;
                };
                titleSize: {
                    name: string;
                    styleType: string;
                    styleContent: string;
                };
            };
        };
        textHero: {
            name: string;
            type: string;
            dataType: string;
            content: string;
            styleData: {
                titleColor: {
                    name: string;
                    styleType: string;
                    styleContent: string;
                };
                titleSize: {
                    name: string;
                    styleType: string;
                    styleContent: string;
                };
            };
        };
        ctaButtonHero: {
            name: string;
            type: string;
            dataType: string;
            content: {
                textButton: string;
                link: string;
            };
            styleData: {
                textColor: {
                    name: string;
                    styleType: string;
                    styleContent: string;
                };
                backgroundColor: {
                    name: string;
                    styleType: string;
                    styleContent: string;
                };
                buttonTextSize: {
                    name: string;
                    styleType: string;
                    styleContent: string;
                };
            };
        };
    };
} | {
    name: string;
    component: () => import("react/jsx-runtime").JSX.Element;
    props: {
        titleHero?: undefined;
        textHero?: undefined;
        ctaButtonHero?: undefined;
    };
})[];
