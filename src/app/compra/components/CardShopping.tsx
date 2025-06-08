import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface PurchaseSummaryProps {
  quantity: number
  total: number
}

export function PurchaseSummaryCard({ quantity, total }: PurchaseSummaryProps) {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Resumen de Compra</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Boletos comprados:</span>
            <span className="font-medium">{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Precio unitario:</span>
            <span className="font-medium">$10,000</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total a pagar:</span>
            <span className="text-orange-500">${total.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}