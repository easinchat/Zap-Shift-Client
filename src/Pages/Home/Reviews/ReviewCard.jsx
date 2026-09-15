import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { review: testmonial, userName, user_photoURL, user_email } = review;
  return (
    <div>
      <div className="card w-full max-w-sm bg-white shadow-sm rounded-2xl p-6">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl text-[#CAEB66] mb-4" />

        {/* Description */}
        <p className="text-sm text-gray-600 leading-6">{testmonial}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-400 my-4"></div>

        {/* User Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-[#006A71]">
            <img src={user_photoURL} alt="" />
          </div>

          <div>
            <h3 className="font-bold text-base">{userName}</h3>

            <p className="text-xs text-gray-500">{user_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
