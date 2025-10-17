'use client';
import { Save, Plus, Trash2, Edit2, X, Upload } from 'lucide-react';
import { useState, ChangeEvent } from 'react';

interface Reason {
  id: number;
  heading: string;
  content: string;
  icon: string | null;
}

interface FormData {
  heading: string;
  content: string;
  iconPreview: string | null;
}

export default function WhyChooseUsManagementPage() {
  const [reasons, setReasons] = useState<Reason[]>([
    {
      id: 1,
      heading: 'Expert Team',
      content:
        'Our highly skilled professionals bring years of experience and expertise to every project, ensuring top-quality results.',
      icon: null,
    },
    {
      id: 2,
      heading: 'Quality Materials',
      content:
        'We use only premium, certified materials from trusted suppliers to guarantee durability and excellence in construction.',
      icon: null,
    },
    {
      id: 3,
      heading: 'On-Time Delivery',
      content:
        'We respect your time and budget. Our efficient project management ensures timely completion without compromising quality.',
      icon: null,
    },
    {
      id: 4,
      heading: 'Safety First',
      content:
        'Safety is our top priority. We follow strict safety protocols and industry standards to protect our team and clients.',
      icon: null,
    },
  ]);

  const [editingReason, setEditingReason] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    heading: '',
    content: '',
    iconPreview: null,
  });

  const handleEdit = (reason: Reason) => {
    setEditingReason(reason.id);
    setFormData({
      heading: reason.heading,
      content: reason.content,
      iconPreview: reason.icon,
    });
  };

  const handleCancel = () => {
    setEditingReason(null);
    setFormData({
      heading: '',
      content: '',
      iconPreview: null,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, iconPreview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveReason = () => {
    setReasons((prev) =>
      prev.map((reason) =>
        reason.id === editingReason
          ? {
              ...reason,
              heading: formData.heading,
              content: formData.content,
              icon: formData.iconPreview,
            }
          : reason
      )
    );
    handleCancel();
  };

  const handleAddReason = () => {
    const newReason: Reason = {
      id: Date.now(),
      heading: 'New Reason',
      content: 'Description of why customers should choose us.',
      icon: null,
    };
    setReasons((prev) => [newReason, ...prev]);
  };

  const handleDeleteReason = (id: number) => {
    setReasons((prev) => prev.filter((reason) => reason.id !== id));
  };

  const handleSubmit = () => {
    console.log('Why Choose Us reasons saved:', reasons);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">Why Choose Us Management</h1>
          <button
            onClick={handleAddReason}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add Reason</span>
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {reasons.map((reason) => (
            <div key={reason.id} className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden">
              {editingReason === reason.id ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">Edit Reason</h3>
                    <button onClick={handleCancel} className="text-gray-500 flex-shrink-0">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-2">Icon/Photo</label>
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50 flex-shrink-0 mx-auto sm:mx-0">
                        {formData.iconPreview ? (
                          <img src={formData.iconPreview} alt="Icon preview" className="w-full h-full object-contain p-2" />
                        ) : (
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 w-full">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleIconChange}
                          className="block text-xs sm:text-sm text-gray-600 file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                        />
                        <p className="text-xs text-gray-500 mt-2">Recommended: 50x50px icon or photo</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">Heading</label>
                    <input
                      type="text"
                      name="heading"
                      value={formData.heading}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">Content</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                    <button
                      onClick={handleCancel}
                      className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveReason}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4 flex-shrink-0" />
                      <span>Save Reason</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 border border-[var(--border-color)] rounded flex items-center justify-center flex-shrink-0">
                      {reason.icon ? (
                        <img src={reason.icon} alt={reason.heading} className="w-full h-full object-contain p-2" />
                      ) : (
                        <span className="text-xs text-gray-400">No Icon</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[var(--header-text)] mb-1 sm:mb-2 text-sm sm:text-base break-words">{reason.heading}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">{reason.content}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                    <button onClick={() => handleEdit(reason)} className="p-2 text-[var(--primary)] rounded">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteReason(reason.id)}
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