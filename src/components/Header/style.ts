import styled from 'styled-components'

export const Container = styled.header`
background: var(--blue);
`
export const Content = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

max-width: 1120px;
margin: 0 auto;

padding: 2rem 1rem 12rem;

p {
    
    color: white;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;

    font-size: 1.5rem;
}
button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-ligth);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.9);
    }
}
`