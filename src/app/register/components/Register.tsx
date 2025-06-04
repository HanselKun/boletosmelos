"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 1. Define el esquema con Zod
const registerSchema = z.object({
  firstName: z.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre es demasiado largo"),
  email: z.string()
    .email("Correo electrónico inválido")
    .max(80, "El correo es demasiado largo"),
  phone: z.string()
    .length(10, "El teléfono debe tener 10 dígitos")
    .regex(/^\d+$/, "Solo números permitidos"),
  password: z.string()
    .min(7, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[0-9]/, "Debe contener al menos un número")
    .regex(/[^A-Za-z0-9]/, "Debe contener al menos un carácter especial"),
  confirmPassword: z.string().min(8, "Mínimo 8 caracteres")
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"] // Asocia el error a este campo
});

// 2. Tipado automático
type FormData = z.infer<typeof registerSchema>;

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  // 3. Configura react-hook-form
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormData>({
  resolver: zodResolver(registerSchema),
});

  const onSubmit = (data: FormData) => {
    console.log("Datos válidos:", data);
    // Aquí iría tu llamada a la API
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Bienvenido por primera vez</CardTitle>
          <CardDescription>Regístrate para disfrutar de Sorteos Rayo</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              {/* Campo: Nombre */}
              <div className="grid gap-2">
                <Label>Primer Nombre y Primer Apellido</Label>
                <Input
                  {...register("firstName")}
                  id="firstName"
                  placeholder="Pepito Perez"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
              </div>

              {/* Campo: Teléfono */}
              <div className="grid gap-2">
                <Label>Número de contacto</Label>
                <Input
                  {...register("phone")}
                  id="phone"
                  placeholder="3181234567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Campo: Email */}
              <div className="grid gap-2">
                <Label>Correo electrónico</Label>
                <Input
                  {...register("email")}
                  id="email"
                  placeholder="micorreo@ejemplo.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Campo: Contraseña */}
              <div className="grid gap-2">
                <Label>Contraseña</Label>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                />
                {errors.password && (
                  <ul className="text-red-500 text-sm list-disc pl-4">
                    {errors.password.message?.split(". ").map((msg, i) => (
                      <li key={i}>{msg}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Campo: Confirmar Contraseña */}
              <div className="grid gap-2">
                <Label>Confirmar Contraseña</Label>
                <Input
                  {...register("confirmPassword")}
                  id="confirmPassword"
                  type="password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full mt-4">
                Registrarse
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}