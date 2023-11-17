import { useState } from "react";
import Header from "../../components/Header";

function Home() {
  const [value, setValue] = useState();

  return (
    <>
      <div className="flex flex-col w-full h-[100dvh] text-gray-300">
        <Header />
        <div className="w-full h-[30%] sm:h-[25%] bg-[#323232]"></div>
        <div className="w-full grow grid grid-cols-4 gap-3 bg-[#212121] font-bold p-3 text-3xl sm:text-2xl">
          <div className="flex justify-center items-center bg-red-600 rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-red-500">
            AC
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            ( )
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            %
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            ÷
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            7
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            8
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            9
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            x
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            4
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            5
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            6
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            −
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            1
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            2
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            3
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            +
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            0
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            .
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            <img src="icons/backbtn.png" alt="b" className="w-5" />
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
