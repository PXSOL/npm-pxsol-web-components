import React from "react";
export interface IFlatTextContent {
    name: string;
    type: "title";
    dataType: "flatText";
    content: string;
}
export interface IImageContent {
    name: string;
    type: "imageSrc";
    imageSrc: string;
}
export interface ICtaButtonContent {
    name: string;
    type: "ctaButton";
    content: {
        textButton: string;
        link: string;
    };
}
export interface ICtaItem {
    ctaButtonHero: ICtaButtonContent;
}
export interface IGroupCta {
    name: string;
    type: "group";
    content: ICtaItem[];
}
export interface IProps {
    imgLogoFooter: IImageContent;
    titleColumn1: IFlatTextContent;
    groupColumn1: IGroupCta;
    titleColumn2: IFlatTextContent;
    groupColumn2: IGroupCta;
    groupSocialIcons: IGroupCta;
    copyright: IFlatTextContent;
}
export declare const FooterBeats3: React.FC<IProps>;
export default FooterBeats3;
