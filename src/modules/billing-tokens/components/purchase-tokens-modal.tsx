/**
 * Purchase Tokens Modal Component
 */

'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TokenPackageCard } from './token-package-card';
import { TOKEN_PACKAGES } from '../constants/token-packages';
import { TokenPackage } from '../types';

interface PurchaseTokensModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPurchase: (packageId: string) => void;
}

export function PurchaseTokensModal({
  open,
  onOpenChange,
  onPurchase,
}: PurchaseTokensModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePurchase = () => {
    if (selectedPackage) {
      onPurchase(selectedPackage);
      setSelectedPackage(null);
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    setSelectedPackage(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0A0F1C] border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">
            Purchase Additional Tokens
          </DialogTitle>
          <DialogDescription className="text-[#B0B6C1]">
            Buy extra tokens for this billing period
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          {TOKEN_PACKAGES.map((pkg) => (
            <TokenPackageCard
              key={pkg.id}
              package={pkg}
              selected={selectedPackage === pkg.id}
              onSelect={() => setSelectedPackage(pkg.id)}
            />
          ))}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="border-white/10 text-white hover:bg-white/5"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handlePurchase}
            disabled={!selectedPackage}
            className="bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90 disabled:opacity-50"
          >
            Purchase
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
