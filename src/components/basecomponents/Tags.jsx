import React, { useState } from "react";
import { Totaltags } from "../../data/Tags";
const Tags = () => {
  const [loading, setloading] = useState(false);
  return (
    <>
      {loading ? (
        // page in a loading situation
        <div className=" bg-gray-200 mx-3 md:mx-10 lg:mx-20 px-3 md:px-6 lg:px-12 py-1 md:py-2 lg:py-5">
          {/* top texsts */}
          <div className="flex justify-between">
            <h4 className="text-sm md:text-xl lg:text-2xl">Popular Tags</h4>
            <div> &gt;</div>
          </div>
          {/* //display the tags  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Totaltags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className=" bg-gray-400 p-4 md:p-8 lg:p-10 rounded-xl border-l-[5px] md:border-l-[10px] lg: border-l-black "
                >
                  <div className="font-semibold text-2xl"></div>
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // if the page is loaded
        <div className=" bg-gray-200 px-2 md:px-5 lg:px-12 py-1 md:py-3 lg:py-5">
          {/* top texsts */}
          <div className="flex justify-between">
            <h4 className="text-2xl">Popular Tags</h4>
            <div>73+ more tags &gt;</div>
          </div>
          {/* //display the tags  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Totaltags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className=" bg-gray-400 p-5 rounded-xl border-l-[15px] border-l-black "
                >
                  <div className="font-semibold text-2xl">{tag.tagname}</div>
                  <div>
                    {tag.numberofjobs} jobs . {tag.numberofsubscribers}{" "}
                    subscribers
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Tags);