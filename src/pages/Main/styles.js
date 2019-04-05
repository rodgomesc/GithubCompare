import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0px;
`;

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #fff;
        border: 0;
        font-size: 18px;
        color: #444;
        border-radius: 3px;
        outline: none;
    }

    button {
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b8;
        color: #fff;
        border: none;
        font-weight: bold;
        border-radius: 3px;
        &:hover {
            background: #56cf9d;
        }
    }
`;
