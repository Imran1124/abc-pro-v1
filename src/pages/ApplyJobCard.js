import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Validation from '../utils/Validation';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import HeadingCard from '../Components/HeadingCard';
import PersonalDetail from '../Components/PersonalDetail';
import AddressDetail from '../Components/AddressDetail';
import Education2 from '../Components/Education2';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';

const ApplyJobCard = () => {
    const [field, setField] = useState({
        name: '',
        email: '',
        mobileno: '',
        dateofbirth: '',
        fathername: '',
        language: [],
        gender: '',
        mariatalstatus: '',
        caddress: {},
        paddress: {},
        education: [],
        skill: []
    });
    const [formError, setFormError] = useState({});
    const [addField, setAddField] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const refName = useRef();
    const refEmail = useRef();
    const refMobile = useRef();
    const refdob = useRef();
    const refFather = useRef();
    const refLanguage = useRef();
    const refGender = useRef();
    const refMariatal = useRef();
    // close personal ref
    const refCstate = useRef();
    const refCcity = useRef();
    const refChouse = useRef();
    const refCstreet = useRef();
    const refClocation = useRef();
    const refCpincode = useRef();

    const refPstate = useRef();
    const refPcity = useRef();
    const refPhouse = useRef();
    const refPstreet = useRef();
    const refPlocation = useRef();
    const refPpincode = useRef();


    const { validate } = Validation();

    useEffect(async () => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            const payment = { amount: 1, currency: 'INR' }
            const res = await axios.post(`http://192.168.198.105:3002/razorpay/paynow`, payment);
            if (res.status !== 200) return;

            // razorpay 
            const options = {
                "key": "rzp_test_Xuqn9m1T5tlvKE", // Enter the Key ID generated from the Dashboard
                "amount": res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": res.data.currency,
                "name": "ABC",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
                "handler": async function (response) {
                    console.log(response.razorpay_signature)
                    console.log({ ...field, education: addField })
                    // const result = await axios.get(`http://localhost:3002/razorpay/test`);
                    // console.log(result);
                },
                "prefill": {
                    "name": field.name,
                    "email": field.email,
                    "contact": field.mobileno
                },
                // "notes": {
                //   "address": "Razorpay Corporate Office"
                // },
                // "theme": {
                //   "color": "#3399cc"
                // }
            };
            const rzp1 = new window.Razorpay(options);

            rzp1.open();

            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
        }
    }, [formError])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const refData = {
            refName, refEmail, refMobile, refdob, refFather, refLanguage, refGender, refMariatal,
            refCstate, refCcity, refChouse, refCstreet, refClocation, refCpincode,
            refPstate, refPcity, refPhouse, refPstreet, refPlocation, refPpincode
        }
        setFormError(validate(field, refData));
        setIsSubmit(true)
    }
    return (
        <div className="container" style={{ marginTop: 80 }}>
            <form onSubmit={handleSubmit}>
                <HeadingCard title="Apply for card">
                    <PersonalDetail
                        field={field}
                        setField={setField}
                        formError={formError}
                        refs={{
                            refName,
                            refEmail,
                            refMobile,
                            refdob,
                            refFather,
                            refLanguage,
                            refGender,
                            refMariatal
                        }}
                    />
                    <AddressDetail
                        field={field}
                        setField={setField}
                        refs={{
                            refCstate, refCcity, refChouse, refCstreet, refClocation, refCpincode,
                            refPstate, refPcity, refPhouse, refPstreet, refPlocation, refPpincode,

                        }}
                    />
                    <Education2
                        addField={addField}
                        setAddField={setAddField}
                        field={field}
                        setField={setField}
                    />

                    <Skills
                        field={field}
                        setField={setField}
                    />

                    <Experience
                        field={field}
                        setField={setField}
                    />

                    <div className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <MDBBtn type="submit" rounded outline>
                            <MDBIcon icon='credit-card' /> Pay now</MDBBtn>
                    </div>
                </HeadingCard>
                <div style={{ marginTop: 50 }} />
            </form>
        </div>
    )
}

export default ApplyJobCard