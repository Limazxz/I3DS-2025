const Contato = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Contato</h2>
          <p className="lead">
            Esta é a página de Contato. Entre em contato conosco preenchendo o formulário abaixo.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome</label>
              <input type="text" className="form-control" id="name" placeholder="Digite seu nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensagem</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Digite sua mensagem"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;