import { createSignal } from "solid-js";
import BMIForm from "./BMIForm";
import Rezultat from "./Rezultat";

const BMI_Kalkulator = () => {
    const [bmi, setBmi] = createSignal(null);
    const [bmiKategorija, setBmiKategorija] = createSignal("");

    const izracunajBMI = ({ visina, tezina, godine, spol }) => {
        const visinaUMetrima = visina / 100;
        let bmiVrijednost = tezina / (visinaUMetrima * visinaUMetrima);


        if (spol === "zensko") {
            bmiVrijednost *= 0.95;
        }


        if (godine < 18) {
            bmiVrijednost *= 0.9;
        } else if (godine > 60) {
            bmiVrijednost *= 1.1;
        }

        setBmi(bmiVrijednost.toFixed(2));

        // Kategorije
        if (bmiVrijednost < 18.5) setBmiKategorija("Pothranjenost");
        else if (bmiVrijednost >= 18.5 && bmiVrijednost < 24.9) setBmiKategorija("Normalna težina");
        else if (bmiVrijednost >= 25 && bmiVrijednost < 29.9) setBmiKategorija("Prekomjerna težina");
        else setBmiKategorija("Pretilost");
    };

    return (
        <div>
            <BMIForm onSubmit={izracunajBMI} />
            <Rezultat bmi={bmi()} bmiKategorija={bmiKategorija()} />
        </div>
    );
};

export default BMI_Kalkulator;
