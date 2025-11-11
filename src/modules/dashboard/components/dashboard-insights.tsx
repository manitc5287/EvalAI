"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { Brain } from "lucide-react";

const lineData = [
  { name: "Jan", value: 56 },
  { name: "Feb", value: 62 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 74 },
  { name: "May", value: 96 },
  { name: "Jun", value: 108 },
];

const radarData = [
  { subject: "Skills", A: 80 },
  { subject: "Engagement", A: 65 },
  { subject: "Compliance", A: 40 },
  { subject: "Performance", A: 50 },
  { subject: "Learning", A: 70 },
];

const barData = [
  { name: "Coaching", value: 190 },
  { name: "Assessments", value: 145 },
  { name: "Insights", value: 120 },
  { name: "Onboarding", value: 75 },
];

const axisTick = { fill: "#B0B6C1", fontSize: 12 } as const;
const gridStroke = "rgba(255,255,255,0.1)";

export function DashboardInsights() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Skill Growth Trend */}
      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
          <div className="p-6">
            <h3 className="text-white text-lg mb-4">Skill Growth Trend</h3>
            <div className="h-[250px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ left: 60, right: 5, top: 5, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                  <XAxis dataKey="name" stroke="#B0B6C1" tick={axisTick} tickLine={{ stroke: "#B0B6C1" }} axisLine={{ stroke: "#B0B6C1" }} />
                  <YAxis stroke="#B0B6C1" tick={axisTick} tickLine={{ stroke: "#B0B6C1" }} axisLine={{ stroke: "#B0B6C1" }} />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(10, 15, 28, 0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} />
                  <Line type="monotone" dataKey="value" stroke="#00F5C6" strokeWidth={3} dot={{ r: 4, stroke: "#00F5C6", fill: "#00F5C6" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Health */}
      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
          <div className="p-6">
            <h3 className="text-white text-lg mb-4">Organization Health</h3>
            <div className="h-[250px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <PolarGrid gridType="polygon" stroke={gridStroke} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "#B0B6C1", fontSize: 12 }} stroke="#B0B6C1" />
                  <PolarRadiusAxis angle={0} domain={[0, 100]} tick={{ fill: "#B0B6C1", fontSize: 12 }} stroke="#B0B6C1" />
                  <Radar name="Health Score" dataKey="A" stroke="#00AEEF" fill="#00AEEF" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* AI Usage by Type */}
      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
          <div className="p-6">
            <h3 className="text-white text-lg mb-4">AI Usage by Type</h3>
            <div className="h-[250px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ left: 60, right: 5, top: 5, bottom: 30 }}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F5C6" />
                      <stop offset="100%" stopColor="#00AEEF" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                  <XAxis dataKey="name" stroke="#B0B6C1" tick={axisTick} tickLine={{ stroke: "#B0B6C1" }} axisLine={{ stroke: "#B0B6C1" }} />
                  <YAxis stroke="#B0B6C1" tick={axisTick} tickLine={{ stroke: "#B0B6C1" }} axisLine={{ stroke: "#B0B6C1" }} />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(10, 15, 28, 0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} />
                  <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* AI Advisor */}
      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C6]/20 to-[#00AEEF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white text-lg">AI Advisor</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white text-sm mb-2">💡 Insight</p>
                <p className="text-[#B0B6C1] text-sm">Engineering team shows 15% skill improvement. Consider expanding their learning path.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white text-sm mb-2">⚠️ Action Required</p>
                <p className="text-[#B0B6C1] text-sm">3 departments need KPI alignment. Run AI auto-setup to optimize.</p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full border border-[#00F5C6]/50 text-[#00F5C6] hover:bg-[#00F5C6]/10">
                View All Insights
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
