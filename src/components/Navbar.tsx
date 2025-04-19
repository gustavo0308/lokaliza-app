import React from 'react'; // Importa o React para usar JSX e hooks
import { useNavigate } from 'react-router-dom'; // Importa o hook 'useNavigate' do react-router-dom para navegar entre páginas
//____________________________________________________________________________________________//
import homeIcone from '../assets/home.svg'; // Importa o ícone de "Home" (imagem SVG)
import ofertasIcon from '../assets/ofertas.png'; // Importa o ícone de "Ofertas" (imagem PNG)
import leilaoIcon from '../assets/leilao.png';
import lojaIcon from '../assets/lojas-mapa.png';

const Navbar: React.FC = () => { // Componente funcional Navbar
    const navigate = useNavigate(); // Cria a função 'navigate' para navegar entre as rotas

    return (
        <div style={styles.navbar}> {/* Cria o container da barra de navegação com estilo */}
            {/* Ícone Home */}
            <img
                src={homeIcone} // A imagem do ícone "Home"
                alt="Home" // Texto alternativo para o ícone
                style={styles.icon} // Estilo para o ícone
                onClick={() => navigate('/')} // Quando o ícone for clicado, navega para a página inicial '/'
            />

            {/* Ícone Ofertas */}
            <img
                src={ofertasIcon} // A imagem do ícone "Ofertas"
                alt="Ofertas" // Texto alternativo para o ícone
                style={styles.icon} // Estilo para o ícone
                onClick={() => navigate('/ofertas')} // Quando o ícone for clicado, navega para a página '/ofertas'
            />

            {/* Ícone Leilão */}
            <img
                src={leilaoIcon} // A imagem do ícone "Ofertas"
                alt="Leilao" // Texto alternativo para o ícone
                style={styles.icon} // Estilo para o ícone
                onClick={() => navigate('/leilao')} // Quando o ícone for clicado, navega para a página '/leilao'
            />

            {/* Ícone Lojas */}
            <img
                src={lojaIcon} // A imagem do ícone "Ofertas"
                alt="Lojas" // Texto alternativo para o ícone
                style={styles.icon} // Estilo para o ícone
                onClick={() => navigate('/lojas')} // Quando o ícone for clicado, navega para a página '/lojas'
            />
        </div>
    );
};

// Estilos da barra de navegação
const styles = {
    navbar: { // Estilo do contêiner da barra de navegação
        position: 'fixed' as 'fixed', // Fixa a barra na parte inferior da tela
        bottom: 0, // Fixa a barra na parte inferior
        width: '100%', // A barra ocupa toda a largura da tela
        height: '60px', // Define a altura da barra
        backgroundColor: '#f2f2f2', // Cor de fundo da barra de navegação
        display: 'flex', // Usando flexbox para alinhar os itens dentro da barra
        justifyContent: 'space-around', // Espaça igualmente os ícones de navegação
        alignItems: 'center', // Alinha os ícones no centro da barra
        borderTop: '1px solid #ccc', // Borda superior para dar acabamento
    },
    icon: { // Estilo dos ícones dentro da barra
        width: '30px', // Largura do ícone
        height: '30px', // Altura do ícone
        cursor: 'pointer', // Quando o mouse passa sobre o ícone, ele fica com o cursor de "mãozinha"
    },
};

export default Navbar; // Exporta o componente Navbar para ser utilizado em outros arquivos
