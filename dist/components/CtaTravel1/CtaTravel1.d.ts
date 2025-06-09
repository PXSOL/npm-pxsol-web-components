import React from "react";
import "../reset.css";
interface CtaProps {
    Section?: {
        content: string;
        styleData: {
            backgroundColor: {
                styleContent: string;
                backgroundType?: string;
                gradientDirection?: string;
                gradientShape?: string;
                gradientColors?: Array<{
                    color: string;
                    position: string;
                }>;
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
export declare const CtaTravel1: React.FC<CtaProps>;
export default CtaTravel1;
