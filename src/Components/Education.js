import React, { useState } from 'react'
import { MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
// import HeadingCard from './HeadingCard';
import { useSelector } from 'react-redux';
import { addEducationAction, RemoveAction } from '../redux/slicers';

const EducationalQualification = (props) => {
    const [state, setstate] = useState({});
    const { addEducation } = useSelector(state => state.educationState)
    const handleChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const handleAdd = () => {
        addEducationAction(state);
    }
    return (
        <div className='my-5'>
            <div className="container">
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <span style={{ fontWeight: 'bold' }}>Education</span>
                    <MDBBtn className='btn-rounded' onClick={handleAdd}>
                        <MDBIcon icon='plus' fas />
                    </MDBBtn>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Education' id='education' type='text'
                            name="education" onChange={handleChange} value={state.education || ''} />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Board' id='board' type='text'
                            name="board" onChange={handleChange} value={state.board || ''} />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Institute' id='institute' type='text'
                            name="institute" onChange={handleChange} value={state.institute || ''} />
                    </div>
                    <div className="col-md-2 col-sm-12 my-2">
                        <MDBInput size='lg' label='Percentage' id='percentage' type="text"
                            name="percentage" onChange={handleChange} value={state.percentage || ''} />
                    </div>
                    <div className="col-md-1 col-sm-12 my-2">
                        <MDBInput size='lg' label='Year' id='year' type='text'
                            name="year" onChange={handleChange} value={state.year || ''} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="table table-responsive">
                        <table className='table table-bordered'>
                            <tr>
                                <th>Education</th>
                                <th>Board</th>
                                <th>Institute</th>
                                <th>Percentage</th>
                                <th>Year</th>
                                <th>Remove</th>
                            </tr>
                            <tbody>
                                {addEducation.map((e, i) => (
                                    <tr key={i}>
                                        <td>{e.education}</td>
                                        <td>{e.board}</td>
                                        <td>{e.institute}</td>
                                        <td>{e.percentage}</td>
                                        <td>{e.year}</td>
                                        <td>
                                            <MDBBtn color='danger' outline onClick={() => RemoveAction(i)}>
                                                <MDBIcon icon='trash'></MDBIcon>
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default EducationalQualification