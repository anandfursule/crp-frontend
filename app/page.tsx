import Image from 'next/image'
import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk/rest';

import directus from 'lib/directus';
import { readItems } from '@directus/sdk/rest';

async function getEnquiries() {
	return directus.request(readItems('Enquiries', {
    fields: ['vehicle'],
  }));
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[390px] h-[721px] p-4 flex-col justify-start items-center gap-4 inline-flex">
        <CompanyNav />
        <QtDetails />
        <ContactDetails />
        <BikeDetails />
  
        <div className="self-stretch h-10 bg-sky-700 rounded-[100px] flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-medium font-sans leading-tight tracking-tight">
              Book Now
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


export function CompanyNav(){
  return(
    <div className="w-[122px] h-[41px] pr-[0.71px] pt-[0.34px] pb-[0.66px] justify-center items-center inline-flex">
      <div className="w-[121.29px] h-10 relative">
        <div className="w-[121.29px] h-10 left-0 top-0 absolute">
          this is the nav
        </div>
      </div>
    </div>
  );
}

export function QtDetails(){
return(
  <div className="self-stretch h-11 flex-col justify-start items-center gap-1 flex">
    <div className="self-stretch justify-between items-start inline-flex">
      <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">Quotation No.</div>
      <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">BH27784-977</div>
    </div>
    <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">
          Date
        </div>
        <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">
          23 Sept 2023</div>
    </div>
  </div>
);
}

export function ContactDetails(){
  return(
    <div className="self-stretch p-4 rounded-xl border border-blue-200 justify-start items-center gap-4 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="text-slate-900 text-xs font-semibold font-sans leading-none tracking-wide">Customer details: </div>
        <div className="text-slate-900 text-sm font-medium font-sans leading-tight tracking-tight">Anand Jain<br/>Cidco, Aurangabad<br/>+91 82828 28282</div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="text-slate-900 text-xs font-semibold font-sans leading-none tracking-wide">Dealer details: </div>
        <div className="text-slate-900 text-sm font-medium font-sans leading-tight tracking-tight">Arihant Motors<br/>Aurangabad<br/>+91 91919 19191</div>
      </div>
  </div>
  );
}

export function BikeDetails(){
  return(
    <div className="self-stretch h-[392px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[392px] rounded-xl border border-blue-200 flex-col justify-start items-center flex">
        <div className="self-stretch h-[344px] py-2 flex-col justify-start items-center gap-2 flex">
          <img className="w-40 h-40" src="https://via.placeholder.com/160x160" />
          <div className="self-stretch px-4 justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">
              Xtreme 160R 4V
            </div>
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">
              ₹ 136500
            </div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Registration</div>
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ 4800</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Insurance</div>
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ 1100</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Other Charges</div>
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ 2000</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Accessories</div>
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ 5000</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Offers/Discount</div>
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">- ₹ 2000</div>
          </div>
        </div>
        <div className="self-stretch px-4 py-3 bg-blue-200 justify-between items-start inline-flex">
            <div className="text-black text-base font-medium font-sans leading-normal tracking-tight">TOTAL</div>
            <div className="text-black text-base font-medium font-sans leading-normal tracking-tight">₹ 147400</div>
        </div>
      </div>
    </div>
  );
}