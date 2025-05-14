"use client"

import type React from "react"

import { useState } from "react"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import { Dropdown } from "primereact/dropdown"
import { Checkbox } from "primereact/checkbox"
import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { classNames } from "primereact/utils"
import Link from "next/link"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  plan: string
  comments: string
  acceptTerms: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  plan?: string
  acceptTerms?: string
}

export default function SubscriptionForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plan: "",
    comments: "",
    acceptTerms: false,
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [showDialog, setShowDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const planOptions = [
    { label: "Plan Mensual", value: "monthly" },
    { label: "Plan Anual", value: "annual" },
    { label: "Plan Digital", value: "digital" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleCheckboxChange = (e: { checked: boolean }) => {
    setFormData((prev) => ({ ...prev, acceptTerms: e.checked }))

    // Clear error when user checks
    if (formErrors.acceptTerms) {
      setFormErrors((prev) => ({ ...prev, acceptTerms: undefined }))
    }
  }

  const handleDropdownChange = (e: { value: string }) => {
    setFormData((prev) => ({ ...prev, plan: e.value }))

    // Clear error
    if (formErrors.plan) {
      setFormErrors((prev) => ({ ...prev, plan: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.firstName.trim()) {
      errors.firstName = "El nombre es obligatorio"
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Los apellidos son obligatorios"
    }

    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "El email no es válido"
    }

    if (!formData.phone.trim()) {
      errors.phone = "El teléfono es obligatorio"
    } else if (!/^\d{9}$/.test(formData.phone)) {
      errors.phone = "El teléfono debe tener 9 dígitos"
    }

    if (!formData.plan) {
      errors.plan = "Selecciona un plan"
    }

    if (!formData.acceptTerms) {
      errors.acceptTerms = "Debes aceptar los términos y condiciones"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setShowDialog(true)

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          plan: "",
          comments: "",
          acceptTerms: false,
        })
      }, 1500)
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              Nombre *
            </label>
            <InputText
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={classNames("form-input", { "p-invalid": formErrors.firstName })}
              aria-describedby="firstName-error"
            />
            {formErrors.firstName && (
              <small id="firstName-error" className="form-error">
                {formErrors.firstName}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Apellidos *
            </label>
            <InputText
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={classNames("form-input", { "p-invalid": formErrors.lastName })}
              aria-describedby="lastName-error"
            />
            {formErrors.lastName && (
              <small id="lastName-error" className="form-error">
                {formErrors.lastName}
              </small>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <InputText
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={classNames("form-input", { "p-invalid": formErrors.email })}
              aria-describedby="email-error"
            />
            {formErrors.email && (
              <small id="email-error" className="form-error">
                {formErrors.email}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Teléfono *
            </label>
            <InputText
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={classNames("form-input", { "p-invalid": formErrors.phone })}
              aria-describedby="phone-error"
            />
            {formErrors.phone && (
              <small id="phone-error" className="form-error">
                {formErrors.phone}
              </small>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="plan" className="form-label">
            Plan de interés *
          </label>
          <Dropdown
            id="plan"
            value={formData.plan}
            options={planOptions}
            onChange={handleDropdownChange}
            placeholder="Selecciona un plan"
            className={classNames("form-input", { "p-invalid": formErrors.plan })}
            aria-describedby="plan-error"
          />
          {formErrors.plan && (
            <small id="plan-error" className="form-error">
              {formErrors.plan}
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="comments" className="form-label">
            Comentarios o preguntas
          </label>
          <InputTextarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={3}
            className="form-input"
            placeholder="¿Tienes alguna pregunta específica sobre nuestros planes o servicios?"
          />
        </div>

        <div className="form-group">
          <div className="flex align-items-center">
            <div className="form-checkbox-wrapper">
              <Checkbox
                inputId="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleCheckboxChange}
                className={classNames({ "p-invalid": formErrors.acceptTerms })}
              />
            </div>
            <label htmlFor="acceptTerms" className="form-checkbox-label">
              Acepto la{" "}
              <Link href="/privacy-policy" className="text-red-600 hover:underline">
                Política de Privacidad
              </Link>{" "}
              y autorizo el tratamiento de mis datos personales *
            </label>
          </div>
          {formErrors.acceptTerms && <small className="form-error block mt-1">{formErrors.acceptTerms}</small>}
        </div>

        <div className="form-submit">
          <Button
            type="submit"
            label="Solicitar información"
            icon="pi pi-envelope"
            className="w-full sm:w-auto"
            loading={isSubmitting}
          />
        </div>
      </form>

      <Dialog
        visible={showDialog}
        onHide={() => setShowDialog(false)}
        header="¡Solicitud Enviada!"
        className="w-full max-w-lg"
        footer={
          <div className="flex justify-center">
            <Button
              label="Cerrar"
              icon="pi pi-check"
              onClick={() => setShowDialog(false)}
              className="bg-red-600 hover:bg-red-700"
            />
          </div>
        }
      >
        <div className="flex flex-col items-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">¡Gracias por tu interés en SportQuora!</h3>
          <p className="text-center mb-4">
            Hemos recibido tu solicitud de información. En breve, un miembro de nuestro equipo se pondrá en contacto
            contigo para proporcionarte información detallada sobre nuestros planes y tarifas actuales.
          </p>
          <p className="text-center text-gray-600">
            Si tienes alguna pregunta adicional, no dudes en contactar con nuestro servicio de atención al cliente.
          </p>
        </div>
      </Dialog>
    </div>
  )
}
