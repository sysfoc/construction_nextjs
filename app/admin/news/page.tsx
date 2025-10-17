'use client';
import { Save, Plus, Trash2, Edit2, X, Upload } from 'lucide-react';
import { useState, ChangeEvent } from 'react';

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  shortContent: string;
  fullContent: string;
  category: string;
  photo: string | null;
}

interface FormData {
  title: string;
  slug: string;
  shortContent: string;
  fullContent: string;
  category: string;
  photoPreview: string | null;
}

export default function NewsManagementPage() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: 'New Commercial Complex Project Completed',
      slug: 'new-commercial-complex-completed',
      shortContent: 'BuildPro Construction successfully completes state-of-the-art commercial complex ahead of schedule.',
      fullContent:
        'BuildPro Construction has successfully completed the construction of a modern commercial complex in downtown. The project was delivered two weeks ahead of schedule while maintaining the highest quality standards. The complex features sustainable building practices and modern amenities.',
      category: 'Projects',
      photo: null,
    },
    {
      id: 2,
      title: 'BuildPro Wins Industry Excellence Award',
      slug: 'buildpro-wins-excellence-award',
      shortContent: 'Our commitment to quality and innovation recognized with prestigious industry award.',
      fullContent:
        'BuildPro Construction has been honored with the Industry Excellence Award for outstanding contribution to sustainable construction practices. This recognition highlights our dedication to quality, safety, and environmental responsibility.',
      category: 'Company News',
      photo: null,
    },
    {
      id: 3,
      title: 'Safety Training Program Launch',
      slug: 'safety-training-program-launch',
      shortContent: 'New comprehensive safety training program introduced for all construction staff.',
      fullContent:
        'BuildPro Construction announces the launch of an enhanced safety training program. All team members will undergo comprehensive training covering latest safety protocols, equipment handling, and emergency procedures to ensure the highest safety standards on all our projects.',
      category: 'Safety',
      photo: null,
    },
  ]);

  const categories = ['Projects', 'Company News', 'Safety', 'Industry Updates', 'Announcements'];

  const [editingNews, setEditingNews] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    slug: '',
    shortContent: '',
    fullContent: '',
    category: '',
    photoPreview: null,
  });

  const handleEdit = (newsItem: NewsItem) => {
    setEditingNews(newsItem.id);
    setFormData({
      title: newsItem.title,
      slug: newsItem.slug,
      shortContent: newsItem.shortContent,
      fullContent: newsItem.fullContent,
      category: newsItem.category,
      photoPreview: newsItem.photo,
    });
  };

  const handleCancel = () => {
    setEditingNews(null);
    setFormData({
      title: '',
      slug: '',
      shortContent: '',
      fullContent: '',
      category: '',
      photoPreview: null,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photoPreview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveNews = () => {
    setNews((prev) =>
      prev.map((newsItem) =>
        newsItem.id === editingNews
          ? {
              ...newsItem,
              title: formData.title,
              slug: formData.slug,
              shortContent: formData.shortContent,
              fullContent: formData.fullContent,
              category: formData.category,
              photo: formData.photoPreview,
            }
          : newsItem
      )
    );
    handleCancel();
  };

  const handleAddNews = () => {
    const newNewsItem: NewsItem = {
      id: Date.now(),
      title: 'New Article',
      slug: 'new-article',
      shortContent: 'Brief description of the news article',
      fullContent: 'Full content of the news article goes here with more details',
      category: 'Company News',
      photo: null,
    };
    setNews((prev) => [...prev, newNewsItem]);
  };

  const handleDeleteNews = (id: number) => {
    setNews((prev) => prev.filter((newsItem) => newsItem.id !== id));
  };

  const handleSubmit = () => {
    console.log('News saved:', news);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">News Management</h1>
          <button
            onClick={handleAddNews}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add News</span>
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {news.map((newsItem) => (
            <div key={newsItem.id} className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden">
              {editingNews === newsItem.id ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">Edit News</h3>
                    <button onClick={handleCancel} className="text-gray-500 flex-shrink-0">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-2">Featured Photo</label>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-32 h-32 sm:w-40 sm:h-28 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50 flex-shrink-0">
                        {formData.photoPreview ? (
                          <img src={formData.photoPreview} alt="Photo preview" className="w-full h-full object-cover rounded" />
                        ) : (
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="block w-full text-xs sm:text-sm text-gray-600 file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                        />
                        <p className="text-xs text-gray-500 mt-2">Recommended: 800x500px</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                      />
                    </div>

                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">Slug</label>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white text-sm sm:text-base"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">Short Content</label>
                    <textarea
                      name="shortContent"
                      value={formData.shortContent}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base resize-none"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">Full Content</label>
                    <textarea
                      name="fullContent"
                      value={formData.fullContent}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                    <button onClick={handleCancel} className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base">
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveNews}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4 flex-shrink-0" />
                      <span>Save News</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 w-full">
                    <div className="w-24 h-24 sm:w-28 sm:h-20 bg-gray-100 border border-[var(--border-color)] rounded flex items-center justify-center flex-shrink-0">
                      {newsItem.photo ? (
                        <img src={newsItem.photo} alt={newsItem.title} className="w-full h-full object-cover rounded" />
                      ) : (
                        <span className="text-xs text-gray-400">No Photo</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[var(--header-text)] text-sm sm:text-base break-words">{newsItem.title}</h3>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded whitespace-nowrap flex-shrink-0">{newsItem.category}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2 break-all">/{newsItem.slug}</p>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">{newsItem.shortContent}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                    <button onClick={() => handleEdit(newsItem)} className="p-2 text-[var(--primary)] rounded">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDeleteNews(newsItem.id)} className="p-2 text-red-600 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

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