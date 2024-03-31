import { Alert } from "react-bootstrap";
import "../components/messages/FoF.css"; // Import custom CSS for styling

/**
 * FoF()
 * ====================================
 * Renders a styled 404 error message.
 * 
 * @returns {ReactComponentElement} 404 error message component
 */
export default function FoF() {
    return (
      <div className="fof-container">
        <Alert variant="danger" className="fof-alert">
          <h1 className="fof-heading">404 Error: Page Not Found</h1>
          <p className="fof-text">Sorry, the page you are looking for does not exist.</p>
        </Alert>
      </div>
    );
}
