import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Link from 'next/link';

const popp = () => {
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
          setShow(true)
        })
      }, [])

  return (
    <>
        <Modal
                show={show}
                size="lg"
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body closeButton>
                    <Link href="https://google.com">
                    <a>
                        <Row className="text-center justify-content-center" >
                            <Col>
                                <Image src="/ad1.jpg" width="800" height="500"/>
                            </Col>
                        </Row>
                    </a>
                    </Link>
                </Modal.Body>
            </Modal>
    </>
  )
}

export default popp