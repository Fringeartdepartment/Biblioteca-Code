const questions = [
  {
    question: "As obras são físicas ou digitais?",
    answer: "São obras digitais.",
  },
  {
    question: "Onde recebo o acesso?",
    answer: "O acesso é entregue pela Kiwify após a confirmação da compra.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim, as publicações são pensadas para leitura digital.",
  },
  {
    question: "Preciso ter conhecimento prévio?",
    answer: "Não. As obras são criadas para tornar temas profundos mais acessíveis.",
  },
  {
    question: "Posso comprar uma obra avulsa?",
    answer: "Sim. Você pode escolher uma publicação individual ou entrar pelo Acesso Completo ao Acervo.",
  },
  {
    question: "O que inclui a assinatura?",
    answer: "A assinatura reúne o acesso ao Acervo por 12 meses, incluindo as publicações disponíveis no período.",
  },
  {
    question: "A compra é segura?",
    answer: "Sim, o pagamento e a entrega são feitos pela Kiwify.",
  },
];

export function Faq() {
  return (
    <section className="section-shell section-pad" id="faq">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Perguntas frequentes</h2>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
