import logoImg from '../../assets/LOGO.png'
import { Container, Content } from './style'


interface HeaderProps {
    onOpenNewTransactionModal : () => void
}


    export function Header({onOpenNewTransactionModal} : HeaderProps )  {
    
    return (
        <Container>
        <Content>
        <p><img src={logoImg} alt="tdfinance" />TD FINANCE</p>
        <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
        </button>
       
        </Content>
        </Container>
            
    )
}