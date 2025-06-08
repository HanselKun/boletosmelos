import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function mis_BoletosPage() {
    return(
        <div>
            <Card className="bg-neutral-900 border border-gray-700">
        <CardHeader className="items-center">
            <CardTitle className="text-xl text-white">Mis Boletos</CardTitle>
        </CardHeader>
      <CardContent>
        <div className="space-y-4 text-white">
          <div className="flex">
            <form className="w-full">
                <div className="md:grid-cols-2">
                    <Label htmlFor="email">Correo electrónico:</Label>
                    <Input 
                        id="email"
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
                        >
                    </Input>

                <Label htmlFor="email">Número de Télefono:</Label>
                <Input 
                    id="email"
                    type="email"
                    placeholder="Ingrese su télefono de contacto"
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
                    ></Input>
                </div>
                
            </form>
          </div>
        </div>
      </CardContent>
        <CardFooter  className="flex justify-center mt-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                Buscar mis boletos
            </Button>
        </CardFooter>
    </Card>

    <Separator className="my-6 bg-neutral-700" />
        <div>
            <p>Aquí se mostrarían los boletos obtenidos</p>
        </div>
    {        /* Aquí se mostrarían los boletos obtenidos */}

        </div>
    );  
}