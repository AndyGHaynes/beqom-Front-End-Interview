import React from 'react';
import { Modal } from 'react-bootstrap';

export default ({ video, modalOpen, closeModal }) => (
  <Modal show={modalOpen} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>
        {video.title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        <iframe
          width={560}
          height={315}
          src={video.url.replace('watch?v=', 'embed/')}
          frameBorder={0}
          allowFullScreen
        />
      </div>
      <div>
        {video.description}
      </div>
    </Modal.Body>
    <Modal.Footer>
      <div>
        {video.time}
      </div>
    </Modal.Footer>
  </Modal>
);