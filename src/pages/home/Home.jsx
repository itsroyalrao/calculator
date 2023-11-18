import { useState } from "react";
import Header from "../../components/Header";

function Home() {
  const [firstValue, setFirstValue] = useState(null);
  const [total, setTotal] = useState(0);
  const [expression, setExpression] = useState(null);
  const [clickedEqual, setClickedEqual] = useState(false);

  function arithmetic() {
    if (!total) setTotal(total + firstValue);
    else if (expression === "+") setTotal(total + firstValue);
    else if (expression === "-") setTotal(total - firstValue);
    else if (expression === "x") setTotal(total * firstValue);
    else if (expression === "/") setTotal(total / firstValue);
  }

  return (
    <>
      <div className="flex flex-col w-full h-[100dvh] text-gray-300">
        <Header />
        <div className="w-full h-[25%] bg-[#323232]">
          <div className="flex justify-end items-center h-full text-7xl pr-2 sm:pr-4 tracking-wider">
            {!expression && total
              ? total
              : firstValue && total
              ? total + expression + firstValue
              : firstValue
              ? firstValue
              : total + expression}
          </div>
        </div>
        <div className="w-full grow grid grid-cols-4 gap-3 bg-[#212121] font-bold p-3 text-3xl sm:text-2xl">
          <div
            className="flex justify-center items-center bg-red-600 rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-red-500"
            onClick={() => {
              setFirstValue(null);
              setExpression(null);
              setTotal(0);
            }}
          >
            AC
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            ( )
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={() => {
              if (!firstValue) setTotal(total * total);
              else setTotal(firstValue * firstValue);
              setFirstValue(null);
            }}
          >
            x²
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={() => {
              setFirstValue(null);
              setExpression("/");
              arithmetic();
            }}
          >
            ÷
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            7
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            8
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            9
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={() => {
              setFirstValue(null);
              setExpression("x");
              arithmetic();
            }}
          >
            x
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            4
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            5
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            6
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={() => {
              setFirstValue(null);
              setExpression("-");
              arithmetic();
            }}
          >
            −
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            1
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            2
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            3
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={() => {
              setFirstValue(null);
              setExpression("+");
              arithmetic();
            }}
          >
            +
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={(e) => {
              if (clickedEqual && !expression) {
                setExpression(null);
                setTotal(0);
                setClickedEqual(false);
              }
              if (!firstValue) setFirstValue(parseInt(e.target.innerHTML));
              else
                setFirstValue(firstValue * 10 + parseInt(e.target.innerHTML));
            }}
          >
            0
          </div>
          <div className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]">
            .
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={() => {
              if (!(firstValue || expression)) setTotal(0);
              else if (!firstValue) {
                setFirstValue(total);
                setTotal(0);
                setExpression(null);
              } else setFirstValue(Math.floor(firstValue / 10));
            }}
          >
            <img src="icons/backbtn.png" alt="b" className="w-5" />
          </div>
          <div
            className="flex justify-center items-center bg-[#323232] rounded-full sm:cursor-pointer active:rounded-xl sm:hover:bg-[#484848]"
            onClick={() => {
              setExpression(null);
              setFirstValue(null);
              arithmetic();
              setClickedEqual(true);
            }}
          >
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
