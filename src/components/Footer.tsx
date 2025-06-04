import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
    return(
        <div>
            <footer>
                <Separator className="my-8 bg-neutral-700"/>
                <div className="px-10 py-4">
                     <div className="flex h-5 items-center justify-between space-x-4 text-sm">
                        <div className="">
                            <h1>Redes Sociales</h1>
                            <Link href="/" className="py-2 text-neutral-500 hover:text-orange-400">
                                <h1>Instragram</h1>
                            </Link>
                            <Link href="/" className="text-neutral-500 hover:text-orange-400">
                                <h1>Meta</h1>
                            </Link>
                            <Link href="/" className="text-neutral-500 hover:text-orange-400">
                                <h1>X</h1>
                            </Link>
                        </div>
                        <div>
                            <h1>Preguntas frecuentes</h1>
                            <Link href= "/faq" className="text-neutral-500 hover:text-orange-400">
                            asdsad
                            </Link>
                        </div>
                        <div>
                            <h1>Contacto</h1>
                            <Link href= "/faq" className="text-neutral-500 hover:text-orange-400">
                            asdsad
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
