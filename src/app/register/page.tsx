import Image from "next/image";
import { RegisterForm } from "./components/Register";

export default function RegisterPage (){
    return(
        <div className="bg-neutral-900 flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
              <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Image
                      src="/images/logo.jpg"
                      alt="Sorteos Rayos Logo"
                      width={24}
                      height={24}
                      className="h-4 w-4"
                    />
                  </div>
                  Sorteos Rayos
                </a>
                <RegisterForm />
              </div>
            </div>
    );
}