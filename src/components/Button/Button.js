import './Button.css';

const Button = ({ classname, value, onClick }) => {
    return (
        <button name={value} className={classname} onClick={
            e => {
                e.preventDefault();
                onClick(value);
            }
        }
        >
            {value}
        </button>
    );
}

export default Button;