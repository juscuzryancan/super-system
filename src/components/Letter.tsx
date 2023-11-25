import clsx from 'clsx';

const Letter = ({ letter, letterPosition, cursorPosition }: any) => {
  return (
    <span className={clsx(cursorPosition <= letterPosition && 'text-red-400')}>
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  );
}

export default Letter;
