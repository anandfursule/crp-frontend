import directus from 'lib/directus';
import { notFound } from 'next/navigation';
import { readItem } from '@directus/sdk/rest';

async function getPage(slug) {
	try {
		const page = await directus.request(readItem('Enquiries', slug, {
            fields: ['*', '*.*']
        }));
		return page;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
	const Enquiries = await getPage(params.slug);
	return (
        <main class=" ">
		<div class="text-center w-96 bg-slate-100 mx-auto shadow-lg rounded-xl p-8">
			<h1 class="text-xxl">{Enquiries.id}</h1>
            <h1>{Enquiries.vehicle.price}</h1>
		</div>

		<div className="w-[390px] h-[721px] p-4 flex-col justify-start items-center gap-4 inline-flex">
    <div className="w-[122px] h-[41px] relative">
        <div className="w-[121.29px] h-10 left-0 top-[0.34px] absolute">
            <div className="w-[121.29px] h-10 left-0 top-0 absolute">
            </div>
        </div>
    </div>
    <div className="self-stretch h-11 flex-col justify-start items-center gap-1 flex">
        <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-black text-sm font-medium font-sans tracking-tight">Quotation No.</div>
            <div className="text-black text-sm font-medium font-sans tracking-tight">{Enquiries.id}</div>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-black text-sm font-medium font-sans tracking-tight">Date</div>
            <div className="text-black text-sm font-medium font-sans tracking-tight">{Enquiries.date_created}</div>
        </div>
    </div>
    <div className="self-stretch p-4 rounded-xl border border-blue-200 justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="text-slate-900 text-xs font-semibold font-sans leading-none tracking-wide">Customer details: </div>
            <div className="text-slate-900 text-sm font-medium font-sans tracking-tight">{Enquiries.customer.name}<br/>{Enquiries.customer.address}<br/>+91 {Enquiries.customer.whatsapp_number}</div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="text-slate-900 text-xs font-semibold font-sans leading-none tracking-wide">Dealer details: </div>
            <div className="text-slate-900 text-sm font-medium font-sans tracking-tight">Hero Motors<br/>Aurangabad<br/>+91 9191919191</div>
        </div>
    </div>
    <div className="self-stretch h-[392px] flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch h-[392px] rounded-xl border border-blue-200 flex-col justify-start items-center flex">
            <div className="self-stretch h-[344px] py-2 flex-col justify-start items-center gap-2 flex">
                <img className="w-40 h-40" src="https://via.placeholder.com/160x160" />
                <div className="self-stretch px-4 justify-between items-start inline-flex">
                    <div className="text-black text-sm font-normal font-sans tracking-tight">{Enquiries.vehicle.model_name}</div>
                    <div className="text-black text-sm font-normal font-sans tracking-tight">₹ {Enquiries.vehicle.price}</div>
                </div>
                <div className="self-stretch px-4 justify-between items-start inline-flex">
                    <div className="text-black text-sm font-normal font-sans tracking-tight">Registration</div>
                    <div className="text-black text-sm font-normal font-sans tracking-tight">₹ {Enquiries.registration_charges}</div>
                </div>
                <div className="self-stretch px-4 justify-between items-start inline-flex">
                    <div className="text-black text-sm font-normal font-sans tracking-tight">Insurance</div>
                    <div className="text-black text-sm font-normal font-sans tracking-tight">₹ {Enquiries.insurance_amount}</div>
                </div>
                <div className="self-stretch px-4 justify-between items-start inline-flex">
                    <div className="text-black text-sm font-normal font-sans tracking-tight">Other Charges</div>
                    <div className="text-black text-sm font-normal font-sans tracking-tight">₹ {Enquiries.other_charges}</div>
                </div>
                <div className="self-stretch px-4 justify-between items-start inline-flex">
                    <div className="text-black text-sm font-normal font-sans tracking-tight">Accessories</div>
                    <div className="text-black text-sm font-normal font-sans tracking-tight">₹ {Enquiries.accessories_amount}</div>
                </div>
                <div className="self-stretch px-4 justify-between items-start inline-flex">
                    <div className="text-black text-sm font-normal font-sans tracking-tight">Offers/Discount</div>
                    <div className="text-black text-sm font-normal font-sans tracking-tight">-₹ {Enquiries.offers_discounts}</div>
                </div>
            </div>
            <div className="self-stretch px-4 py-3 bg-blue-200 justify-between items-start inline-flex">
                <div className="text-black text-base font-medium font-sans leading-normal tracking-tight">TOTAL</div>
                <div className="text-black text-base font-medium font-sans leading-normal tracking-tight">₹ total_amt</div>
            </div>
        </div>
    </div>
    <div className="self-stretch h-10 bg-sky-700 rounded-[100px] flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-medium font-sans tracking-tight">Book Now</div>
        </div>
    </div>
</div>

        </main>
	);
}