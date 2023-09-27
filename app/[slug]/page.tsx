import { notFound } from 'next/navigation';
import directus from '../../lib/directus';
import { readItem } from '@directus/sdk/rest';

import { CompanyBanner } from '../components/CompnayBanner';
import { QtDetails } from '../components/QtDetails';
import { ContactDetails } from '../components/ContactDetails';
import { BikeDetails } from '../components/BikeDetails';

async function getPage(slug: any) {
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

export type vehiDetails = {
  insurance_amount: number,
  other_charges: number,
  accessories_amount: number,
  offers_discounts: number,
  registration_charges: number,
  vehicle_base_price: number,
  model_name: string,
  price: number,
}; 

export default async function Home({params} : any) {
//const retVal = await getGivenEnq(1);
const retVal = await getPage(params.slug)
const vehi = retVal?.vehicle;
const cust = retVal?.customer;
const vDetails: vehiDetails = {
  insurance_amount: retVal.insurance_amount,
  other_charges: retVal.other_charges,
  accessories_amount: retVal.accessories_amount,
  offers_discounts: retVal.offers_discounts,
  registration_charges: retVal.registration_charges,
  vehicle_base_price: retVal.vehicle_base_price,
  model_name: vehi.model_name,
  price: vehi.price,
};

console.log(" >> other bike chares > "+JSON.stringify(vDetails));

//<pre>{JSON.stringify(retVal, null, 4)}</pre>

return (
    
<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-[390px] h-auto p-4 flex-col justify-start items-center gap-4 inline-flex">
        <CompanyBanner />
        <QtDetails retVal={retVal}/>
        <ContactDetails cust={cust}/>
        <BikeDetails vehi={vDetails}/>

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





