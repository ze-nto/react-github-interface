import styled  from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 2em;
    margin-bottom: 20px;

    input{
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        padding: 4px;
        margin-right: 8px;
    }

    button{
        background-color: #ccc;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 5px;

    &:hover{
        background-color: #888;
        color: white
    }
    }
`;
