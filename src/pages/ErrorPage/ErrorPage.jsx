import BackHomeSection from "./components/BackHomeSection";
import ErrorDescription from "./components/ErrorDescription";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
      <main className="h-screen w-full flex flex-col justify-center items-center bg-black">
        <ErrorDescription />
        <BackHomeSection />
      </main>
    </div>
  );
};

export default ErrorPage;
