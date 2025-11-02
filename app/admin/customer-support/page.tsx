"use client"
import { Mail, MessageCircle, Clock } from "lucide-react"

export default function CustomerSupportPage() {
  const handleEmailClick = () => {
    window.open("mailto:support@sysfoc.com", "_blank")
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923006904440", "_blank")
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] mb-2">
            Need Help? We are here for you!
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            If you are facing any technical issue, have a question, please reach out to our support team using any of the options below.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Support Card */}
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 bg-[var(--primary)]/10 rounded-full flex-shrink-0">
                <Mail className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <h2 className="text-base font-semibold text-[var(--header-text)]">
                Email Support
              </h2>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Send us email at
            </p>
            
            <button
              onClick={handleEmailClick}
              className="text-[var(--primary)] font-medium text-sm hover:underline break-all mb-3"
            >
              support@sysfoc.com
            </button>
            
            <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-color)]">
              <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Our team usually replies within 24 hours.
              </p>
            </div>
          </div>

          {/* WhatsApp Support Card */}
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-base font-semibold text-[var(--header-text)]">
                WhatsApp Support
              </h2>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Contact us on WhatsApp
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="text-green-600 dark:text-green-400 font-medium text-sm hover:underline mb-3"
            >
              (+92) 300 6904440
            </button>
            
            <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-color)]">
              <MessageCircle className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Get instant responses via WhatsApp chat.
              </p>
            </div>
          </div>
        </div>

        {/* Website Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Visit our website at{" "}
            <a
              href="https://sysfoc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] font-medium hover:underline"
            >
              sysfoc.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}