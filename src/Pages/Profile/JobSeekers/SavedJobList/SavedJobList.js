import { icon } from "@fortawesome/fontawesome-svg-core";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import ConfirmatinModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../../Shared/Loader/Loader";

const SavedJobList = () => {
  const { user } = useContext(AuthContext);
  const {loading, setLoading}=useContext(AuthContext);
  const [deletingSavedJob, setDeletingSavedJob] = useState(null);
  
  const [savedJobs, setSavedJobs] = useState([]);
  // const [displaySavedJobs, setDisplaySavedJob]=useState(savedJobs);


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
        setSavedJobs(data)},
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
          const remainingSavedJobs= savedJobs.filter(sj=>sj.jobId !== jobs._id)
          setSavedJobs(remainingSavedJobs);
          toast.success("The saved job deleted successfully",{duration:1000, position:'top-left'});
          
          setLoading(false)
        }
      });
  };

  return (
    <div>
      <h2 className=" text-center font-bold my-3">Saved Job List</h2>
      <div className="overflow-x-auto">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="">
              <th>SL</th>
              <th>Position</th>
              <th>Institution</th>
              <th>Saved Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {savedJobs.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.jobTitle}</td>
                <td>{app.organization}</td>
                <td>{app.savedDate}</td>
                <td className=" fw-bold">
                  <Link
                    className=" text-decoration-none"
                    to={`/jobDetails/${app.jobId}`}
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
