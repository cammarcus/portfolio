import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between p-4 bg-white bg-opacity-75 backdrop-blur-md z-30">
      <div className="flex flex-row">
        <div className="p-2">
          <Link href={`https://www.linkedin.com/in/cameron-marcus/`} target="_blank">
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
        <div className="p-2">
          <Link href={`mailto: cammarcus19@gmail.com`} target="_blank">
            <MdOutlineEmail className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="p-2">
        <Link href={`https://docs.google.com/document/d/1x_v54z5ZSMY95qXS9h7Nc3y8gqoLBF8I/edit`} target="_blank">
          <p className="text-lg font-semibold">Resume</p>
        </Link>
      </div>
    </div>
  );
}
