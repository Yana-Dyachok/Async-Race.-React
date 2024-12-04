import styles from './button.module.scss';

type ButtonProps = {
  children: string;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ children, onClick, to, disabled }: ButtonProps) => {
  const handleClick = () => {
    if (to) {
      window.location.href = to;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
