import Image from "next/image";

export default function Introduction1(){
    return(
        <div className="px-4">
        <Image
        src ="/images/hero/videoprueba.gif"
        alt= "Crypton Hero Image"
        width={200}
        height={10}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
    </div>
    );
}