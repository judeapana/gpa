import React,{ useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {Button, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Gpa = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <React.Fragment>
            <NavBar/>
            <Jumbotron>
                <h1 className="display-3">GPA</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-2"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                    container.</p>
                <Button color="primary" onClick={toggle}>Learn More</Button>
            </Jumbotron>
            <Footer/>
            <Modal isOpen={modal} toggle={toggle} className="Modal">
                <ModalHeader toggle={toggle} className="text-muted">Calculating GPA</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Footer/>
        </React.Fragment>
    )
}
export default Gpa;
