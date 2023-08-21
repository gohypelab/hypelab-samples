'use client';

import { Banner, Rewarded } from 'hypelab-react';
import { useState } from 'react';

export default function Page() {
  const [show, setShow] = useState<boolean>(false);

  const handleWatch = async function () {
    setShow(true);
  };

  const handleRewarded = function () {
    // Grant a reward (e.g., Give an in-game item, unlock a paywall, etc.)
    console.log('handleRewarded called');
    setShow(false);
  };

  return (
    <>
      <div>
        <button
          className="rounded-md border border-gray-300 bg-indigo-600 px-4 py-2 text-lg text-white"
          onClick={handleWatch}
        >
          Watch Video
        </button>
      </div>
      <Rewarded placement="rewarded_placement" show={show} onComplete={handleRewarded} />
    </>
  );
}
