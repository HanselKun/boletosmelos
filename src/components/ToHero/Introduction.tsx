import Image from "next/image";

export default function Introduction1(){
    return(
        <div className="">
        <Image
        src ="/images/hero/cryton2.jpg"
        alt= "Crypton Hero Image"
        width={200}
        height={200}
        className="object-cover rounded-lg shadow-lg"
        />
    </div>
    );
}