import React from 'react';



const ConfirmatinModal = ({ title, message, closeModal, modalData, successAction, successButtonName }) => {
    return (
        <div>

            {/* <input type="checkbox" id="confirmation-modal" className="modal-toggle" /> */}
            {/* <div class="modal" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" >
                <div class="modal-dialog">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4 mb-4">{message}</p>
                    <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-sm  absolute left-2 bottom-2 btn-warning">{successButtonName}</label>
                    <button onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-sm btn-outline absolute right-2 bottom-2">✕</button>
                </div>
            </div> */}


            <div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="confirmationModalLabel">{title}</h1>
                        </div>
                        <div class="modal-body fw-bold">
                            {message}
                        </div>
                        <div class="modal-footer d-flex justify-content-between">
                            <button onClick={() => successAction(modalData)} type="button" data-bs-dismiss="modal" class="btn btn-info">{successButtonName}</button>

                            <button onClick={closeModal} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ConfirmatinModal;