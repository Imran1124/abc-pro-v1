import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

const MidFooter = () => {
    return (
        <div>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='google' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='github' />
                        </a>
                    </section>

                    <section className=''>
                        <form action=''>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-auto'>
                                    <p className='pt-2'>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <MDBCol md='5' start='12'>
                                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                                </MDBCol>

                                <div className='col-auto'>
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Subscribe
                                    </MDBBtn>
                                </div>
                            </div>
                        </form>
                    </section>

                    {/* <section className='mb-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                        voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                        sequi voluptate quas.
                    </p>
                </section> */}

                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Address</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>our services</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Contact</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>
            </MDBFooter>
        </div>
    )
}

export default MidFooter