"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from 'react'
import { z } from 'zod'
import Select from 'react-select'
import { colombianCities } from '@/lib/cities'

// Definir tipo para la ciudad seleccionada
type CityOption = {
  value: string;
  label: string;
} | null;

const registerSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico inválido"),
phone: z.string().min(10, "Teléfono debe tener al menos 10 dígitos").max(10, "El teléfono no puede tener más de 10 dígitos"),
  city: z.string().min(1, "La ciudad es obligatoria")
})

const unitPrice = 10000
const formatNumber = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

export default function PurchasePage() {
  const searchParams = useSearchParams()
  const quantity = Number(searchParams.get('quantity')) || 1
  const total = quantity * unitPrice
  const [selectedCity, setSelectedCity] = useState<CityOption>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Validar todos los campos
      const validatedData = registerSchema.parse({
        ...formData,
        city: selectedCity?.label || ''
      })

      const purchaseData = {
        quantity,
        total,
        customer: {
          ...validatedData,
          city: selectedCity?.label || ''
        },
        date: new Date().toISOString()
      }

      console.log('Datos de compra:', purchaseData)
      alert(`¡Compra simulada exitosa! ${quantity} boletos por $${formatNumber(total)}`)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path) {
            errorMap[err.path[0]] = err.message
          }
        })
        setErrors(errorMap)
      }
    }
  }

  return (
    <div className="container py-8 max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold text-center mb-8 text-white">Confirmar Compra</h1>
  
  <div className="grid gap-6 md:grid-cols-2">
    {/* Card de Resumen - Ahora igual a la de formulario */}
    <Card className="bg-neutral-900 border border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-white">Resumen</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-white">
          <div className="flex justify-between">
            <span>Boletos:</span>
            <span>{quantity} x $10.000</span>
          </div>
          <Separator className="bg-gray-700" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span className="text-orange-400">${formatNumber(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Card de Formulario */}
    <Card className="bg-neutral-900 border border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-white">Datos del Comprador</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre Completo */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Nombre Completo *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>

          {/* Ciudad y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ciudad */}
            <div className="space-y-2">
              <Label className="text-white">Ciudad *</Label>
              <Select
                options={colombianCities}
                onChange={(selectedOption: CityOption) => {
                  setSelectedCity(selectedOption)
                  setFormData({...formData, city: selectedOption?.label || ''})
                }}
                placeholder="Encuentra la ciudad"
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable
                noOptionsMessage={() => "Ciudad no encontrada"}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: '#1f2937',
                    borderColor: errors.city ? '#ef4444' : '#374151',
                    minHeight: '40px',
                    '&:hover': {
                      borderColor: errors.city ? '#ef4444' : '#4b5563'
                    }
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: 'white'
                  }),
                  input: (base) => ({
                    ...base,
                    color: 'white'
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: '#9ca3af'
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: '#1f2937',
                    borderColor: '#374151'
                  }),
                  option: (base, { isFocused, isSelected }) => ({
                    ...base,
                    backgroundColor: isSelected
                      ? '#fb923c'
                      : isFocused
                      ? '#374151'
                      : '#1f2937',
                    color: isSelected ? 'white' : 'white',
                    '&:active': {
                      backgroundColor: '#fb923c'
                    }
                  })
                }}
              />
              {errors.city && <p className="text-red-400 text-sm">{errors.city}</p>}
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Teléfono *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
              />
              {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
            </div>
          </div>

          {/* Correo Electrónico */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Correo Electrónico *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>

          {/* Botón de Confirmar */}
          <Button
            type="submit"
            className="w-full mt-4 py-6 text-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            Confirmar Compra
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</div>
  )
}