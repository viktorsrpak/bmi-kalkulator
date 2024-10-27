import logo from './logo.svg';
import styles from './App.module.css';
import BMI_Kalkulator from './BMI_Kalkulator';

function App() {
  return (
    <div className={styles.container}>
      <h1>BMI Kalkulator</h1>
      <BMI_Kalkulator />
    </div>
  );
}

export default App;
