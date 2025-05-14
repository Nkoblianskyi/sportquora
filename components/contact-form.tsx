"use client"

import type React from "react"

import { useState } from "react"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import { Dropdown } from "primereact/dropdown"
import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { classNames } from "primereact/utils"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [showDialog, setShowDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subjectOptions = [
    { label: "Consulta sobre suscripción", value: "subscription" },
    { label: "Información general", value: "info" },
    { label: "Colaboraciones", value: "collaboration" },
    { label: "Publicidad", value: "advertising" },
    { label: "Reclamación", value: "complaint" },
    { label: "Otros", value: "other" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleDropdownChange = (e: { value: string }) => {
    setFormData((prev) => ({ ...prev, subject: e.value }))

    // Clear error
    if (formErrors.subject) {
      setFormErrors((prev) => ({ ...prev, subject: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = "El nombre es obligatorio"
    }

    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "El email no es válido"
    }

    if (!formData.subject) {
      errors.subject = "El asunto es obligatorio"
    }

    if (!formData.message.trim()) {
      errors.message = "El mensaje es obligatorio"
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
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 1500)
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre completo *
          </label>
          <InputText
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={classNames("form-input", { "p-invalid": formErrors.name })}
            aria-describedby="name-error"
          />
          {formErrors.name && (
            <small id="name-error" className="form-error">
              {formErrors.name}
            </small>
          )}
        </div>

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
          <label htmlFor="subject" className="form-label">
            Asunto *
          </label>
          <Dropdown
            id="subject"
            value={formData.subject}
            options={subjectOptions}
            onChange={handleDropdownChange}
            placeholder="Selecciona un asunto"
            className={classNames("form-input", { "p-invalid": formErrors.subject })}
            aria-describedby="subject-error"
          />
          {formErrors.subject && (
            <small id="subject-error" className="form-error">
              {formErrors.subject}
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Mensaje *
          </label>
          <InputTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className={classNames("form-input", { "p-invalid": formErrors.message })}
            aria-describedby="message-error"
          />
          {formErrors.message && (
            <small id="message-error" className="form-error">
              {formErrors.message}
            </small>
          )}
        </div>

        <div className="form-submit">
          <Button
            type="submit"
            label="Enviar mensaje"
            icon="pi pi-send"
            className="w-full sm:w-auto"
            loading={isSubmitting}
          />
        </div>
      </form>

      <Dialog
        visible={showDialog}
        onHide={() => setShowDialog(false)}
        header="¡Mensaje Enviado!"
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
          <h3 className="text-xl font-bold mb-2">¡Gracias por contactar con nosotros!</h3>
          <p className="text-center mb-4">
            Hemos recibido tu mensaje. Nuestro equipo lo revisará y te responderá lo antes posible.
          </p>
          <p className="text-center text-gray-600">Normalmente respondemos en un plazo de 24-48 horas laborables.</p>
        </div>
      </Dialog>
    </div>
  )
}
