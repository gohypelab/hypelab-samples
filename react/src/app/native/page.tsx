'use client';

import { Native, setWalletAddresses } from '@hypelab/sdk-react';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    setWalletAddresses(['0x0000000000000000000000000000000000000000']); // If wallet is available
  }, []);

  return (
    <>
      <Native placement="native_placement">
        <a data-ref="ctaLink" href="/" target="_blank" rel="noreferrer">
          <div className="bg-black py-4">
            <div className="relative flex flex-row align-center justify-center">
              <img data-ref="icon" className="h-5 w-5 rounded-md mr-3" />
              <span data-ref="advertiser" className="text-md text-emerald-300"></span>
              <div data-ref="headline" className="ml-10 text-md text-white"></div>
            </div>
          </div>
        </a>
      </Native>

      <div className="m-10">Content</div>

      <Native placement="native_placement">
        <div className="bg-black p-5 w-[728px]">
          <div className="relative flex items-center">
            <div className="flex-shrink-0">
              <img data-ref="icon" className="h-10 w-10 rounded-full mr-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="absolute inset-0" aria-hidden="true"></span>
              <p className="font-medium text-slate-400">
                @<span data-ref="advertiser"></span>
              </p>
              <p data-ref="displayUrl" className="text-emerald-300 text-sm"></p>
            </div>
          </div>
          <div data-ref="body" className="mt-3 text-white"></div>
          <div className="body-row text-left">
            <div data-ref="headline" className="mt-3 text-white"></div>

            <div className="mt-5">
              <a data-ref="ctaLink" href="/" target="_blank" rel="noreferrer">
                <div data-ref="mediaContent" className="mediaContent h-fit"></div>
                <div
                  data-ref="ctaText"
                  className="rounded-full bg-emerald-300 px-10 py-2 text-black font-bold mt-5 text-center"
                ></div>
              </a>
            </div>
          </div>
        </div>
      </Native>
    </>
  );
}
