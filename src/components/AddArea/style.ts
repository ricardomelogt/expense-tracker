import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow:0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const Btn = styled.div`
    background-color: #4d5c6b;
    padding: 10px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    flex: 1;
    margin:0 10px;
`;

export const InputDate = styled.input.attrs(props => ({
    type: "date",
  }))`
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    flex: 1;
    margin:0 10px;
`;

export const SelectCategory = styled.select`
   padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    flex: 1;
    margin:0 10px;
`;

export const InputTitle = styled.input.attrs(props => ({
    type: "text",
  }))`
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    flex: 1;
    margin:0 10px;
`;

export const InputValue = styled.input.attrs(props => ({
    type: "number",
  }))`
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    flex: 1;
    margin:0 10px;
`;