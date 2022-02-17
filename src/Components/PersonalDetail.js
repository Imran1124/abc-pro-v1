import React from 'react'
import { MDBIcon, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import Multiselect from "react-select";


const options = [
    { label: "English", value: "English" },
    { label: "Hindi", value: "hindi" }
];

const PersonalDetail = (props) => {
    // return setVal({ ...getVal, language: [...getVal.language, e.value] })
    const handleSelect = (e) => {
        props.setField({ ...props.field, language: e.map(eve => eve.value) })

    }
    const handleChange = (e) => {
        props.setField({ ...props.field, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container">
                <span style={{ fontWeight: 'bold' }}>Personal Detail</span>
                <hr />
                <div className="row">
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Name *'
                            type='text'
                            name="name"
                            value={props.field.name || ''}
                            onChange={handleChange}
                            inputRef={props.refs.refName}
                            size='lg'
                        />
                        <span style={{ color: 'red', fontSize: 12 }}>{props.formError.name}</span>
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Email *'
                            type='email'
                            name="email"
                            value={props.field.email || ''}
                            onChange={handleChange}
                            inputRef={props.refs.refEmail}
                            size='lg' />
                        <span style={{ color: 'red', fontSize: 12 }}>{props.formError.email}</span>
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Mobile no *'
                            type='number'
                            name="mobileno"
                            value={props.field.mobileno || ''}
                            onChange={handleChange}
                            inputRef={props.refs.refMobile}
                            maxLength={10}
                            size='lg' />
                        <span style={{ color: 'red', fontSize: 12 }}>{props.formError.mobileno}</span>
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Date'
                            type='date'
                            name="dateofbirth"
                            value={props.field.dateofbirth || ''}
                            onChange={handleChange}
                            inputRef={props.refs.refdob}
                            size='lg'
                        />
                        <span style={{ color: 'red', fontSize: 12 }}>{props.formError.dob}</span>
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Father Name'
                            type='text'
                            name="fathername"
                            value={props.field.fathername || ''}
                            onChange={handleChange}
                            inputRef={props.refs.refFather}
                            size='lg' />
                        <span style={{ color: 'red', fontSize: 12 }}>{props.formError.fathername}</span>
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <Multiselect
                            options={options}
                            isMulti
                            onChange={handleSelect}
                            placeholder='select Language'
                            ref={props.refs.refLanguage}
                        />
                        <span style={{ color: 'red', fontSize: 12 }}>{props.formError.language}</span>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-4 my-3">
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 5 }}>
                                <MDBRadio
                                    type="radio"
                                    name='gender'
                                    id='male'
                                    label='Male'
                                    value="male"
                                    checked={props.field.gender === "male"}
                                    onChange={handleChange}
                                />
                                <MDBRadio
                                    className='mx-2'
                                    name='gender'
                                    id='female'
                                    label='Female'
                                    value="female"
                                    checked={props.field.gender === "female"}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        {/* meriatal status */}
                        <div className="col-md-6 my-3">
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 5 }}>
                                <MDBRadio
                                    name='mariatalstatus'
                                    id='married'
                                    label='Married'
                                    value="marriaged"
                                    checked={props.field.mariatalstatus === "marriaged"}
                                    onChange={handleChange}
                                    inputRef={props.refs.refMariatal}
                                />
                                <MDBRadio
                                    className='mx-2'
                                    name='mariatalstatus'
                                    id='unmarriaged'
                                    label='Single'
                                    value="unmarriaged"
                                    checked={props.field.mariatalstatus === "unmarriaged"}
                                    onChange={handleChange}
                                    inputRef={props.refs.refGender}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetail