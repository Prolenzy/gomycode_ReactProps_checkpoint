import React from "react";
import { Card } from 'react-bootstrap';

const styles = {
    card: {
        width: '18rem',
        margin: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        transition: 'transform 0.3s ease-in-out',
        ':hover': {
            transform: 'scale(1.05)'
        }
    },
    image: {
        width: '100%',              // Set image width to 100% of its container
        height: '200px',           // Set a fixed height for the image
        objectFit: 'cover',        // Cover the entire container, maintaining aspect ratio
        borderRadius: '8px 8px 0 0' // Apply rounded corners to the top of the image
    },
    content: {
        padding: '1rem'
    },
    key: {
        fontWeight: 'bold'  // Apply bold styling to the keys         
    }
}
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={styles.card}>
            <Card.Img variant="top" src={imageUrl} style={styles.image} />
            <Card.Body style={styles.content}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <span style={styles.key}>Team:</span> {team}<br />
                <span style={styles.key}>Nationality:</span> {nationality}<br />
                <span style={styles.key}>Jersey Number:</span> {jerseyNumber}<br />
                <span style={styles.key}>Age:</span> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Unknown",
    team: "Unassigned",
    nationality: "Unknown",
    jerseyNumber: "NA",
    age: "NA",
    imageUrl: "./default.jpg"
};

export default Player;