import Image from "next/image";
import Barnav from "../Barnav";
import { Button } from "../ui/button";
import Link from "next/link"
import { LogIn } from 'lucide-react';

export default function Header(){
    return(
          <header className="bg-black text-white">
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href = "/">
                    <Image
                    className="rounded-full"
                    src = "/images/logo.jpg"
                    alt = "Logo"
                    height={65}
                    width={65}
                    />  
                </Link>
                <Barnav />
                 <Link href="/login">
                    <Button variant="ghost" className="text-lg text-white hover:text-orange-400">
                        <LogIn className="mr-1 h-5 w-5" />
                        Login
                    </Button>
                </Link>
            </div>
        </header>
    );
}