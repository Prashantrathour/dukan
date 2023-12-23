import React, { useState } from "react";
import { FaChevronDown, FaGear } from "react-icons/fa6";
import { CiCircleRemove, CiMenuBurger } from "react-icons/ci";
import {
  svg,
  svg0,
  svg1,
  svg2,
  svg3,
  svg4,
  svg5,
  svg6,
  svg7,
  svg8,
  svg9,
} from "./AllNavSvg";
import Payouts from "./Payouts";

const ContentArea = ({ activeSection }) => {
  const contentMap = {
    home: "Home",
    orders: "Orders",
    products: "Products",
    delivery: "Delivery",
    marketing: "Marketing",
    analytics: "Analytics",
    payouts: <Payouts/>,
    discounts: "Discounts",
    audience: "Audience",
    appearance: "Appearance",
    plugins: "Plugins",
  };

  return <div className="overflow-y-auto">{contentMap[activeSection]}</div>;
};

const SidebarSection = ({ category, activeSection, handleNavLinkClick }) => (
  <li className="px-[10px] ">
    <div className={`space-y-1 ${category.id === "tools" ? "w-full" : ""}`}>
      <a
        onClick={() => handleNavLinkClick(category.id)}
        className={`flex items-center text-left flex-1 justify-start px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-[#FFFFFF1A] hover:text-white ${
          activeSection === category.id ? "bg-[#FFFFFF1A] text-white" : ""
        }`}
        href="#"
      >
        {category.icon}
        <span className="mx-2 text-sm font-medium sm:w-40 md:w-56 lg:w-60">
          {category.text}
        </span>
      </a>
    </div>
  </li>
);

export function Dashboard() {
  const [activeSection, setActiveSection] = useState("home");
  const [show, setshow] = useState(false);

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };

  const mainCategories = [
    { id: "home", text: "Home", icon: svg0 },
    { id: "orders", text: "Orders", icon: svg },
    { id: "products", text: "Products", icon: svg8 },
    { id: "delivery", text: "Delivery", icon: svg1 },
    { id: "marketing", text: "Marketing", icon: svg2 },
    { id: "analytics", text: "Analytics", icon: svg9 },
    { id: "payouts", text: "Payouts", icon: svg3 },
    { id: "discounts", text: "Discounts", icon: svg4 },
    { id: "audience", text: "Audience", icon: svg5 },
    { id: "appearance", text: "Appearance", icon: svg7 },
    { id: "plugins", text: "Plugins", icon: svg6 },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-shrink-0 ">
        <div className="flex flex-col w-[224px]">
          <nav className="flex-1 flex flex-col justify-between overflow-y-auto text-white bg-[#353C53] py-3">
            <div className="">
              <div className="flex text-center justify-between items-center m-2  mb-4 gap-2 px-[10px] ">
                <div className="flex gap-2 justify-start text-left">
                  <img
                    width={"39px"}
                    height={"39px"}
                    src="https://www.figma.com/file/bEYvZixY37eFbwT3fwzEyV/image/18ef52d91494ed3109e53ab9db09579cd5d8839e"
                  />
                  <span className="flex h-full w-full flex-col justify-between">
                    <span className="text-[15px] font-medium">Nishya</span>
                    <span className="text-[13px] underline font-medium text-[#dddbdb]">
                      visit store
                    </span>
                  </span>
                </div>
                <span>
                  <FaChevronDown />
                </span>
              </div>
              <ul className="w-full flex flex-col gap-1  text-[20px]">
                {mainCategories.map((category) => (
                  <SidebarSection
                    key={category.id}
                    category={category}
                    activeSection={activeSection}
                    handleNavLinkClick={handleNavLinkClick}
                  />
                ))}
              </ul>
            </div>
            <div className="flex p-[10px] justify-start gap-[12px] items-center text-center  rounded-[4px] mx-[10px] bg-[#FFFFFF1A]">
              <div className="rounded-md p-[6px] text-left bg-[#FFFFFF1A]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="outline / wallet">
                    <path
                      id="wallet"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[13px]">Available credits</p>
                <p className="text-[16px] font-medium">220</p>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden relative top-0 border px-8 bg-white">
        {/* Your content area */}
        <ContentArea activeSection={activeSection} />
      </div>
    </div>
  );
}

export default Dashboard;
