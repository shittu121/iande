import Header from "@/components/Headers";
import { IncomeCarousel } from "@/components/Income_ExpenditureCarousel";

export default function Home() {
  return (
    <div className="bg-[#8473B1] border-[#112042] min-h-screen overflow-x-hidden">
      <Header title="Income & Expenditure" />
      <div id="page-content">
        <IncomeCarousel />
        <div className="flex">
        <button className="bg-[#F1CAB3] mx-auto w-[80%] my-8 p-3 rounded-full">
          continue
        </button>
        </div>
      </div>
    </div>
  );
}
