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
        props.setField({ ...props.field, caddress: { ...props.field.caddress, cstate: e.target.value } })
        cCityAction(e.target.value);
    }

    const pchangeCity = (e) => {
        // props.setField({ ...props.field, pstate: e.target.value })
        props.setField({ ...props.field, paddress: { ...props.field.paddress, pstate: e.target.value } })
        pCityAction(e.target.value);
    }

    const handleCheck = (e) => {
        pCityAction(props.field.caddress.cstate)
        if (checked === true) {
            setChecked(false)
            props.setField({
                ...props.field, paddress: {
                    ...props.field.paddress,
                    pstate: '',
                    pcity: '',
                    phouse_door_flate: '',
                    pstreet_locality_policestation: '',
                    plocation_landmark: '',
                    p_pincode: ''
                }
            })
        } else {
            setChecked(true)
            props.setField({
                ...props.field, paddress: {
                    ...props.field.paddress,
                    pstate: props.field.caddress.cstate,
                    pcity: props.field.caddress.ccity,
                    phouse_door_flate: props.field.caddress.chouse_door_flate,
                    pstreet_locality_policestation: props.field.caddress.cstreet_locality_policestation,
                    plocation_landmark: props.field.caddress.clocation_landmark,
                    p_pincode: props.field.caddress.cpincode
                }
            })
        }
    }

    const handleChangeCaddress = (e) => {
        props.setField({
            ...props.field,
            caddress: { ...props.field.caddress, [e.target.name]: e.target.value }
        })
    }
    const handleChangePaddress = (e) => {
        props.setField({
            ...props.field,
            paddress: { ...props.field.paddress, [e.target.name]: e.target.value },
        })
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
                                <select name="cstate"
                                    className='form-select form-select-lg'
                                    ref={props.refs.refCstate}
                                    onChange={changeCity} >
                                    <option value="">Select State</option>
                                    {cstates.map((e, i) => (
                                        <option key={i} value={e.isoCode}>{e.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6 my-2">
                                <select
                                    ref={props.refs.refCcity}
                                    className='form-select form-select-lg'
                                    name="ccity"
                                    onChange={(e) => props.setField({
                                        ...props.field,
                                        caddress: { ...props.field.caddress, ccity: e.target.value }
                                    }
                                    )}
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
                                    inputRef={props.refs.refChouse}
                                    type='text'
                                    name="chouse_door_flate"
                                    value={props.field.caddress.chouse_door_flate || ''}
                                    onChange={handleChangeCaddress}
                                    label="House/Door/Flate"
                                    size='lg' />
                            </div>
                            <div className="col-md-6 my-2">
                                <MDBInput
                                    inputRef={props.refs.refCstreet}
                                    type='text'
                                    name="cstreet_locality_policestation"
                                    value={props.field.caddress.cstreet_locality_policestation || ''}
                                    onChange={handleChangeCaddress}
                                    label="Street/Location/Police station"
                                    size='lg' />
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">

                                <MDBInput
                                    inputRef={props.refs.refClocation}
                                    type='text'
                                    name="clocation_landmark"
                                    value={props.field.caddress.clocation_landmark || ''}
                                    onChange={handleChangeCaddress}
                                    label="Location/Landmark"
                                    size='lg'
                                />

                            </div>
                            <div className="col-md-6 my-2">

                                <MDBInput
                                    inputRef={props.refs.refCpincode}
                                    type='text'
                                    name="cpincode"
                                    value={props.field.caddress.cpincode || ''}
                                    onChange={handleChangeCaddress}
                                    label='Pincode'
                                    size='lg'
                                />
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
                                    ref={props.refs.refPstate}
                                    value={props.field.paddress.pstate}
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
                                    ref={props.refs.refPcity}
                                    onChange={(e) => props.setField({
                                        ...props.field, paddress: { ...props.field.paddress, pcity: e.target.value }
                                    })}
                                    className='form-select form-select-lg'
                                    value={props.field.paddress.pcity}
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
                                    inputRef={props.refs.refPhouse}
                                    label='House/Door/FlateNo'
                                    id='phouse_door_flate'
                                    type='text'
                                    name="phouse_door_flate"
                                    value={props.field.paddress.phouse_door_flate || ''}
                                    onChange={handleChangePaddress}
                                    size='lg' />
                            </div>
                            <div className="col-md-6 my-2">

                                <MDBInput
                                    inputRef={props.refs.refPstreet}
                                    type='text'
                                    name="pstreet_locality_policestation"
                                    value={props.field.paddress.pstreet_locality_policestation || ''}
                                    onChange={handleChangePaddress}
                                    label="Street/Locality/Police Station"
                                    size='lg' />
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-6 my-2">

                                <MDBInput
                                    inputRef={props.refs.refPlocation}
                                    type='text'
                                    name="plocation_landmark"
                                    value={props.field.paddress.plocation_landmark || ''}
                                    onChange={handleChangePaddress}
                                    label="Location/ Landmark"
                                    size='lg' />

                            </div>
                            <div className="col-md-6 my-2">

                                <MDBInput
                                    inputRef={props.refs.refPpincode}
                                    type='text'
                                    name="p_pincode"
                                    value={props.field.paddress.p_pincode || ''}
                                    onChange={handleChangePaddress}
                                    label="Pincode"
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