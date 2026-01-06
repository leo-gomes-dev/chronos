import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  useEffect(() => {
    document.title = 'Sobre a Técnica - Chronos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <Container>
        {/* Container de largura máxima centralizado */}
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          <GenericHtml>
            <Heading>A Técnica Pomodoro 🍅</Heading>

            <p>
              Criada por <strong>Francesco Cirillo</strong>, esta metodologia
              divide o trabalho em blocos de foco total (Pomodoros) intercalados
              com pausas estratégicas, otimizando a agilidade mental e evitando
              o burnout.
            </p>

            <h2>Como funciona o método tradicional?</h2>
            <ul>
              <li>
                <strong>1. Escolha uma tarefa:</strong> Foque em uma única
                atividade por vez.
              </li>
              <li>
                <strong>2. Ciclo de 25 minutos:</strong> Trabalhe sem
                interrupções até o timer tocar.
              </li>
              <li>
                <strong>3. Pausa Curta (5 min):</strong> Desconecte-se
                totalmente do trabalho.
              </li>
              <li>
                <strong>4. Pausa Longa (15-30 min):</strong> A cada 4 ciclos,
                faça um descanso maior para recuperar as energias.
              </li>
            </ul>

            <h2>O diferencial do Chronos Pomodoro 🚀</h2>
            <p>
              Nosso app automatiza a gestão dos seus ciclos, permitindo uma
              experiência mais fluida e personalizada:
            </p>

            <h3>⚙️ Customização Total</h3>
            <p>
              Ajuste os tempos de foco e descanso conforme sua necessidade na
              <RouterLink href='/settings/'>
                {' '}
                página de configurações
              </RouterLink>
              .
            </p>

            <h3>🔁 Ciclos Inteligentes</h3>
            <p>
              O sistema organiza sua jornada automaticamente seguindo esta
              lógica:
            </p>
            <ul>
              <li>
                <strong>Ímpares:</strong> Períodos de Trabalho (Foco).
              </li>
              <li>
                <strong>Pares:</strong> Descanso Curto.
              </li>
              <li>
                <strong>8º Ciclo:</strong> Descanso Longo para resetar a
                sequência.
              </li>
            </ul>

            <h3>📊 Monitoramento e Histórico</h3>
            <p>
              Acompanhe seu progresso visualmente através dos indicadores
              coloridos (Trabalho 🟡, Curto 🟢, Longo 🔵) e gerencie sua
              evolução no
              <RouterLink href='/history/'> histórico de atividades</RouterLink>
              .
            </p>

            <h2>Por que escolher o Chronos?</h2>
            <ul>
              <li>✅ Gestão visual de ciclos por cores.</li>
              <li>✅ Histórico automático de tarefas concluídas.</li>
              <li>✅ Flexibilidade total nas configurações de tempo.</li>
              <li>✅ Interface focada em produtividade livre de distrações.</li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p>
                <strong>Pronto para dominar seu tempo?</strong>
              </p>
              <RouterLink href='/'>Voltar ao Timer e Iniciar</RouterLink>
            </div>

            <p style={{ textAlign: 'center', marginTop: '3rem', opacity: 0.7 }}>
              <em>
                "O tempo é o que mais desejamos, mas o que pior usamos." —
                William Penn
              </em>
            </p>
          </GenericHtml>
        </div>
      </Container>
    </MainTemplate>
  );
}
