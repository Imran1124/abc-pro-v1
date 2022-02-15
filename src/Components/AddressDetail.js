import React, { useEffect, useState } from 'react'
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { cStateAction, cCityAction, pStateAction, pCityAction } from '../redux/slicers';

const AddressDetail = (props) => {
    const [checked, setChecked] = useState(false)

    const { cstates, ccity, pstates, pcity } = useSelector(state => state.regionState);

    useEffect(() => {
        cStateAction();
        pStateAction();
    }, [])
    const changeCity = (e) => {
        props.setField({ ...props.field, cstate: e.target.value })
        cCityAction(e.target.value);
    }

    const pchangeCity = (e) => {
        props.setField({ ...props.field, pstate: e.target.value })
        pCityAction(e.target.value);
    }

    const handleCheck = (e) => {
        pCityAction(props.field.cstate)
        if (checked === true) {
            setChecked(false)
            props.setField({
                ...props.field,
                pstate: '',
                pcity: '',
                phouse_door_flate: '',
                pstreet_locality_policestation: '',
                plocation_landmark: '',
                p_pincode: ''
            })
        } else {
            setChecked(true)
            props.setField({
                ...props.field,
                pstate: props.field.cstate,
                pcity: props.field.ccity,
                phouse_door_flate: props.field.chouse_door_flate,
                pstreet_locality_policestation: props.field.cstreet_locality_policestation,
                plocation_landmark: props.field.clocation_landmark,
                p_pincode: props.field.cpincode
            })
        }
    }

    const handleChange = (e) => {
        props.setField({ ...props.field, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container">
                <span style={{ fontWeight: 'bold' }}>Address Detail</span>
                <hr />
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <span style={{ fontWeight: 'bold' }}>Corespondence Address</span>
                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <select name="cstate" className='form-select form-select-lg'
                                    onChange={changeCity} required >
                                    <option value="">Select State</option>
                                    {cstates.map((e, i) => (
                                        <option key={i} value={e.isoCode}>{e.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6 my-2">
                                <select
                                    className='form-select form-select-lg'
                                    name="ccity"
                                    onChange={(e) => props.setField({ ...props.field, ccity: e.target.value })}
                                >
                                    <option value="">Select City</option>
                                    {ccity.map((e, i) => (
                                        <option key={i} value={e.name}>{e.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='House/Door/FlateNo'
                                    id='chouse_door_flate'
                                    type='text'
                                    name="chouse_door_flate"
                                    value={props.field.chouse_door_flate || ''}
                                    onChange={handleChange}
                                    size='lg' />
                            </div>
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='Street/Locality/Police Station'
                                    id='cstreet_locality_policestation'
                                    type='text'
                                    name="cstreet_locality_policestation"
                                    value={props.field.cstreet_locality_policestation || ''}
                                    onChange={handleChange}
                                    size='lg' />
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='Location/Land Mark *'
                                    id='clocation_landmark'
                                    type='text'
                                    name="clocation_landmark"
                                    value={props.field.clocation_landmark || ''}
                                    onChange={handleChange}
                                    size='lg' />

                            </div>
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='Pincode'
                                    id='cpincode'
                                    type='text'
                                    name="cpincode"
                                    value={props.field.cpincode || ''}
                                    onChange={handleChange}
                                    size='lg' />
                            </div>
                        </div>
                    </div>
                    {/* parmanent address */}
                    <div className="col-md-6 col-sm-12">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold' }}>Permanent Address</span>
                            <MDBCheckbox
                                className='chkbox'
                                name='flexCheck'
                                value=''
                                id='flexCheckDefault'
                                label='same as address'
                                onChange={handleCheck}
                                checked={checked}
                            />
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <select className='form-select form-select-lg'
                                    value={props.field.pstate}
                                    onChange={pchangeCity} >
                                    <option value="">Select State</option>
                                    {pstates.map((e, i) => (
                                        <option key={i} value={e.isoCode}>
                                            {e.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6 my-2">
                                <select
                                    onChange={(e) => props.setField({ ...props.field, pcity: e.target.value })}
                                    className='form-select form-select-lg'
                                    value={props.field.pcity}
                                >
                                    <option value="DEFAULT">Select City</option>
                                    {pcity.map((e, i) => (
                                        <option key={i} value={e.name}>
                                            {e.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='House/Door/FlateNo'
                                    id='phouse_door_flate'
                                    type='text'
                                    name="phouse_door_flate"
                                    value={props.field.phouse_door_flate || ''}
                                    onChange={handleChange}
                                    size='lg' />
                            </div>
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='Street/Locality/Police Station'
                                    id='pstreet_locality_policestation'
                                    type='text'
                                    name="pstreet_locality_policestation"
                                    value={props.field.pstreet_locality_policestation || ''}
                                    onChange={handleChange}
                                    size='lg' />
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='Location/Land Mark'
                                    id='plocation_landmark'
                                    type='text'
                                    name="plocation_landmark"
                                    value={props.field.plocation_landmark || ''}
                                    onChange={handleChange}
                                    size='lg' />

                            </div>
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    className='custom-form'
                                    label='Pincode'
                                    id='p_pincode'
                                    type='text'
                                    name="p_pincode"
                                    value={props.field.p_pincode || ''}
                                    onChange={handleChange}
                                    size='lg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressDetail