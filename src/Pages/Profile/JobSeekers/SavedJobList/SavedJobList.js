import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import ConfirmatinModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../../Shared/Loader/Loader";

const SavedJobList = () => {
  const {loading, setLoading}=useContext(AuthContext);
  const [deletingSavedJob, setDeletingSavedJob] = useState(null);
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState([]);

  const closeModal = () => {
    setDeletingSavedJob(null);
  };


  if(loading){
    <Loader></Loader>
  }


  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobseekersavedjobs?email=${user?.email}`,
      {
        headers: {},
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setApplications(data)},
        setLoading(false)
        );
  }, [user?.email,setLoading]);

  const handleDelete = (jobs) => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_CABD_server_address}/savedjob/${jobs._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("The saved job deleted successfully");
          setLoading(false)
        }
      });
  };

  return (
    <div>
      <h2 className=" text-center font-bold my-3">Saved Job List</h2>
      <div className="overflow-x-auto">
        {/* <table className="table w-full"> */}
        <table className="table table-striped table-hover">
          <thead>
            <tr className="">
              <th>SL</th>
              <th>Position</th>
              <th>Institution</th>
              {/* <th>Organizaiton Type</th> */}
              <th>Saved Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.jobTitle}</td>
                <td>{app.organization}</td>
                {/* <td>{app.orgType}</td> */}
                <td>{app.savedDate}</td>
                <td className=" fw-bold">
                  <Link
                    className=" text-decoration-none"
                    to={`/dashboard/jobs/${app.jobId}`}
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => setDeletingSavedJob(app)}
                    data-bs-toggle="modal"
                    data-bs-target="#confirmationModal"
                    className=" btn btn-sm  btn-outline-danger ms-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {deletingSavedJob && (
          <ConfirmatinModal
            title={"Are you sure you want to delete the Saved Job?"}
            message={`If you once delete the saved job ${deletingSavedJob.jobTitle} it's can't be recovered.`}
            closeModal={closeModal}
            successAction={handleDelete}
            successButtonName="Delete"
            modalData={deletingSavedJob}
          ></ConfirmatinModal>
        )}
      </div>
    </div>
  );
};

export default SavedJobList;
