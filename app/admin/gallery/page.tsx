"use client";
import { Save, Plus, Trash2, Upload, X, Folder } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface MediaItem {
  id: number;
  url: string | ArrayBuffer | null;
  type: "image" | "video";
}

interface Category {
  id: number;
  name: string;
  items: MediaItem[];
}

export default function GalleryManagementPage() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Roofing", items: [] },
    { id: 2, name: "Interior Work", items: [] },
    { id: 3, name: "Foundation", items: [] },
    { id: 4, name: "Commercial Projects", items: [] },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);

  const handleSelectCategory = (category: Category) =>
    setSelectedCategory(category);

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    const newCategory: Category = {
      id: Date.now(),
      name: newCategoryName,
      items: [],
    };
    setCategories((prev) => [...prev, newCategory]);
    setNewCategoryName("");
    setShowAddCategory(false);
  };

  const handleDeleteCategory = (categoryId: number) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
    if (selectedCategory?.id === categoryId) setSelectedCategory(null);
  };

  const handleAddMedia = (e: ChangeEvent<HTMLInputElement>) => {
    if (!selectedCategory || !e.target.files) return;

    const files = Array.from(e.target.files);
    const readers = files.map(
      (file) =>
        new Promise<MediaItem>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({
              id: Date.now() + Math.random(),
              url: reader.result,
              type: file.type.startsWith("video") ? "video" : "image",
            });
          };
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((newItems) => {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === selectedCategory.id
            ? { ...cat, items: [...cat.items, ...newItems] }
            : cat
        )
      );
      setSelectedCategory((prev) =>
        prev ? { ...prev, items: [...prev.items, ...newItems] } : prev
      );
    });
  };

  const handleDeleteMedia = (itemId: number) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === selectedCategory?.id
          ? { ...cat, items: cat.items.filter((item) => item.id !== itemId) }
          : cat
      )
    );
    setSelectedCategory((prev) =>
      prev
        ? { ...prev, items: prev.items.filter((item) => item.id !== itemId) }
        : prev
    );
  };

  const handleSubmit = () => {
    console.log("Gallery saved:", categories);
  };

  return (
    <div className="p-5 mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-[var(--header-text)] mb-6">
        Gallery Management
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[var(--header-text)]">
                Categories
              </h3>
              <button
                onClick={() => setShowAddCategory(true)}
                className="p-1 text-[var(--primary)] rounded"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {showAddCategory && (
              <div className="mb-3 p-3 bg-gray-50 rounded">
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Category name"
                  className="w-full px-3 py-2 text-sm border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] mb-2"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddCategory}
                    className="flex-1 px-3 py-1 text-sm bg-[var(--primary)] text-[var(--primary-foreground)] rounded"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => {
                      setShowAddCategory(false);
                      setNewCategoryName("");
                    }}
                    className="flex-1 px-3 py-1 text-sm border border-[var(--border-color)] rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex items-center justify-between p-3 rounded cursor-pointer transition-colors ${
                    selectedCategory?.id === category.id
                      ? "bg-blue-50 border border-blue-200"
                      : "bg-gray-50 border border-transparent hover:bg-gray-100"
                  }`}
                  onClick={() => handleSelectCategory(category)}
                >
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 flex-shrink-0 text-gray-500" />
                    <span className="text-sm text-[var(--header-text)]">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">
                      {category.items.length}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCategory(category.id);
                      }}
                      className="p-1 text-red-600 rounded"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {selectedCategory ? (
            <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[var(--header-text)]">
                  {selectedCategory.name}
                </h3>
              </div>

              {selectedCategory.items.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {selectedCategory.items.map((item) => (
                    <div key={item.id} className="relative group">
                      <div className="aspect-square border border-[var(--border-color)] rounded overflow-hidden bg-gray-100 relative">
                        {item.type === "video" ? (
                          <video
                            src={item.url as string}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={item.url as string}
                            alt="Gallery item"
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteMedia(item.id)}
                        className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      {item.type === "video" && (
                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black bg-opacity-60 text-white text-xs rounded">
                          Video
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Upload className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 mb-4">
                    No media in this category
                  </p>
                  <label className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium cursor-pointer">
                    <Upload className="w-4 h-4" />
                    Add Media
                    <input
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={handleAddMedia}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-12 text-center">
              <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Select a category to manage media</p>
            </div>
          )}
        </div>
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
