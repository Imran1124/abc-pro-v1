import React, { useState } from 'react'
import { MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Skills = (props) => {
    const [skill, setSkill] = useState([])
    const handleChange = (index, e) => {
        const values = [...skill];
        values[index][e.target.name] = e.target.value;
        setSkill(values);
    }

    const adddata1 = (e) => {
        setSkill([...skill, {}])
    }

    const handleRemove = (index) => {
        const values = [...skill];
        values.splice(index, 1);
        setSkill(values);
    }

    return (
        <div>
            <div className="container my-5">
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <span style={{ fontWeight: 'bold' }}>Skills</span>
                    <MDBBtn className='btn-rounded' outline onClick={adddata1}
                        hidden={skill.length ? true : false}
                    >
                        <MDBIcon icon='plus' fas /> Skill
                    </MDBBtn>
                </div>
                <hr />

                {skill.map((event, index) => (
                    <div className="row">
                        <div className="col-md-11 col-9 my-2">
                            <MDBInput
                                size='lg'
                                label='Skills'
                                id='skill'
                                type='text'
                                name="skill"
                                value={event.skill || ''}
                                onChange={e => handleChange(index, e)} />
                        </div>
                        <div className='col-md-1 col-1 my-2'>
                            <MDBBtn size='lg' color='danger' outline onClick={handleRemove}>
                                <MDBIcon icon='trash' fas />
                            </MDBBtn>
                        </div>
                    </div>
                ))}
                <div style={{ justifyContent: 'right', display: 'flex' }}>
                    <MDBBtn className='btn-rounded' outline onClick={adddata1}
                        hidden={!skill.length ? true : false}
                    >
                        <MDBIcon icon='plus' fas />
                    </MDBBtn>
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default Skills