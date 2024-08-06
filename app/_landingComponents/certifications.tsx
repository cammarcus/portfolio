import Image from "next/image";

export default function Certifications() {
    return (
        <div className="flex flex-row justify-start">
            <div className='w-32 h-32 mr-4'>
                <div className="relative w-full h-full">
                    <Image
                        src="/AWS_ccp.png"
                        alt="CCP Cert"
                        quality={100}
                        fill
                        priority
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
            <div className='w-32 h-32'>
                <div className="relative w-full h-full">
                    <Image
                        src="/AWS_dev_assoc.png"
                        alt="CCP Cert"
                        quality={100}
                        fill
                        priority
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
}
