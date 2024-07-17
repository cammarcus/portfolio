import Image from "next/image";
import Link from "next/link";

export default function Misc() {

    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-between">
                        <div>
                            <p className="font-bold text-subtitle">Hopkins Insider Article</p>
                            <Link href={'https://apply.jhu.edu/hopkins-insider/from-classmates-to-co-founders-my-experience-launching-a-business-at-hopkins/'} target="_blank">
                                <p className="text-md underline">visit</p>
                            </Link>
                        </div>
                        {/* <p>Image</p> */}
                    </div>
                    {/* <p>Image</p> */}
                </div>
                <div className="text-description mt-2">
                    <p>An article about my experience building EscapeGoat, my startup idea that empowers travel content creators, as well as working at the PAVA center, the Johns Hopkins Center for entrepeneurship.</p>
                </div>
            </div>
        </div>
    );
}
