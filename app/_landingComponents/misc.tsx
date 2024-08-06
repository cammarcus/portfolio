import Link from "next/link";

export default function Misc() {

    const articleTitle = 'Hopkins Insider Article'
    const articleDescription = 'An article about my experience building EscapeGoat, my startup idea that empowers travel content creators, as well as working at the PAVA center, the Johns Hopkins Center for Entrepreneurship.'
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4">
            <div className="flex-1">
                <p className="font-bold text-xl mb-2">{articleTitle}</p>
                <p className="text-gray-700 mb-4">{articleDescription}</p>
                <Link href={'https://apply.jhu.edu/hopkins-insider/from-classmates-to-co-founders-my-experience-launching-a-business-at-hopkins/'} target="_blank">
                    <p className="text-blue-500 underline hover:text-blue-700 transition-colors">Visit Article</p>
                </Link>
            </div>
        </div>
    );
}
