import { Container } from "react-bootstrap";

function Footer(){
    let cuttentYear = new Date().getFullYear()
    return(
        <footer>
            <Container>
                <p className="text-center py-3"> Broadway &copy; {cuttentYear}</p>
            </Container>
        </footer>
    )
}

export default Footer;

