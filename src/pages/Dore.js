import React from "react";
import "../style/style2.css";
import "../style/style.css";
import { Link } from "react-router-dom";
const Dore = () => {
  return (
    <div className="bg-center bg-cover bg-no-repeat bgheader h-auto w-100 bg-gray-500 bg-blend-multiply ">
      {" "}
      <Link to="/">
        <img
          src="https://job.iran.liara.run/v3/assets/imgs/acecr-logo-lg.png"
          alt="جهاد دانشگاهی"
          className="bglogo absolute"
        />
      </Link>
      <p className="text-center text-black font-bold mt-20  text-4xl font-IranYekan ">
        معاونت آموزشی و کارآفرینی جهاددانشگاهی
      </p>
      <p className="text-center text-black font-bold text-2xl font-IranYekan mt-20">
        دانش‌افزایی و مهارت افزایی یک وظیفه و مأموریت در حوزه معاونت آموزش و
        کارآفرینی
      </p>
      {/* <div className="ag-offer-block">
        <div className="ag-format-container">
          <ul className="ag-offer_list">
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <div className="ag-offer_title font-bold justify-center ">
                  سامانه بازارکار
                </div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </li>
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                </div>
                <div className="ag-offer_title">آینده مشاغل و مشاغل آینده</div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </li>
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ag-offer_title ">طرح‌ها و پروژه‌های ملی</div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </li>
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path d="M4.08 5.227A3 3 0 016.979 3H17.02a3 3 0 012.9 2.227l2.113 7.926A5.228 5.228 0 0018.75 12H5.25a5.228 5.228 0 00-3.284 1.153L4.08 5.227z" />
                    <path
                      fillRule="evenodd"
                      d="M5.25 13.5a3.75 3.75 0 100 7.5h13.5a3.75 3.75 0 100-7.5H5.25zm10.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ag-offer_title">
                  تارگاه معاونت آموزش و کارآفرینی
                </div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </li>
            <li className="ag-offer_item  bg-blend-multiply">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                    <path
                      fillRule="evenodd"
                      d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
                      clipRule="evenodd"
                    />
                    <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                  </svg>
                </div>
                <div className="ag-offer_title text-blue-700">
                  معاونت آموزش و کارآفرینی
                </div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </li>
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-3.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                    <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                  </svg>
                </div>
                <div className="ag-offer_title">یادگیری الکترونیکی</div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu.
                </p>
              </div>
            </li>
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-4.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ag-offer_title">مراکز و دوره‌های آموزشی</div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                  eleifend tellus. Aenean leo ligula, porttitor.
                </p>
              </div>
            </li>
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-5.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
                  </svg>
                </div>
                <div className="ag-offer_title">
                  دانشگاه‌ها و موسسات آموزش عالی
                </div>
              </div>
              <div className="ag-offer_hidden-item">
                <p className="ag-offer_text">
                  Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius.
                </p>
              </div>
            </li>
            <li className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img
                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-6.svg"
                    className="ag-offer_img"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ag-offer_img w-6 h-6"
                  >
                    <path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
                  </svg>
                </div>
                <div className="ag-offer_title">مرکز آزمون و کانون ارزیابی</div>
              </div>
              <div className="ag-offer_hidden-item">
                <a href="#" className="ag-offer_btn">
                  Dapibus viverra
                </a>
              </div>
            </li>
          </ul>
        </div>
        <img
          src="https://acecr.ir/images/www/fa/website/site-logo/2020/1607255880-1602402664-logo-acecr-nn.png"
          alt="جهاد دانشگاهی"
          className=" ml-20"
        />
      </div>{" "} */}
    </div>
  );
};

export default Dore;
