"use client";
import { X, Mail, Clock } from "lucide-react";
import { useState } from "react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  status: "Pending" | "Replied" | "Resolved";
  reply: string;
  date: string;
}

// Contact Message Modal Component
export default function ContactMessageModal({
  message,
  onClose,
  onStatusChange,
  onReplyChange,
  statusOptions,
}: {
  message: ContactMessage;
  onClose: () => void;
  onStatusChange: (id: number, status: ContactMessage["status"]) => void;
  onReplyChange: (id: number, reply: string) => void;
  statusOptions: ContactMessage["status"][];
}) {
  const [localReply, setLocalReply] = useState(message.reply);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-[var(--primary)] px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-[var(--primary-foreground)]">
            Contact Message Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors flex-shrink-0 text-[var(--primary-foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary-foreground)] hover:bg-opacity-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          <div className="p-4 sm:p-5 space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 rounded-lg p-3 sm:p-4">
              <h3 className="font-semibold text-gray-900 mb-2.5 text-sm sm:text-base break-words">
                {message.name}
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0" />
                  <span className="break-all font-medium">{message.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0" />
                  <span>{message.date}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                Status
              </label>
              <select
                value={message.status}
                onChange={(e) =>
                  onStatusChange(message.id, e.target.value as ContactMessage["status"])
                }
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 text-sm font-medium transition-colors"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                User Message
              </label>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-3.5 rounded-r-lg">
                <p className="text-xs sm:text-sm text-gray-900 leading-relaxed whitespace-pre-wrap break-words">
                  {message.message}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                Admin Reply
              </label>
              {message.reply ? (
                <div className="space-y-2">
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 sm:p-3.5 rounded-r-lg mb-2">
                    <p className="text-xs text-gray-500 mb-1 font-medium">Previous Reply:</p>
                    <p className="text-xs sm:text-sm text-gray-900 leading-relaxed whitespace-pre-wrap break-words">
                      {message.reply}
                    </p>
                  </div>
                  <textarea
                    value={localReply}
                    onChange={(e) => setLocalReply(e.target.value)}
                    rows={4}
                    placeholder="Update your reply..."
                    className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 resize-none text-xs sm:text-sm transition-colors"
                  />
                </div>
              ) : (
                <textarea
                  value={localReply}
                  onChange={(e) => setLocalReply(e.target.value)}
                  rows={4}
                  placeholder="Enter your reply to the user..."
                  className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 resize-none text-xs sm:text-sm transition-colors"
                />
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col-reverse sm:flex-row justify-end gap-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onReplyChange(message.id, localReply);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg font-medium shadow-sm hover:shadow-md transition-all text-sm"
          >
            Save Reply
          </button>
        </div>
      </div>
    </div>
  );
}