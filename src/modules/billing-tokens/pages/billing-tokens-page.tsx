'use client';

import { CreditCard, Coins } from 'lucide-react';
import { useBilling } from '../hooks/use-billing';
import { calculateTokenUsagePercentage } from '../lib/billing-helpers';

export function BillingTokensPage() {
  const { billing, loading } = useBilling();

  if (loading) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;

  const tokenPercentage = billing ? calculateTokenUsagePercentage(billing.tokensUsed, billing.tokens) : 0;

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Billing & Tokens</h1>
        <p className="text-[#B0B6C1]">Manage your subscription and token usage</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
        <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Current Plan</h3>
              <p className="text-[#B0B6C1] text-sm capitalize">{billing?.plan}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <span className="text-[#B0B6C1] text-sm">Billing Cycle</span>
              <p className="text-white font-semibold capitalize">{billing?.billingCycle}</p>
            </div>
            <div>
              <span className="text-[#B0B6C1] text-sm">Amount</span>
              <p className="text-white font-semibold">${billing?.amount}/month</p>
            </div>
            <div>
              <span className="text-[#B0B6C1] text-sm">Next Billing Date</span>
              <p className="text-white font-semibold">{new Date(billing?.nextBillingDate || '').toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Token Usage</h3>
              <p className="text-[#B0B6C1] text-sm">{tokenPercentage}% used</p>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]"
                style={{ width: `${tokenPercentage}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#B0B6C1]">{billing?.tokensUsed.toLocaleString()} used</span>
            <span className="text-white font-semibold">{billing?.tokens.toLocaleString()} total</span>
          </div>
        </div>
      </div>
    </div>
  );
}
