import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

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
                    <MDBBtn className='btn-rounded' onClick={adddata}>
                        <MDBIcon icon='plus' fas />
                    </MDBBtn>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table table-responsive">
                            <table className='table table-bordered'>
                                <tbody >
                                    {props.addField.map((event, index) => (

                                        <tr key={index}>
                                            <td>
                                                <input
                                                    placeholder={
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
                                            </td>
                                            <td>
                                                <input
                                                    placeholder='Board'
                                                    label='Board'
                                                    id='tboard'
                                                    type='text'
                                                    name="tboard"
                                                    value={event.tboard}
                                                    onChange={e => handleChange(index, e)} />
                                            </td>
                                            <td>
                                                <input
                                                    placeholder='Institute'
                                                    label='Institute'
                                                    id='tinstiture'
                                                    type='text'
                                                    name="tinstiture"
                                                    value={event.tinstiture}
                                                    onChange={e => handleChange(index, e)} />
                                            </td>
                                            <td>
                                                <input
                                                    placeholder='Percentage'
                                                    label='Percentage'
                                                    id='tpercentage'
                                                    type='text'
                                                    name="tpercentage"
                                                    value={event.tpercentage}
                                                    onChange={e => handleChange(index, e)} />
                                            </td>
                                            <td>
                                                <input
                                                    placeholder='Year'
                                                    label='Year'
                                                    id='tyear'
                                                    type='text'
                                                    name="tyear"
                                                    value={event.tyear}
                                                    onChange={e => handleChange(index, e)} />
                                            </td>
                                            <td>
                                                <MDBBtn color='danger' size='sm' outline onClick={handleRemove}>
                                                    <MDBIcon icon='trash' fas />
                                                </MDBBtn>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/*  */}
            </div>
        </div>
    )
}

export default Education1