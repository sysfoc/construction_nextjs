'use client';
import { Save, Plus, Trash2, Edit2, X, Home, FileText } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  showOnHomePage: boolean;
  showOnFAQPage: boolean;
}

interface FormData {
  question: string;
  answer: string;
  showOnHomePage: boolean;
  showOnFAQPage: boolean;
}

export default function FAQManagementPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: 'What types of construction services do you offer?',
      answer: 'We offer a comprehensive range of construction services including residential construction, commercial projects, renovations, remodeling, and emergency repair services.',
      showOnHomePage: true,
      showOnFAQPage: true
    },
    {
      id: 2,
      question: 'How long does a typical construction project take?',
      answer: 'Project timelines vary based on scope and complexity. Residential projects typically take 3-6 months, while commercial projects may take 6-12 months. We provide detailed timelines during consultation.',
      showOnHomePage: true,
      showOnFAQPage: false
    },
    {
      id: 3,
      question: 'Do you provide free estimates?',
      answer: 'Yes, we offer free, no-obligation estimates for all projects. Contact us to schedule a consultation and site visit.',
      showOnHomePage: false,
      showOnFAQPage: true
    },
    {
      id: 4,
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed, bonded, and insured. We maintain all necessary certifications and comply with local building codes and regulations.',
      showOnHomePage: true,
      showOnFAQPage: true
    },
    {
      id: 5,
      question: 'What is your payment structure?',
      answer: 'We typically work with a deposit and milestone-based payment structure. Specific terms are outlined in the project contract after initial consultation.',
      showOnHomePage: false,
      showOnFAQPage: false
    }
  ]);

  const [editingFAQ, setEditingFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    question: '',
    answer: '',
    showOnHomePage: false,
    showOnFAQPage: false
  });

  const handleEdit = (faq: FAQ) => {
    setEditingFAQ(faq.id);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      showOnHomePage: faq.showOnHomePage,
      showOnFAQPage: faq.showOnFAQPage
    });
  };

  const handleCancel = () => {
    setEditingFAQ(null);
    setFormData({
      question: '',
      answer: '',
      showOnHomePage: false,
      showOnFAQPage: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSaveFAQ = () => {
    setFaqs(prev =>
      prev.map(faq =>
        faq.id === editingFAQ
          ? {
              ...faq,
              question: formData.question,
              answer: formData.answer,
              showOnHomePage: formData.showOnHomePage,
              showOnFAQPage: formData.showOnFAQPage
            }
          : faq
      )
    );
    handleCancel();
  };

  const handleAddFAQ = () => {
    const newFAQ: FAQ = {
      id: Date.now(),
      question: 'New Question?',
      answer: 'Answer to the question.',
      showOnHomePage: false,
      showOnFAQPage: true
    };
    setFaqs(prev => [...prev, newFAQ]);
  };

  const handleDeleteFAQ = (id: number) => {
    setFaqs(prev => prev.filter(faq => faq.id !== id));
  };

  const handleSubmit = () => {
    console.log('FAQs saved:', faqs);
  };

  return (
    <div className="p-4 mx-auto bg-gray-50 min-h-screen">
      <div className="flex sm:flex-row flex-col gap-2 items-center justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)]">FAQ Management</h1>
        <button
          onClick={handleAddFAQ}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </button>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-[var(--background)] border border-[var(--border-color)] rounded p-4">
            {editingFAQ === faq.id ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[var(--header-text)]">Edit FAQ</h3>
                  <button onClick={handleCancel} className="text-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-[var(--header-text)] mb-2">Question</label>
                  <input
                    type="text"
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--header-text)] mb-2">Answer</label>
                  <textarea
                    name="answer"
                    value={formData.answer}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--header-text)] mb-3">Display Options</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="showOnHomePage"
                        checked={formData.showOnHomePage}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[var(--primary)] border-[var(--border-color)] rounded focus:ring-2 focus:ring-[var(--primary)]"
                      />
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-[var(--header-text)]">Show on Home Page Component</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="showOnFAQPage"
                        checked={formData.showOnFAQPage}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[var(--primary)] border-[var(--border-color)] rounded focus:ring-2 focus:ring-[var(--primary)]"
                      />
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-[var(--header-text)]">Show on FAQ Page</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveFAQ}
                    className="flex items-center gap-2 px-3 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--header-text)] mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 mb-3">{faq.answer}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Home className="w-3 h-3" />
                      <span className={faq.showOnHomePage ? 'text-green-600' : 'text-gray-400'}>
                        {faq.showOnHomePage ? 'Home Page' : 'Not on Home'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span className={faq.showOnFAQPage ? 'text-green-600' : 'text-gray-400'}>
                        {faq.showOnFAQPage ? 'FAQ Page' : 'Not on FAQ Page'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(faq)}
                    className="p-2 text-[var(--primary)] rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteFAQ(faq.id)}
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

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
        >
          <Save className="w-4 h-4" />
          Save All Changes
        </button>
      </div>
    </div>
  );
}