'use client'

import { useState } from 'react'
import { Settings, Palette, Plug, Accessibility, Zap, ChevronDown, Building2, Shield, Brain, ClipboardList, Users, Calendar, CircleCheck } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'appearance' | 'integrations' | 'accessibility' | 'beta' | 'organization' | 'assessments'>('general')
  const [orgSubTab, setOrgSubTab] = useState<'branding' | 'departments' | 'roles' | 'kpi' | 'admins' | 'security' | 'ai'>('branding')

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1200px] mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-white text-3xl mb-2">Settings</h1>
          <p className="text-[#B0B6C1]">Manage your account and application preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-2 w-full">
          {/* Tab List */}
          <div className="h-9 w-fit items-center justify-center rounded-xl p-[3px] flex bg-white/5 overflow-x-auto">
            <button
              onClick={() => setActiveTab('general')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'general'
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-[#B0B6C1] hover:bg-white/5'
              }`}
            >
              <Settings className="w-4 h-4" />
              General
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'appearance'
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-[#B0B6C1] hover:bg-white/5'
              }`}
            >
              <Palette className="w-4 h-4" />
              Appearance
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'integrations'
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-[#B0B6C1] hover:bg-white/5'
              }`}
            >
              <Plug className="w-4 h-4" />
              Integrations
            </button>
            <button
              onClick={() => setActiveTab('accessibility')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'accessibility'
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-[#B0B6C1] hover:bg-white/5'
              }`}
            >
              <Accessibility className="w-4 h-4" />
              Accessibility
            </button>
            <button
              onClick={() => setActiveTab('beta')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'beta'
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-[#B0B6C1] hover:bg-white/5'
              }`}
            >
              <Zap className="w-4 h-4" />
              Beta Features
            </button>
            <button
              onClick={() => setActiveTab('organization')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'organization'
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-[#B0B6C1] hover:bg-white/5'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Organization Setup
            </button>
            <button
              onClick={() => setActiveTab('assessments')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'assessments'
                  ? 'bg-white/10 border-white/10 text-white'
                  : 'border-transparent text-[#B0B6C1] hover:bg-white/5'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Assessments
            </button>
          </div>

          {/* General Tab Content */}
          {activeTab === 'general' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              {/* Organization Details */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6 space-y-6">
                    <h3 className="text-white text-lg">Organization Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white text-sm font-medium">Organization Name</label>
                        <input
                          type="text"
                          className="mt-2 w-full h-9 rounded-md border bg-white/5 border-white/10 text-white px-3 py-1 text-sm outline-none focus:border-[#00F5C6] focus:ring-2 focus:ring-[#00F5C6]/20 transition-all"
                          defaultValue="Acme Corporation"
                        />
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium">Domain</label>
                        <input
                          type="text"
                          className="mt-2 w-full h-9 rounded-md border bg-white/5 border-white/10 text-white px-3 py-1 text-sm outline-none focus:border-[#00F5C6] focus:ring-2 focus:ring-[#00F5C6]/20 transition-all"
                          defaultValue="acme.evalai.com"
                        />
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium">Time Zone</label>
                        <div className="relative mt-2">
                          <button className="w-full h-9 rounded-md border bg-white/5 border-white/10 text-white px-3 py-2 text-sm outline-none hover:bg-white/10 transition-all flex items-center justify-between">
                            <span>Pacific Time (UTC-8)</span>
                            <ChevronDown className="w-4 h-4 opacity-50" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium">Language</label>
                        <div className="relative mt-2">
                          <button className="w-full h-9 rounded-md border bg-white/5 border-white/10 text-white px-3 py-2 text-sm outline-none hover:bg-white/10 transition-all flex items-center justify-between">
                            <span>English</span>
                            <ChevronDown className="w-4 h-4 opacity-50" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6 space-y-4">
                    <h3 className="text-white text-lg">Notifications</h3>
                    <div className="space-y-4">
                      {/* Email Notifications */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Email Notifications</p>
                          <p className="text-[#B0B6C1] text-sm">Receive email updates about your organization</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-[calc(100%-2px)]"></span>
                        </button>
                      </div>

                      {/* Assessment Reminders */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Assessment Reminders</p>
                          <p className="text-[#B0B6C1] text-sm">Get reminders for pending assessments</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-[calc(100%-2px)]"></span>
                        </button>
                      </div>

                      {/* AI Insights */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">AI Insights</p>
                          <p className="text-[#B0B6C1] text-sm">Weekly AI-generated insights and recommendations</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-[calc(100%-2px)]"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance Tab Content */}
          {activeTab === 'appearance' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              {/* Theme Customization */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6 space-y-6">
                    <h3 className="text-white text-lg">Theme Customization</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Primary Color */}
                      <div>
                        <label className="text-white text-sm font-medium">Primary Color</label>
                        <div className="flex gap-3 mt-2">
                          <input
                            type="color"
                            className="w-20 h-12 rounded-md border bg-white/5 border-white/10 cursor-pointer"
                            defaultValue="#00F5C6"
                          />
                          <input
                            type="text"
                            className="flex-1 h-9 rounded-md border bg-white/5 border-white/10 text-white px-3 py-1 text-sm outline-none focus:border-[#00F5C6] focus:ring-2 focus:ring-[#00F5C6]/20 transition-all"
                            defaultValue="#00F5C6"
                          />
                        </div>
                      </div>

                      {/* Accent Color */}
                      <div>
                        <label className="text-white text-sm font-medium">Accent Color</label>
                        <div className="flex gap-3 mt-2">
                          <input
                            type="color"
                            className="w-20 h-12 rounded-md border bg-white/5 border-white/10 cursor-pointer"
                            defaultValue="#00AEEF"
                          />
                          <input
                            type="text"
                            className="flex-1 h-9 rounded-md border bg-white/5 border-white/10 text-white px-3 py-1 text-sm outline-none focus:border-[#00F5C6] focus:ring-2 focus:ring-[#00F5C6]/20 transition-all"
                            defaultValue="#00AEEF"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Font Size Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white text-sm font-medium">Font Size</label>
                        <span className="text-[#00F5C6]">Medium</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          defaultValue="50"
                          className="w-full h-4 rounded-full bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#00F5C6] [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-[#B0B6C1] mt-2">
                        <span>Small</span>
                        <span>Large</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Display Options */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6 space-y-4">
                    <h3 className="text-white text-lg">Display Options</h3>
                    <div className="space-y-4">
                      {/* Compact Mode */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Compact Mode</p>
                          <p className="text-[#B0B6C1] text-sm">Reduce spacing for more content on screen</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-white/20"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-0"></span>
                        </button>
                      </div>

                      {/* Animations */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Animations</p>
                          <p className="text-[#B0B6C1] text-sm">Enable smooth transitions and effects</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-[calc(100%-2px)]"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integrations Tab Content */}
          {activeTab === 'integrations' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6">
                    <h3 className="text-white text-lg mb-6">Connected Services</h3>
                    <div className="space-y-4">
                      {/* Slack */}
                      <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">💬</span>
                          <div>
                            <p className="text-white">Slack</p>
                            <p className="text-sm text-[#00F5C6]">Connected</p>
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 border border-white/10 text-white hover:bg-white/5">
                          Disconnect
                        </button>
                      </div>

                      {/* Microsoft Teams */}
                      <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">👥</span>
                          <div>
                            <p className="text-white">Microsoft Teams</p>
                            <p className="text-sm text-[#B0B6C1]">Not Connected</p>
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
                          Connect
                        </button>
                      </div>

                      {/* Jira */}
                      <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📋</span>
                          <div>
                            <p className="text-white">Jira</p>
                            <p className="text-sm text-[#00F5C6]">Connected</p>
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 border border-white/10 text-white hover:bg-white/5">
                          Disconnect
                        </button>
                      </div>

                      {/* Salesforce */}
                      <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">☁️</span>
                          <div>
                            <p className="text-white">Salesforce</p>
                            <p className="text-sm text-[#B0B6C1]">Not Connected</p>
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accessibility Tab Content */}
          {activeTab === 'accessibility' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6 space-y-4">
                    <h3 className="text-white text-lg">Accessibility Options</h3>
                    <div className="space-y-4">
                      {/* High Contrast Mode */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">High Contrast Mode</p>
                          <p className="text-[#B0B6C1] text-sm">Increase contrast for better visibility</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-white/20"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-0"></span>
                        </button>
                      </div>

                      {/* Reduced Motion */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Reduced Motion</p>
                          <p className="text-[#B0B6C1] text-sm">Minimize animations and transitions</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-white/20"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-0"></span>
                        </button>
                      </div>

                      {/* Screen Reader Optimization */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Screen Reader Optimization</p>
                          <p className="text-[#B0B6C1] text-sm">Enhanced labels and descriptions</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-[calc(100%-2px)]"></span>
                        </button>
                      </div>

                      {/* Keyboard Navigation */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Keyboard Navigation</p>
                          <p className="text-[#B0B6C1] text-sm">Enhanced keyboard shortcuts</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-[calc(100%-2px)]"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Beta Features Tab Content */}
          {activeTab === 'beta' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6 space-y-4">
                    <h3 className="text-white text-lg">Experimental Features</h3>
                    <div className="space-y-4">
                      {/* AI Simulation & Role-Play */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-white">AI Simulation & Role-Play</p>
                            <span className="px-2 py-0.5 rounded bg-[#00F5C6]/20 text-[#00F5C6] text-xs">Beta</span>
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Interactive AI coaching scenarios</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-white/20"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-0"></span>
                        </button>
                      </div>

                      {/* Predictive Analytics */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-white">Predictive Analytics</p>
                            <span className="px-2 py-0.5 rounded bg-[#00F5C6]/20 text-[#00F5C6] text-xs">Beta</span>
                          </div>
                          <p className="text-[#B0B6C1] text-sm">AI-powered performance forecasting</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-white/20"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-0"></span>
                        </button>
                      </div>

                      {/* AI Course Generator */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-white">AI Course Generator</p>
                            <span className="px-2 py-0.5 rounded bg-yellow-400/20 text-yellow-400 text-xs">Coming Soon</span>
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Automatically generate training courses</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          disabled
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-white/20 opacity-50 cursor-not-allowed"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-0"></span>
                        </button>
                      </div>

                      {/* VR/AR Training */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-white">VR/AR Training</p>
                            <span className="px-2 py-0.5 rounded bg-yellow-400/20 text-yellow-400 text-xs">Coming Soon</span>
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Immersive learning experiences</p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          disabled
                          className="peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none bg-white/20 opacity-50 cursor-not-allowed"
                        >
                          <span className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform translate-x-0"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Organization Setup Tab */}
          {activeTab === 'organization' && (
            <div className="space-y-6">
              {/* Sub-tabs for Organization Setup */}
              <div className="flex gap-2 bg-white/5 rounded-xl p-[3px] w-fit overflow-x-auto">
                <button
                  onClick={() => setOrgSubTab('branding')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    orgSubTab === 'branding'
                      ? 'bg-white/10 border border-white/10 text-white'
                      : 'border border-transparent text-[#B0B6C1] hover:text-white'
                  }`}
                >
                  Branding
                </button>
                <button
                  onClick={() => setOrgSubTab('departments')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    orgSubTab === 'departments'
                      ? 'bg-white/10 border border-white/10 text-white'
                      : 'border border-transparent text-[#B0B6C1] hover:text-white'
                  }`}
                >
                  Departments
                </button>
                <button
                  onClick={() => setOrgSubTab('roles')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    orgSubTab === 'roles'
                      ? 'bg-white/10 border border-white/10 text-white'
                      : 'border border-transparent text-[#B0B6C1] hover:text-white'
                  }`}
                >
                  Roles & Permissions
                </button>
                <button
                  onClick={() => setOrgSubTab('kpi')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    orgSubTab === 'kpi'
                      ? 'bg-white/10 border border-white/10 text-white'
                      : 'border border-transparent text-[#B0B6C1] hover:text-white'
                  }`}
                >
                  KPI Packs
                </button>
                <button
                  onClick={() => setOrgSubTab('admins')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    orgSubTab === 'admins'
                      ? 'bg-white/10 border border-white/10 text-white'
                      : 'border border-transparent text-[#B0B6C1] hover:text-white'
                  }`}
                >
                  Admin Management
                </button>
                <button
                  onClick={() => setOrgSubTab('security')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    orgSubTab === 'security'
                      ? 'bg-white/10 border border-white/10 text-white'
                      : 'border border-transparent text-[#B0B6C1] hover:text-white'
                  }`}
                >
                  Security Settings
                </button>
                <button
                  onClick={() => setOrgSubTab('ai')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    orgSubTab === 'ai'
                      ? 'bg-white/10 border border-white/10 text-white'
                      : 'border border-transparent text-[#B0B6C1] hover:text-white'
                  }`}
                >
                  AI Configuration
                </button>
              </div>

              {/* Branding Tab Content */}
              {orgSubTab === 'branding' && (
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm leading-none font-medium text-white">Primary Color</label>
                        <div className="flex gap-3 mt-2">
                          <input type="color" className="w-20 h-12 rounded-md border bg-white/5 border-white/10" value="#00F5C6" />
                          <input className="flex-1 h-9 px-3 py-1 rounded-md border bg-white/5 border-white/10 text-white" value="#00F5C6" />
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm leading-none font-medium text-white">Secondary Color</label>
                        <div className="flex gap-3 mt-2">
                          <input type="color" className="w-20 h-12 rounded-md border bg-white/5 border-white/10" value="#00AEEF" />
                          <input className="flex-1 h-9 px-3 py-1 rounded-md border bg-white/5 border-white/10 text-white" value="#00AEEF" />
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm leading-none font-medium text-white">Logo Upload</label>
                        <div className="mt-2 border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-[#00F5C6]/50 transition-colors cursor-pointer">
                          <p className="text-[#B0B6C1]">Drop your logo here or click to browse</p>
                          <p className="text-[#B0B6C1] text-xs mt-2">SVG, PNG, JPG (max 2MB)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Departments Tab Content */}
              {orgSubTab === 'departments' && (
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[#B0B6C1]">Define your organizational structure</p>
                        <button className="inline-flex items-center gap-2 h-9 px-4 py-2 rounded-md border border-[#00F5C6]/50 text-[#00F5C6] hover:bg-white/5 transition-all">
                          <Brain className="w-4 h-4" />
                          AI Auto-Suggest
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-[#00F5C6]" />
                            <span className="text-white">Engineering</span>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Edit</button>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-[#00F5C6]" />
                            <span className="text-white">Sales</span>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Edit</button>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-[#00F5C6]" />
                            <span className="text-white">Support</span>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Edit</button>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-[#00F5C6]" />
                            <span className="text-white">HR</span>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Edit</button>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-[#00F5C6]" />
                            <span className="text-white">Product</span>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Edit</button>
                        </div>
                      </div>
                      <button className="w-full h-9 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                        + Add Department
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Roles & Permissions Tab Content */}
              {orgSubTab === 'roles' && (
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[#B0B6C1]">Set up roles and their permissions</p>
                        <button className="inline-flex items-center gap-2 h-9 px-4 py-2 rounded-md border border-[#00F5C6]/50 text-[#00F5C6] hover:bg-white/5 transition-all">
                          <Brain className="w-4 h-4" />
                          AI Auto-Configure
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Admin</div>
                            <div className="text-[#B0B6C1] text-sm">Full system access</div>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Configure</button>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Manager</div>
                            <div className="text-[#B0B6C1] text-sm">Team management & reporting</div>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Configure</button>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Team Lead</div>
                            <div className="text-[#B0B6C1] text-sm">Lead evaluations & assessments</div>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Configure</button>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Employee</div>
                            <div className="text-[#B0B6C1] text-sm">Basic access</div>
                          </div>
                          <button className="h-8 px-3 rounded-md text-sm text-[#B0B6C1] hover:bg-white/5 transition-all">Configure</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* KPI Packs Tab Content */}
              {orgSubTab === 'kpi' && (
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[#B0B6C1]">Select KPI packs for your teams</p>
                        <button className="inline-flex items-center gap-2 h-9 px-4 py-2 rounded-md border border-[#00F5C6]/50 text-[#00F5C6] hover:bg-white/5 transition-all">
                          <Brain className="w-4 h-4" />
                          AI Recommendations
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F5C6]/50 cursor-pointer transition-colors">
                          <p className="text-white mb-1">IT Support Pack</p>
                          <p className="text-[#B0B6C1] text-sm">8 KPIs</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F5C6]/50 cursor-pointer transition-colors">
                          <p className="text-white mb-1">Sales Pack</p>
                          <p className="text-[#B0B6C1] text-sm">10 KPIs</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F5C6]/50 cursor-pointer transition-colors">
                          <p className="text-white mb-1">HR Pack</p>
                          <p className="text-[#B0B6C1] text-sm">12 KPIs</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F5C6]/50 cursor-pointer transition-colors">
                          <p className="text-white mb-1">Engineering Pack</p>
                          <p className="text-[#B0B6C1] text-sm">14 KPIs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Admin Management Tab Content */}
              {orgSubTab === 'admins' && (
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-8">
                    <div className="space-y-6">
                      <p className="text-[#B0B6C1]">Add administrators to your organization</p>
                      <div>
                        <label className="flex items-center gap-2 text-sm leading-none font-medium text-white">Admin Email</label>
                        <input type="email" className="mt-2 h-9 w-full px-3 py-1 rounded-md border bg-white/5 border-white/10 text-white" placeholder="admin@company.com" />
                      </div>
                      <button className="w-full h-9 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                        + Add Another Admin
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings Tab Content */}
              {orgSubTab === 'security' && (
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-8">
                    <div className="space-y-6">
                      <p className="text-[#B0B6C1]">Configure security and authentication settings</p>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white">Enable SSO</span>
                            <input type="checkbox" className="w-5 h-5" />
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Single Sign-On via SAML 2.0</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white">Require 2FA</span>
                            <input type="checkbox" className="w-5 h-5" defaultChecked />
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Two-factor authentication for all users</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white">IP Allowlist</span>
                            <input type="checkbox" className="w-5 h-5" />
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Restrict access to specific IP ranges</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* AI Configuration Tab Content */}
              {orgSubTab === 'ai' && (
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white text-lg">AI Configuration</h3>
                          <p className="text-[#B0B6C1] text-sm">Set up AI models and features</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white">AI Performance Reviews</span>
                            <input type="checkbox" className="w-5 h-5" defaultChecked />
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Automated performance analysis</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white">AI Coaching Assistant</span>
                            <input type="checkbox" className="w-5 h-5" defaultChecked />
                          </div>
                          <p className="text-[#B0B6C1] text-sm">Personalized coaching recommendations</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white">Skill Gap Analysis</span>
                            <input type="checkbox" className="w-5 h-5" defaultChecked />
                          </div>
                          <p className="text-[#B0B6C1] text-sm">AI-powered skill assessments</p>
                        </div>
                      </div>
                      <button className="w-full h-9 px-4 py-2 rounded-md bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90 transition-all flex items-center justify-center gap-2">
                        <Brain className="w-4 h-4" />
                        Run AI Auto-Setup
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Assessments Tab */}
          {activeTab === 'assessments' && (
            <div className="space-y-6">
              {/* Scheduled Assessment Card */}
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-white text-lg">Mid-Year Skills Assessment</h3>
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-yellow-400/50 text-yellow-400">
                          scheduled
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-[#B0B6C1]">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>200 participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Starts 2024-07-15</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                        Edit
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90 transition-all">
                        Start Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Completed Assessment Card */}
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-white text-lg">Q2 2024 Performance Review</h3>
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-[#00F5C6]/50 text-[#00F5C6]">
                          <CircleCheck className="w-3 h-3 mr-1" />
                          completed
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-[#B0B6C1]">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>118 participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Completed 2024-06-30</span>
                        </div>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                      View Report
                    </button>
                  </div>
                </div>
              </div>

              {/* Another Scheduled Assessment Card */}
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-white text-lg">Annual Leadership Assessment</h3>
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-yellow-400/50 text-yellow-400">
                          scheduled
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-[#B0B6C1]">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>45 participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Starts 2024-12-01</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                        Edit
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90 transition-all">
                        Start Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Another Completed Assessment Card */}
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-white text-lg">Q1 2024 Team Evaluation</h3>
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-[#00F5C6]/50 text-[#00F5C6]">
                          <CircleCheck className="w-3 h-3 mr-1" />
                          completed
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-[#B0B6C1]">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>85 participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Completed 2024-03-31</span>
                        </div>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all">
                      View Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
