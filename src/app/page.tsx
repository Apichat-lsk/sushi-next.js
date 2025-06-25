import Banner from "./component/Banner";
import Header from "./component/Header";

export default function Home() {
  return (
    <div>
      <Banner />
      <Header />
      <div className="flex justify-center items-center relative mt-[120px]">
        <div className="flex flex-col md:flex-row justify-end items-start w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:mt-[40vh]">
            <img
              className="object-contain absolute left-1/4 md:left-0 w-[230px] md:w-[967px] md:h-[830px]"
              src="/CardMain2-bg.png"
            />
            <img
              className="object-contain absolute left-1/4 md:left-0 w-[280px] md:w-[967px] md:h-[845px]"
              src="/CardMain2.png"
            />
          </div>
          <div className="mt-[30vh] md:mt-0 px-4 md:px-0 text-center md:text-left">
            <div className="flex flex-col justify-between items-center md:items-start gap-8 md:gap-12">
              <div className="text-[#009000] text-sm md:text-base font-semibold flex flex-row justify-center items-center gap-4">
                <img src="/Vector3-2.png" alt="" />
                <p>About Us !</p>
              </div>
              <p className="text-3xl md:text-[64px] text-black md:w-[653px] font-semibold">
                The best quality food for your Health
              </p>
              <p className="text-sm md:text-base text-[#21421E] md:w-[586px]">
                New Year is over. Months ago. Is your New Year’s resolution to
                eat healthy on a rocky terrain now? Then, you’ve got to do more
                than just look away from the fried chicken your colleague just
                ordered.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col justify-center items-center">
                  <img src="/Rectangle13.png" alt="" />
                  <div className="text-left">
                    <p className="text-base font-bold text-black">
                      Sushi & Wasabi
                    </p>
                    <p className="text-[9px] font-medium text-black">
                      Japaneese Food
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src="/Rectangle14.png" alt="" />
                  <div className="text-left">
                    <p className="text-base font-bold text-black">
                      Big Burgers
                    </p>
                    <p className="text-[9px] font-medium text-black">ham</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src="/Rectangle15.png" alt="" />
                  <div className="text-left">
                    <p className="text-base font-bold text-black">Salmon</p>
                    <p className="text-[9px] font-medium text-black">
                      Fresh Fish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
