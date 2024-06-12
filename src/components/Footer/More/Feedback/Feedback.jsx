import { useForm } from "react-hook-form";
import ScrollToTop from "../../../ScrollToTheTop/ScrollToTheTop";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
import ArrowIconSelect from "../../../ArrowIconSelect/ArrowIconSelect";
import {
  emailInput,
  inputClass,
  selectClass,
  selectLabelClass,
  submitButton,
  textareaClass,
} from "../constants/feedback.constans";

const Feedback = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    const email = user?.email;
    const reason = data?.reason;
    const message = data?.reasonDescription;
    const file = data?.images;
    setLoading(true);
    const payload = {
      email,
      reason,
      message,
    };
    const feedbackData = JSON.stringify(payload);
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("data", feedbackData);

    try {
      axiosPublic
        .post(
          `${
            import.meta.env.VITE_axiosPublic
          }/59bda3f8ee98128d543572e0d29f27ad5343f0c88c36e7bf4672c4c3ab6245b4`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          setLoading(false);

          reset();
          if (response.data.success) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Thank you for your feedback!",
              text: "We appreciate the time you took to help us improve. If necessary, we'll get in touch with you soon. Meanwhile, feel free to check our FAQ or use the chat for instant answers to common questions. Thank you for helping us make YT Shops even more awesome for our creator community!",
              showConfirmButton: false,
              timer: 3500,
            });
          }
        })
        .catch(() => {
          setLoading(false);
          reset();
          Swal.fire({
            title: ` Something Went  Wrong.`,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#ff0000",
          });
        });
    } catch (error) {
      setLoading(false);
      reset();
      Swal.fire({
        title: ` Something Went Wrong.`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0000",
      });
    }
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center space-y-5">
      <ScrollToTop />
      <h1 className="text-lg md:text-2xl font-semibold text-zinc-600">
        Send Your <span className="text-[#ff0000]">Feedback </span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        {/* Your email input */}
        <div className="relative my-[2px]">
          <input
            defaultValue={user?.email}
            disabled
            {...register("email")}
            type="email"
            placeholder="Asset Title"
            className={`${emailInput} hover:cursor-not-allowed`}
          />
          <label className={`${inputClass} bg-white rounded h-fit`}>
            Your Contact Information
          </label>
        </div>

        {/* Your Reason input */}
        <div className="relative my-[2px]">
          <select required className={selectClass} {...register("reason")}>
            <option disabled>Select Reason</option>
            <option value="generalFeedback">General Feedback</option>
            <option value="featureSuggestion">Feature Suggestion</option>
            <option value="bugReport">Bug Report</option>
            <option value="compliment">Compliment</option>
            <option value="complaint">Complaint</option>
          </select>
          <label className={selectLabelClass}>How Can We Help You Today?</label>
          <ArrowIconSelect />
        </div>

        {/*<!-- Component: Rounded base sized file input with leading icon --> */}

        {/*<!-- Component: Rounded large file input --> */}
        <div className="relative my-6">
          <input
            id="id-file02"
            type="file"
            name="id-file02"
            {...register("images")}
            className="peer relative w-full rounded border border-slate-300 px-4 py-3 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ff0000] focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 [&::file-selector-button]:hidden"
          />
          <label
            htmlFor="id-file02"
            className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#ff0000] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            Show Us What&apos;s Happening
          </label>
        </div>
        {/*<!-- End Rounded large file input --> */}

        {/*<!-- End Rounded base sized file input with leading icon --> */}

        {/* Write Your Concern textarea */}
        <div className="relative my-[2px]">
          <textarea
            {...register("reasonDescription", {
              required: true,
              pattern: {
                value: /^[\w\s:.\-,$%&()!@#^*;"'-+\\[\]=]+(?=\b\w+\b){0,60}$/gm,
                message: "Invalid description Format",
              },
            })}
            type="text"
            placeholder="Please provide as much detail as possible..."
            className={textareaClass}
          />
          <label className={inputClass}>
            Please provide as much detail as possible.
          </label>
        </div>
        {/*<!-- Component: Dropzone file input --> */}

        {/*<!-- End Dropzone file input --> */}
        <div className="flex justify-center">
          <input
            className={submitButton}
            type="Submit"
            defaultValue={`${loading ? "processing..." : "Send Feedback"}`}
          />
        </div>
      </form>
    </div>
  );
};

export default Feedback;
