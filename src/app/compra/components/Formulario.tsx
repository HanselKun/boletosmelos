import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface CustomerFormProps {
  onSubmit: (data: {
    fullName: string
    city: string
    phone: string
    email: string
  }) => void
  initialValues?: {
    fullName: string
    city: string
    phone: string
    email: string
  }
}

export function CustomerForm({ onSubmit, initialValues }: CustomerFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Nombre Completo *</Label>
        <Input
          id="fullName"
          {...register("fullName", { required: "Este campo es obligatorio" })}
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">Ciudad</Label>
          <Input id="city" {...register("city")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: "Este campo es obligatorio" })}
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico *</Label>
        <Input
          id="email"
          type="email"
          {...register("email", { 
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Correo electrónico inválido"
            }
          })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 mt-6">
        Proceder al Pago
      </Button>
    </form>
  )
}