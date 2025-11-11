/**
 * AIManagementPage Component
 */

'use client';

import { Brain, Zap, TrendingUp, Activity, CircleAlert } from 'lucide-react';
import { useState } from 'react';

export default function AIManagementPage() {
  const [activeTab, setActiveTab] = useState<'config' | 'prompts' | 'monitoring' | 'audit'>('config');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2000);
  const [autoFallback, setAutoFallback] = useState(false);

  const stats = [
    {
      label: 'Current Model',
      value: 'GPT-4 Turbo',
      icon: Brain,
      iconColor: 'text-[#00F5C6]',
      badge: 'Active',
    },
    {
      label: 'This Month',
      value: '89.5K tokens',
      icon: Zap,
      iconColor: 'text-[#00AEEF]',
      trend: 'up',
    },
    {
      label: 'Avg Latency',
      value: '1.2s',
      icon: Activity,
      iconColor: 'text-[#00F5C6]',
      trend: 'down',
      trendValue: '↓ 12%',
    },
    {
      label: 'Response Quality',
      value: '98.4%',
      icon: CircleAlert,
      iconColor: 'text-yellow-400',
      flagged: '2 flagged',
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl mb-2">AI Management</h1>
            <p className="text-[#B0B6C1]">Configure and monitor AI models, prompts, and usage</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
            <Zap className="w-4 h-4 mr-2" />
            Run Auto-Setup
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                    {stat.badge && (
                      <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-[#00F5C6]/50 text-[#00F5C6]">
                        {stat.badge}
                      </span>
                    )}
                    {stat.trend === 'up' && (
                      <TrendingUp className="w-5 h-5 text-[#00F5C6]" />
                    )}
                    {stat.trendValue && (
                      <span className="text-[#00F5C6] text-sm">{stat.trendValue}</span>
                    )}
                    {stat.flagged && (
                      <span className="text-yellow-400 text-sm">{stat.flagged}</span>
                    )}
                  </div>
                  <p className="text-[#B0B6C1] text-sm mb-1">{stat.label}</p>
                  <p className="text-white text-lg">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-2 w-full">
          <div className="h-9 w-fit items-center justify-center rounded-xl p-[3px] flex bg-white/5">
            <button
              onClick={() => setActiveTab('config')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'config'
                  ? 'bg-[rgba(255,255,255,0.04)] border-white/10'
                  : 'border-transparent text-[#B0B6C1]'
              }`}
            >
              Model Configuration
            </button>
            <button
              onClick={() => setActiveTab('prompts')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'prompts'
                  ? 'bg-[rgba(255,255,255,0.04)] border-white/10'
                  : 'border-transparent text-[#B0B6C1]'
              }`}
            >
              Prompt Library
            </button>
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'monitoring'
                  ? 'bg-[rgba(255,255,255,0.04)] border-white/10'
                  : 'border-transparent text-[#B0B6C1]'
              }`}
            >
              Monitoring
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'audit'
                  ? 'bg-[rgba(255,255,255,0.04)] border-white/10'
                  : 'border-transparent text-[#B0B6C1]'
              }`}
            >
              Audit Logs
            </button>
          </div>

          {/* Model Configuration Tab */}
          {activeTab === 'config' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="p-6">
                    <h3 className="text-white text-lg mb-6">Model Settings</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div>
                          <label className="text-white text-sm font-medium">AI Provider</label>
                          <select className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white">
                            <option>OpenAI</option>
                            <option>Anthropic</option>
                            <option>Custom</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-white text-sm font-medium">Model</label>
                          <select className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white">
                            <option>GPT-4 Turbo</option>
                            <option>GPT-4</option>
                            <option>GPT-3.5 Turbo</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-white text-sm font-medium">API Key</label>
                          <input
                            type="password"
                            className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-[#B0B6C1]"
                            placeholder="sk-..."
                          />
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-white text-sm font-medium">Temperature</label>
                            <span className="text-[#00F5C6]">{temperature}</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={temperature}
                            onChange={(e) => setTemperature(parseFloat(e.target.value))}
                            className="mt-2 w-full h-4 rounded-full appearance-none bg-[#B0B6C1]/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#00F5C6] [&::-webkit-slider-thumb]:to-[#00AEEF] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/20 [&::-webkit-slider-thumb]:shadow-sm"
                          />
                          <p className="text-[#B0B6C1] text-xs mt-2">Higher values make output more random</p>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-white text-sm font-medium">Max Tokens</label>
                            <span className="text-[#00F5C6]">{maxTokens}</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="4000"
                            step="100"
                            value={maxTokens}
                            onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                            className="mt-2 w-full h-4 rounded-full appearance-none bg-[#B0B6C1]/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#00F5C6] [&::-webkit-slider-thumb]:to-[#00AEEF] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/20 [&::-webkit-slider-thumb]:shadow-sm"
                          />
                        </div>

                        <div>
                          <label className="text-white text-sm font-medium">Monthly Cost Limit ($)</label>
                          <input
                            type="number"
                            className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white"
                            defaultValue="500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          role="switch"
                          onClick={() => setAutoFallback(!autoFallback)}
                          className={`inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none ${
                            autoFallback ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                          }`}
                        >
                          <span
                            className={`block size-4 rounded-full bg-white ring-0 transition-transform ${
                              autoFallback ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                            }`}
                          />
                        </button>
                        <label className="text-white text-sm font-medium">
                          Enable auto-fallback to GPT-3.5 on errors
                        </label>
                      </div>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
                        Save Configuration
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Tabs */}
          {activeTab === 'prompts' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              <p className="text-[#B0B6C1] text-center py-8">Prompt library content</p>
            </div>
          )}

          {activeTab === 'monitoring' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              <p className="text-[#B0B6C1] text-center py-8">Monitoring content</p>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="flex-1 outline-none space-y-6 mt-6">
              <p className="text-[#B0B6C1] text-center py-8">Audit logs content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
