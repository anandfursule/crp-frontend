export function ContactDetails({cust}: any){
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