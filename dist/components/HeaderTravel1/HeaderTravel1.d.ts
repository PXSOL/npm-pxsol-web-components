import React from "react";
import "../reset.css";
interface HeaderProps {
    buttonGroup?: {
        content: Array<{
            content?: {
                textButton: string;
                link: string;
            };
        }>;
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
export declare const HeaderTravel1: React.FC<HeaderProps>;
export default HeaderTravel1;
