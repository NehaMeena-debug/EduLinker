
import { Link } from "react-router-dom";
// import {Routes , Route} from "react-router-dom";

// import B_Shop from "./Component/BuyerDashboard/B_Shop"
// import B_Payment from "./Component/BuyerDashboard/B_Payment"
// import B_History from "./Component/BuyerDashboard/B_History"
// import B_Purchased from "./Component/BuyerDashboard/B_Purchased"

      // <Routes>
        {/* <Route path="/B_Shop" element={<B_Shop/>}></Route>
        <Route path="/B_Purchased" element={<B_Purchased/>}></Route>
        <Route path="/B_History" element={<B_History/>}></Route>
        <Route path="/B_Payment" element={<B_Payment/>}></Route> */}
      // </Routes>

const BuyerProfile = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="bg-black flex flex-col md:h-screen w-full md:w-96 p-10 text-center justify-between">
          <div className="text-white font-semibold">
            <p className="text-2xl md:text-3xl">Hello👋 Khushi!</p>
          </div>
          <div className="text-white font-semibold flex flex-col items-center justify-center">
            <div className="h-24 w-24 md:h-28 md:w-28 bg-white rounded-full text-center overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Profile"
              />
            </div>
            <h2 className="text-white mt-4 text-lg md:text-xl">Khushi Verma</h2>
          </div>
          <p className="text-white font-semibold text-lg md:text-xl whitespace-pre-wrap mb-10">
            Welcome to EduLinker! 💗
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-stone-300 flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 lg:gap-24 text-center m-6 md:m-12">
            <Link to="/B_Shop">
              <div className="h-40 w-full max-w-xs mx-auto border-2 rounded-lg bg-amber-700 text-white flex flex-col justify-center items-center cursor-pointer font-bold">
                <p className="text-3xl">
                  <i className="ri-upload-cloud-fill"></i>
                </p>
                <span className="mt-2 text-base md:text-lg">Shop now</span>
              </div>
            </Link>
            <Link to="/B_Purchased">
              <div className="h-40 w-full max-w-xs mx-auto border-2 rounded-lg bg-cyan-700 text-white flex flex-col justify-center items-center cursor-pointer font-bold">
                <p className="text-3xl">
                  <i className="ri-money-rupee-circle-fill"></i>
                </p>
                <span className="mt-2 text-base md:text-lg">Purchased Material</span>
              </div>
            </Link>
            <Link to="/B_History">
              <div className="h-40 w-full max-w-xs mx-auto border-2 rounded-lg bg-cyan-700 text-white flex flex-col justify-center items-center cursor-pointer font-bold">
                <p className="text-3xl">
                  <i className="ri-chat-history-fill"></i>
                </p>
                <span className="mt-2 text-base md:text-lg">Purchase History</span>
              </div>
            </Link>
            <Link to="/B_Payment">
              <div className="h-40 w-full max-w-xs mx-auto border-2 rounded-lg bg-amber-700 text-white flex flex-col justify-center items-center cursor-pointer font-bold">
                <p className="text-3xl">
                  <i className="ri-secure-payment-line"></i>
                </p>
                <span className="mt-2 text-base md:text-lg">Payment Information</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerProfile;
