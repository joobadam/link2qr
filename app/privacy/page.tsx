'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const privacyPolicySections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, and usage data related to the QR codes you generate."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new features. We may also use the data to detect and prevent fraudulent activity."
  },
  {
    title: "Information Sharing and Disclosure",
    content: "We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as hosting and analytics. We may also disclose your information if required by law."
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security."
  },
  {
    title: "Your Rights and Choices",
    content: "You may access, update, or delete your account information at any time through your account settings. You may also contact us to request access to, correction of, or deletion of any personal information that you have provided to us."
  },
  {
    title: "Changes to This Privacy Policy",
    content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last Updated' date at the top of this policy."
  },
  {
    title: "Contact Us",
    content: "If you have any questions about this privacy policy, please contact us at privacy@qrcodegenerator.com or through our contact form on the website."
  }
]

const PolicySection = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-4"
        >
          <p className="">{content}</p>
        </motion.div>
      )}
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">
              Last Updated: September 1, 2024
            </h2>
            <p className="mb-6">
              At QR Code Generator, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our QR code generation service.
            </p>
            <div className="space-y-4">
              {privacyPolicySections.map((section, index) => (
                <PolicySection key={index} title={section.title} content={section.content} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="">
            By using our service, you agree to the collection and use of information in accordance with this policy.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Contact Us for Questions
          </a>
        </motion.div>
      </main>
    </div>
  )
}