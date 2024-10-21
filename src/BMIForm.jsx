import { createSignal } from "solid-js";

const BMIForm = (props) => {
    const [visina, setVisina] = createSignal("");
    const [tezina, setTezina] = createSignal("");
    const [godine, setGodine] = createSignal("");
    const [spol, setSpol] = createSignal("musko");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ visina: visina(), tezina: tezina(), godine: godine(), spol: spol() });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Visina(cm): </label>
                <input type="number" value={visina()} onInput={(e) => setVisina(e.target.value)} required />
            </div>
            <div>
                <label>Težina(kg): </label>
                <input type="number" value={tezina()} onInput={(e) => setTezina(e.target.value)} required />
            </div>
            <div>
                <label>Godine: </label>
                <input type="number" value={godine()} onInput={(e) => setGodine(e.target.value)} required />
            </div>
            <div>
                <label>Spol(muško/žensko): </label>
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
