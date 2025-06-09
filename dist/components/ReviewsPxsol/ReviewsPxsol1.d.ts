interface ReviewSettings {
    showAverage: boolean;
    showDate: boolean;
    showUserName: boolean;
    showScores: {
        service: boolean;
        building: boolean;
        staff: boolean;
        cleanliness: boolean;
        comfort: boolean;
        location: boolean;
        facilities: boolean;
        value: boolean;
    };
    maxReviews: number;
    minScore: number;
}
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
interface ReviewsPxsolProps {
    Title?: ContentProps;
    Text?: ContentProps;
    idPos?: ContentProps;
    token?: string;
    "Review Settings"?: {
        name: string;
        type: string;
        dataType: string;
        content: ReviewSettings;
        styleData: Record<string, any>;
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
export declare const ReviewsPxsol1: React.FC<ReviewsPxsolProps>;
export default ReviewsPxsol1;
