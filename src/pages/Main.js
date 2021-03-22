import NavBar from "../components/NavBar";
import React from "react";
import Footer from "../components/Footer";
import {Button, ButtonGroup, Jumbotron} from "reactstrap";
import {useNavigate} from "react-router";

const Main = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <NavBar/>
            <Jumbotron>
                <h1 className="display-3">UDS CGPA N GPA Calculator</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-2"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                    container.</p>
                <ButtonGroup>
                    <Button color="info" onClick={() => navigate('/c-gpa')}>Calculate Your CGPA</Button>
                    <Button color="info" onClick={() => navigate('/gpa')}>Calculate Your GPA</Button>
                </ButtonGroup>
            </Jumbotron>
            <Footer/>
        </React.Fragment>
    )
}
export default Main;
