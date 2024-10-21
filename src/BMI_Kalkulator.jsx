import { createSignal } from "solid-js";




export default BMI_Kalkulator;

const BMI_Kalkulator = () => {
    const [bmi, setBmi] = createSignal(null);
    const [bmiKategorija, setBmiKategorija] = createSignal("");

    const izracunajBMI = ({ visina, tezina, godine, spol }) => {
        const visinaUMetrima = visina / 100;
        let bmiVrijednost = tezina / (visinaUMetrima * visinaUMetrima);

        if(spol ==="zensko") {
            bmiVrijednost *= 0.95;
        }
        
        
        
        setBmi(bmiVrijednost.toFixed(2));

        if (bmiVrijednost < 18.5) setBmiKategorija("Pothranjenost");
        else if (bmiVrijednost >= 18.5 && bmiVrijednost < 24.9) setBmiKategorija("Normalna težina");
        else if (bmiVrijednost >= 25 && bmiVrijednost < 29.9) setBmiKategorija("Prekomjerna težina");
        else setBmiKategorija("Pretilo");
    };

    return(
        <div>
            <BMIForm onSubmit={izracunajBMI}/>
            <Rezultat bmi={bmi()} bmiKategorija = {bmiKategorija}/>
        </div>
    );
};