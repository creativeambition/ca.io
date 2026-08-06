"use client";
import { doto } from "@/lib/fonts";
import { useEffect } from "react";

const PlaceholderTextAnimation = ({ texts }: { texts: string[] }) => {
  const animateInClass =
    "translate-y-[-100%] transition-transform duration-[0.5s]";
  const animateOutClass =
    "translate-y-[-200%] transition-transform duration-[0.5s]";
  const animateResetClass = "translate-y-[0] duration-[0s]";

  const setupTextAnimation = (
    delay: boolean,
    placeholder: HTMLElement,
    elements: NodeListOf<HTMLElement>
  ) => {
    let index = 0;

    if (window.innerWidth < 640) {
      placeholder.style.width = `${elements[index].offsetWidth + 10}px`;
    } else {
      placeholder.style.width = `${elements[index].offsetWidth + 40}px`;
    }

    const currentElement = elements[index];

    currentElement.classList.add(...animateInClass.split(" "));
    if (delay) {
      currentElement.style.transitionDelay = `${0.06}s`;
    }

    setTimeout(() => {
      currentElement.classList.remove(...animateInClass.split(" "));
      currentElement.classList.add(...animateOutClass.split(" "));

      setTimeout(() => {
        currentElement.classList.add(...animateResetClass.split(" "));
      }, 800);
    }, 3000);

    setInterval(() => {
      index++;

      if (index >= elements.length) {
        index = 0;
      }

      if (window.innerWidth < 640) {
        placeholder.style.width = `${elements[index].offsetWidth + 20}px`;
      } else {
        placeholder.style.width = `${elements[index].offsetWidth + 50}px`;
      }

      const currentElement = elements[index];
      currentElement.classList.remove(...animateOutClass.split(" "));
      currentElement.classList.remove(...animateResetClass.split(" "));
      currentElement.classList.add(...animateInClass.split(" "));

      if (delay) {
        currentElement.style.transitionDelay = `${0.06}s`;
      }

      setTimeout(() => {
        currentElement.classList.remove(...animateInClass.split(" "));
        currentElement.classList.add(...animateOutClass.split(" "));

        setTimeout(() => {
          currentElement.classList.add(...animateResetClass.split(" "));
        }, 500);
      }, 3000);
    }, 3000);
  };

  useEffect(() => {
    setupTextAnimation(
      false,
      document.querySelector(".placeholder") as HTMLElement,
      document.querySelectorAll(
        ".placeholder .element"
      ) as NodeListOf<HTMLElement>
    );
  }, []);

  return (
    <div
      className={`placeholder ${doto.className} translate-y-[5px] h-[50px] md:h-[70px] justify-center bg-gradient-to-br from-[#2ec480] to-[#0f397c] rounded-full px-5 md:px-6 py-3 relative inline-flex items-center overflow-hidden transition-[width] duration-[0.5s]`}
    >
      {texts.map((text, index) => (
        <span
          key={index}
          className={`element absolute top-[100%] w-max h-full flex items-center font-bold`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default PlaceholderTextAnimation;
