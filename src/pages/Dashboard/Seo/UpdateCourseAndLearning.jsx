import { Helmet } from 'react-helmet-async';
import BackArrowComponent from '../../../components/BackArrowComponent/BackArrowComponent';
import H2Title from '../../../components/Titles/H2Title';
import UpdateCourseAndLearningForm from '../../Forms/UpdateCourseAndLearningForm';
import { useParams } from 'react-router-dom';

const UpdateCourseAndLearning = () => {
    const {id} = useParams()
    return (
        <section className=" rounded-lg flex flex-col items-center justify-center space-y-5">
            <Helmet>
                <title>Update Design Template</title>
            </Helmet>

            <div className="flex justify-start max-w-3xl mx-auto my-5 w-full">
                <BackArrowComponent />
            </div>

            <H2Title baseText={"Update"} coloredText={"Course & Learning"}></H2Title>

            {/* form  */}
            <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pb-16 ">
                <UpdateCourseAndLearningForm id={id}/>
            </div>
        </section>
    );
};

export default UpdateCourseAndLearning;