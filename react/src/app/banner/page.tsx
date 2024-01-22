'use client';

import { setWalletAddresses } from '@hypelab/sdk-react';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    setWalletAddresses(['0x0000000000000000000000000000000000000000']); // If wallet is available
  }, []);

  return <hype-banner placement="banner_placement"></hype-banner>;
}
