import React from 'react'
import { MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Education1 = (props) => {

    const handleChange = (index, e) => {
        const values = [...props.field.education];
        values[index][e.target.name] = e.target.value;
        props.setField({ ...props.field, education: values });
    }

    const adddata = (e) => {
        props.setField({ ...props.field, education: [...props.field.education, {}] })
    }

    const handleRemove = (index) => {
        const values = [...props.field.education];
        values.splice(index, 1);
        props.setField({ ...props.field, education: values });
    }

    return (
        <div>
            <div className="container my-5">
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <span style={{ fontWeight: 'bold' }}>Education</span>
                    <MDBBtn type="button" className='btn-rounded' outline onClick={adddata}
                        hidden={props.field.education.length ? true : false}
                    >
                        <MDBIcon icon='plus' fas /> Education
                    </MDBBtn>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        {props.field.education.map((event, index) => (
                            <div className="row" key={index}>
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label={
                                            index === 0 ? 'Maticulation' :
                                                index === 1 ? 'Intermediate' :
                                                    index === 2 ? 'Graduation' :
                                                        index === 3 ? 'Post Graduation' : 'Tecnical'}
                                        id='education'
                                        type='text'
                                        name="education"
                                        value={event.education || ''}
                                        onChange={e => handleChange(index, e)}
                                    />
                                </div>
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Board'
                                        id='board'
                                        type='text'
                                        name="board"
                                        value={event.board || ''}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Institute'
                                        id='institute'
                                        type='text'
                                        name="institute"
                                        value={event.institute || ''}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-2 col-12 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Percentage'
                                        id='percentage'
                                        type='text'
                                        name="percentage"
                                        value={event.percentage || ''}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-3 col-9 my-2">
                                    <MDBInput
                                        size='lg'
                                        label='Year'
                                        id='year'
                                        type='text'
                                        name="year"
                                        value={event.year || ''}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                                <div className="col-md-1 col-3 my-2">
                                    <MDBBtn type="button" color='danger' className='btn btn-block' size='lg' outline
                                        onClick={() => handleRemove(index)}>
                                        <MDBIcon icon='trash' fas />
                                    </MDBBtn>
                                </div>
                                <div className='my-3' />
                            </div>
                        ))}
                    </div>
                    <div style={{ justifyContent: 'right', display: 'flex' }}
                        hidden={!props.field.education.length ? true : false}>
                        <MDBBtn type="button" outline onClick={adddata}>
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