import React from 'react';
import Feature from '../common/Feature.js';
import features from '../features.json';
import arrow from '../images/nav/arrow.png';
import { Row, Col } from '../grid';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <Row className="landing">
                    <Col xsWidth >
                        <div className="intro">
                            <h1>Jon Corbett</h1>
                            <p>Boston based designer, developer, and dog lover</p>
                        </div>
                        <div className="actionCall">
                            <p>Scroll to see featured work</p>
                            <img className="arrow" src={arrow} alt="arrow"/>
                        </div>
                    </Col>
                </Row>
                <Feature data={features.la}/>
                <Feature data={features.ed}/>
                <Feature data={features.scout}/>        
            </div>
        )
    }
}

export default HomePage;
