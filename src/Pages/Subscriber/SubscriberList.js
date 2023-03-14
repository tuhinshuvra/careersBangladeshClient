import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import ConfirmatinModal from "../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../Shared/Loader/Loader";

const SubscriberList = () => {
  const [deletingSubscriber, setDeletingSubscriber] = useState(null);

  const closeModal = () => {
    setDeletingSubscriber(null);
  };

  const {
    data: subscribers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const respone = await fetch(
          `${process.env.REACT_APP_CABD_server_address}/subscribers`
        );
        const data = respone.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDelete = (subscriber) => {
    fetch(
      `${process.env.REACT_APP_CABD_server_address}/subscribers/${subscriber._id}`,
      {
        method: "DELETE",
      }
    )
      .then((respnse) => respnse.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast("Subscriber Deleted Successfully.");
        }
        refetch();
      });
  };

  const handleSubscriberUpdate = (subscriber) => {
    toast("Subscriber Update is not activate yet");
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h2 className="text-center  fw-bold  my-4">All Subscriber</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="">
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={subscriber._id}>
                <td>{index + 1}</td>
                <td>{subscriber.name}</td>
                <td>{subscriber.subsEmail}</td>
                <td>
                  <Link to={`/dashboard/userUpdate/${subscriber._id}`}>
                    <button
                      className=" fw-bold btn-sm btn btn-primary mx-1"
                      onClick={() => handleSubscriberUpdate(subscriber._id)}
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => setDeletingSubscriber(subscriber)}
                    data-bs-toggle="modal"
                    data-bs-target="#confirmationModal"
                    className=" btn btn-sm  btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deletingSubscriber && (
          <ConfirmatinModal
            title={"Are you sure you want to delete the Subscriber?"}
            message={`If you once delete the subscriber ${deletingSubscriber.name} it's can't be recovered.`}
            closeModal={closeModal}
            successAction={handleDelete}
            successButtonName="Delete"
            modalData={deletingSubscriber}
          ></ConfirmatinModal>
        )}
      </div>
    </div>
  );
};

export default SubscriberList;
