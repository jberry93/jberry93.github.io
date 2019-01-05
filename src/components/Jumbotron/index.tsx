import * as React from 'react';
import './Jumbotron.scss';

export const Jumbotron: React.SFC<{}> = () => (
    <div className="jumbotron">
        <div className="centerize">
            <h2 className="jumbotron-title">Jeffrey Berry</h2>
            <div className="social-media">
                <a
                    className="btn"
                    href="https://www.linkedin.com/in/jeffrey-berry-82154a3a/"
                    target="_blank"
                ><i className="fab fa-linkedin"/></a>
                <a
                    className="btn"
                    href="https://github.com/jberry93"
                    target="_blank"
                ><i className="fab fa-github-square"/></a>
            </div>
        </div>
    </div>
);