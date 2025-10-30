"use client";
import { Save, Plus, Trash2, Edit2, X, Mail, Send, Users } from "lucide-react";
import { useState, ChangeEvent } from "react";

interface Subscriber {
  id: number;
  email: string;
  name: string;
  subscribedAt: string;
  status: "active" | "inactive";
}

interface Newsletter {
  id: number;
  subject: string;
  content: string;
  sentAt: string | null;
  recipientCount: number;
}

interface NewsletterFormData {
  subject: string;
  content: string;
}

export default function NewsletterManagementPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([
    {
      id: 1,
      email: "john.doe@example.com",
      name: "John Doe",
      subscribedAt: "2024-08-15",
      status: "active",
    },
    {
      id: 2,
      email: "sarah.smith@example.com",
      name: "Sarah Smith",
      subscribedAt: "2024-09-10",
      status: "active",
    },
    {
      id: 3,
      email: "mike.johnson@example.com",
      name: "Mike Johnson",
      subscribedAt: "2024-10-05",
      status: "active",
    },
    {
      id: 4,
      email: "emily.brown@example.com",
      name: "Emily Brown",
      subscribedAt: "2024-07-22",
      status: "inactive",
    },
  ]);

  const [newsletters, setNewsletters] = useState<Newsletter[]>([
    {
      id: 1,
      subject: "October Construction Updates",
      content:
        "Dear valued clients, we're excited to share our latest project updates and company news...",
      sentAt: "2024-10-10",
      recipientCount: 245,
    },
    {
      id: 2,
      subject: "New Services Available",
      content:
        "We're pleased to announce the addition of new construction services to better serve you...",
      sentAt: "2024-09-15",
      recipientCount: 230,
    },
  ]);

  const [editingSubscriber, setEditingSubscriber] = useState<number | null>(
    null
  );
  const [subscriberFormData, setSubscriberFormData] = useState({
    email: "",
    name: "",
    status: "active" as "active" | "inactive",
  });

  const [showNewsletterForm, setShowNewsletterForm] = useState(false);
  const [newsletterFormData, setNewsletterFormData] =
    useState<NewsletterFormData>({
      subject: "",
      content: "",
    });

  const [activeTab, setActiveTab] = useState<"subscribers" | "newsletters">(
    "subscribers"
  );

  // Subscriber handlers
  const handleEditSubscriber = (subscriber: Subscriber) => {
    setEditingSubscriber(subscriber.id);
    setSubscriberFormData({
      email: subscriber.email,
      name: subscriber.name,
      status: subscriber.status,
    });
  };

  const handleCancelSubscriber = () => {
    setEditingSubscriber(null);
    setSubscriberFormData({
      email: "",
      name: "",
      status: "active",
    });
  };

  const handleSubscriberInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSubscriberFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveSubscriber = () => {
    setSubscribers((prev) =>
      prev.map((sub) =>
        sub.id === editingSubscriber
          ? {
              ...sub,
              email: subscriberFormData.email,
              name: subscriberFormData.name,
              status: subscriberFormData.status,
            }
          : sub
      )
    );
    handleCancelSubscriber();
  };

  const handleAddSubscriber = () => {
    const newSubscriber: Subscriber = {
      id: Date.now(),
      email: "newsubscriber@example.com",
      name: "New Subscriber",
      subscribedAt: new Date().toISOString().split("T")[0],
      status: "active",
    };
    setSubscribers((prev) => [newSubscriber, ...prev]);
  };

  const handleDeleteSubscriber = (id: number) => {
    setSubscribers((prev) => prev.filter((sub) => sub.id !== id));
  };

  // Newsletter handlers
  const handleNewsletterInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewsletterFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendNewsletter = () => {
    const activeSubscribers = subscribers.filter(
      (sub) => sub.status === "active"
    );
    const newNewsletter: Newsletter = {
      id: Date.now(),
      subject: newsletterFormData.subject,
      content: newsletterFormData.content,
      sentAt: new Date().toISOString().split("T")[0],
      recipientCount: activeSubscribers.length,
    };
    setNewsletters((prev) => [newNewsletter, ...prev]);
    setNewsletterFormData({ subject: "", content: "" });
    setShowNewsletterForm(false);
  };

  const handleDeleteNewsletter = (id: number) => {
    setNewsletters((prev) => prev.filter((newsletter) => newsletter.id !== id));
  };

  const handleSubmit = () => {
    console.log("Changes saved:", { subscribers, newsletters });
  };

  const activeSubscribersCount = subscribers.filter(
    (sub) => sub.status === "active"
  ).length;

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="p-4 sm:p-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">
            Newsletter Management
          </h1>
          <div className="flex gap-2">
            {activeTab === "subscribers" && (
              <button
                onClick={handleAddSubscriber}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
              >
                <Plus className="w-4 h-4 flex-shrink-0" />
                <span>Add Subscriber</span>
              </button>
            )}
            {activeTab === "newsletters" && (
              <button
                onClick={() => setShowNewsletterForm(!showNewsletterForm)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{showNewsletterForm ? "Cancel" : "New Newsletter"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Subscribers</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--header-text)]">
                  {subscribers.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Active Subscribers</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--header-text)]">
                  {activeSubscribersCount}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Newsletters Sent</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--header-text)]">
                  {newsletters.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-[var(--border-color)]">
          <button
            onClick={() => setActiveTab("subscribers")}
            className={`px-4 py-2 text-sm sm:text-base font-medium ${
              activeTab === "subscribers"
                ? "border-b-2 border-[var(--primary)] text-[var(--primary)]"
                : "text-gray-500"
            }`}
          >
            Subscribers
          </button>
          <button
            onClick={() => setActiveTab("newsletters")}
            className={`px-4 py-2 text-sm sm:text-base font-medium ${
              activeTab === "newsletters"
                ? "border-b-2 border-[var(--primary)] text-[var(--primary)]"
                : "text-gray-500"
            }`}
          >
            Newsletters
          </button>
        </div>

        {/* Subscribers Tab */}
        {activeTab === "subscribers" && (
          <div className="space-y-3 sm:space-y-4">
            {subscribers.map((subscriber) => (
              <div
                key={subscriber.id}
                className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
              >
                {editingSubscriber === subscriber.id ? (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                        Edit Subscriber
                      </h3>
                      <button
                        onClick={handleCancelSubscriber}
                        className="text-gray-500 flex-shrink-0"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="w-full">
                        <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={subscriberFormData.name}
                          onChange={handleSubscriberInputChange}
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
                          value={subscriberFormData.email}
                          onChange={handleSubscriberInputChange}
                          className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Status
                      </label>
                      <select
                        name="status"
                        value={subscriberFormData.status}
                        onChange={handleSubscriberInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white text-sm sm:text-base"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                      <button
                        onClick={handleCancelSubscriber}
                        className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveSubscriber}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                      >
                        <Save className="w-4 h-4 flex-shrink-0" />
                        <span>Save Subscriber</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[var(--header-text)] text-sm sm:text-base break-words">
                          {subscriber.name}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${
                            subscriber.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {subscriber.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 break-all">
                        {subscriber.email}
                      </p>
                      <p className="text-xs text-gray-500">
                        Subscribed: {subscriber.subscribedAt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                      <button
                        onClick={() => handleEditSubscriber(subscriber)}
                        className="p-2 text-[var(--primary)] rounded"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteSubscriber(subscriber.id)}
                        className="p-2 text-red-600 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Newsletters Tab */}
        {activeTab === "newsletters" && (
          <div className="space-y-3 sm:space-y-4">
            {showNewsletterForm && (
              <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                      Create Newsletter
                    </h3>
                    <button
                      onClick={() => setShowNewsletterForm(false)}
                      className="text-gray-500 flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={newsletterFormData.subject}
                      onChange={handleNewsletterInputChange}
                      placeholder="Enter newsletter subject"
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Content
                    </label>
                    <textarea
                      name="content"
                      value={newsletterFormData.content}
                      onChange={handleNewsletterInputChange}
                      rows={6}
                      placeholder="Enter newsletter content"
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base resize-none"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-xs sm:text-sm text-blue-800">
                      This newsletter will be sent to{" "}
                      <strong>{activeSubscribersCount}</strong> active
                      subscribers.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                    <button
                      onClick={() => setShowNewsletterForm(false)}
                      className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSendNewsletter}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                    >
                      <Send className="w-4 h-4 flex-shrink-0" />
                      <span>Send Newsletter</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {newsletters.map((newsletter) => (
              <div
                key={newsletter.id}
                className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex items-start gap-2 mb-2">
                      <Mail className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[var(--header-text)] text-sm sm:text-base break-words mb-1">
                          {newsletter.subject}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 break-words line-clamp-2">
                          {newsletter.content}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-2">
                      <span>Sent: {newsletter.sentAt}</span>
                      <span>Recipients: {newsletter.recipientCount}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                    <button
                      onClick={() => handleDeleteNewsletter(newsletter.id)}
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

        <div className="flex justify-end mt-4 sm:mt-6 w-full">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
          >
            <Save className="w-4 h-4 flex-shrink-0" />
            <span>Save All Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}