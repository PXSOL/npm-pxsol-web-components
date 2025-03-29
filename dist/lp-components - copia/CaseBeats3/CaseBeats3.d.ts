import React from "react";
export interface IFlatTextContent {
    name: string;
    type: "title" | "subtitle";
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
export interface IProps {
    titleHero: IFlatTextContent;
    imgSection: IImageContent;
    TextSection: IFlatTextContent;
    ctaButtonHero: ICtaButtonContent;
}
export declare const CaseBeats3: React.FC<IProps>;
export default CaseBeats3;
