import Container from "@/components/Container"

export default function Footer() {
  return (
    <footer className="bg-neutral-600 py-4">
      <Container>
        <div className="flex justify-between">
          <small>Todos os direitos reservados.</small>

          <small>
            Criado por <a href="https://www.linkedin.com/in/diegolopeslima/" target="_blank" rel="noopener noreferrer">Diego Lopes Lima</a>
          </small>
        </div>
      </Container>
    </footer>
  );
}
