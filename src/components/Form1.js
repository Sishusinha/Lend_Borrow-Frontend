import './Form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <>
    <h5>Create Loan: </h5>
    <Form>
      <Form.Group className="mb-3 c1" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter Amount" />
      </Form.Group>

      <Form.Group className="mb-3 c1" controlId="formBasicEmail">
        <Form.Label>Interest</Form.Label>
        <Form.Control type="text" placeholder="Enter Rate" />
      </Form.Group>

      <Form.Group className="mb-3 c1" controlId="formBasicEmail">
        <Form.Label>Duration</Form.Label>
        <Form.Control type="text" placeholder="Enter Months" />
      </Form.Group>

      <div className='button'>
      <Button variant="primary" type="submit">
        Create
      </Button>
      </div>  
      <br></br>
    </Form>

    <h5>Fund Loan: </h5>
    <Form>
      <Form.Group className="mb-3 c1" controlId="formBasicEmail">
        <Form.Label>Loan ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" />
      </Form.Group>

      <Form.Group className="mb-3 c1" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter Amount" />
      </Form.Group>

      <div className='button'>
      <Button variant="primary" type="submit">
        Fund
      </Button>
      </div>  
      <br></br>
    </Form>

    <h5>RePay Loan: </h5>
    <Form>
      <Form.Group className="mb-3 c1" controlId="formBasicEmail">
        <Form.Label>Loan ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" />
      </Form.Group>

      <div className='button'>
      <Button variant="primary" type="submit">
        RePay
      </Button>
      </div>  
      <br></br>
    </Form>

    <h5>Get Loan Info: </h5>
    <Form>
      <Form.Group className="mb-3 c1" controlId="formBasicEmail">
        <Form.Label>Loan ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" />
      </Form.Group>

      <div className='button'>
      <Button variant="primary" type="submit">
        Search
      </Button>
      </div>  
    </Form>
    </>
    
  );
}

export default BasicExample;