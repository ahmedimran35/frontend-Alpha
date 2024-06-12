const DownloadLoading = () => {
  return (
    <p className="w-fit border-[1px] border-[#f00] rounded-lg">

      <svg
        viewBox="0 -5 24 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="title-08a desc-08a"
        className={`w-32 h-5 md:w-32 md:h-9  stroke-white fill-[#f00]`}
      >
        <title id="title-08a">Downloading</title>
        <desc id="desc-08a">Please wait patiently</desc>
        <path d="M7 8H3V16H7V8Z" className="animate animate-bounce " />
        <path
          d="M14 8H10V16H14V8Z"
          className="animate animate-bounce [animation-delay:.2s]"
        />
        <path
          d="M21 8H17V16H21V8Z"
          className="animate animate-bounce [animation-delay:.4s]"
        />
      </svg>
      {/*<!-- End Square horizontal base sized spinner --> */}
    </p>
  );
};

export default DownloadLoading;
