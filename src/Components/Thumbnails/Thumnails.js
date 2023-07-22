import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

import './Thumbnails.css';

import one from '../../Assets/tips/thumbnails/1.png';
import two from '../../Assets/tips/thumbnails/2.png';
import three from '../../Assets/tips/thumbnails/3.png';
import four from '../../Assets/tips/thumbnails/4.png';
import five from '../../Assets/tips/thumbnails/5.png';
import six from '../../Assets/tips/thumbnails/6.png';
import seven from '../../Assets/tips/thumbnails/7.png';
import eight from '../../Assets/tips/thumbnails/8.png';
import nine from '../../Assets/tips/thumbnails/9.png';
import ten from '../../Assets/tips/thumbnails/10.png';
import eleven from '../../Assets/tips/thumbnails/11.png';
import twelve from '../../Assets/tips/thumbnails/12.png';
import thirteen from '../../Assets/tips/thumbnails/13.png';
import fourteen from '../../Assets/tips/thumbnails/14.png';
import fifteen from '../../Assets/tips/thumbnails/15.png';

import pehla from '../../Assets/tips/photos/1.png';
import dusra from '../../Assets/tips/photos/2.png';
import teesra from '../../Assets/tips/photos/3.png';
import chautha from '../../Assets/tips/photos/4.png';
import panchva from '../../Assets/tips/photos/5.png';
import sixer from '../../Assets/tips/photos/6.png';
import saatva from '../../Assets/tips/photos/7.png';
import aatva from '../../Assets/tips/photos/8.png';
import niner from '../../Assets/tips/photos/9.png';
import dasva from '../../Assets/tips/photos/10.png';
import gyarva from '../../Assets/tips/photos/11.png';
import barva from '../../Assets/tips/photos/12.png';
import terva from '../../Assets/tips/photos/13.png';
import chauda from '../../Assets/tips/photos/14.png';
import pandra from '../../Assets/tips/photos/15.png';

const Thumbnails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>

    <div style={{backgroundColor: 'rgb(29,26,29)'}} className='mainthumb_class'>

    <br /> <br />

<h1 style={{textAlign: 'center' , color: '#f4cb01'}}>Quick Tips</h1>

<br /> <br />

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)' }} className="card_class" onClick={() => handleThumbnailClick(pehla)}>
            <Card.Img className="image_class" variant="top" src={one} />
           
        
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(dusra)}>
            <Card.Img className="image_class" variant="top" src={two} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(teesra)}>
            <Card.Img className="image_class" variant="top" src={three} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(chautha)}>
            <Card.Img className="image_class" variant="top" src={four} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(panchva)}>
            <Card.Img className="image_class" variant="top" src={five} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(sixer)}>
            <Card.Img className="image_class" variant="top" src={six} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(saatva)}>
            <Card.Img className="image_class" variant="top" src={seven} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(aatva)}>
            <Card.Img className="image_class" variant="top" src={eight} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(niner)}>
            <Card.Img className="image_class" variant="top" src={nine} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(dasva)}>
            <Card.Img className="image_class" variant="top" src={ten} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(gyarva)}>
            <Card.Img className="image_class" variant="top" src={eleven} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(barva)}>
            <Card.Img className="image_class" variant="top" src={twelve} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(terva)}>
            <Card.Img className="image_class" variant="top" src={thirteen} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(chauda)}>
            <Card.Img className="image_class" variant="top" src={fourteen} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ border: 'none', backgroundColor: 'rgb(29,26,29)'  }} className="card_class" onClick={() => handleThumbnailClick(pandra)}>
            <Card.Img className="image_class" variant="top" src={fifteen} />
            <Card.Body style={{ textAlign: 'center' }}></Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName="custom-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={selectedImage} className="modal-img" alt="modal-img" />
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
};

export default Thumbnails;