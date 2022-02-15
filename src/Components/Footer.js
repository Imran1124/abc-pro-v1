import React from 'react';
import {
    MDBFooter
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <div>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    &nbsp;<a className='text-white' href='/'>
                        ABC Consultant Pvt. Ltd
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}