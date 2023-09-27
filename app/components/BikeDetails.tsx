export function BikeDetails({vehi}: any){
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