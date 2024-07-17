import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex justify-between">
            <div className="flex flex-row justify-start">
                <div className="p-4">
                    <Link href={`https://www.linkedin.com/in/cameron-marcus/`} target="_blank">
                        <FaLinkedin className="text-2xl" />
                    </Link>
                </div>
                <div className="p-4">
                    <Link href={`mailto: cammarcus19@gmail.com`} target="_blank">
                        <MdOutlineEmail className="text-2xl" />
                    </Link>
                </div>

            </div>
            <div>
                <div>
                    <Link href={`https://docs.google.com/document/d/1x_v54z5ZSMY95qXS9h7Nc3y8gqoLBF8I/edit`} target="_blank">
                        <p>Resume</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
