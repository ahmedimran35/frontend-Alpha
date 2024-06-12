import PropTypes from "prop-types";

const DonateCard = ({ info }) => {
  return (
    <section className="flex justify-stretch items-center py-4">
      <div className="w-1/3">
        <h5 className="text-base font-semibold leading-none">
          {info?.username}
        </h5>
        <p className="text-sm text-zinc-500">{info?.userEmail}</p>
        {/* <p className="text-xs text-zinc-600">{info?.transactionId}</p> */}
      </div>
      <div className="w-1/3">
        <h5 className="text-base font-medium leading-none">
          {info?.paymentMethod}
        </h5>
        <div className="text-sm text-zinc-500 mt-2">
          <span className="text-white bg-[#ff0000]  px-1 py-[3px] rounded-md   ">
            {info?.transactionId}
          </span>
        </div>
      </div>
      <div className="">
        <h6 className="font-semibold ml-auto text-lg mt-auto">
          +${info?.amount}
        </h6>
      </div>
    </section>
  );
};

DonateCard.propTypes = {
  info: PropTypes.object,
};

export default DonateCard;
