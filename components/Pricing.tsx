'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check, Zap } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    { 
      name: "Free", 
      price: { monthly: "$0", annual: "$0" }, 
      features: ["100 QR codes/month", "Basic customization", "Email support"],
      description: "Perfect for individuals and small projects.",
      cta: "Get Started",
      highlight: false
    },
    { 
      name: "Pro", 
      price: { monthly: "$12", annual: "$120" }, 
      features: ["Unlimited QR codes", "Advanced customization", "Priority support", "Analytics dashboard", "Custom branding"],
      description: "Ideal for growing businesses and professionals.",
      cta: "Upgrade to Pro",
      highlight: true
    },
    { 
      name: "Enterprise", 
      price: { monthly: "Custom", annual: "Custom" }, 
      features: ["Custom solutions", "API access", "Dedicated account manager", "24/7 phone support", "Service Level Agreement (SLA)"],
      description: "Tailored solutions for large organizations.",
      cta: "Contact Sales",
      highlight: false
    },
  ]

  return (
    <section className="py-20" id="pricing">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Choose Your Plan</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Select the perfect plan for your QR code needs. All plans include our core features.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-yellow-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400'}`}>Annual</span>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative overflow-hidden transition-all duration-300 ${plan.highlight ? 'shadow-2xl scale-105 border-yellow-500 dark:border-yellow-400' : 'hover:shadow-xl hover:scale-105'}`}>
              {plan.highlight && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-yellow-500 text-white text-xs font-bold py-1 px-3 rounded-full transform rotate-45">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{isAnnual ? plan.price.annual : plan.price.monthly}</span>
                  {plan.name !== "Enterprise" && <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.highlight ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}>
                  {plan.cta}
                  {plan.highlight && <Zap className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          All prices are in USD. Taxes may apply. By selecting a plan, you agree to our <Link href="/terms" className="underline">Terms of Service</Link>.
        </p>
      </div>
    </section>
  )
}

