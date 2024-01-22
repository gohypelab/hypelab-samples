'use client';

import { useEffect, useRef, useState } from 'react';
import { Rewarded, RewardedElement, setWalletAddresses } from '@hypelab/sdk-react';

export default function Page() {
  // Create a ref for the rewarded component
  const rewarded = useRef<RewardedElement>(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setWalletAddresses(['0x0000000000000000000000000000000000000000']); // If wallet is available
  }, []);

  // Show rewarded video
  const showRewarded = () => rewarded.current?.show();

  // Event handlers
  const onReady = () => {
    console.log('onReady');
    setDisabled(false);
  };
  const onComplete = () => {
    console.log('onComplete');
    setDisabled(true);
  };
  const onError = () => {
    console.log('onError');
    setDisabled(true);
  };

  return (
    <>
      <Rewarded
        placement="rewarded_placement"
        ref={rewarded}
        onReady={onReady}
        onError={onError}
        onComplete={onComplete}
      />

      <button
        type="button"
        className="block p-2.5 bg-blue-600 text-white disabled:bg-gray-400"
        disabled={disabled}
        onClick={showRewarded}
      >
        Show Rewarded
      </button>
    </>
  );
}
