import React from "react";

import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full min-h-screen absolute top-0 left-0 flex flex-col gap-2 items-center justify-center z-50">
      <div className="w-52 p-4 rounded-lg bg-amazonBlue flex items-center justify-center relative animate-bounce">
        {/* logo loading */}
        <Image
            src="/images/LogoBest.png"
            alt="Logo"
            width={56}
            height={56}
            priority
            className="h-14 w-14 cursor-pointer"
          />
      </div>

      <span className="w-14 h-14 inline-flex border-8 border-gray-700 rounded-full relative">
        <span className="w-14 h-14 border-8 border-r-violet-400 border-b-gray-700 border-t-gray-700 border-l-gray-700 rounded-full absolute -top-2 -left-2 animate-spin" />
      </span>
      <p className="mt-4 text-lg text-center font-semibold tracking-wide text-violet-400">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
