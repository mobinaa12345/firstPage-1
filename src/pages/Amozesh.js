import React from "react";
import "../style/style2.css";
import "../style/style.css";
import { Link } from "react-router-dom";
const Amozesh = () => {
  return (
    <div className="reletive  no-scrollbar flex">
      {" "}
      <div className=" w-screen h-auto  no-scrollbar">
        <section className="bg-center bg-cover bg-no-repeat bgnavbar bg-gray-700 backdrop-blur-xl">
          {" "}
          <Link to="/">
            <img
              src="https://job.iran.liara.run/v3/assets/imgs/acecr-logo-lg.png"
              alt="جهاد دانشگاهی"
              className="bglogo absolute "
            />{" "}
          </Link>
          <div className="px-4 mx-auto max-w-screen-xl text-center lg:pt-12 ">
            {/* <h1 className="mb-20 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          معاونت آموزشی جهاددانشگاهی
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Here at Flowbite we focus on markets where technology, innovation,
          and capital can unlock long-term value and drive economic growth.
        </p> */}

            <p className="  font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-3xl font-IranYekan my-20 text-center">
              معاونت آموزشی و کارآفرینی جهاددانشگاهی
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mb-20">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg  bg-[#F9D02A] hover:bg-[#142950] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                معاونت در یک نگاه
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-32"
              >
                درباره معاونت
              </a>
            </div>
            <div className="grid grid-cols-8 gap-2 justify-center justify-items-center content-center sm:flex-row sm:justify-center mb-16 ">
              <a className=" w-50 h-50 block max-w-sm p-6  bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  bg-center bg-cover bg-no-repeat bghover bg1">
                <p className="mb-2 text-1xl  tracking-tight text-black dark:text-white content-center my-5">
                  معرفی معاونت
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bghover"
              >
                <p className="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white my-5">
                  ساختار معاونت
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bghover"
              >
                <p className="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white">
                  سرفصل‌های دوره‌های آموزشی
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bghover"
              >
                <p className="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white">
                  تسهیلات آموزش
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bghover"
              >
                <p className="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white my-3">
                  جذب و تبدیل وضعیت هیات علمی
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bghover"
              >
                <p className="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white my-3">
                  امور اعضای هیات علمی
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bghover"
              >
                <p className="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white my-3">
                  امور اعضای غیر هیات علمی
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bghover"
              >
                <p className="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white my-3">
                  آینده مشاغل
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Amozesh;
