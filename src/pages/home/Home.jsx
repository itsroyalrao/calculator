import Header from "../../components/Header";

function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-[100dvh] text-gray-300">
        <Header />
        <div className="w-full h-[25%] bg-[#323232]"></div>
        <div className="w-full grow grid grid-cols-4 gap-3 bg-[#212121] font-bold p-3 text-2xl">
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            AC
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            ( )
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            %
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            ÷
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            7
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            8
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            9
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            x
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            4
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            5
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            6
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            −
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            1
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            2
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            3
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            +
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            0
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            .
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            <img src="icons/backbtn.png" alt="b" className="w-6" />
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-xl">
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
