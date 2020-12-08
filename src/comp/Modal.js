import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import "../App.css";
export default function Modal({ selectedModal, setModal }) {
    return (
        <div className="modal-frame">
            <FontAwesomeIcon icon={faTimes} onClick={() => setModal(false)} />
            <div className="modal-content">
                <img
                    src={selectedModal.screenCapture}
                    className="screen-cap"
                    alt={`${selectedModal.name} screenshot`}
                />
                <div className="modal-text">
                    <h1>{selectedModal.name}</h1>
                    <div className="flex-row">
                        <a target="_blank" href={selectedModal.link}>
                            View Site
                        </a>
                        <a target="_blank" href={selectedModal.code}>
                            View Code
                        </a>
                    </div>
                    {selectedModal.text.map((para) => (
                        <p>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
