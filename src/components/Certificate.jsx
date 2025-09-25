
import  { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ieltsPreview from '../images/IELTS SCORE_page-0002.jpg';     
import ieltsFull from '../images/IELTS SCORE_page-0001.jpg';           
import nactetPreview from '../images/NACTET_page-0002.jpg';
import nactetFull from '../images/NACTET_page-0001.jpg';
import react1p from '../images/react1.png';
import react1f from '../images/react1.png';
import js1p from '../images/js1.png';
import js1f from '../images/js1.png';
gsap.registerPlugin(ScrollTrigger);




function Certificates() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const certificatesRef = useRef(null);

  const handleShow = (img, title, desc) => {
    setModalImage(img);
    setModalTitle(title);
    setModalDescription(desc);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const certItems = certificatesRef.current.querySelectorAll('.certificate-item');
    gsap.fromTo(certItems,
      { opacity: 0, rotateY: 90 },
      {
        opacity: 1,
        rotateY: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: certificatesRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <Container className="certificates my-5 mb-4" id="certificates" ref={certificatesRef}>
      <h1 className="certify text-center mb-4">Certificates</h1>

      <Row className="mb-2">
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
            <img src={ieltsPreview} alt="IELTS Certificate" className="certificate-image mb-3" loading='lazy' />
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
            <img src={nactetPreview} alt="NACTET Certificate" className="certificate-image mb-3" loading='lazy' />
            <div className="certificate-caption">
              <h5 className="fw-bold">NACTET</h5>
              <p className="text-muted">Certification in MEARN Stack from National Council for Technology and Training.</p>
            </div>
          </div>
        </Col>

        <Col md={6} sm={12} lg={4} className="d-flex justify-content-center mb-4">
          <div
            className="certificate-item text-center p-3 shadow rounded bg-light fade-in"
            style={{ animationDelay: '0.3s', cursor: 'pointer' }}
            onClick={() =>
              handleShow(
                react1f,
                'React Crash Course',
                'Certification in React crash course from Greatstack'
              )
            }
          >
            <img src={react1p} alt="greatstack Certificate" className="certificate-image mb-3" loading='lazy' />
            <div className="certificate-caption">
              <h5 className="fw-bold">React Crash Course</h5>
              <p className="text-muted">Certification in React crash course from Greatstack.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
      <Col md={6} sm={12} lg={4} className="d-flex justify-content-center mb-4">
          <div
            className="certificate-item text-center p-3 shadow rounded bg-light fade-in"
            style={{ animationDelay: '0.3s', cursor: 'pointer' }}
            onClick={() =>
              handleShow(
                js1p,
                'JavaScript Crash Course',
                'Certification in Javascript crash course from Greatstack'
              )
            }
          >
            <img src={js1f} alt="greatstack Certificate" className="certificate-image mb-3" loading='lazy' />
            <div className="certificate-caption">
              <h5 className="fw-bold">JavaScript Crash Course</h5>
              <p className="text-muted">Certification in Javascript crash course from Greatstack.</p>
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

