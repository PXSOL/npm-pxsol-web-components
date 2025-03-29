import React from "react";
export interface IBrandItem {
    brandName: {
        name: string;
        type: "title";
        dataType: "flatText";
        content: string;
    };
    imgBrand: {
        name: string;
        type: "imageSrc";
        imageSrc: string;
    };
}
export interface IGroupTextHero {
    name: string;
    type: "group";
    content: IBrandItem[];
}
export interface IProps {
    groupTextHero: IGroupTextHero;
}
export declare const BrandsBeats3: React.FC<IProps>;
export default BrandsBeats3;
