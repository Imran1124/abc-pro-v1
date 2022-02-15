import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdb-react-ui-kit';

export default function HeadingCard({ title, children }) {
    return (
        <MDBCard className='headCard'>
            <MDBCardHeader className='headercard'>{title}</MDBCardHeader>
            <MDBCardBody>
                {children}
            </MDBCardBody>
        </MDBCard>
    );
}