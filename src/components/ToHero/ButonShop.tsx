import Link from "next/link";
import { Button } from "../ui/button";


export default function ButtonShop() {
    return(
        <div className="items-center justify-center flex bg-neutral-900 w-full">
            <Link href="/shop">
                <Button className="bg-neutral-900 p-6 rounded-2xl  max-w-md mx-auto mt-10 shadow-lg border border-neutral-800 hover:bg-neutral-800 text-white hover:text-orange-400">
                    Adquiere tus boletos y participa por el premio mayor.
                </Button>
            </Link>
            
        </div>
    );
}