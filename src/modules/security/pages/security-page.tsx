'use client'

import { useState } from 'react'
import { Shield, Eye, TriangleAlert, CircleCheck, Clock } from 'lucide-react'

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const auditLogs = [
    {
      user: 'Sarah Johnson',
      action: 'Updated KPI targets',
      timestamp: '2024-11-10 14:30',
      ip: '192.168.1.100',
      status: 'success'
    },
    {
      user: 'Michael Chen',
      action: 'Created new assessment',
      timestamp: '2024-11-10 13:15',
      ip: '192.168.1.101',
      status: 'success'
    },
    {
      user: 'Emily Rodriguez',
      action: 'Failed login attempt',
      timestamp: '2024-11-10 12:45',
      ip: '192.168.1.102',
      status: 'failed'
    },
    {
      user: 'David Kim',
      action: 'Exported user data',
      timestamp: '2024-11-10 11:20',
      ip: '192.168.1.103',
      status: 'success'
    },
    {
      user: 'Jessica Taylor',
      action: 'Modified role permissions',
      timestamp: '2024-11-10 10:10',
      ip: '192.168.1.104',
      status: 'success'
    }
  ]

  const securityEvents = [
    {
      icon: TriangleAlert,
      title: 'Multiple failed login attempts detected',
      time: '5 minutes ago',
      type: 'warning',
      color: 'yellow'
    },
    {
      icon: Eye,
      title: 'Security patch applied successfully',
      time: '2 hours ago',
      type: 'info',
      color: 'blue'
    },
    {
      icon: CircleCheck,
      title: 'Backup completed successfully',
      time: '6 hours ago',
      type: 'success',
      color: 'green'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0A0F1C] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#0A0F1C]" />
            </div>
            <h1 className="text-3xl font-bold text-white">Security & Compliance</h1>
          </div>
          <p className="text-[#B0B6C1]">Manage security settings and compliance standards</p>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 bg-white/5 rounded-xl p-[3px] w-fit">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-white/10 border border-white/10 text-white'
                  : 'border border-transparent text-[#B0B6C1] hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                activeTab === 'audit'
                  ? 'bg-white/10 border border-white/10 text-white'
                  : 'border border-transparent text-[#B0B6C1] hover:text-white'
              }`}
            >
              Audit Logs
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                activeTab === 'events'
                  ? 'bg-white/10 border border-white/10 text-white'
                  : 'border border-transparent text-[#B0B6C1] hover:text-white'
              }`}
            >
              Security Events
            </button>
          </div>
        </div>

        {/* Overview Tab - Compliance Standards */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GDPR */}
            <div className="relative group">
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-1">GDPR</h3>
                    <p className="text-[#B0B6C1] text-sm">General Data Protection Regulation</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 border-green-500/30">
                    compliant
                  </span>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[#B0B6C1] text-sm">Coverage</span>
                  <span className="text-white">95%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{ width: '95%' }}></div>
                </div>
                <button className="w-full mt-4 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                  View Details
                </button>
              </div>
            </div>

            {/* SOC 2 */}
            <div className="relative group">
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-1">SOC 2</h3>
                    <p className="text-[#B0B6C1] text-sm">Service Organization Control 2</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 border-green-500/30">
                    compliant
                  </span>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[#B0B6C1] text-sm">Coverage</span>
                  <span className="text-white">92%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{ width: '92%' }}></div>
                </div>
                <button className="w-full mt-4 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                  View Details
                </button>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="relative group">
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-1">ISO 27001</h3>
                    <p className="text-[#B0B6C1] text-sm">Information Security Management</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-[#00AEEF]/20 text-[#00AEEF] border-[#00AEEF]/30">
                    in progress
                  </span>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[#B0B6C1] text-sm">Coverage</span>
                  <span className="text-white">78%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]" style={{ width: '78%' }}></div>
                </div>
                <button className="w-full mt-4 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                  View Details
                </button>
              </div>
            </div>

            {/* HIPAA */}
            <div className="relative group">
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-1">HIPAA</h3>
                    <p className="text-[#B0B6C1] text-sm">Health Insurance Portability</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-white/10 text-[#B0B6C1] border-white/10">
                    not applicable
                  </span>
                </div>
                <button className="w-full mt-4 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Audit Logs Tab */}
        {activeTab === 'audit' && (
          <div className="relative group">
            <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all p-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search audit logs..."
                  className="w-full h-9 px-3 py-1 rounded-md border bg-white/5 border-white/10 text-white placeholder:text-[#B0B6C1] focus:outline-none focus:border-[#00F5C6]/50 focus:ring-[#00F5C6]/20 focus:ring-[3px] transition-all"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="h-10 px-2 text-left align-middle font-medium text-[#B0B6C1] whitespace-nowrap">User</th>
                      <th className="h-10 px-2 text-left align-middle font-medium text-[#B0B6C1] whitespace-nowrap">Action</th>
                      <th className="h-10 px-2 text-left align-middle font-medium text-[#B0B6C1] whitespace-nowrap">Timestamp</th>
                      <th className="h-10 px-2 text-left align-middle font-medium text-[#B0B6C1] whitespace-nowrap">IP Address</th>
                      <th className="h-10 px-2 text-left align-middle font-medium text-[#B0B6C1] whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-2 align-middle whitespace-nowrap text-white">{log.user}</td>
                        <td className="p-2 align-middle whitespace-nowrap text-white">{log.action}</td>
                        <td className="p-2 align-middle whitespace-nowrap text-[#B0B6C1]">{log.timestamp}</td>
                        <td className="p-2 align-middle whitespace-nowrap text-[#B0B6C1]">{log.ip}</td>
                        <td className="p-2 align-middle whitespace-nowrap">
                          <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ${
                            log.status === 'success'
                              ? 'border-green-500/30 text-green-400'
                              : 'border-red-500/30 text-red-400'
                          }`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Security Events Tab */}
        {activeTab === 'events' && (
          <div className="relative group">
            <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all p-6">
              <div className="space-y-4">
                {securityEvents.map((event, index) => {
                  const Icon = event.icon
                  const bgColors = {
                    yellow: 'bg-yellow-500/20',
                    blue: 'bg-[#00AEEF]/20',
                    green: 'bg-green-500/20'
                  }
                  const textColors = {
                    yellow: 'text-yellow-400',
                    blue: 'text-[#00AEEF]',
                    green: 'text-green-400'
                  }
                  
                  return (
                    <div key={index} className="p-4 rounded-lg border border-white/10 bg-white/5 flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${bgColors[event.color as keyof typeof bgColors]}`}>
                        <Icon className={`w-5 h-5 ${textColors[event.color as keyof typeof textColors]}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white mb-1">{event.title}</p>
                        <p className="text-[#B0B6C1] text-sm flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
