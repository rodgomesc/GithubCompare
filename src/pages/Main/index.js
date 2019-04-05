import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import api from '../../services/api';
import CompareList from '../../Components/CompareList';

export default class Main extends React.Component {
    state = {
        repositoryInput: null,
        repositories: [],
    };

    handleForm = async (e) => {
        e.preventDefault();
        e.target.reset(); // reset form fields after submit
        await api
            .get(`/repos/${this.state.repositoryInput}`)
            .then((response) => {

                this.setState({
                    repositories: [...this.state.repositories, response.data],
                });
            })
            .catch(error => {
                alert(error);
            });
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="logo" />
                <Form onSubmit={this.handleForm}>
                    <input
                        type="text"
                        onChange={(e) =>
                            this.setState({ repositoryInput: e.target.value })
                        }
                        placeholder="usuário/repositório"
                    />
                    <button type="submit">OK</button>
                </Form>

                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
