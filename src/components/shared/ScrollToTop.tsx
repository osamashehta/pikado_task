"use client";
const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className="fixed z-50 bottom-8 right-8 w-12 h-12 bg-primary border border-[#00000017] shadow-[0px_0px_10px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0px_0px_14px_rgba(0,0,0,0.1)] transition-all hover:border-black duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-move-up-icon lucide-move-up"
      >
        <path d="M8 6L12 2L16 6" />
        <path d="M12 2V22" />
      </svg>
    </div>
  );
};

export default ScrollToTop;
