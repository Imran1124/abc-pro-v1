import React from 'react';
import { MDBCard, MDBCardImage, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import CardImg from '../assets/images/cardsimg.jpg'
import job from '../assets/images/job.jpg';
export default function Feature() {
    const navigate = useNavigate();
    return (
        <>
            <MDBContainer fluid className='feature'>
                <h2>Free Job For Everyone</h2>
            </MDBContainer>
            <div className="container">

                <div className="row my-4">
                    <div className="col-md-1 col-sm-12"></div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <MDBCard style={{ maxWidth: '100%' }}>
                            <MDBCardImage src={CardImg} position='top' alt='...' />
                        </MDBCard>
                    </div>
                    <div className="col-md-2 col-sm-12"></div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <MDBCard style={{ maxWidth: '100%' }} className='applycard'>
                            <MDBBtn color='danger' className='cardbtn' outline size='lg' onClick={() => navigate('/applycard')}>APPLY FOR CARD</MDBBtn>
                            <MDBCardImage className='cardimg' src={job} position='top' alt='...' />
                            {/* <MDBCardBody>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                   
                                </div>

                            </MDBCardBody> */}
                        </MDBCard>
                    </div>
                    <div className="col-md-1 col-sm-12"></div>
                </div>
            </div>

        </>
    );
}