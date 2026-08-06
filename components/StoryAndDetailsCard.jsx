"use client";
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const StoryAndDetailsCard = () => {
  const [showStory, setShowStory] = useState(true);

  useEffect(() => {
    const detailsCard = document.querySelector(".details-card");
    if (!detailsCard) return;

    let timeoutId;

    const handleMouseLeave = () => {
      detailsCard.classList.add("return");

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        detailsCard.classList.remove("return");
      }, 500);
    };

    detailsCard.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      detailsCard.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`flex flex-1 flex-col mt-1 md:mt-4 gap-2 w-full z-50`}>
      <h3 className="font-semibold">
        {showStory ? (
          <>
            How it all started...
          </>
        ) : (
          "What I'm up to now"
        )}
        <hr className="mt-2 md:mt-3" />
      </h3>

      {showStory ? (
        <p className="text-md md:text-base tracking-wide">
          Tech obsession turned into a love for building the web. Started with
          design, taught myself to code, and now I enjoy bridging visuals and
          logic — full-stack, idea to launch.
          <i className="text-[#61cc9c]">
            {"{"} still learning. always will be. {"}"}
          </i>{" "}
          Finishing on a high note with my degree done, while shipping real products.
        </p>
      ) : (
        <div className="text-md md:text-base flex flex-col gap-2 tracking-wide">
          <h2>
            studying ~{" "}
            <i className="font-medium text-[#61cc9c]">
              finishing my degree — B.Sc. Computer Science
            </i>
          </h2>
          <h2>
            building ~{" "}
            <i className="font-medium text-[#61cc9c]">
              a full-stack dev workflow & side projects
            </i>
          </h2>
          <h2>
            stack ~{" "}
            <i className="font-medium text-[#61cc9c]">
              Next.js, React, Node, TypeScript
            </i>
          </h2>
          <h2>
            focused on ~{" "}
            <i className="font-medium text-[#61cc9c]">
              shipping clean, performant web experiences
            </i>
          </h2>
          <hr className="opacity-25" />
          <h2>
            goal ~{" "}
            <i className="font-medium text-[#61cc9c]">
              turn &quot;one day I&apos;ll build it&quot; into shipped
            </i>
          </h2>
        </div>
      )}

      <button
        className="relative flex items-center justify-center gap-2 mt-auto border border-[#61cc9c]/[40%] py-3 before:absolute before:size-[10px] before:left-0 before:top-0 before:border-2 before:border-[#61cc9c] before:border-b-0 before:border-r-0 after:absolute after:size-[10px] after:right-0 after:bottom-0 after:border-2 after:border-[#61cc9c] after:border-t-0 after:border-l-0"
        onClick={() => {
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

