const Sobre = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Sobre</h2>
          <p className="lead">
            Esta é a página Sobre. Aqui você encontra informações sobre o nosso site e propósito.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nossa Missão</h5>
              <p className="card-text">
                Trabalhamos para oferecer a melhor experiência aos nossos usuários.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nossa Visão</h5>
              <p className="card-text">
                Ser referência em qualidade e inovação no mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;