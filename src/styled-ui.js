import styled from 'styled-components';

const StApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    max-height: content;
    background-color: #fff;
`;

const StHeader = styled.header`
    background-color: #fff;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #4285f5;
    margin-bottom: 20px;
    border-bottom: 1px dotted #4285f5;
    border-left: 1px solid #4285f5;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const StTitle = styled.h1`
    flex-grow: 1;
    text-align: left;
    padding-left: 20px;
`;


export { 
  StApp,
  StHeader,
  StTitle,
}
