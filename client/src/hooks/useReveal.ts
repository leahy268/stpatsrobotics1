import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    elements.forEach((element) => {
      element.classList.add("fade-in-up");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useReveal;
