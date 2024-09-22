'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function SuccessfulPayment() {
  const [countdown, setCountdown] = useState(5)
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (sessionId) {
        const response = await fetch(`/api/order-details?session_id=${sessionId}`)
        const data = await response.json()
        setOrderDetails(data)
      }
    }

    fetchOrderDetails()

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer)
          window.location.href = '/'
        }
        return prevCountdown - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [sessionId])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-8 bg-primary text-primary-foreground rounded-xl shadow-2xl"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900"
          >
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-300" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-3xl font-extrabold"
          >
            Fizetés sikeres!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-2 text-sm"
          >
            Köszönjük a vásárlást. A fiókja frissítésre került.
          </motion.p>
        </div>

        {orderDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 space-y-6"
          >
            <div className="bg-primary text-primary-foreground p-4 rounded-md">
              <h3 className="text-lg font-medium">Rendelés összegzése</h3>
              <dl className="mt-2 text-sm">
                <div className="flex justify-between py-1">
                  <dt>Csomag</dt>
                  <dd className="font-medium">{orderDetails.plan}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt>Összeg</dt>
                  <dd className="font-medium">{orderDetails.amount}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt>Rendelés azonosító</dt>
                  <dd className="font-medium">{orderDetails.orderId}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Átirányítás a főoldalra {countdown} másodperc múlva...
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}