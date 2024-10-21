
export default Rezulatat;


const Rezulatat = (props) => {
    return (
        <div>
            {props.bmi ? (
                <div>
                    <h2>Vaš BMI je: {props.bmi}</h2>
                    <p>{props.bmiKategorija}</p>
                </div>
            ) :
                (
                    <p>Molimo vas, unesite svoje podatke kako bi izračunali vaš BMI.</p>
                )}
        </div>
    );
};