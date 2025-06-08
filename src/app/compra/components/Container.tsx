import { PurchaseSummaryCard } from "./CardShopping"
import { CustomerForm } from "./Formulario"
import { Card, CardHeader,  CardTitle, CardContent} from "@/components/ui/card"

interface CheckoutContainerProps {
  quantity: number
  total: number
  onFormSubmit: (data: {
    fullName: string
    city: string
    phone: string
    email: string
  }) => void
}

export function CheckoutContainer({ quantity, total, onFormSubmit }: CheckoutContainerProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
      <PurchaseSummaryCard quantity={quantity} total={total} />
      
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Datos del Comprador</CardTitle>
        </CardHeader>
        <CardContent>
          <CustomerForm onSubmit={onFormSubmit} />
        </CardContent>
      </Card>
    </div>
  )
}