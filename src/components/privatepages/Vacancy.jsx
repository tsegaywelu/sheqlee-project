import React from "react";
import Location from "../basecomponents/Location";
import { FaReact } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Reatchtext from "../basecomponents/Reatchtext";
import Dropdown from "../basecomponents/Dropdown";
import Mybutton from "../basecomponents/Mybutton";
const Vacancy = () => {
  return (
    <div>
      <Location />
      <div className="relative  max-w-2xl  px-4 py-7 my-4 md:my-16 bg-slate-100 mx-auto">
        <FaReact
          size={48}
          className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-3 w-20"
        />
        <h2 className="  rounded-lg pl-20 h-full   w-full text-sm ">
          to speed up the process of posting a job try using {"  "}
          <button className=" border-b-2 border-purple-400 font-bold px-1">
            JOB templates
          </button>{" "}
          page
        </h2>
      </div>

      {/* text parts  */}
      <div className="max-w-3xl mx-auto  text-center  ">
        <div className="flex flex-col   gap-1 md:gap-3">
          <div className="flex justify-center items-center gap-x-2">
            {" "}
            <h1 className="text-xl  md:text-3xl lg:text-4xl font-extrabold">
              Add a vacancy
            </h1>
            <span className="text-2xl">[1/2]</span>
          </div>
          <p className="text-sm md:text-2xl">
            Next and final step is preview and final confirmation !!
          </p>
        </div>
        <form action="" className="mt-5 md:mt-8">
          <div className="flex flex-col items-start ">
            <label htmlFor="jobtitle">
              Jop title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="siniour mobile app developer"
              className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
            />
          </div>
          {/* //botto input parts  */}
          <div className="flex  max-sm:flex-col  gap-8   md:mt-10">
            <div className="flex flex-col flex-grow  ">
              <label className="text-xl font-bold  m-3" htmlFor="companyname">
                catagory <span className="text-red-700">*</span>
              </label>
              <div className="relative ">
                <input
                  type="text"
                  className="bg-slate-200  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                  id="companyname"
                  placeholder="full-time"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow  ">
              <label className="text-xl font-bold m-3" htmlFor="email">
                jop type <span className="text-red-700">*</span>
              </label>
              <div className="relative  ">
                <input
                  type="text"
                  className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full "
                  placeholder="fornt-end "
                />
              </div>
            </div>
          </div>
          <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10 m-7">
            <div className="flex flex-col flex-grow ">
              <label className="text-xl font-bold  m-3" htmlFor="companyname">
                Skill level <span className="text-red-700">*</span>
              </label>
              <div className="relative ">
                <input
                  type="text"
                  className="bg-slate-200  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                  id="companyname"
                  placeholder="intermidiate"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow  ">
              <label className="text-xl font-bold m-3" htmlFor="email">
                Salary <span className="text-sm">(fixed or range )</span>{" "}
                <span className="text-red-700">*</span>
              </label>
              <div className="relative  ">
                <input
                  type="number"
                  id="email"
                  className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
                  placeholder="salary"
                />
              </div>
            </div>
          </div>
          <div className=" mb-4 relative">
            <label
              className="text-xl font-bold m-2 float-left"
              htmlFor="message"
            >
              short description
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="we are looking for fluter developer with 2 year experience..."
              rows={3}
              className="bg-slate-200 w-full rounded-lg p-4  outline-none text-2xl m-3 "
            ></textarea>
            <span className="absolute right-3  bottom-16 lg:bottom-10 ">
              0/128
            </span>
            <p className="text-start">
              we are looking for ? Give as a one liner description of your ideal
              candidate.
            </p>
          </div>
          {/* //requirements part  */}

          <Reatchtext showtext={"requrenments"} />

          <Reatchtext showtext={"description"} />
          <Reatchtext showtext={"how to apply"} />
          <div className="mt-5">
            <h1 className="text-start text-2xl ">
              skills <span className="text-sm">technology names </span>
              <span className="text-red-800">*</span>
            </h1>
            <input
              type="text"
              className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
            />
          </div>
          <div className="mt-5">
            <h1 className="text-start text-2xl ">
              Apply link
              <span className="text-red-800">*</span>
            </h1>
            <input
              type="text"
              className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
            />
          </div>
          <div className="flex justify-end gap-10 mt-16 ">
            <Mybutton
              background={
                "border-4 border-indigo-700 rounded-lg py-1 md:py-2 px-2 md:px-5 text-2xl  "
              }
            >
              save draft
            </Mybutton>
            <Mybutton background={"bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3"}>
              <h1 className="text-2xl">
                Next <span className="text-sm">[preview and confirm]</span>
              </h1>
            </Mybutton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vacancy;