import Header from "../../components/Header";

function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-[100dvh] text-gray-300">
        <Header />
        <div className="w-full h-[25%] bg-[#323232]"></div>
        <div className="w-full grow flex flex-col bg-[#212121] justify-around p-2 font-bold">
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] px-4 py-5 rounded-full text-4xl">
              AC
            </div>
            <div className="bg-[#323232] p-5 rounded-full">
              <img src="icons/sqroot.png" alt="sqr" className="w-10" />
            </div>
            <div className="bg-[#323232] px-7 py-5 rounded-full text-4xl">
              %
            </div>
            <div className="bg-[#323232] px-5 py-2 rounded-full text-6xl">
              ÷
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              7
            </div>
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              8
            </div>
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              9
            </div>
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              X
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              4
            </div>
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              5
            </div>
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              6
            </div>
            <div className="bg-[#323232] px-6 py-[14px] rounded-full text-5xl">
              −
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              1
            </div>
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              2
            </div>
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              3
            </div>
            <div className="bg-[#323232] px-5 py-3 rounded-full text-4xl">
              +
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] px-[30px] py-5 rounded-full text-4xl">
              0
            </div>
            <div className="bg-[#323232] px-[34px] pb-7 rounded-full text-5xl">
              .
            </div>
            <div className="bg-[#323232] rounded-full p-6">
              <img src="icons/back.png" alt="b" className="w-8" />
            </div>
            <div className="bg-[#323232] px-5 py-2 rounded-full text-6xl">
              =
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
