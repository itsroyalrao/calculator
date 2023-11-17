import Header from "../../components/Header";

function Home() {
  return (
    <>
      <div className="flex flex-col h-[100dvh] bg-[#242424] text-gray-300">
        <Header />
        <div className="grow  flex justify-center items-center text-4xl">
          Har Har Mahadev
        </div>
      </div>
    </>
  );
}

export default Home;
