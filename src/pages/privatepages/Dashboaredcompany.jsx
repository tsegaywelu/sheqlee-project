import React from "react";
import Location from "../../components/basecomponents/Location";
import Mybutton from "../../components/basecomponents/Mybutton";
import { Link } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import Dashboaredtitle from "../../components/onetimecmponent/Dashboaredtitle";
import Jobdetail from "../../components/onetimecmponent/Jobdetail";
const Dashboaredcompany = () => {
  const job = true;
  return (
    <div>
      <div className="my-5">
        <Location />
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center my-5 md:my-10 ">
        <Dashboaredtitle
          text={
            job
              ? "all the jobs you have posted and are about to post"
              : " you have not posted any job yet. get started by posting a job"
          }
          heading={"Dashboared"}
        >
          <IoGridOutline size={66} className="text-purple-600" />
        </Dashboaredtitle>
        {job ? (
          <Jobdetail />
        ) : (
          <div className="my-5 md:my-10">
            <Link to={"/sheqlee/vacancy"}>
              <Mybutton
                background={
                  "bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3 text-sm md:text-2xl font-extrabold text-white"
                }
              >
                Post your first job
              </Mybutton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboaredcompany;
