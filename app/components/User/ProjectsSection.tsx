"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowUpRight,
  TrendingUp,
  Layers,
} from "lucide-react";
import { useRouter } from "next/navigation";
import type { ProjectData } from "@/lib/models/Project";
import SlantedButton from "../General/buttons/SlantedButton";
import Loader from "../General/Loader";

const statusConfig = {
  ongoing: {
    label: "Ongoing",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    dotColor: "bg-blue-500",
    ringColor: "ring-blue-500",
  },
  completed: {
    label: "Completed",
    color:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    dotColor: "bg-green-500",
    ringColor: "ring-green-500",
  },
  upcoming: {
    label: "Upcoming",
    color:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    dotColor: "bg-amber-500",
    ringColor: "ring-amber-500",
  },
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([]);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "ongoing" | "completed" | "upcoming"
  >("all");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data.slice(0, 3));
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (
    filter: "all" | "ongoing" | "completed" | "upcoming"
  ) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setFilteredProjects(projects.slice(0, 3));
    } else {
      const filtered = projects.filter((p) => p.status === filter);
      setFilteredProjects(filtered.slice(0, 3));
    }
  };

  if (loading) {
    return <Loader height="594px" />;
  }

  return (
    <section className="px-6 max-w-6xl mx-auto py-6 min-h-[594px]">
      {/* Centered Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-primary/10 rounded-full">
          <Layers className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary text-xs font-bold uppercase">
            Featured Work
          </span>
        </div>
        <h2 className="text-3xl font-bold text-foreground dark:text-white mb-2">
          Our Projects
        </h2>
        <p className="text-paragraph dark:text-gray-400 text-xs max-w-xl mx-auto mb-4">
          Explore all of our construction and development projects
        </p>
      </div>

      {/* Filters and Button Row */}
      <div className="flex sm:justify-between justify-center items-center flex-wrap gap-4 mb-6">
        {/* Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {(["all", "ongoing", "completed", "upcoming"] as const).map(
            (filter) => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background border border-gray-300 dark:border-gray-700 text-paragraph hover:border-primary"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* View All Button */}
        {filteredProjects.length > 0 && (
          <SlantedButton
            text="View All Projects"
            onClick={() => router.push("/projects")}
          />
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 bg-background rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
            <Layers className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-paragraph/70 dark:text-gray-400 text-xs">
            No {activeFilter !== "all" ? activeFilter : ""} projects available.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="group relative bg-background rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image with Overlay */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                {/* Status Label */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      statusConfig[project.status].color
                    }`}
                  >
                    {statusConfig[project.status].label}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground dark:text-white mb-1.5 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-paragraph/80 dark:text-gray-400 mb-3 line-clamp-2 flex-grow">
                  {project.description}
                </p>

                {/* Progress Bar for Ongoing */}
                {project.status === "ongoing" &&
                  project.progress !== undefined && (
                    <div className="mb-3 relative">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <TrendingUp className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-xs font-bold text-foreground dark:text-white">
                            Progress
                          </span>
                        </div>
                        <span className="text-xs font-bold text-primary">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500 shadow-sm"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                {/* Meta Grid */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs text-paragraph dark:text-gray-400 truncate">
                      {project.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs text-paragraph dark:text-gray-400 truncate">
                      {project.startDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs text-paragraph dark:text-gray-400">
                      {project.team} Team Members
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
