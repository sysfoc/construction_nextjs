'use client';
import { Save, Eye, Trash2, ChevronLeft, ChevronRight, Mail, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from '../components/modals/QuoteModal';

interface Quote {
  id: number;
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  status: 'Pending' | 'In Review' | 'Quoted' | 'Completed';
  response: string;
  date: string;
}

// Main Component
export default function QuoteManagementPage() {
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      id: 1,
      name: 'Michael Roberts',
      email: 'michael.roberts@email.com',
      phone: '+1 (555) 234-5678',
      projectDetails:
        'Looking to build a 3-bedroom residential home with modern amenities. Approximately 2500 sq ft. Need completion within 6 months.',
      status: 'Pending',
      response: '',
      date: '2025-10-15',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 345-6789',
      projectDetails:
        'Commercial office renovation project. 5000 sq ft space requiring complete interior remodeling, HVAC updates, and electrical work.',
      status: 'In Review',
      response:
        'We have reviewed your requirements and are preparing a detailed estimate.',
      date: '2025-10-14',
    },
    {
      id: 3,
      name: 'David Martinez',
      email: 'dmartinez@email.com',
      phone: '+1 (555) 456-7890',
      projectDetails:
        'Industrial warehouse construction. 10,000 sq ft with loading docks and office space. Timeline flexible.',
      status: 'Quoted',
      response:
        'Quote sent: $450,000 - $520,000. Estimated timeline 8-10 months. Please review the detailed proposal.',
      date: '2025-10-12',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma.wilson@email.com',
      phone: '+1 (555) 567-8901',
      projectDetails:
        'Home addition and kitchen remodeling. Adding 500 sq ft extension and complete kitchen renovation.',
      status: 'Completed',
      response:
        'Project completed successfully. Thank you for choosing BuildPro Construction.',
      date: '2025-10-10',
    },
  ]);

  const statusOptions: Quote['status'][] = ['Pending', 'In Review', 'Quoted', 'Completed'];
  const statusColors: Record<Quote['status'], string> = {
    Pending: 'bg-yellow-50 text-yellow-600',
    'In Review': 'bg-blue-50 text-blue-600',
    Quoted: 'bg-purple-50 text-purple-600',
    Completed: 'bg-green-50 text-green-600',
  };

  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 6;

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);
  const totalPages = Math.ceil(quotes.length / quotesPerPage);

  const handleStatusChange = (id: number, newStatus: Quote['status']) => {
    setQuotes((prev) =>
      prev.map((quote) =>
        quote.id === id ? { ...quote, status: newStatus } : quote
      )
    );
    if (selectedQuote?.id === id) {
      setSelectedQuote((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleResponseChange = (id: number, newResponse: string) => {
    setQuotes((prev) =>
      prev.map((quote) =>
        quote.id === id ? { ...quote, response: newResponse } : quote
      )
    );
    if (selectedQuote?.id === id) {
      setSelectedQuote((prev) => (prev ? { ...prev, response: newResponse } : null));
    }
  };

  const handleDeleteQuote = (id: number) => {
    setQuotes((prev) => prev.filter((quote) => quote.id !== id));
    if (selectedQuote?.id === id) {
      setSelectedQuote(null);
    }
  };

  const handleSubmit = () => {
    console.log('Quotes saved:', quotes);
    alert('Changes saved successfully!');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="mb-6 flex sm:flex-row flex-col gap-2 items-center justify-between">
        <h1 className="text-2xl font-semibold text-[var(--header-text)]">Quote Management</h1>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-5 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium hover:opacity-90 transition-opacity"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {currentQuotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-[var(--background)] border border-[var(--border-color)] rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-[var(--header-text)] mb-2">{quote.name}</h3>
                <span
                  className={`inline-block text-xs px-2 py-1 rounded ${statusColors[quote.status]}`}
                >
                  {quote.status}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSelectedQuote(quote)}
                  className="p-2 text-[var(--primary)] hover:bg-gray-100 rounded transition-colors"
                  title="View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteQuote(quote.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p className="truncate flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[var(--primary)]" /> {quote.email}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[var(--primary)]" /> {quote.phone}
              </p>
              <p className="flex items-center gap-3">
                <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" /> {quote.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border border-[var(--border-color)] rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 border border-[var(--border-color)] rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {selectedQuote && (
        <QuoteModal
          quote={selectedQuote}
          onClose={() => setSelectedQuote(null)}
          onStatusChange={handleStatusChange}
          onResponseChange={handleResponseChange}
          statusOptions={statusOptions}
          statusColors={statusColors}
        />
      )}
    </div>
  );
}
