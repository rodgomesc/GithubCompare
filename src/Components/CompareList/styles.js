import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 45px 0;
    flex-wrap: wrap;
`;

export const Repository = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    background: #fff;
    border-radius: 3px;
    margin: 5px 10px;

    header {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 64px;
        }
        strong {
            font-size: 24px;
            margin-top: 10px;
        }
        small {
            font-size: 14px;
            color: #666;
        }
    }
    ul {
        list-style: none;
        margin-top: 20px;

        li {
            font-weight: bold;
            padding: 8px 20px;

            small {
                font-weight: normal;
                font-size: 12px;
                color: #999;
                font-style: italic;
            }
            &:nth-child(2n-1) {
                background: #f5f5f5;
            }
        }
    }
`;
