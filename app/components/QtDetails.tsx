export function QtDetails({retVal}: any){
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