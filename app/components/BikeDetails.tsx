import { vehiDetails } from "../quotes/[slug]/page";

export function BikeDetails({vehi}: vehiDetails){
    const total = parseFloat(vehi.insurance_amount) + parseFloat(vehi.other_charges) + parseFloat(vehi.accessories_amount) + parseFloat(vehi.registration_charges) + parseFloat(vehi.price) - parseFloat(vehi.offers_discounts);
    console.log("Price > "+total);
  return(
      <div className="self-stretch h-[392px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[392px] rounded-xl border border-blue-200 flex-col justify-start items-center flex">
          <div className="self-stretch h-[344px] py-2 flex-col justify-start items-center gap-2 flex">
          <img className="w-40 h-40" src="https://via.placeholder.com/160x160" />
          <div className="self-stretch px-4 justify-between items-start inline-flex">
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">
              {vehi?.model_name}
              </div>
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">
              ₹ {vehi?.price}
              </div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Registration</div>
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ {vehi?.registration_charges}</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Insurance</div>
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ {vehi?.insurance_amount}</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Other Charges</div>
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ {vehi?.other_charges}</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Accessories</div>
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">₹ {vehi?.accessories_amount}</div>
          </div>
          <div className="self-stretch px-4 justify-between items-start inline-flex">
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">Offers/Discount</div>
              <div className="text-black text-sm font-normal font-sans leading-tight tracking-tight">- ₹ {vehi?.offers_discounts}</div>
          </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-blue-200 justify-between items-start inline-flex">
              <div className="text-black text-base font-medium font-sans leading-normal tracking-tight">TOTAL</div>
              <div className="text-black text-base font-medium font-sans leading-normal tracking-tight">₹ {total}</div>
          </div>
      </div>
      </div>
  );
  }