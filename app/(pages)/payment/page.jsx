"use client"
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentPage from './PaymentPage' // سننشئه في الخطوة التالية

// استبدل هذا بمفتاحك العام الحقيقي من Stripe Dashboard
const stripePromise = loadStripe('pk_test_51TEgIBQxKYhx9jfauFaUH7sbXDxZCCZJSsKjW8KDP3ZpnObrrr4zjU0THbqXg9uQ58zDUcLzqEHxz6PY511LqdRX00dY5ZROty');

const StripeProvider = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentPage />
    </Elements>
  )
}

export default StripeProvider;