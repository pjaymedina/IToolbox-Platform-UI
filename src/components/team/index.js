import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import nico from "../../assets/images//teams/t-nico.png";

const teams = [
    {
        image: nico,
        name: "Nicole John Mortel",
        position: "Founder",
        fb: "",
        github: "",
        linkedin: "",
    }
];

function Team(props) {
    return (
        <Container id="team">
            <Row className="justify-content-center align-items-center text-center">
                <p className="textGray">Team Member</p>
                <h2 className="textBlack fontTitle">We Have </h2>
                <h2 className="textBlack fontTitle mb-4">
                    <span className="textPrimary"> Some Awesome </span>
                    People
                </h2>
                {teams.map(
                    (
                        { image, name, position, fb, github, linkedin },
                        index
                    ) => {
                        return (
                            <Col key={index} className="col-md-3 col-9">
                                <div className="text-center box my-3">
                                    <Image
                                        src={nico}
                                        alt="Nico"
                                        fluid
                                        className="margin"
                                    />
                                    <h5 className="textBlack">{name}</h5>
                                    <p className="px-2 textGray pb-3">
                                        {position}
                                    </p>
                                </div>
                            </Col>
                        );
                    }
                )}
            </Row>
        </Container>
    );
}

export default Team;
