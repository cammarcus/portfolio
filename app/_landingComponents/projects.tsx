import Image from "next/image";

export default function Projects() {
    return (
        <div>

            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <p className="text-subtitle">The True Price of Mocha</p>
                    <p>Image</p>
                </div>
                <div className="text-description">
                    <p>Description</p>
                </div>
            </div>
            {/* <div>
                <p>Groops</p>
            </div>
            <div>
                <p>Dijkstras Word Path</p>
            </div>
            <div>
                <p>EscapeGoat</p>
            </div> */}
        </div>
    );
}
