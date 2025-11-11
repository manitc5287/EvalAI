'use client';

import { useState } from 'react';
import { Shield, CircleCheck, FileCheck, TriangleAlert, Download, Lock, Key } from 'lucide-react';

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('security');
  
  // Authentication & Access toggles
  const [twoFactor, setTwoFactor] = useState(true);
  const [passwordExpiry, setPasswordExpiry] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(true);
  const [ipWhitelisting, setIpWhitelisting] = useState(false);
  
  // Data Protection toggles
  const [encryptionAtRest, setEncryptionAtRest] = useState(true);
  const [auditLogging, setAuditLogging] = useState(true);
  const [dataRetention, setDataRetention] = useState(true);
  const [dataAnonymization, setDataAnonymization] = useState(false);

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-white text-3xl mb-2">Security & Compliance</h1>
            <p className="text-[#B0B6C1]">Manage security settings and compliance standards</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90 transition-all">
            <Download className="w-4 h-4" />
            Export Compliance Report
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[#B0B6C1] text-sm">Security Score</p>
                <p className="text-white text-2xl">92%</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center">
                <CircleCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[#B0B6C1] text-sm">Compliant Standards</p>
                <p className="text-white text-2xl">2/4</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#0066CC] flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[#B0B6C1] text-sm">Audit Logs</p>
                <p className="text-white text-2xl">5</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <TriangleAlert className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[#B0B6C1] text-sm">Security Events</p>
                <p className="text-white text-2xl">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="space-y-6">
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-[3px] w-fit">
            <button
              onClick={() => setActiveTab('security')}
              className={`px-2 py-1 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'security'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:text-[#00F5C6]'
              }`}
            >
              Security Settings
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-2 py-1 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'compliance'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:text-[#00F5C6]'
              }`}
            >
              Compliance
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-2 py-1 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'audit'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:text-[#00F5C6]'
              }`}
            >
              Audit Logs
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-2 py-1 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'events'
                  ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'
                  : 'text-white hover:text-[#00F5C6]'
              }`}
            >
              Security Events
            </button>
          </div>

          {/* Security Settings Tab */}
          {activeTab === 'security' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Authentication & Access */}
                <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="flex items-center gap-2 mb-6">
                    <Lock className="w-5 h-5 text-[#00F5C6]" />
                    <h3 className="text-white">Authentication & Access</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">Two-Factor Authentication</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Require 2FA for all users</p>
                      </div>
                      <button
                        onClick={() => setTwoFactor(!twoFactor)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          twoFactor ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          twoFactor ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">Password Expiry</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Passwords expire every 90 days</p>
                      </div>
                      <button
                        onClick={() => setPasswordExpiry(!passwordExpiry)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          passwordExpiry ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          passwordExpiry ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">Session Timeout</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Auto logout after 30 minutes</p>
                      </div>
                      <button
                        onClick={() => setSessionTimeout(!sessionTimeout)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          sessionTimeout ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          sessionTimeout ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">IP Whitelisting</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Restrict access to specific IPs</p>
                      </div>
                      <button
                        onClick={() => setIpWhitelisting(!ipWhitelisting)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          ipWhitelisting ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          ipWhitelisting ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Data Protection */}
                <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
                  <div className="flex items-center gap-2 mb-6">
                    <Key className="w-5 h-5 text-[#00AEEF]" />
                    <h3 className="text-white">Data Protection</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">Encryption at Rest</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Encrypt all stored data</p>
                      </div>
                      <button
                        onClick={() => setEncryptionAtRest(!encryptionAtRest)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          encryptionAtRest ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          encryptionAtRest ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">Audit Logging</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Log all user activities</p>
                      </div>
                      <button
                        onClick={() => setAuditLogging(!auditLogging)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          auditLogging ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          auditLogging ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">Data Retention</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Retain data for 7 years</p>
                      </div>
                      <button
                        onClick={() => setDataRetention(!dataRetention)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          dataRetention ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          dataRetention ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white">Data Anonymization</label>
                        <p className="text-[#B0B6C1] text-xs mt-1">Anonymize sensitive data</p>
                      </div>
                      <button
                        onClick={() => setDataAnonymization(!dataAnonymization)}
                        className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
                          dataAnonymization ? 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]' : 'bg-white/20'
                        }`}
                      >
                        <span className={`block size-4 rounded-full bg-white transition-transform ${
                          dataAnonymization ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90 transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Compliance Tab */}
          {activeTab === 'compliance' && (
            <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10">
              <p className="text-[#B0B6C1] text-center py-8">Compliance content coming soon...</p>
            </div>
          )}

          {/* Audit Logs Tab */}
          {activeTab === 'audit' && (
            <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10">
              <p className="text-[#B0B6C1] text-center py-8">Audit logs content coming soon...</p>
            </div>
          )}

          {/* Security Events Tab */}
          {activeTab === 'events' && (
            <div className="p-6 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10">
              <p className="text-[#B0B6C1] text-center py-8">Security events content coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
