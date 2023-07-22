import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

import './Meme.css';

import one from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import two from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import three from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import four from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import five from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import six from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import seven from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import eight from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import nine from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import ten from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import eleven from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import twelve from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import thirteen from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import fourteen from '../../Assets/memes/thumbnailmeme/thumbmeme.png';
import fifteen from '../../Assets/memes/thumbnailmeme/thumbmeme.png';

import pehla from '../../Assets/memes/memeimg/m1.jpeg';
import dusra from '../../Assets/memes/memeimg/m2.jpeg';
import teesra from '../../Assets/memes/memeimg/m3.jpeg';
import chautha from '../../Assets/memes/memeimg/m4.jpeg';
import panchva from '../../Assets/memes/memeimg/m5.jpeg';
import sixer from '../../Assets/memes/memeimg/m6.jpeg';
import saatva from '../../Assets/memes/memeimg/m7.jpeg';
import aatva from '../../Assets/memes/memeimg/m8.jpeg';
import niner from '../../Assets/memes/memeimg/m9.jpeg';
import dasva from '../../Assets/memes/memeimg/m10.jpeg';
import gyarva from '../../Assets/memes/memeimg/m11.jpeg';
import barva from '../../Assets/memes/memeimg/m12.jpeg';
import terva from '../../Assets/memes/memeimg/m13.jpeg';
import chauda from '../../Assets/memes/memeimg/m14.jpeg';
import pandra from '../../Assets/memes/memeimg/m15.jpeg';

const Meme = () => {
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

<h1 style={{textAlign: 'center' , color: '#f4cb01'}}>Memes</h1>

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

export default Meme;