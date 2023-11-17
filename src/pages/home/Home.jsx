import Header from "../../components/Header";

function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-[100dvh] text-gray-300">
        <Header />
        <div className="w-full h-[25%] bg-[#323232]"></div>
        <div className="w-full grow flex flex-col bg-[#212121] justify-around">
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
          </div>
          <div className="w-full flex justify-around">
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
            <div className="bg-[#323232] p-3 rounded-full text-3xl">AC</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
