import MaxWidthWrapper from '../components/MaxWidthWrapper.tsx';
import Screen1 from '../assets/screen_1.png';
import Screen2 from '../assets/screen_2.png';
import { Fireworks } from '@fireworks-js/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showFireworks, setShowFireworks] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFireworks(false);
    }, 2000);
  }, []);

  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-10 flex flex-col items-center justify-center text-center relative'>
        {showFireworks && <Fireworks className='absolute' />}
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Congrats! <span className='text-l'>🎉</span>
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          QR Code Scanner from Image <span className='text-blue-600'>Installed</span>.
        </h1>
        <p className='mt-10 max-w-prose text-zinc-700 sm:text-lg'>
          1. Pin the extension for quick access to the QR Code Scanner from Image.
        </p>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-3xl px-4 lg:px-6'>
              <div className='flow-root mt-8'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <img
                    src={Screen1}
                    alt='pin extension'
                    className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      <MaxWidthWrapper className='mt-10 flex flex-col items-center justify-center text-center relative'>
        <p className='mt-6 max-w-prose text-zinc-700 sm:text-lg'>
          2. Simply click on the extension icon to open the scanner.
        </p>

        <div>
          <div className='mx-auto max-w-3xl px-4 lg:px-6'>
            <div className='flow-root mt-8'>
              <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <img
                  src={Screen2}
                  alt='pin extension'
                  className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
