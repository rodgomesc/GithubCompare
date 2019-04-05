import React from 'react';
import { Container, Repository } from './styles';

const CompareList = () => (
    <Container>
        <Repository>
            <header>
                <img
                    src="https://avatars3.githubusercontent.com/u/69631?v=4"
                    alt="facebook logo"
                />
                <strong>React</strong>
                <small>Facebook</small>
            </header>
            <ul>
                <li>
                    95,019 <small>Stars</small>
                </li>
                <li>
                    95,019 <small>Forks</small>
                </li>
                <li>
                    95,019 <small>Issues</small>
                </li>
                <li>
                    3 days ago <small>Last Commits</small>
                </li>
                <li>
                    95,019 <small>Stars</small>
                </li>
            </ul>
        </Repository>
    </Container>
);

export default CompareList;
