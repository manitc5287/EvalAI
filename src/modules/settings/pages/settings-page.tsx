'use client'

import { useState } from 'react'
import { Settings, Palette, Plug, Accessibility, Zap, ChevronDown } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

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
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'general'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              <Settings className="w-4 h-4" />
              General
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'appearance'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              <Palette className="w-4 h-4" />
              Appearance
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'integrations'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              <Plug className="w-4 h-4" />
              Integrations
            </button>
            <button
              onClick={() => setActiveTab('accessibility')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'accessibility'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              <Accessibility className="w-4 h-4" />
              Accessibility
            </button>
            <button
              onClick={() => setActiveTab('beta')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'beta'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              <Zap className="w-4 h-4" />
              Beta Features
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
                    <h3 className="text-white text-lg mb-4">Integration Settings</h3>
                    <p className="text-[#B0B6C1]">Manage your third-party integrations and API connections here.</p>
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
                  <div className="p-6">
                    <h3 className="text-white text-lg mb-4">Accessibility Options</h3>
                    <p className="text-[#B0B6C1]">Configure accessibility features to improve your experience.</p>
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
                  <div className="p-6">
                    <h3 className="text-white text-lg mb-4">Beta Features</h3>
                    <p className="text-[#B0B6C1]">Try out experimental features before they're released to everyone.</p>
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
