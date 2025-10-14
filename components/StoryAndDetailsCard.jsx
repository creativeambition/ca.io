"use client";
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const StoryAndDetailsCard = () => {
  const [showStory, setShowStory] = useState(true);

  useEffect(() => {
    let detailsCard = document.querySelector(".details-card");
    detailsCard.addEventListener("mouseleave", () => {
      detailsCard.classList.add("return");

      setTimeout(() => {
        detailsCard.classList.remove("return");
      }, 500);
    });

    return () => {
      detailsCard.removeEventListener("mouseout", () => {});
    };
  });

  function yearsSince(dateString) {
    const pastDate = new Date(dateString);

    const currentDate = new Date();

    const yearsDifference = currentDate.getFullYear() - pastDate.getFullYear();

    const monthDifference = currentDate.getMonth() - pastDate.getMonth();
    const dayDifference = currentDate.getDate() - pastDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      return yearsDifference - 1;
    }

    return yearsDifference;
  }

  return (
    <div className={`flex flex-1 flex-col mt-1 md:mt-4 gap-2 w-full z-50`}>
      <h3 className="font-semibold">
        {showStory ? (
          <>
            How it all started...
          </>
        ) : (
          "Profile"
        )}
        <hr className="mt-2 md:mt-3" />
      </h3>

      {showStory ? (
        <p className="text-md md:text-base tracking-wide">
          I&apos;ve always been fascinated by technology and software
          development.{" "}
          <i className="text-[#61cc9c]">
            {"{"} technology? yhh!. software dev? not-really. {"}"}
          </i>{" "}
          I started my journey as a graphic designer{" "}
          <i className="text-[#61cc9c]">
            {"{"} nope. started as a web-designer {"}"}
          </i>
          , but I realized that I wanted to be a full-stack developer{" "}
          <i className="text-[#61cc9c]">
            {"{"} duh! who doesn&apos;t {"}"}
          </i>
          . After obtaining my degree, I decided to pursue this path.{" "}
          <i className="text-[#61cc9c]">
            {"{"} yhh no I still have 1 more year to obtain a degree so... {"}"}
          </i>
        </p>
      ) : (
        <div className="text-md md:text-base flex flex-col gap-2 tracking-wide">
          <h2>
            name ~{" "}
            <i className="font-medium text-[#61cc9c]">Chrysoprase Ayita</i>
          </h2>
          <h2>
            email ~{" "}
            <i className="font-medium text-[#61cc9c]">chrysayita@gmail.com</i>
          </h2>
          <h2>
            address ~{" "}
            <i className="font-medium text-[#61cc9c]">localhost:5173</i>
          </h2>
          <h2>
            phone ~{" "}
            <i className="font-medium text-[#61cc9c]">192.168.72.0</i>
          </h2>
          <hr className="opacity-25" />
          <h2>
            gender {"{"} default {"}"} ~{" "}
            <i className="font-medium text-[#61cc9c]">Male</i>
          </h2>
        </div>
      )}

      <button
        className="relative flex items-center justify-center gap-2 mt-auto border border-[#61cc9c]/[40%] py-3 before:absolute before:size-[10px] before:left-0 before:top-0 before:border-2 before:border-[#61cc9c] before:border-b-0 before:border-r-0 after:absolute after:size-[10px] after:right-0 after:bottom-0 after:border-2 after:border-[#61cc9c] after:border-t-0 after:border-l-0"
        onClick={(event) => {
          setShowStory((prev) => !prev);
        }}
      >
        {showStory ? (
          <>
            <span className="text-sm md:text-base">View Profile</span>
            <div className="text-2xl">
              <MdOutlineKeyboardDoubleArrowRight />
            </div>
          </>
        ) : (
          <>
            <div className="text-sm md:text-base">
              <MdOutlineKeyboardDoubleArrowLeft />
            </div>
            <span>Back to Story</span>
          </>
        )}
      </button>
    </div>
  );
};

export default StoryAndDetailsCard;

