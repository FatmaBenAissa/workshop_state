import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Profile({p}) {
    return (
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={p.url} />
  <Card.Body>
    <Card.Title>{p.name}</Card.Title>
    <Card.Text>
    {p.age}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Profile
