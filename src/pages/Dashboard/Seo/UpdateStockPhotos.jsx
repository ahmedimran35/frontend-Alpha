import { Helmet } from "react-helmet-async";
import BackArrowComponent from "../../../components/BackArrowComponent/BackArrowComponent";
import H2Title from "../../../components/Titles/H2Title";
import UpdateStockPhotosForm from "../../Forms/UpdateStockPhotosForm";
import { useParams } from "react-router-dom";

const UpdateStockPhotos = () => {
    const {id} = useParams()
    return (
        <section className=" rounded-lg flex flex-col items-center justify-center space-y-5">
            <Helmet>
                <title>Update Stock Photos</title>
            </Helmet>

            <div className="flex justify-start max-w-3xl mx-auto my-5 w-full">
                <BackArrowComponent />
            </div>

            <H2Title baseText={"Update"} coloredText={"Stock Photos"} />

            {/* form  */}
            <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pb-16 ">
                <UpdateStockPhotosForm id={id}/>
            </div>
        </section>
    );
};

export default UpdateStockPhotos;