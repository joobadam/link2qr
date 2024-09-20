'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { QRCodeCanvas as QRCode } from 'qrcode.react'
import { Download, RefreshCw, Link as LinkIcon } from 'lucide-react'
import Ripple from '@/components/magicui/ripple'

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('')
  const [qrColor, setQrColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [size, setSize] = useState(256)
  const [isGenerating, setIsGenerating] = useState(false)
  const qrRef = useRef<HTMLDivElement>(null)

  const generateQRCode = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 1000) 
  }

  const downloadQRCode = () => {
    if (!qrRef.current) return

    const canvas = qrRef.current.querySelector('canvas')
    if (!canvas) return

    const image = canvas.toDataURL("image/png")
    const link = document.createElement('a')
    link.href = image
    link.download = 'qrcode.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
            Generate Your Custom QR Code
          </h1>
        </motion.div>
        <Ripple />
        <div className="shadow rounded-lg p-6 mb-8">
          <form onSubmit={generateQRCode} className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium">
                Enter URL
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="url"
                  id="url"
                  className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-xl"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="qrColor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  QR Code Color
                </label>
                <input
                  type="color"
                  id="qrColor"
                  className="mt-1 block w-full rounded-xl"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Background Color
                </label>
                <input
                  type="color"
                  id="bgColor"
                  className="mt-1 block w-full rounded-xl"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Size (px)
                </label>
                <input
                  type="number"
                  id="size"
                  className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-xl"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  min="128"
                  max="512"
                  step="32"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-primary text-primary-foreground py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                {isGenerating ? (
                  <RefreshCw className="animate-spin h-5 w-5" />
                ) : (
                  'Generate QR Code'
                )}
              </button>
            </div>
          </form>
        </div>

        {url && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shadow rounded-lg p-6 text-center"
          >
            <h2 className="text-xl font-semibold mb-4">Your QR Code</h2>
            <div ref={qrRef} className="flex justify-center mb-4 rounded-xl">
              <QRCode
                value={url}
                size={size}
                fgColor={qrColor}
                bgColor={bgColor}
                level="H"
                includeMargin={true}
              />
            </div>
            <button
              onClick={downloadQRCode}
              className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <Download className="h-5 w-5 mr-2" />
              Download QR Code
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}