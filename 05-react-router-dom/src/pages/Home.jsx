const Home = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Home</h2>
          <p className="lead">
            Essa é a página principal. Explore o site para saber mais sobre nós.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Seção 1</h5>
              <p className="card-text">
                Informações interessantes sobre a primeira seção.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Seção 2</h5>
              <p className="card-text">
                Detalhes adicionais sobre a segunda seção.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Seção 3</h5>
              <p className="card-text">
                Mais informações sobre a terceira seção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;