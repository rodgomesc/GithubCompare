import React from 'react';
import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
    <Container>
        {repositories.map(repository => (
            <Repository key={repository.id}>
                <header>
                    <img
                        src={repository.owner.avatar_url}
                        alt="facebook logo"
                    />
                    <strong>{repository.name}</strong>
                    <small>{repository.owner.login}</small>
                </header>
                <ul>
                    <li>
                        {repository.stargazers_count} <small>Stars</small>
                    </li>
                    <li>
                        {repository.forks_count} <small>Forks</small>
                    </li>
                    <li>
                        {repository.open_issues_count} <small>Issues</small>
                    </li>
                    <li>
                        {repository.updated_at}<small>Last Commits</small>
                    </li>
                    <li>
                        {repository.stargazers_count}<small>Stars</small>
                    </li>
                </ul>
            </Repository>
        ))}
    </Container>
);

export default CompareList;
