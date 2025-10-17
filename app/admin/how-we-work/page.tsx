"use client";

import { Save, Plus, Trash2, Edit2, X, Upload } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface Step {
  id: number;
  stepTitle: string;
  description: string;
  image: string | null;
}

interface FormData {
  stepTitle: string;
  description: string;
  imagePreview: string | null;
}

export default function ProcessManagementPage() {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 1,
      stepTitle: "Initial Consultation",
      description:
        "We meet with you to understand your vision, requirements, and budget. Our team conducts a thorough site evaluation and provides expert recommendations.",
      image: null,
    },
    {
      id: 2,
      stepTitle: "Planning & Design",
      description:
        "Our architects and engineers create detailed plans and designs. We ensure all specifications meet building codes and your expectations.",
      image: null,
    },
  ]);

  const [editingStep, setEditingStep] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    stepTitle: "",
    description: "",
    imagePreview: null,
  });

  const handleEdit = (step: Step) => {
    setEditingStep(step.id);
    setFormData({
      stepTitle: step.stepTitle,
      description: step.description,
      imagePreview: step.image,
    });
  };

  const handleCancel = () => {
    setEditingStep(null);
    setFormData({
      stepTitle: "",
      description: "",
      imagePreview: null,
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveStep = () => {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === editingStep
          ? {
              ...step,
              stepTitle: formData.stepTitle,
              description: formData.description,
              image: formData.imagePreview,
            }
          : step
      )
    );
    handleCancel();
  };

  const handleAddStep = () => {
    const newStep: Step = {
      id: Date.now(),
      stepTitle: "New Step",
      description: "Description of this step in the process",
      image: null,
    };
    setSteps((prev) => [...prev, newStep]);
  };

  const handleDeleteStep = (id: number) => {
    setSteps((prev) => prev.filter((step) => step.id !== id));
  };

  const handleSubmit = () => {
    console.log("Process steps saved:", steps);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">
            Process Management
          </h1>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
            >
              {editingStep === step.id ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                      Edit Step
                    </h3>
                    <button
                      onClick={handleCancel}
                      className="text-gray-500 flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-2">
                      Step Image
                    </label>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-32 h-32 sm:w-40 sm:h-28 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50 flex-shrink-0 relative">
                        {formData.imagePreview ? (
                          <Image
                            src={formData.imagePreview}
                            alt="Image preview"
                            fill
                            className="object-cover rounded"
                          />
                        ) : (
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="block text-xs sm:text-sm text-gray-600 file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Recommended: 600x400px
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Step Title
                    </label>
                    <input
                      type="text"
                      name="stepTitle"
                      value={formData.stepTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
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
                      onClick={handleSaveStep}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4 flex-shrink-0" />
                      <span>Save Step</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 w-full">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold flex-shrink-0 text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-20 bg-gray-100 border border-[var(--border-color)] rounded flex items-center justify-center flex-shrink-0 relative">
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={step.stepTitle}
                          fill
                          className="object-cover rounded"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[var(--header-text)] mb-1 sm:mb-2 text-sm sm:text-base break-words">
                        {step.stepTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(step)}
                      className="p-2 text-[var(--primary)] rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteStep(step.id)}
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

        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 mt-4 sm:mt-6 w-full">
          <button
            onClick={handleAddStep}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add Step</span>
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base w-full sm:w-auto"
          >
            <Save className="w-4 h-4 flex-shrink-0" />
            <span>Save All Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
