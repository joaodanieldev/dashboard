import login from '../../assets/login-bg-2.svg';
import Charts from '../charts/Charts';
import './Main.css';

const Main = () =>{
  return (
    <main>
      <div className="main__container">
        <div className="main_title">
          {/* <img src={login} alt="Login" /> */}
          <div className="main__greeting">
            <h1>Dashboard</h1>
            {/* <p>Bem vindo ao seu painel</p> */}
          </div>
        </div>
        
        <div className="main_cards">
          <div className="card">
            <i className="far fa-file-alt fa-2x text-blue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Numero de pedido</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-money-bill-alt fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$ 2.000</span>
            </div>
          </div>
          
          <div className="card">
            <i className="fa fa-archive fa-2x text-yellon"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de produtos</p>
              <span className="font-bold text-title">670</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-bars fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$ 2.000</span>
            </div>
          </div>    
        </div>
            
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Fortaleza, Ceara, BR</p>
              </div>
              <i className="fa fa-dollar-sign"></i>
            </div>
            <Charts />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Fortaleza, Ceara, BR</p>
              </div>
              <i className="fa fa-chart-area"></i>
            </div>
            
            <div className="charts__right__cards">
              <div className="card1">
                <h1>Lucro</h1>
                <p>R$2500</p>
              </div>

              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$7000,00</p>
              </div>

              <div className="card3">
                <h1>Custos de hospedagem</h1>
                <p>R$200,00</p>
              </div>

              <div className="card4">
                <h1>Bancos de dados</h1>
                <p>R$180,00</p>
              </div>
            </div>
          </div>  
        </div>        
      </div>
    </main>
  );
};

export default Main;