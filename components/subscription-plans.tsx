"use client"

import { useState } from "react"
import { Card } from "primereact/card"
import { RadioButton } from "primereact/radiobutton"
import subscribePlans from "@/data/subscribePlans.json"

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState(
    subscribePlans.find((plan) => plan.popular)?.id || subscribePlans[0].id,
  )

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subscribePlans.map((plan) => (
          <Card
            key={plan.id}
            className={`shadow-md hover:shadow-lg transition-shadow ${plan.popular ? "border-2 border-red-600" : ""}`}
            header={
              plan.popular ? (
                <div className="bg-red-600 text-white text-center py-2 font-bold">Plan Recomendado</div>
              ) : null
            }
          >
            <div className="p-4">
              <div className="flex items-center mb-4">
                <RadioButton
                  inputId={plan.id}
                  name="subscription"
                  value={plan.id}
                  onChange={(e) => setSelectedPlan(e.value)}
                  checked={selectedPlan === plan.id}
                />
                <label htmlFor={plan.id} className="ml-2 text-xl font-bold cursor-pointer">
                  {plan.name}
                </label>
              </div>

              <p className="text-gray-700 mb-6">{plan.description}</p>

              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <i className="pi pi-check-circle text-green-600 mr-2 mt-1"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>Todos los planes incluyen cancelación en cualquier momento.</p>
        <p className="mt-2 font-semibold">
          Completa el formulario para conocer nuestras tarifas actuales y promociones exclusivas.
        </p>
      </div>
    </div>
  )
}
