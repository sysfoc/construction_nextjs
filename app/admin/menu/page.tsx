'use client';
import { Save, GripVertical, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  slug: string;
  visible: boolean;
  isHomeComponent?: boolean;
}

export default function MenuManagementPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    // Home Page Components (reorder + visibility)
    { id: 1, name: 'Hero Section', slug: 'hero-section', visible: true, isHomeComponent: true },
    { id: 2, name: 'About Section', slug: 'about-section', visible: true, isHomeComponent: true },
    { id: 3, name: 'Pricing Card', slug: 'pricing-card', visible: true, isHomeComponent: true },
    { id: 4, name: 'Construction Section', slug: 'construction-section', visible: true, isHomeComponent: true },
    { id: 5, name: 'Services Grid', slug: 'services-grid', visible: true, isHomeComponent: true },
    { id: 6, name: 'Projects Section', slug: 'projects-section', visible: true, isHomeComponent: true },
    { id: 7, name: 'Quote Section', slug: 'quote-section', visible: true, isHomeComponent: true },
    { id: 8, name: 'Construction Testimonial', slug: 'construction-testimonial', visible: true, isHomeComponent: true },
    { id: 9, name: 'Agency FAQ', slug: 'agency-faq', visible: true, isHomeComponent: true },
    { id: 10, name: 'Construction CTA', slug: 'construction-cta', visible: true, isHomeComponent: true },
    { id: 11, name: 'Blog Cards', slug: 'blog-cards', visible: true, isHomeComponent: true },

    // Pages (visibility only)
    { id: 12, name: 'About', slug: 'about', visible: true },
    { id: 13, name: 'Services', slug: 'book-service', visible: true },
    { id: 14, name: 'Portfolio', slug: 'portfolio', visible: true },
    { id: 15, name: 'Projects', slug: 'how-we-work', visible: true },
    { id: 16, name: 'Gallery', slug: 'gallery', visible: true },
    { id: 17, name: 'Team', slug: 'team', visible: true },
    { id: 18, name: 'Careers', slug: 'careers', visible: true },
    { id: 19, name: 'Jobs', slug: 'jobs', visible: false },
    { id: 20, name: 'Certifications', slug: 'certifications', visible: true },
    { id: 21, name: 'Partners', slug: 'partners', visible: true },
    { id: 22, name: 'Testimonials', slug: 'testimonials', visible: true },
    { id: 23, name: 'Why Choose Us', slug: 'why-choose-us', visible: true },
    { id: 24, name: 'FAQs', slug: 'faqs', visible: true },
    { id: 25, name: 'News', slug: 'news', visible: true },
    { id: 26, name: 'Quote', slug: 'quote', visible: true },
    { id: 27, name: 'Emergency Service', slug: 'emergency-service', visible: true },
    { id: 28, name: 'Newsletter', slug: 'newsletter', visible: false },
    { id: 29, name: 'Contact', slug: 'contact', visible: true },
  ]);

  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'pages'>('home');

  const homeComponents = menuItems.filter(item => item.isHomeComponent);
  const pages = menuItems.filter(item => !item.isHomeComponent);

  const toggleVisibility = (id: number) => {
    setMenuItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    const newItems = [...menuItems];
    const draggedItemContent = newItems[draggedItem];
    if (!draggedItemContent.isHomeComponent || !newItems[index].isHomeComponent) return;

    newItems.splice(draggedItem, 1);
    newItems.splice(index, 0, draggedItemContent);

    setDraggedItem(index);
    setMenuItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleSubmit = () => {
    console.log('Menu order saved:', menuItems);
  };

  const displayItems = activeTab === 'home' ? homeComponents : pages;

  return (
    <div className="p-4 mx-auto bg-gray-50 min-h-screen">
      <div className="flex sm:flex-row flex-col items-baseline gap-2 justify-start mb-4">
        <h1 className="text-2xl font-semibold text-[var(--header-text)]">Menu Management</h1>
        <p className="text-sm text-gray-600">
          {activeTab === 'home' ? 'Drag items to reorder and toggle visibility' : 'Toggle visibility for pages'}
        </p>
      </div>

      <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-2">
        <div className="flex gap-2 mb-4 border-b border-[var(--border-color)]">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'home'
                ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]'
                : 'text-gray-600 hover:text-[var(--header-text)]'
            }`}
          >
            Home Components
          </button>
          <button
            onClick={() => setActiveTab('pages')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'pages'
                ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]'
                : 'text-gray-600 hover:text-[var(--header-text)]'
            }`}
          >
            Pages
          </button>
        </div>

        <div className="space-y-2 mb-4">
          {displayItems.map((item, index) => {
            const actualIndex = menuItems.findIndex(mi => mi.id === item.id);
            return (
              <div
                key={item.id}
                draggable={item.isHomeComponent}
                onDragStart={item.isHomeComponent ? (e) => handleDragStart(e, actualIndex) : undefined}
                onDragOver={item.isHomeComponent ? (e) => handleDragOver(e, actualIndex) : undefined}
                onDragEnd={item.isHomeComponent ? handleDragEnd : undefined}
                className={`flex items-center justify-between p-2 border border-[var(--border-color)] rounded bg-white transition-all ${
                  item.isHomeComponent ? 'cursor-move' : 'cursor-default'
                } ${draggedItem === actualIndex ? 'opacity-50' : ''}`}
              >
                <div className="flex items-center gap-2 flex-1">
                  {item.isHomeComponent && <GripVertical className="w-4 h-4 text-gray-400" />}
                  <span className="text-sm text-[var(--header-text)] font-medium">{item.name}</span>
                </div>

                <button
                  onClick={() => toggleVisibility(item.id)}
                  className="flex items-center gap-2 px-2 py-1 rounded text-sm"
                >
                  {item.visible ? (
                    <>
                      <Eye className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Visible</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Hidden</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}