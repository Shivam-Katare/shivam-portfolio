import React from "react";
import Image, { StaticImageData } from "next/image";

interface DataType {
  name: string;
  description: string;
  avatar: StaticImageData | string;
  date: string;
  loading?: boolean;
}

interface ListDisplayProps {
  header: string;
  data: DataType[];
}

const ListDisplay: React.FC<ListDisplayProps> = ({ header, data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 w-full mb-12">
      <div className="flex items-center gap-4">
        <h2 className="text-zinc-100 text-sm font-semibold tracking-[0.15em] uppercase">
          {header}
        </h2>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[2rem] bg-[#303030] border border-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.22]"
          >
            <div className="flex items-center gap-5 flex-1">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-white/5 flex items-center justify-center">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-white/10" />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-zinc-100 font-medium text-base tracking-tight">
                  {item.name}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="sm:text-right mt-2 sm:mt-0 pl-[68px] sm:pl-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white bg-white/5 px-4 py-1.5 rounded-full border border-white/5 whitespace-nowrap inline-block shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDisplay;
