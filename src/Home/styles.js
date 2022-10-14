import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
export const ContainerSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
 h1{
    text-align: center;
    width: 100vw;
    font-size:85px;
    color: #000;
    animation: flipTitle 3s;
 }
 @keyframes flipTitle {
    from {
        transform: rotateX(90deg);
    }
    to{
        transform: rotateX(0deg);
    }
 }
    @media (max-width: 620px){
    h1{
    font-size:60px;
 }
    }
    @media (max-width: 300px){
    h1{
    font-size:30px;
 }
    }
`

export const Search = styled.div`
    display: flex;
    
    input{
        background-color:rgba(255, 255, 255, 0.3);
        padding: 15px;
        margin: 34px 0;
        display: flex;
        border-radius: 8px;
        box-shadow: 1px 3px 8px #000;
        font-size:20px;
 }
    button{
        background: none;
        border: none;
        margin: 50px 0 0 20px;
        max-height:10px;
        cursor: pointer;
        :hover{
            transform: scale(1.3)
        }
    }
    @media (max-width: 620px){
        input{
            font-size:10px;
        }
   
    }
`


export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    width: 500px;

    h2{
        margin: 16px 0;
        font-size: 39px;
    }

    @media (max-width: 620px) {
        width: 300px;
    }
    @media (max-width: 300px) {
        width: 200px;
    }
`
