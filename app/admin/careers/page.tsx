"use client";
import {
  Save,
  Plus,
  Trash2,
  Edit2,
  X,
  Upload,
  MapPin,
  DollarSign,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  deadline: string;
  jobType: string;
  payRange: string;
  image: string | null;
}

interface FormData {
  title: string;
  description: string;
  location: string;
  deadline: string;
  jobType: string;
  payRange: string;
  imagePreview: string | null;
}

export default function JobsManagementPage() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Senior Site Engineer",
      description:
        "We are looking for an experienced Site Engineer to oversee construction projects, manage site operations, and ensure quality standards are met.",
      location: "New York, NY",
      deadline: "2025-11-30",
      jobType: "Full-time",
      payRange: "$70,000 - $90,000",
      image: null,
    },
    {
      id: 2,
      title: "Project Manager",
      description:
        "Seeking a skilled Project Manager to lead construction teams, coordinate with stakeholders, and deliver projects on time and within budget.",
      location: "Los Angeles, CA",
      deadline: "2025-12-15",
      jobType: "Full-time",
      payRange: "$85,000 - $110,000",
      image: null,
    },
    {
      id: 3,
      title: "Construction Supervisor",
      description:
        "Join our team as a Construction Supervisor to manage daily site activities, supervise workers, and maintain safety protocols.",
      location: "Chicago, IL",
      deadline: "2025-11-20",
      jobType: "Full-time",
      payRange: "$55,000 - $70,000",
      image: null,
    },
  ]);

  const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary"];

  const [editingJob, setEditingJob] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    location: "",
    deadline: "",
    jobType: "",
    payRange: "",
    imagePreview: null,
  });

  const handleEdit = (job: Job) => {
    setEditingJob(job.id);
    setFormData({
      title: job.title,
      description: job.description,
      location: job.location,
      deadline: job.deadline,
      jobType: job.jobType,
      payRange: job.payRange,
      imagePreview: job.image,
    });
  };

  const handleCancel = () => {
    setEditingJob(null);
    setFormData({
      title: "",
      description: "",
      location: "",
      deadline: "",
      jobType: "",
      payRange: "",
      imagePreview: null,
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  const handleSaveJob = () => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === editingJob
          ? {
              ...job,
              title: formData.title,
              description: formData.description,
              location: formData.location,
              deadline: formData.deadline,
              jobType: formData.jobType,
              payRange: formData.payRange,
              image: formData.imagePreview,
            }
          : job
      )
    );
    handleCancel();
  };

  const handleAddJob = () => {
    const newJob: Job = {
      id: Date.now(),
      title: "New Position",
      description: "Job description goes here",
      location: "Location",
      deadline: "2025-12-31",
      jobType: "Full-time",
      payRange: "$50,000 - $70,000",
      image: null,
    };
    setJobs((prev) => [newJob, ...prev]);
  };

  const handleDeleteJob = (id: number) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const handleSubmit = () => {
    console.log("Jobs saved:", jobs);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">
            Jobs Management
          </h1>
          <button
            onClick={handleAddJob}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add Job</span>
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
            >
              {editingJob === job.id ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                      Edit Job
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
                      Job Image
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
                          Recommended: 100x100px
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                      />
                    </div>

                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Deadline
                      </label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Job Type
                      </label>
                      <select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white text-sm sm:text-base"
                      >
                        {jobTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Pay Range
                      </label>
                      <input
                        type="text"
                        name="payRange"
                        value={formData.payRange}
                        onChange={handleInputChange}
                        placeholder="$50,000 - $70,000"
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                    <button
                      onClick={handleCancel}
                      className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveJob}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4 flex-shrink-0" />
                      <span>Save Job</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 w-full">
                    <div className="w-20 h-20 sm:w-24 sm:h-20 bg-gray-100 border border-[var(--border-color)] rounded flex items-center justify-center flex-shrink-0 relative">
                      {job.image ? (
                        <Image
                          src={job.image}
                          alt={job.title}
                          fill
                          className="object-cover rounded"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[var(--header-text)] text-sm sm:text-base break-words">
                          {job.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded whitespace-nowrap flex-shrink-0">
                          {job.jobType}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 break-words">
                        {job.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--primary)] flex-shrink-0" />
                          <span className="break-words">{job.location}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3 text-[var(--primary)] flex-shrink-0" />
                          <span className="break-words">{job.payRange}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[var(--primary)] flex-shrink-0" />
                          <span className="break-words">
                            Deadline: {job.deadline}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(job)}
                      className="p-2 text-[var(--primary)] rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
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
