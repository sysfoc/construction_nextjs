import { Users, Briefcase, Wrench, MessageSquare, UserCheck, Calendar } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Users', value: '156', icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'Active Projects', value: '12', icon: Briefcase, color: 'bg-green-50 text-green-600' },
    { label: 'Services', value: '8', icon: Wrench, color: 'bg-purple-50 text-purple-600' },
    { label: 'Inquiries', value: '34', icon: MessageSquare, color: 'bg-orange-50 text-orange-600' },
    { label: 'Job Applications', value: '28', icon: UserCheck, color: 'bg-indigo-50 text-indigo-600' },
  ];

  const recentActivity = [
    { id: 1, type: 'project', title: 'New project started: Residential Building A', date: '2 hours ago' },
    { id: 2, type: 'user', title: 'New user registered: John Smith', date: '5 hours ago' },
    { id: 3, type: 'inquiry', title: 'Service inquiry received', date: '1 day ago' },
    { id: 4, type: 'application', title: 'Job application: Site Engineer', date: '1 day ago' },
    { id: 5, type: 'project', title: 'Project completed: Commercial Complex B', date: '2 days ago' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-[var(--header-text)] mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--background)] border border-[var(--border-color)] rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-[var(--header-text)] mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--background)] border border-[var(--border-color)] rounded">
        <div className="p-4 border-b border-[var(--border-color)]">
          <h2 className="text-lg font-semibold text-[var(--header-text)] flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[var(--primary)]" />
            Recent Activity
          </h2>
        </div>
        <div className="divide-y divide-[var(--border-color)]">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-[var(--header-text)]">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}