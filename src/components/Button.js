import styled from 'styled-components'

export const ButtonContainer = styled.button `
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
color: var(--mainWhite);
border-radius: 0.8rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: #39e52e;
    color: var(--mainGreen);
}
&:focus {
    outline: none;
}
`;
export const DetailButtons = styled.button `
    text-transform: capitalize;
font-size: 1.4rem;
background: ${prent => prent.cart? '#67ff00':'#42fff2'};
border: 0.05rem solid ;
border-color:${props => props.cart ? '#67ff00':'var(--mainGreen)'};
color: 'var(--mainGreen)';
border-radius: 0.8rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: transparent;
    color: var(--mainGreen);
}
&:focus {
    outline: none;
}
`