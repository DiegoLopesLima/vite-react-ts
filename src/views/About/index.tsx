import Container from "@/components/Container";

export default function About() {
  return (
    <section className="py-4">
      <Container>
        <h2 className="text-2xl font-semibold mb-4">Sobre</h2>

        <p>Este é um projeto de teste criado por <a href="https://www.linkedin.com/in/diegolopeslima/" target="_blank" rel="noopener noreferrer">Diego Lopes Lima</a>, com intuito de realizar uma implementação da API GPT da Open AI.</p>

        <p>O projeto utiliza React, Vite, TypeScript, ReactHooks, ContextAPI, React Router DOM e React Hook Form.</p>
      </Container>
    </section>
  );
}
