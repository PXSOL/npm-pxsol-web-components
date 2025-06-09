import React from "react";
import "../reset.css";
interface EngineFormProps {
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
export declare const EngineFormTravel1: React.FC<EngineFormProps>;
export default EngineFormTravel1;
