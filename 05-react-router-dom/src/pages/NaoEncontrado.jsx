import { Link } from "react-router";

const NaoEncontrado = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Página Não Encontrada</h2>
          <p className="lead">
            Desculpe, a página que você está procurando não existe.
          </p>
          <Link to="/" className="btn btn-primary mt-3">
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NaoEncontrado;