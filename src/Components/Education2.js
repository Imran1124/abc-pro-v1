import React from 'react'
import { MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Education1 = (props) => {

    const handleChange = (index, e) => {
        const values = [...props.addField];
        values[index][e.target.name] = e.target.value;
        props.setAddField(values);
    }

    const adddata = (e) => {
        props.setAddField([...props.addField, {}])
    }

    const handleRemove = (index) => {
        const values = [...props.addField];
        values.splice(index, 1);
        props.setAddField(values);
    }

    return (
        <div>
            <div className="container my-5">
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <span style={{ fontWeight: 'bold' }}>Education</span>
                    <MDBBtn className='btn-rounded' outline onClick={adddata}
                        hidden={props.addField.length ? true : false}
                    >
                        <MDBIcon icon='plus' fas /> Education
                    </MDBBtn>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        {props.addField.map((event, index) => (
                            <div className="row">
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label={
                                            index === 0 ? 'Maticulation' :
                                                index === 1 ? 'Intermediate' :
                                                    index === 2 ? 'Graduation' :
                                                        index === 3 ? 'Post Graduation' : 'Tecnical'}
                                        id='teducation'
                                        type='text'
                                        name="teducation"
                                        value={event.teducation}
                                        onChange={e => handleChange(index, e)}
                                    />
                                </div>
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Board'
                                        id='tboard'
                                        type='text'
                                        name="tboard"
                                        value={event.tboard}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Institute'
                                        id='tinstiture'
                                        type='text'
                                        name="tinstiture"
                                        value={event.tinstiture}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Percentage'
                                        id='tpercentage'
                                        type='text'
                                        name="tpercentage"
                                        value={event.tpercentage}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-3 col-9 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Year'
                                        id='tyear'
                                        type='text'
                                        name="tyear"
                                        value={event.tyear}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-1 col-3 my-2">
                                    <MDBBtn color='danger' className='btn btn-block' size='lg' outline onClick={handleRemove}>
                                        <MDBIcon icon='trash' fas />
                                    </MDBBtn>
                                </div>
                                <div className='my-3' />
                            </div>
                        ))}
                    </div>
                    <div style={{ justifyContent: 'right', display: 'flex' }}
                        hidden={!props.addField.length ? true : false}>
                        <MDBBtn outline onClick={adddata}>
                            <MDBIcon icon='plus' fas />
                        </MDBBtn>
                    </div>
                </div>

                {/*  */}
            </div>
        </div>
    )
}

export default Education1