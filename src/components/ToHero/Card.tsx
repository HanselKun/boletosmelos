"use client"
import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import * as React from "react"
import Link from "next/link"

const fixedOptions = [
  { quantity: 1, price: 10000 },
  { quantity: 5, price: 50000 },
  { quantity: 10, price: 100000 }
]

export function NumberCards() {
  const [customQuantity, setCustomQuantity] = React.useState(1)
  const customPrice = customQuantity * 10000

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
      {/* Cards de opciones fijas (1, 5, 10) */}
      {fixedOptions.map((option, index) => (
        <Card key={index} className="flex flex-col  bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow p-0 overflow-hidden"> {/* Added overflow-hidden */}
          <CardHeader className="pb-3 px-6 pt-6"> {/* Added padding horizontal */}
            <CardTitle className="text-center text-lg font-semibold text-gray-800 dark:text-gray-100">
              {option.quantity} {option.quantity === 1 ? 'número' : 'números'}
            </CardTitle>
            <Separator className="bg-gray-200 dark:bg-gray-700" />
          </CardHeader>
          <CardContent className="flex-grow flex flex-col items-center justify-center px-6 pb-6"> {/* Added padding horizontal */}
            <div className="text-4xl font-bold mb-2 text-black dark:text-orange-300">
              ${option.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              $10,000 por número
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-auto"> {/* Added mt-auto */}
            <Link  className="w-full" href= "/compra">
                <Button className="w-full rounded-none py-4 text-base font-semibold bg-orange-400 hover:bg-orange-500 text-white"> {/* Added border-top */}
                COMPRE {option.quantity} {option.quantity === 1 ? 'NÚMERO' : 'NÚMEROS'}
            </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}

      {/* Card de compra personalizada */}
      <Card className="flex flex-col border border-bg-neutral-900 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow p-0 overflow-hidden"> {/* Added overflow-hidden */}
        <CardHeader className="pb-3 px-6 pt-6"> {/* Added padding horizontal */}
          <CardTitle className="text-center text-lg font-semibold text-gray-800 dark:text-gray-100">
            Personalizada
          </CardTitle>
          <Separator className="bg-gray-200 dark:bg-gray-700" />
        </CardHeader>
        <CardContent className="flex-grow space-y-4 px-6 pb-6"> {/* Added padding horizontal */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
              Elija la cantidad
            </div>
            <div className="flex justify-center items-center gap-2">
              <Input
                type="number"
                min="1"
                value={customQuantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value)
                  setCustomQuantity(isNaN(value) ? 1 : Math.max(1, value))
                }}
                className="w-20 text-center h-10 text-base border-gray-300 focus:border-orange-400 focus:ring-orange-400"
              />
              <span className="text-gray-700 dark:text-gray-300">números</span>
            </div>
          </div>

          <Separator className="bg-gray-200 dark:bg-gray-700" />

          <div className="text-center space-y-1">
            <div className="text-4xl font-bold text-black dark:text-orange-300">
              ${customPrice.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              $10,000 por número
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-0 mt-auto"> {/* Added mt-auto */}
          <Link href= "/compra" className="w-full">
                <Button className="w-full rounded-none py-4 text-base font-semibold bg-orange-400 hover:bg-orange-500 text-white border-t border-gray-200 "> {/* Added border-top */}
                COMPRE {customQuantity} {customQuantity === 1 ? 'NÚMERO' : 'NÚMEROS'}
                </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
export default function PurchasePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Compre sus números</h1>
      <NumberCards />
    </div>
  )
}