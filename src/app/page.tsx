import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
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
                  eat healthy on a rocky terrain now? Then, you’ve got to do
                  more than just look away from the fried chicken your colleague
                  just ordered.
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
        <div className="flex flex-col justify-center items-center mt-[120px] px-6 md:px-[143px] relative">
          <div className="bg-[url('/Rectangle16.png')] bg-contain  bg-no-repeat md:w-[1154px] md:h-[564px] flex flex-col justify-center items-center">
            <img
              className="object-contain object-center w-full md:max-h-[564px]"
              src="/Frame25-1.png"
            />
            <div className="absolute  md:top-1/5 w-full md:max-w-[918px] flex flex-col items-center text-center px-10 gap-2 md:gap-8">
              <p className="text-white text-lg md:text-[55px] font-semibold">
                Get up to 50% off when making transaction on our app{" "}
              </p>
              <p className="text-white text-sm md:text-[20px]">
                Only available on the ios platorm for app or download Demo
                android app?
              </p>
              <button className="md:mt-[17px] flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-black shadow-xl/30 hover:shadow-lg transition duration-300">
                <img src="/Vector.png" alt="Download Icon" />
                <span className="text-sm md:text-base font-medium">
                  Download App
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[120px] px-6 md:px-[183px] relative">
          <div className="w-full flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col justify-between items-start gap-18 md:items-start ">
              <div className="text-[#009000] text-sm md:text-base font-semibold flex flex-row justify-center md:justify-start items-center gap-4 w-full">
                <img src="/Vector3-2.png" alt="" />
                <p>What they say ?</p>
              </div>
              <p className="max-w-[590px] text-3xl md:text-[64px] font-semibold text-black w-full text-center md:text-left">
                Look, what do they recommend for you?
              </p>
              <div className="px-10 gap-6 flex flex-col text-center">
                <div className="w-full flex flex-row justify-between items-end">
                  <img src="/Ellipse21.png" alt="" />
                  <img src="/Group15.png" alt="" />
                </div>
                <p className="max-w-[391px] text-sm md:text-[13px] font-semibold text-black text-center md:text-left">
                  This is the most delicious food i have ever eaten, and also
                  healthy, they really care about it. I highly recommend you
                  folks to try this once .
                </p>
                <p className="text-sm md:text-[13px] font-bold text-black text-center md:text-left">
                  Prarthan B
                </p>
              </div>
            </div>
            <div className="bg-[url('/Rectangle18.png')] bg-contain  bg-center bg-no-repeat w-full md:w-[536px] h-[622px] relative">
              <div className="flex flex-row justify-between items-center bottom-1/5 md:bottom-1/12 absolute w-full p-4">
                <div className="grid grid-rows-2 gap-2">
                  <p className="w-[204px] text-sm md:text-xl text-white font-bold">
                    Lemper Jepang
                  </p>
                  <div className="grid grid-cols-5 gap-2">
                    <img src="/Star.png" alt="" />
                    <img src="/Star.png" alt="" />
                    <img src="/Star.png" alt="" />
                    <img src="/Star.png" alt="" />
                    <img src="/Star.png" alt="" />
                  </div>
                </div>
                <button className="bg-[#C4D600] p-3 text-black font-bold rounded-full">
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[48px] md:mt-[120px] px-6 md:px-[183px] relative">
          <div className="flex flex-col justify-center items-center w-full gap-8">
            <div className="text-[#009000] text-sm md:text-base font-semibold flex flex-row justify-center md:justify-center items-center gap-4 w-full">
              <img src="/Vector3-2.png" alt="" />
              <p>Recommendation</p>
            </div>
            <p className="text-3xl md:text-[64px] font-semibold text-black w-full text-center">
              Hey,let’s Try something New
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative w-full md:w-[406px]">
                <img
                  src="/Rectangle18-2.png"
                  alt="Lemper Jepang"
                  className="w-full h-auto md:h-[622px] object-contain"
                />
                <div className="absolute top-1/10 flex flex-row justify-between items-center p-5 gap-4">
                  <img src="/Ellipse22.png" alt="" />
                  <p className="text-sm md:text-lg font-bold text-white">
                    Britney
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center bottom-1/12 absolute w-full p-4">
                  <div className="grid grid-rows-2 gap-2">
                    <p className="w-[204px] text-sm md:text-xl text-white font-bold">
                      Lemper Jepang
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[406px]">
                <img
                  src="/Rectangle18-1.png"
                  alt="Lemper Jepang"
                  className="w-full h-auto md:h-[622px] object-contain"
                />
                <div className="absolute top-1/10 flex flex-row justify-between items-center p-5 gap-4">
                  <img src="/Ellipse22-3.png" alt="" />
                  <p className="text-sm md:text-lg font-bold text-white">
                    Britney
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center bottom-1/12 absolute w-full p-4">
                  <div className="grid grid-rows-2 gap-2">
                    <p className="w-[204px] text-sm md:text-xl text-white font-bold">
                      Lemper Jepang
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[406px]">
                <img
                  src="/Rectangle18-1.png"
                  alt="Lemper Jepang"
                  className="w-full h-auto md:h-[622px] object-contain"
                />
                <div className="absolute top-1/10 flex flex-row justify-between items-center p-5 gap-4">
                  <img src="/Ellipse22-3.png" alt="" />
                  <p className="text-sm md:text-lg font-bold text-white">
                    Britney
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center bottom-1/12 absolute w-full p-4">
                  <div className="grid grid-rows-2 gap-2">
                    <p className="w-[204px] text-sm md:text-xl text-white font-bold">
                      Lemper Jepang
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                      <img src="/Star.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
