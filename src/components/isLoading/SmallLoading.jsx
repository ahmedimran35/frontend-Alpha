
const SmallLoading = () => {
    return (
        <div className="flex justify-center items-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-live="polite"
          aria-busy="true"
          className="h-8 w-8"
          role="loading"
        >
          <path
            d="M7 8H3V16H7V8Z"
            className="animate animate-bounce fill-[#ff0000] "
          />
          <path
            d="M14 8H10V16H14V8Z"
            className="animate animate-bounce fill-[#ff0000] [animation-delay:.2s]"
          />
          <path
            d="M21 8H17V16H21V8Z"
            className="animate animate-bounce fill-[#ff0000] [animation-delay:.4s]"
          />
        </svg>
      </div>
    );
};

export default SmallLoading;