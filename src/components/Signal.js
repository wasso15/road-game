import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
function Signal({greenInterval, redVInterval}) {

  const [green, setGreen] = useState(false);
  const [redV, setRedV] = useState(true);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreen(green => !green);
    }, greenInterval);
  
    return () => clearInterval(intervalId);



  },
  
  []);

 

  console.log(green,redV )

    return (
      <div className="App">
       <div className=" h-[25px] w-[15px] bg-black rounded-lg flex flex-col items-center justify-evenly"> 
        <div className={`  rounded-full ${green?"bg-green-500 h-[8px] w-[8px]":"bg-green-900 h-[5px] w-[5px]"} `}>

        </div>
        <div className={`  rounded-full ${green?"bg-red-900 h-[5px] w-[5px]":"bg-red-500 h-[8px] w-[8px]"} `}>

        </div>
        <div className=" h-[5px] w-[5px] rounded-full bg-yellow-600 ">

        </div>

       </div>
      </div>
    );
  }
  
  export default Signal;
  