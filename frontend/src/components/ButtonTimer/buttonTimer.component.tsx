type ButtonProps = {
  timer: number;
  action: any;
};

const ButtonTimer = ({ timer, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className="bg-teal-200 hover:bg-teal-400  text-teal-700 rounded px-2 font-bold transition duration-700 ease-in-out"
    >
      {timer} min
    </button>
  );
};
export default ButtonTimer;
