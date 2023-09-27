import directus from '../../lib/directus';
import { notFound } from 'next/navigation';
import { readItem } from '@directus/sdk/rest';

async function getPage(slug) {
	try{
        const result = await directus.request(
          readItem('Enquiries', slug, {
            fields: ['*', '*.*']
          })
        )
        return result;
      } catch(error){
        console.log('error');
        notFound();
      }
}

export default async function Home({params}) {
//const retVal = await getGivenEnq(1);
const retVal = await getPage(params.slug)
const vehi = retVal?.vehicle;
const cust = retVal?.customer;

//<pre>{JSON.stringify(retVal, null, 4)}</pre>

return (
    
<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-[390px] h-auto p-4 flex-col justify-start items-center gap-4 inline-flex">
        <CompanyBanner />
        <QtDetails retVal={retVal}/>
        <ContactDetails cust={cust}/>
        <BikeDetails vehi={vehi}/>

        <div className="self-stretch h-10 bg-sky-700 rounded-[100px] flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-medium font-sans leading-tight tracking-tight">
            Book Now
            </div>
        </div>
        </div>

    </div>
</main>
);
}
  
  
export function CompanyBanner(){
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

export function QtDetails({retVal}){
return(
    <div className="self-stretch h-11 flex-col justify-start items-center gap-1 flex">
    <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">Quotation No.</div>
        <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">{retVal.id}</div>
    </div>
    <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">
            Date
        </div>
        <div className="text-black text-sm font-medium font-sans leading-tight tracking-tight">
            {retVal.date_created}</div>
    </div>
    </div>
);
}

export function ContactDetails({cust}){
return(
    <div className="self-stretch p-4 rounded-xl border border-blue-200 justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="text-slate-900 text-xs font-semibold font-sans leading-none tracking-wide">Customer details: </div>
        <div className="text-slate-900 text-sm font-medium font-sans leading-tight tracking-tight">
        {cust.name}<br/>
        {cust.address}<br/>
        {cust.whatsapp_number}</div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="text-slate-900 text-xs font-semibold font-sans leading-none tracking-wide">Dealer details: </div>
        <div className="text-slate-900 text-sm font-medium font-sans leading-tight tracking-tight">Arihant Motors<br/>Aurangabad<br/>+91 91919 19191</div>
    </div>
</div>
);
}

export function BikeDetails({vehi}){
return(
    <div className="self-stretch h-[392px] flex-col justify-start items-center gap-4 flex">
    <div className="self-stretch h-[392px] rounded-xl border border-blue-200 flex-col justify-start items-center flex">
        <div className="self-stretch h-[344px] py-2 flex-col justify-start items-center gap-2 flex">
        <img className="w-40 h-40" src="https://via.placeholder.com/160x160" />
        <div className="self-stretch px-4 justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">
            {vehi.model_name}
            </div>
            <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">
            ₹ {vehi.price}
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