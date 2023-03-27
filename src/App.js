import { useEffect, useState } from "react";
import Signal from "./components/Signal";

function App() {
  const [seconds, setSeconds]=  useState(0);
  const [minutes, setMinutes]=  useState(0);
  let timer;
  useEffect(()=>{
    timer= setInterval(()=>{
      setSeconds(seconds+1);
      if(seconds===59){
        setMinutes(minutes+1); 
        setMinutes(0)
      }
    }, 1000)
    return ()=>clearInterval(timer);
  })
  return (
    <div className="App">
      <div class="relative border border-green-400">
        <div class=" relative border-4 w-scree h-screen flex flex-col items-center justify-center  ">
          <div class="  border   w-[700px] h-[400px] flex flex-col items-center ">
            <table class="border-collapse border border-slate-400 ...">
              <tbody>
                {[...Array(27)].map((x, i) => (
                  <tr className={`${i===9? " bg-emerald-800":''} ${i===16? " bg-emerald-800":''}`} key={i}>
                    <td class="border-[1.5px] border-black  w-[15px] h-[15px]"></td>
                    <td class="border-[1.5px] border-black  w-[15px] h-[15px]"></td>
                    <td class="border-[1.5px] border-black  w-[15px] h-[15px]"></td>
                    <td class="border-[1.5px] border-black  w-[15px] h-[15px]"></td>
                    <td class="border-[1.5px] border-black  w-[15px] h-[15px]"></td>
                    <td class={`border-[1.5px] border-black  w-[15px] h-[15px]`}></td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <table class="border-collapse  border-slate-400 absolute top-[260px] left-[473.5px]">
            <tbody>
              {[...Array(6)].map((x, i) => (
                <tr>
                  {[...Array(27)].map((x, i) => (
                    <>
                      <td className={`${i===9?" bg-emerald-800":''} ${i===16? " bg-emerald-800":''} border-[1.5px] border-black  w-[15px] h-[15px]`}></td>
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class=" absolute top-0 w-[200px] h-[100px] bg-slate-800 flex flex-col items-center justify-center  ">
          <div className=" text-white font-bold text-2xl"> {minutes}:{seconds} </div>
        </div>
        <div className=" absolute top-[360px] left-[610px] w-[25px]  border-emerald-600">
          <Signal greenInterval={22000}/>
        </div>
        

        <div className=" absolute top-[360px] left-[725px] w-[25px] transform rotate-90  border-emerald-600">
          <Signal greenInterval={5000}/>
        </div>

        <div className=" absolute top-[240px] left-[600px] w-[25px] transform rotate-90  border-emerald-600">
          <Signal greenInterval={12000}/>
        </div>
        <div className=" absolute top-[235px] left-[720px] w-[25px]   border-emerald-600">
          <Signal  greenInterval={5000}/>
        </div>
      
     
      </div>
    </div>
  );
}

export default App;
