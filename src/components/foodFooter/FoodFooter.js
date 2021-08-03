const FoodFooter = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <h2> Siguenos en nuestras redes sociales</h2>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <div className="text-center p-3">
    © 2020 Copyright:
    <p className="text-white">Derechos reservados de fogón rojo</p>
  </div>
          </section>
        </div>
      </footer>
    </>
  );
};
export default FoodFooter;
