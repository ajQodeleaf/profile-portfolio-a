import { ReactNode } from "react";

type SectionProps = {
    title: string;
    children: ReactNode;
    bgColor?: string;
    borderColor?: string;
    headingTextColor?: string;
};

export const Section = ({
    title,
    children,
    bgColor = "#ffffff",
    borderColor = "#f1f1f1",
    headingTextColor = "#182153" 
}: SectionProps) => {
    return (
        <div
            className="h-auto w-full flex flex-col justify-start items-center font-avenirHeavy"
            style={{ backgroundColor: bgColor }}
        >
            <div
                className="h-24 w-full border-b flex justify-center items-center"
                style={{ borderColor: borderColor, borderBottomWidth: "2px", borderTopWidth: "2px" }}
            >
                <h1 className="font-avenirHeavy" style={{ color: headingTextColor, fontSize: "20px", letterSpacing: "0.2em", }}>{title}</h1>
            </div>
            <div className="flex-grow w-full flex">{children}</div>
        </div>
    );
};
