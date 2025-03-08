import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function IncomeCarousel() {
  return (
    <div className="w-full">
      <Carousel className="relative overflow-hidden !pb-0">
        <CarouselContent className="!border-none !shadow-none !pb-0">
          {/* First Carousel Item */}
          <CarouselItem className="w-full mt-36 flex flex-col items-center justify-center !border-none !shadow-none relative">
            {/* Background Block */}
            <div className="absolute inset-0 flex items-center justify-center h-80 lg:h-96 md:h-96 bg-[#D7B6E9] rounded-4xl w-[70%] mx-auto !border-none !shadow-none !outline-none">
            </div>

            {/* Image */}
            <Image
              src="/images/ie1.svg"
              alt="Illustration"
              width={400}
              height={400}
              className="w-full lg:h-96 md:h-96 mx-auto relative px-2 pt-5 z-10"
            />

            {/* Text Block BELOW Everything */}
            <div className="w-full text-white px-5 py-6 text-center space-y-2 mt-4 relative z-10">
              <h1 className="text-2xl font-bold">Complete a budget</h1>
              <p className="text-lg">
                We’ll automatically detect and categorise where you spend each month. We’ll map this to an industry-standard Income & Expenses template.
              </p>
            </div>
          </CarouselItem>

          {/* Second Carousel Item (Matching Font & Height) */}
          <CarouselItem className="w-full mt-36 flex flex-col items-center !border-none !shadow-none relative">
            {/* Card Container with Image & Background */}
            <div className="relative h-80 lg:h-96 md:h-96 w-[70%] mx-auto flex flex-col items-center justify-center rounded-4xl overflow-hidden">
              {/* Top Background - Main Color */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D7B6E9]"></div>          

              {/* Bottom Background - Gradient (Ensure Full Coverage) */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#D7B6E9] to-[#8473B1] opacity-90"></div>          

              {/* Image - Ensure It Doesn’t Cover Gradient */}
              <Image
                src="/images/ie2.svg"
                alt="Illustration"
                width={400}
                height={400}
                className="w-full h-[60%] md:h-[70%] lg:h-[80%] relative z-10 pt-5"
              />
            </div>

            {/* Text Block (Now Matches First Item's Styling) */}
            <div className="w-full text-white text-center space-y-2 mt-4 px-5 relative z-10">
              <h1 className="text-2xl font-bold">Share your budget</h1>
              <p className="text-lg">
                We provide you a version of your income & expenditure to takeaway. Share this with your bill suppliers to receive support if you’re struggling to pay.
              </p>
            </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselNavigation />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}
