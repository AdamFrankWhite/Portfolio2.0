import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import "../App.css";
export default function Modal({ selectedModal, setModal }) {
    return (
        <div className="modal-frame">
            <FontAwesomeIcon icon={faTimes} onClick={() => setModal(false)} />
            <div className="modal-content">
                <a
                    className="modal-pic-link"
                    href={selectedModal.link}
                    alt="link"
                >
                    <img
                        src={selectedModal.screenCapture}
                        className="screen-cap"
                        alt={`${selectedModal.name} screenshot`}
                    />
                </a>
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
                    {selectedModal.text.map((para, key) => (
                        <p key={key}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
