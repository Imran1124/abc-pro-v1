import React from 'react'
import { MDBInput, MDBRadio } from 'mdb-react-ui-kit';

const Experience = (props) => {

    const handleRadioChange = (e) => {
        props.setField({ ...props.field, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container" style={{ marginTop: 100 }}>
                <div>
                    <span style={{ fontWeight: 'bold' }}>Experience</span>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div>
                            <MDBRadio
                                name='technical'
                                id='fresher'
                                label='Fresher'
                                value="fresher"
                                checked={props.field.technical === "fresher"}
                                onChange={handleRadioChange}
                            />
                            <MDBRadio
                                name='technical'
                                id='workexperience'
                                label='Work Experience'
                                value="workexperience"
                                checked={props.field.technical === "workexperience"}
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                </div>

                {/*  */}
                {props.field.technical === 'workexperience' ?
                    <div className="row my-3">
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="fromdate"
                                label='From Date'
                                id='mobileno'
                                type='date'
                                onChange={handleRadioChange} />
                        </div>
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="todate"
                                label='To Date'
                                id='todate'
                                type='date'
                                onChange={handleRadioChange} />
                        </div>
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="position"
                                label='Position/Designation'
                                id='position'
                                type='txet'
                                onChange={handleRadioChange} />
                        </div>
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="company"
                                label='Company/Organisation'
                                id='comapny'
                                type='text'
                                onChange={handleRadioChange} />
                        </div>
                    </div> : null}


            </div>
        </div>
    )
}

export default Experience