import React, {useState, useEffect} from "react";
import useLocalStorage from "use-local-storage";
import Main from "./components/Main";
import Side from "./components/Side";
import StyleSwitcher from "./components/StyleSwitcher";


function App({router}) {
  const [mode, setMode] = useLocalStorage("light");
  useEffect(() => { 
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }  else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode])

  const handleModeSwitch = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  



  const [sideBar, setSideBar] = useState(false)
   const showSideBar = () => {
    setSideBar(!sideBar);
   }
   const noShowSidebar = () => {
    setSideBar(false);
   }   


  return (
    <div>
      
        <Side  sideBar={sideBar} showSideBar={showSideBar}  noShowSidebar={noShowSidebar}/>
        <Main  showSideBar={showSideBar} sideBar={sideBar}/>
      
      <StyleSwitcher handleModeSwitch={handleModeSwitch} mode={mode
      }/>
    </div>
  );
}

export default App;
