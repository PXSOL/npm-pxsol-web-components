interface ContentProps {
    name: string;
    type: string;
    dataType: string;
    content: string;
    styleData: {
        titleColor?: {
            name: string;
            styleType: string;
            styleContent: string;
        };
        titleSize?: {
            name: string;
            styleType: string;
            styleContent: string;
        };
    };
}
interface PugsPxsolProps {
    Title?: ContentProps;
    Text?: ContentProps;
    idPos?: ContentProps;
    token?: string;
}
export declare const PugsPxsol1: React.FC<PugsPxsolProps>;
export default PugsPxsol1;
