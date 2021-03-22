import React, {useState,} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
    Button, ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Col, Container,
    Jumbotron, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Row
} from "reactstrap";
import {Formik, Form, Field, FieldArray, ErrorMessage} from "formik";
import * as Yup from "yup"
import {classDeterminer} from "../utils/classDeterminer";

const AccumulativeGpa = () => {
    const [modal, setModal] = useState(false);
    const validateSchema = Yup.object({
        trimesterInfo: Yup.array().of(
            Yup.object({
                tgp: Yup.number().required("TGP is required").min(0, 'TGP is minimum = 0').max(100, 'TGP maximum = 100'),
                cu: Yup.number().required("CU is required").min(0, 'CU is minimum = 0').max(100, 'CU maximum  = 100')
            })
        )
    })
    const [ResultModal, ResultSetModal] = useState(false);
    const [agpa, setAgpa] = useState(0);
    const initialValue = {
        trimesterInfo: [{tgp: 0, cu: 0}]
    }
    const toggle = () => setModal(!modal);
    const resultSetToggle = () => ResultSetModal(!ResultModal);
    const onSubmit = (values) => {
        let totalTgp = 0;
        let totalCu = 0;
        values.trimesterInfo.map(({tgp, cu}) => {
            totalTgp += tgp
            totalCu += cu
        })
        try {
            setAgpa(totalTgp / totalCu);
            resultSetToggle()
            console.log(agpa)
        } catch (e) {
            alert("An Error Occurred!!")
        }
    }
    return (
        <React.Fragment>
            <NavBar/>
            <Jumbotron>
                <h1 className="display-3">Accumulative GPA</h1>
                <p className="lead">It your choice to know your status.</p><br/>
                <hr className="my-2"/>
                <p>Calculate your Accumulative GPA now!! And know what class you are completing with? :-) </p>
                <Button color="primary" onClick={toggle}>Learn More</Button>
            </Jumbotron>
            <Container>
                <Card>
                    <CardHeader>Enter The Following Trimester Information</CardHeader>
                    <CardBody>
                        <p className="text-sm-center text-muted">Please enter your Total Grade Point [TGP] and its
                            corresponding Credit Unit <small>(credit Hours)</small></p>
                        <Formik validationSchema={validateSchema} initialValues={initialValue}
                                onSubmit={onSubmit}>
                            <Form>
                                <Row>
                                    <FieldArray name="trimesterInfo">
                                        {
                                            (fieldArrayProps) => {
                                                const {push, remove, form} = fieldArrayProps;
                                                const {values} = form;
                                                const {trimesterInfo} = values;
                                                return <>
                                                    {
                                                        trimesterInfo.map((trimester, index) => (
                                                            <React.Fragment key={index}>
                                                                <Col md={4}>
                                                                    <Label
                                                                        for="f">Trimester <b>{index}</b> [TGP]</Label>
                                                                    <Field type="number" className="form-control"
                                                                           name={`trimesterInfo[${index}].tgp`}/>
                                                                    <ErrorMessage render={msg => <div
                                                                        className="text-danger">{msg}</div>}
                                                                                  name={`trimesterInfo[${index}].tgp`}/>
                                                                </Col>
                                                                <Col md={4}>
                                                                    <Label
                                                                        for="f">Trimester <b>{index}</b> [CU-Credit
                                                                        Unit]</Label>
                                                                    <Field type="number" className="form-control"
                                                                           name={`trimesterInfo[${index}].cu`}/>
                                                                    <ErrorMessage
                                                                        name={`trimesterInfo[${index}].cu`}
                                                                        render={msg => <div
                                                                            className="text-danger">{msg}</div>}/>

                                                                </Col>
                                                                <Col md={4}>
                                                                    <ButtonGroup className="pt-4">
                                                                        {
                                                                            index > 0 && (
                                                                                <Button color="danger"
                                                                                        onClick={() => remove(index)}>-</Button>
                                                                            )
                                                                        }
                                                                        <Button color="primary"
                                                                                onClick={() => push({
                                                                                    tgp: 0,
                                                                                    cu: 0
                                                                                })}>+</Button>

                                                                    </ButtonGroup>
                                                                </Col>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </>
                                            }
                                        }
                                    </FieldArray>
                                </Row>
                                <div className="mt-5">
                                    <Button type="submit" color="info">Calculate</Button>
                                    <Button type="reset" color="danger">Reset</Button>

                                </div>

                            </Form>
                        </Formik>
                    </CardBody>
                </Card>
            </Container>

            <Footer/>
            <Modal isOpen={modal} toggle={toggle} className="Modal">
                <ModalHeader toggle={toggle} className="text-muted">Calculating ACGPA</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={ResultModal} toggle={resultSetToggle} className="ResultSetModal">
                <ModalHeader toggle={resultSetToggle} className="text-muted">Result</ModalHeader>
                <ModalBody>

                    <h5> Your CGPA is {agpa.toFixed(4)}</h5>
                    <h5>You are {classDeterminer(agpa.toFixed(4))}</h5>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={resultSetToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}
export default AccumulativeGpa;
