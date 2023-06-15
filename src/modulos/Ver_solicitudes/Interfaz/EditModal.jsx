import { Form, Button} from "react-bootstrap";

export default function EditModal({ Req_Reservas }) {

    console.log("moda",Req_Reservas)
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          required
          disabled
        />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Email *" name="email" required />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          name="address"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Phone" name="phone" />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Confirmar
      </Button>
    </Form>
  );
}
