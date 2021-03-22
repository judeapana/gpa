import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    Collapse,
    Nav, Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
} from "reactstrap";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">UDS GPA CALc </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">HomeBase</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/c-gpa">Accumulative GPA</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/gpa">GPA</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><small>Powered by Anonymous</small></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default NavBar;


