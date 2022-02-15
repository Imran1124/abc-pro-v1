import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

export default function App({ title, children }) {
    return (
        <MDBCard style={{ maxWidth: '100%' }}>
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                {children}
            </MDBCardBody>
        </MDBCard>
    );
}