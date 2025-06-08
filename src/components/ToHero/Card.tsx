"use client"

import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const unitPrice = 10000
const formatNumber = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

export function NumberCards() {
  const router = useRouter()
  const [customQuantity, setCustomQuantity] = useState(1)

  const fixedOptions = [
    { quantity: 1 },
    { quantity: 5 },
    { quantity: 10 }
  ]

  const handlePurchase = (quantity: number) => {
    router.push(`/compra?quantity=${quantity}`)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
      {/* Cards de opciones fijas */}
      {fixedOptions.map((option, index) => (
        <Card key={index} className="flex flex-col bg-white shadow-sm hover:shadow-md p-0 overflow-hidden">
          <CardHeader className="pb-3 px-6 pt-6">
            <CardTitle className="text-center text-lg font-semibold">
              {option.quantity} {option.quantity === 1 ? 'número' : 'números'} {option.quantity !== 5 ? '' : '+ un boleto extra'}
            </CardTitle>
            <Separator />
          </CardHeader>
          <CardContent className="flex-grow flex flex-col items-center justify-center px-6 pb-6">
            <div className="text-4xl font-bold mb-2 text-black">
              ${formatNumber(option.quantity * unitPrice)}
            </div>
            <div className="text-sm text-gray-500">
              $10.000 por número
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-auto">
            <Button 
              onClick={() => handlePurchase(option.quantity)}
              className="w-full rounded-none py-4 text-base font-semibold bg-orange-400 hover:bg-orange-500 text-white"
            >
              COMPRAR {option.quantity}
            </Button>
          </CardFooter>
        </Card>
      ))}

      {/* Card personalizada */}
      <Card className="flex flex-col bg-white shadow-sm hover:shadow-md p-0 overflow-hidden">
        <CardHeader className="pb-3 px-6 pt-6">
          <CardTitle className="text-center text-lg font-semibold">
            Personalizada
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex-grow space-y-4 px-6 pb-6">
          <div className="space-y-2">
            <div className="text-sm font-medium text-center">
              Elija la cantidad
            </div>
            <div className="flex justify-center items-center gap-2">
              <Input
                type="number"
                min="1"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center h-10 text-base"
              />
              <span>números</span>
            </div>
          </div>
          <Separator />
          <div className="text-center space-y-1">
            <div className="text-4xl font-bold text-black">
              ${formatNumber(customQuantity * unitPrice)}
            </div>
            <div className="text-sm text-gray-500">
              $10.000 por número
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-0 mt-auto">
          <Button 
            onClick={() => handlePurchase(customQuantity)}
            className="w-full rounded-none py-4 text-base font-semibold bg-orange-400 hover:bg-orange-500 text-white"
          >
            COMPRAR {customQuantity}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
export default function PurchasePage() {
  return (
    <div className="container">
      <div className="py-4">
         <h1 className="text-3xl font-bold text-center">Compre sus números</h1>
      <p className="text-neutral-500 text-center text-lg">Por cada 10 boletos adquiridos te obsequiamos uno extra</p>
      </div>
      <NumberCards />
    </div>
  )
}