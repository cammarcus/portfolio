import Image from "next/image";

type ComponentProps = {
    title: string,
    content: React.ReactNode;
}

export default function CategoryContent({ title, content } : ComponentProps) {
    return (
        <div className="">
            <div>
                <p className="text-2xl">{title}</p>
            </div>
            <div className="p-6">
                {content}
            </div>
        </div>
    );
}
