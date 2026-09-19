import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const { data: parcels = [] } = useQuery({
  //   queryKey: ["myParcels", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/parcels?email=${user.email}`);
  //     return res.data;
  //   },
  // });

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelet = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            //refresh the Ui
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel request has been Deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo,
    );
    console.log(res.data);
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <h2>All of my Parcels : {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>cost</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.percelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-400">Paid</span>
                  ) : (
                    // <Link to={`/dashboard/payment/${parcel._id}`}>
                    //   <button className="btn btn-sm btn-primary text-black">
                    //     Pay
                    //   </button>
                    // </Link>
                    <button
                      onClick={() => {
                        handlePayment(parcel);
                      }}
                      className="btn btn-sm btn-primary text-black"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliverystatus}</td>
                <td>
                  {" "}
                  <button className="btn btn-square hover:bg-primary">
                    <FaMagnifyingGlass></FaMagnifyingGlass>
                  </button>
                  <button className="btn btn-square hover:bg-primary mx-2">
                    <FiEdit></FiEdit>
                  </button>
                  <button
                    onClick={() => handleParcelDelet(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
