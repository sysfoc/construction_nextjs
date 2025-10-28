"use client";
import { Save, Plus, Trash2, Edit2, X, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState, ChangeEvent } from "react";
import ContactMessageModal from "../components/modals/ContactMessageModal";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  status: "Pending" | "Replied" | "Resolved";
  reply: string;
  date: string;
}

// Main Contact Management Page
export default function ContactManagementPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    address: "123 Construction Ave, Building City, BC 12345",
    phone: "+1 (555) 123-4567",
    email: "info@buildpro.com",
    workingHours: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed",
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      message:
        "Hi, I am interested in getting a quote for a home renovation project. We are looking to remodel our kitchen and bathroom. Could you please provide more information about your services and estimated timelines?",
      status: "Pending",
      reply: "",
      date: "2024-10-15",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@example.com",
      message:
        "I would like to inquire about commercial construction services for our new office building. What is your experience with office spaces?",
      status: "Replied",
      reply: "Thank you for your inquiry! We have extensive experience with commercial office projects. I'll send you our portfolio and availability shortly.",
      date: "2024-10-14",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@example.com",
      message:
        "Can you provide information about your renovation services? Specifically interested in bathroom remodeling.",
      status: "Resolved",
      reply: "Thank you for reaching out! We've sent detailed information about our bathroom remodeling services to your email.",
      date: "2024-10-12",
    },
  ]);

  const [editingInfo, setEditingInfo] = useState(false);
  const [infoFormData, setInfoFormData] = useState<ContactInfo>(contactInfo);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "messages">("info");

  const statusOptions: ContactMessage["status"][] = ["Pending", "Replied", "Resolved"];

  // Contact Info handlers
  const handleEditInfo = () => {
    setEditingInfo(true);
    setInfoFormData(contactInfo);
  };

  const handleCancelInfo = () => {
    setEditingInfo(false);
    setInfoFormData(contactInfo);
  };

  const handleInfoInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfoFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveInfo = () => {
    setContactInfo(infoFormData);
    setEditingInfo(false);
  };

  // Contact Message handlers
  const handleStatusChange = (id: number, status: ContactMessage["status"]) => {
    setContactMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, status } : msg))
    );
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({ ...selectedMessage, status });
    }
  };

  const handleReplyChange = (id: number, reply: string) => {
    setContactMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, reply, status: reply ? "Replied" : msg.status } : msg))
    );
    setSelectedMessage(null);
  };

  const handleDeleteMessage = (id: number) => {
    setContactMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const pendingCount = contactMessages.filter((msg) => msg.status === "Pending").length;
  const repliedCount = contactMessages.filter((msg) => msg.status === "Replied").length;

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">
            Contact Management
          </h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Messages</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--header-text)]">
                  {contactMessages.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Pending</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--header-text)]">
                  {pendingCount}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Replied</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--header-text)]">
                  {repliedCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-[var(--border-color)]">
          <button
            onClick={() => setActiveTab("info")}
            className={`px-4 py-2 text-sm sm:text-base font-medium ${
              activeTab === "info"
                ? "border-b-2 border-[var(--primary)] text-[var(--primary)]"
                : "text-gray-500"
            }`}
          >
            Contact Information
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-4 py-2 text-sm sm:text-base font-medium ${
              activeTab === "messages"
                ? "border-b-2 border-[var(--primary)] text-[var(--primary)]"
                : "text-gray-500"
            }`}
          >
            Contact Messages
          </button>
        </div>

        {/* Contact Information Tab */}
        {activeTab === "info" && (
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden">
            {editingInfo ? (
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                    Edit Contact Information
                  </h3>
                  <button
                    onClick={handleCancelInfo}
                    className="text-gray-500 flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="w-full">
                  <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={infoFormData.address}
                    onChange={handleInfoInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={infoFormData.phone}
                      onChange={handleInfoInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={infoFormData.email}
                      onChange={handleInfoInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                    Working Hours
                  </label>
                  <textarea
                    name="workingHours"
                    value={infoFormData.workingHours}
                    onChange={handleInfoInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                  <button
                    onClick={handleCancelInfo}
                    className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveInfo}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                  >
                    <Save className="w-4 h-4 flex-shrink-0" />
                    <span>Save Information</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                    Contact Information
                  </h3>
                  <button
                    onClick={handleEditInfo}
                    className="p-2 text-[var(--primary)] rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Address</p>
                      <p className="text-sm sm:text-base text-gray-700 break-words">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <p className="text-sm sm:text-base text-gray-700">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <p className="text-sm sm:text-base text-gray-700 break-all">
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Working Hours</p>
                      <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line">
                        {contactInfo.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Contact Messages Tab */}
        {activeTab === "messages" && (
          <div className="space-y-3 sm:space-y-4">
            {contactMessages.map((message) => (
              <div
                key={message.id}
                className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[var(--header-text)] text-sm sm:text-base break-words">
                        {message.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${
                          message.status === "Pending"
                            ? "bg-orange-100 text-orange-700"
                            : message.status === "Replied"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {message.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 break-all">
                      {message.email}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2 break-words">
                      {message.message}
                    </p>
                    <p className="text-xs text-gray-500">{message.date}</p>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="px-3 py-1.5 text-xs sm:text-sm bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDeleteMessage(message.id)}
                      className="p-2 text-red-600 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMessage && (
        <ContactMessageModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onStatusChange={handleStatusChange}
          onReplyChange={handleReplyChange}
          statusOptions={statusOptions}
        />
      )}
    </div>
  );
}