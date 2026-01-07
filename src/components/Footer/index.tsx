import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='https://mpago.la/1kz2Yay' target='_blank'>
        <h3 className={styles.titleApoio}>Gostou do projeto?</h3>
        <p>Se este trabalho te ajudou, considere me pagar um café!</p>
      </RouterLink>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href='https://leogomesdev.com' target='_blank' rel='noopener'>
        Fluxo &copy; {new Date().getFullYear()} - By Leo Gomes Developer
      </RouterLink>
    </footer>
  );
}
