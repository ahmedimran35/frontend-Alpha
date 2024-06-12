import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import DonateCard from "./DonateCard";

const RecentDonations = ({ donations }) => {
  return (
    <div className="p-6 rounded-xl col-span-1 md:col-span-2 lg:col-span-4  shadow-md border-[1px]">
      <h3 className="font-semibold leading-none tracking-tight text-2xl">
        Recent Donations
      </h3>
      <p className="text-zinc-600 mt-1 text-sm pb-4">
        You made <span className="text-[#f00]">${donations?.last24Hours}</span>{" "}
        in the last 24 hours
      </p>
      {donations?.recentDonations?.map((donation) => {
        const { amount, user, transactionId, paymentMethod, userEmail } =
          donation;
        const { username } = user;
        const info = {
          username,
          userEmail,
          amount,
          transactionId,
          paymentMethod,
        };
        return <DonateCard key={nanoid()} info={info}></DonateCard>;
      })}
    </div>
  );
};

RecentDonations.propTypes = {
  donations: PropTypes.object,
};

export default RecentDonations;
