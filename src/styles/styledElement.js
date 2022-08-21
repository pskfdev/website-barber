import { Link } from "react-router-dom";
import styled from 'styled-components';


const Btn = styled(Link)`
    width: 20%;
    height: auto;
    padding: 12px 45px;
    font-size: 13px;
    background-color: ${props => (props.primary ? "rgba(34,34,34, .9)" : "rgba(255,255,255, .8)")};
    color: ${props => (props.primary ? "#fff" : "#111")};
    transition: 0.4s ease-in-out;
    border-radius: 2px;
    letter-spacing: 2px;
    &:hover {
        background-color: ${props => (props.primary ? "gray" : "#fff")};
        transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 480px) {
        padding: 12px 3px;
    }
`;

const Sectionhero = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${require("../assets/bg2.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;
    letter-spacing: 5px;
    display: flex;
    text-align: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div`
    width: ${props => (props.primary ? "60%" : "40%")};
    text-align: center;
    margin: 150px auto;
    color: #777;
    h2 {
        letter-spacing: ${props => (props.primary ? "10px" : "")};
    }

    @media screen and (max-width: 480px) {
        width: 80%;
    }
`
const Wrap = styled.div`
    width: 100%;
    text-align: start;
`

const StyledTable = styled.table`
    width: 95%;
    border-collapse: collapse;
    td {
        padding: 10px;
        border-bottom: 2px solid #ddd;
        border-top: 2px solid #ddd;
    }
    tr {
        :hover {
            background-color: #ddd;
        }
    }
`

export { Btn, Sectionhero, Wrapper, Container, Wrap, StyledTable }