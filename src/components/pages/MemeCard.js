import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {
 const navigate=useNavigate()
  return (
        <div className='m-3'>
            <Card style={{ width: '18rem',height:'550px' }} className='d-flex flex-column'>
      <Card.Img  variant="top" src={props.img} />
      <Card.Body className='align-items-end'>
        <Card.Title>{props.title}</Card.Title>
<Fade>
<Button variant="primary" onClick={(e)=>{navigate(`/edit/?url=${props.img}`)}}>Edit</Button>
</Fade>
      </Card.Body>
    </Card>
        </div>
    );
}

export default MemeCard;
