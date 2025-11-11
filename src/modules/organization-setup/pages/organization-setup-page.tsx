/**
 * OrganizationSetupPage Component
 */

'use client';

import { Building2, Palette, Users, Shield, Target, UserCog, Lock, Brain, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function OrganizationSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: 'Organization Info', icon: Building2 },
    { id: 2, label: 'Branding', icon: Palette },
    { id: 3, label: 'Departments', icon: Users },
    { id: 4, label: 'Roles', icon: Shield },
    { id: 5, label: 'KPIs', icon: Target },
    { id: 6, label: 'Admins', icon: UserCog },
    { id: 7, label: 'Security', icon: Lock },
    { id: 8, label: 'AI Setup', icon: Brain },
  ];

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[900px] mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl mb-2">Organization Setup</h1>
          <p className="text-[#B0B6C1]">Step {currentStep} of {steps.length}: {steps[currentStep - 1].label}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative w-full overflow-hidden rounded-full h-2 bg-[#00F5C6]/20">
            <div 
              className="h-full transition-all bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-8">
          {steps.map((step) => {
            const StepIcon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00F5C6]/20 to-[#00AEEF]/20 border border-[#00F5C6]'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <StepIcon 
                  className={`w-5 h-5 ${
                    isActive ? 'text-[#00F5C6]' : 'text-[#B0B6C1]'
                  }`} 
                />
                <span 
                  className={`text-xs hidden md:block ${
                    isActive ? 'text-white' : 'text-[#B0B6C1]'
                  }`}
                >
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Form Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
            <div className="p-8">
              <div className="space-y-6">
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="text-white text-sm font-medium">Organization Name</label>
                      <input
                        type="text"
                        className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-[#B0B6C1]"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium">Industry</label>
                      <input
                        type="text"
                        className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-[#B0B6C1]"
                        placeholder="Technology"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium">Company Size</label>
                      <input
                        type="text"
                        className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-[#B0B6C1]"
                        placeholder="100-500 employees"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium">Website</label>
                      <input
                        type="url"
                        className="mt-2 w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-[#B0B6C1]"
                        placeholder="https://acme.com"
                      />
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <div className="text-center py-8">
                    <Palette className="w-12 h-12 mx-auto mb-4 text-[#00F5C6]" />
                    <p className="text-white text-lg mb-2">Branding Settings</p>
                    <p className="text-[#B0B6C1]">Upload your logo and customize colors</p>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 mx-auto mb-4 text-[#00F5C6]" />
                    <p className="text-white text-lg mb-2">Department Setup</p>
                    <p className="text-[#B0B6C1]">Configure your organization departments</p>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="text-center py-8">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-[#00F5C6]" />
                    <p className="text-white text-lg mb-2">Role Configuration</p>
                    <p className="text-[#B0B6C1]">Define user roles and permissions</p>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="text-center py-8">
                    <Target className="w-12 h-12 mx-auto mb-4 text-[#00F5C6]" />
                    <p className="text-white text-lg mb-2">KPI Setup</p>
                    <p className="text-[#B0B6C1]">Configure key performance indicators</p>
                  </div>
                )}

                {currentStep === 6 && (
                  <div className="text-center py-8">
                    <UserCog className="w-12 h-12 mx-auto mb-4 text-[#00F5C6]" />
                    <p className="text-white text-lg mb-2">Admin Users</p>
                    <p className="text-[#B0B6C1]">Add administrator accounts</p>
                  </div>
                )}

                {currentStep === 7 && (
                  <div className="text-center py-8">
                    <Lock className="w-12 h-12 mx-auto mb-4 text-[#00F5C6]" />
                    <p className="text-white text-lg mb-2">Security Settings</p>
                    <p className="text-[#B0B6C1]">Configure security policies</p>
                  </div>
                )}

                {currentStep === 8 && (
                  <div className="text-center py-8">
                    <Brain className="w-12 h-12 mx-auto mb-4 text-[#00F5C6]" />
                    <p className="text-white text-lg mb-2">AI Configuration</p>
                    <p className="text-[#B0B6C1]">Set up AI model preferences</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 border border-white/10 text-white hover:bg-white/5 disabled:opacity-50 disabled:pointer-events-none"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
