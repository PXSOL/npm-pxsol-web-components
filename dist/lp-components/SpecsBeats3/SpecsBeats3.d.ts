import React from "react";
import 'remixicon/fonts/remixicon.css';
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
export interface ISpecItem {
    iconNameClass: IFlatTextContent;
    specTitle: IFlatTextContent;
    specDescription: IFlatTextContent;
}
export interface IGroupSpecs {
    name: string;
    type: "group";
    content: ISpecItem[];
}
export interface IProps {
    titleHero: IFlatTextContent;
    imgSection: IImageContent;
    groupSpecs: IGroupSpecs;
}
export declare const SpecsBeats3: React.FC<IProps>;
export default SpecsBeats3;
