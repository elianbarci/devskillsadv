import React from "react";
import { Form, Button } from "react-bootstrap";
import {useState} from "react"
import axios from "axios"
import {login} from "../../lib/api"

export default function LoginForm() {

  const [firstName, setFirstName] = useState("");    
  const [lastName, setLastName] = useState(0); 
  const [ssn, setSsn] = useState(0); 
  const [address, setAddress] = useState(0);

  async function handleFirstNameChange(event) {
    await setFirstName(event.target.value)
  }

  async function handleLastNameChange(event) {
    await setLastName(event.target.value)
  }

  async function handleSsnChange(event) {
    await setSsn(event.target.value)
  }

  async function handleAddressChange(event) {
    await setAddress(event.target.value)
  }

  async function handleSubmit() {

    var token = await login()

    var formdata = new URLSearchParams();
    formdata.append("firstName", "1234");
    formdata.append("lastName", "d48a3c54948b4c4edd9207151ff1c7a3");
    formdata.append("address", "4");
    formdata.append("ssn", "4");

    var res =  await axios({
        url: 'http://localhost:8081/api/members',
        method: 'POST',
        timeout: 16000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        },
        formdata

    }).then(resp => {
        console.log(resp.data);
    }).catch(err => {
        console.error(err);
    });

    console.log(res)

    return res

  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text"  placeholder="Enter email" onChange={handleFirstNameChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Last name" onChange={handleLastNameChange} />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" onChange={handleAddressChange}/>
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>SSN</Form.Label>
        <Form.Control type="text" placeholder="Enter SSN" onChange={handleSsnChange}/>
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
