import Image from "next/image";

type ComponentProps = {
    title: string,
    content: React.ReactNode;
}

export default function CategoryContent({ title, content } : ComponentProps) {
    return (
        <div className="flex flex-col items-center w-full">
            <div>
                <p className="text-2xl">{title}</p>
            </div>
            <div className="p-6 w-full">
                {content}
            </div>
        </div>
    );
}
