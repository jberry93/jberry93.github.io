import * as React from 'react';
import './Jumbotron.scss';

export const Jumbotron: React.SFC<{}> = () => (
    <div className="jumbotron">
        <div className="centerize">
            <h2>Jeffrey Berry</h2>
            <div className="social-media">
                <a
                    className="btn"
                    href="https://www.linkedin.com/in/jeffrey-berry-82154a3a/"
                    target="_blank"
                >LinkedIn</a>
                <a
                    className="btn"
                    href="https://github.com/jberry93"
                    target="_blank"
                >Github</a>
            </div>
        </div>
    </div>
);