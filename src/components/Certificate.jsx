
import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import ieltsPreview from '../images/IELTS SCORE_page-0002.jpg';     // smaller preview image
import ieltsFull from '../images/IELTS SCORE_page-0001.jpg';           // larger/full image for modal
import nactetPreview from '../images/NACTET_page-0002.jpg';
import nactetFull from '../images/NACTET_page-0001.jpg';

function Certificates() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const handleShow = (img, title, desc) => {
    setModalImage(img);
    setModalTitle(title);
    setModalDescription(desc);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="certificates my-5 mb-4" id="certificates">
      <h1 className="certify text-center mb-4">Certificates</h1>

      <Row className="mb-4">
        <Col md={6} sm={12} lg={4} className="d-flex justify-content-center mb-4">
          <div
            className="certificate-item text-center p-3 shadow rounded bg-light fade-in"
            style={{ animationDelay: '0.1s', cursor: 'pointer' }}
            onClick={() =>
              handleShow(
                ieltsFull,
                'IELTS Certification',
                'An overall score of 6.5, demonstrating English proficiency.'
              )
            }
          >
            <img src={ieltsPreview} alt="IELTS Certificate" className="certificate-image mb-3" />
            <div className="certificate-caption">
              <h5 className="fw-bold">IELTS Certification</h5>
              <p className="text-muted">An overall score of 6.5, demonstrating English proficiency.</p>
            </div>
          </div>
        </Col>

        <Col md={6} sm={12} lg={4} className="d-flex justify-content-center mb-4">
          <div
            className="certificate-item text-center p-3 shadow rounded bg-light fade-in"
            style={{ animationDelay: '0.3s', cursor: 'pointer' }}
            onClick={() =>
              handleShow(
                nactetFull,
                'NACTET',
                'Certification in MEARN Stack from National Council for Technology and Training.'
              )
            }
          >
            <img src={nactetPreview} alt="NACTET Certificate" className="certificate-image mb-3" />
            <div className="certificate-caption">
              <h5 className="fw-bold">NACTET</h5>
              <p className="text-muted">Certification in MEARN Stack from National Council for Technology and Training.</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImage} alt={modalTitle} style={{ width: '100%' }} />
          <p className="mt-3 text-muted">{modalDescription}</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certificates;

