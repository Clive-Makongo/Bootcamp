import { useState } from 'react';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`username is ${formData.username}`);
    console.log(`password is ${formData.password}`);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="mb-3">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Col>
          </Row>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {formData.username}!</h3>
          <p>
            I probably shouldn't tell you this, but your password is{' '}
            {formData.password}!
          </p>
        </Container>
      </form>
    </div>
  );
}

export default Signup;
