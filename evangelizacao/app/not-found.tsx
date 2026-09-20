import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container error-page">
      <h1>404</h1>
      <p>A página que você procura não existe ou foi movida.</p>
      <Link href="/" className="button">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
