const Contador = () => {
  const [contador, setContador] = React.useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1 className={contador >= 0 ? "mayor" : "menor"}>
        Contador: {contador}
      </h1>
      <hr />

      <button onClick={sumar}>Aumentar</button>
      <button onClick={restar}>Disminuir</button>
    </div>
  );
};
