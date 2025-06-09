import React from "react";
import "../reset.css";
interface HeroProps {
    Title?: {
        content: string;
        styleData: {
            titleColor: {
                styleContent: string;
            };
            titleSize: {
                styleContent: string;
            };
        };
        type: string;
        dataType: string;
        name: string;
        _id?: string;
    };
    Text?: {
        content: string;
        styleData: {
            titleColor: {
                styleContent: string;
            };
            titleSize: {
                styleContent: string;
            };
        };
        type: string;
        dataType: string;
        name: string;
        _id?: string;
    };
    "Cta button"?: {
        content: {
            textButton: string;
            link: string;
        };
        styleData: {
            textColor: {
                styleContent: string;
            };
            backgroundColor: {
                styleContent: string;
            };
            buttonTextSize: {
                styleContent: string;
            };
        };
        type: string;
        dataType: string;
        name: string;
        _id?: string;
    };
    "Main image"?: {
        imageSrc: string;
        content: string;
        styleData: {
            filterImage: {
                name: string;
                styleContent: string;
                styleType: string;
                value: Array<{
                    name: string;
                    value: string;
                }>;
            };
            imageWidth?: {
                styleContent: string;
            };
            imageHeight?: {
                styleContent: string;
            };
        };
        type: string;
        dataType: string;
        name: string;
        _id?: string;
    };
    Section?: {
        content: string;
        styleData: {
            backgroundColor: {
                styleContent: string;
            };
            margin: {
                styleContent: string;
            };
            padding: {
                styleContent: string;
            };
            borderRadius: {
                styleContent: string;
            };
        };
        type: string;
        dataType: string;
        name: string;
        _id?: string;
    };
}
export declare const HeroTravel1: React.FC<HeroProps>;
export default HeroTravel1;
