import React, { useState } from "react";
import { BiCheck, BiPrinter, BiSearch } from "react-icons/bi";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

function Table() {
  const data = [
    {
      orderID: 12345,
      status: "successful",
      transactionID: 9876543210,
      refund: false,
      date: "2023-01-01",
      orderAmount: 50.0,
      refoundDate: "today 8:45PM",
    },
    {
      orderID: 67890,
      status: "pending",
      transactionID: 1234567890,
      refund: false,
      date: "2023-01-03",
      orderAmount: 30.25,
      refoundDate: "yesterday 9:30AM",
    },
    {
      orderID: 54321,
      status: "successful",
      transactionID: 9876543210,
      refund: false,
      date: "2023-01-05",
      orderAmount: 90.75,
      refoundDate: "today 1:15PM",
    },
    {
      orderID: 90123,
      status: "pending",
      transactionID: 1234567890,
      refund: false,
      date: "2023-01-07",
      orderAmount: 65.2,
      refoundDate: "yesterday 6:00PM",
    },
    {
      orderID: 23456,
      status: "successful",
      transactionID: 9876543210,
      refund: false,
      date: "2023-01-08",
      orderAmount: 25.0,
      refoundDate: "today 8:45PM",
    },
    {
      orderID: 34567,
      status: "pending",
      transactionID: 1234567890,
      refund: false,
      date: "2023-01-09",
      orderAmount: 110.5,
      refoundDate: "today 3:30PM",
    },
    {
      orderID: 78901,
      status: "successful",
      transactionID: 9876543210,
      refund: false,
      date: "2023-01-10",
      orderAmount: 55.8,
      refoundDate: "yesterday 8:00AM",
    },
    {
      orderID: 45678,
      status: "pending",
      transactionID: 1234567890,
      refund: false,
      date: "2023-01-11",
      orderAmount: 75.5,
      refoundDate: "today 12:45PM",
    },
    {
      orderID: 56789,
      status: "successful",
      transactionID: 9876543210,
      refund: false,
      date: "2023-01-12",
      orderAmount: 42.5,
      refoundDate: "yesterday 2:15PM",
    },
    {
      orderID: 89012,
      status: "pending",
      transactionID: 1234567890,
      refund: false,
      date: "2023-01-13",
      orderAmount: 120.0,
      refoundDate: "today 6:30PM",
    },
  ];

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 mt-[24px]">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-0">
          <div className="relative p-2 overflow-hidden bg-white  dark:bg-gray-800 ">
            <div className="flex flex-col  space-y-3 lg:flex-row lg:items-center lg:justify-between py-2 lg:space-y-0 lg:space-x-4 ">
            <form className="flex items-center   rounded-md ">
            <div className="relative w-full flex  rounded-md border px-[16px] py-2 gap-2 focus:border-none">
              <button type="button" className="flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icons/search" clip-path="url(#clip0_84870_4430)">
                    <g id="assets/icons/global/search">
                      <path
                        id="Fill 1"
                        d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
                        fill="#808080"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_84870_4430">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50  border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-cover-full"
                placeholder="Order ID or transaction ID"
                required
              />
            </div>
          </form>

              <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-1 text-sm font-medium gap-2 border border-gray-300 text-gray-700"
                >
                  sort <HiOutlineArrowsUpDown />
                </button>

                <button
                  type="button"
                  className="flex items-center border justify-center flex-shrink-0 p-1 text-sm font-medium text-gray-900 bg-white  outline-none"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/download">
<path id="Combined Shape" d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D"/>
</g>
</svg>

                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-5">
                <thead className="text-xs text-gray-700 uppercase  bg-[#F2F2F2] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Order ID
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Refund date
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Order amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data?.map((item) => {
                      return (
                        <tr className="border-b-2 dark:border-gray-500 hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-200 py-2 p-4 text-gray-500">
                          <th
                            scope="row"
                            className="flex items-center px-4 py-2 font-medium  whitespace-nowrap text-[#146EB4]"
                          >
                            #{item.orderID}
                          </th>
                          <td className="px-4 py-2">
                            <span className="text-medium font-medium px-2 py-0.5 flex justify-start items-center text-left gap-2 ">
                              <div className={`w-[10px] h-[10px] border rounded-full ${item.status!="pending"?"bg-green-800":"bg-[#999999]"}`}></div><span>{item.status.charAt(0).toUpperCase()
  + item.status.slice(1)}</span>
                            </span>
                          </td>
                          <td className="px-4 py-2 font-medium  whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                             {item.transactionID}
                            </div>
                          </td>
                          <td className="px-4 py-2 font-medium  whitespace-nowrap dark:text-white">
                            {item.refoundDate}
                          </td>
                          <td className="px-4 py-2 font-medium  whitespace-nowrap dark:text-white">
                            ₹ {item.orderAmount}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
}

export default Table;
