import React from 'react'

const Validation = () => {
    const errors = {}
    const validate = (field, refData) => {
        if (!field.name) {
            errors.name = "Enter full name"
            refData.refName.current.focus();
        }
        else if (!field.email) {
            errors.email = "Enter email"
            refData.refEmail.current.focus();
        }
        else if (!field.mobileno) {
            errors.mobileno = "Enter Mobile"
            refData.refMobile.current.focus();
        }
        else if (!field.dateofbirth) {
            errors.dateofbirth = "select DOB"
            refData.refdob.current.focus();
        }
        else if (!field.fathername) {
            errors.fathername = "Enter father name"
            refData.refFather.current.focus();
        }
        else if (field.language.length <= 0) {
            errors.language = "select language"
            refData.refLanguage.current.focus();
        }
        else if (!field.gender) {
            errors.gender = "chose gender"
            refData.refGender.current.focus();
        }
        else if (!field.mariatalstatus) {
            errors.mariatalstatus = "chose m Status"
            refData.refMariatal.current.focus();
        }

        // corespondence Address////////
        else if (!field.caddress.cstate) {
            errors.caddress = 'Please select state'
            refData.refCstate.current.focus();
        }
        else if (!field.caddress.ccity) {
            errors.ccity = 'Please select state'
            refData.refCcity.current.focus();
        }
        else if (!field.caddress.chouse_door_flate) {
            errors.chosue = 'Please select state'
            refData.refChouse.current.focus();
        }
        else if (!field.caddress.cstreet_locality_policestation) {
            errors.cstreet = 'Please select state'
            refData.refCstreet.current.focus();
        }
        else if (!field.caddress.clocation_landmark) {
            errors.clocation = 'Please select state'
            refData.refClocation.current.focus();
        }
        else if (!field.caddress.cpincode) {
            errors.cpincode = 'Please select state'
            refData.refCpincode.current.focus();
        }
        // Close corespondence Address////////

        // parmenent address validation
        else if (!field.paddress.pstate) {
            errors.paddress = 'Please select state'
            refData.refPstate.current.focus();
        }
        else if (!field.paddress.pcity) {
            errors.pcity = 'Please select state'
            refData.refPcity.current.focus();
        }
        else if (!field.paddress.phouse_door_flate) {
            errors.phosue = 'Please select state'
            refData.refPhouse.current.focus();
        }
        else if (!field.paddress.pstreet_locality_policestation) {
            errors.pstreet = 'Please select state'
            refData.refPstreet.current.focus();
        }
        else if (!field.paddress.plocation_landmark) {
            errors.plocation = 'Please select state'
            refData.refPlocation.current.focus();
        }
        else if (!field.paddress.p_pincode) {
            errors.ppincode = 'Please select state'
            refData.refPpincode.current.focus();
        }
        // close parmanent address/////

        // education 
        else if (field.education.length <= 0) {
            errors.education = "Add Education"
            alert(errors.education)
        }
        else if (field.education.length > 0) {
            field.education.map((e) => {
                if (!e.education || !e.board || !e.institute || !e.percentage || !e.year) {
                    errors.elist = "add"
                    alert(errors.elist)
                }
            })
        }
        // close education

        return errors
    }
    return {
        validate
    }
}

export default Validation