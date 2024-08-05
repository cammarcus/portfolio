import Image from "next/image";

export default function Header() {
  return (
    <div className="text-gray-800 py-6 px-4 flex flex-col items-center">
      <div className="text-center">
        <div>
        <p className="text-4xl font-bold mb-2">Cameron Marcus</p>
        </div>
        <div className="mt-8">
        <p className="text-xl mt-2 max-w-4xl mx-auto">
          Full-Stack Developer at Essent Guaranty with expertise in React, Python, and AWS, leveraging a strong foundation in applied mathematics and computer science from Johns Hopkins University. Currently working on "The True Price of a Mocha," a project combining technology with sustainability to drive meaningful change.
        </p>
        </div>
      </div>
    </div>
  );
}
