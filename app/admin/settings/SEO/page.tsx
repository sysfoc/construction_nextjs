'use client';
import { Save, Search } from 'lucide-react';
import { useState } from 'react';

export default function SEOSettingsPage() {
  const pages = [
    { value: 'about', label: 'About' },
    { value: 'book-service', label: 'Book Service' },
    { value: 'careers', label: 'Careers' },
    { value: 'certifications', label: 'Certifications' },
    { value: 'contact', label: 'Contact' },
    { value: 'emergency-service', label: 'Emergency Service' },
    { value: 'faqs', label: 'FAQs' },
    { value: 'gallery', label: 'Gallery' },
    { value: 'how-we-work', label: 'How We Work' },
    { value: 'jobs', label: 'Jobs' },
    { value: 'news', label: 'News' },
    { value: 'newsletter', label: 'Newsletter' },
    { value: 'partners', label: 'Partners' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'quote', label: 'Quote' },
    { value: 'team', label: 'Team' },
    { value: 'testimonials', label: 'Testimonials' },
    { value: 'why-choose-us', label: 'Why Choose Us' }
  ];

  const [selectedPage, setSelectedPage] = useState('about');
  const [metaData, setMetaData] = useState({
    title: 'About Us - BuildPro Construction',
    description: 'Learn more about BuildPro Construction, our mission, values, and commitment to delivering quality construction services.'
  });

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMetaData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('SEO data submitted for page:', selectedPage, metaData);
  };

  return (
    <div className="p-6 mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-[var(--header-text)] mb-6">SEO Settings</h1>

      <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-6">
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-5 h-5 text-[var(--primary)]" />
          <h2 className="text-lg font-semibold text-[var(--header-text)]">Meta Tags Configuration</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--header-text)] mb-2">Select Page</label>
            <select
              value={selectedPage}
              onChange={handlePageChange}
              className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
            >
              {pages.map((page) => (
                <option key={page.value} value={page.value}>
                  {page.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-[var(--header-text)] mb-2">Meta Title</label>
            <input
              type="text"
              name="title"
              value={metaData.title}
              onChange={handleInputChange}
              maxLength={60}
              className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <p className="text-xs text-gray-500 mt-1">{metaData.title.length}/60 characters</p>
          </div>

          <div>
            <label className="block text-sm text-[var(--header-text)] mb-2">Meta Description</label>
            <textarea
              name="description"
              value={metaData.description}
              onChange={handleInputChange}
              maxLength={160}
              rows={4}
              className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <p className="text-xs text-gray-500 mt-1">{metaData.description.length}/160 characters</p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}