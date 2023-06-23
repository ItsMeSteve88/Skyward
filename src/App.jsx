import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
        <Navbar />
        <div className="body bodypos">
           <div className="sidebar sidebarpos"></div>
           <div className="main mainpos">right
              <div className='bg-orange-300 h- md:w-[416px] md:h-[709px] '>
                 todays highlights
              </div>
           </div>
           
        </div>
    </div>
  );
}

export default App
