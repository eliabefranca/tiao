import { Link } from 'react-router-dom';

export default function FourOFour() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>404</h1>
      <Link to="/">
        <button className="blue">Voltar para a Home</button>
      </Link>
    </div>
  );
}
