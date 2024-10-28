import { createSignal } from "solid-js";

const BMIForm = (props) => {
    const [visina, setVisina] = createSignal("");
    const [tezina, setTezina] = createSignal("");
    const [godine, setGodine] = createSignal("");
    const [spol, setSpol] = createSignal("musko");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacija unosa
        if (visina() <= 0 || tezina() <= 0 || godine() <= 0) {
            alert("Visina, težina i godine moraju biti pozitivni brojevi.");
            return;
        }

        // prosljeđuje podatke nadređenoj komponenti
        props.onSubmit({ visina: parseFloat(visina()), tezina: parseFloat(tezina()), godine: parseInt(godine()), spol: spol() });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Visina(cm): </label>
                <input step="0.01" type="number" value={visina()} onInput={(e) => setVisina(e.target.value)} required min="0" />
            </div>
            <div>
                <label>Težina(kg): </label>
                <input step="0.01" type="number" value={tezina()} onInput={(e) => setTezina(e.target.value)} required min="0" />
            </div>
            <div>
                <label>Godine: </label>
                <input type="number" value={godine()} onInput={(e) => setGodine(e.target.value)} required min="0" />
            </div>
            <div>
                <label>Spol: </label>
                <select value={spol()} onInput={(e) => setSpol(e.target.value)}>
                    <option value="musko">Muško</option>
                    <option value="zensko">Žensko</option>
                </select>
            </div>
            <button type="submit">Izračunaj BMI</button>
        </form>
    );
};

export default BMIForm;
