export interface BillingInfo {
  id: string;
  plan: 'free' | 'pro' | 'enterprise';
  tokens: number;
  tokensUsed: number;
  billingCycle: 'monthly' | 'annual';
  nextBillingDate: string;
  amount: number;
}
