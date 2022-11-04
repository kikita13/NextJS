export const Calc = ({ styles, value, setValue, result, clear, evalFun }) => {

  return (
    <div className={styles.content}>
      <div className={styles.buttons}>
        <input onChange={e => {setValue(e.target.value)}} name='input' type='text' className={styles.button} id={styles.value} value={value}/>
        <span onClick={()=>{clear()}} className={styles.button} id={styles.clear}>Clear</span>
        <span onClick={()=>{result('/')}} className={styles.button}>/</span>
        <span onClick={()=>{result('*')}} className={styles.button}>*</span>
        <span onClick={()=>{result('7')}} className={styles.button}>7</span>
        <span onClick={()=>{result('8')}} className={styles.button}>8</span>
        <span onClick={()=>{result('9')}} className={styles.button}>9</span>
        <span onClick={()=>{result('-')}} className={styles.button}>-</span>
        <span onClick={()=>{result('4')}} className={styles.button}>4</span>
        <span onClick={()=>{result('5')}} className={styles.button}>5</span>
        <span onClick={()=>{result('6')}} className={styles.button}>6</span>
        <span onClick={()=>{result('+')}} className={styles.button} id={styles.plus}>+</span>
        <span onClick={()=>{result('1')}} className={styles.button}>1</span>
        <span onClick={()=>{result('2')}} className={styles.button}>2</span>
        <span onClick={()=>{result('3')}} className={styles.button}>3</span>
        <span onClick={()=>{result('0')}} className={styles.button}>0</span>
        <span onClick={()=>{result('.')}} className={styles.button}>.</span>
        <span onClick={()=>{evalFun()}} className={styles.button} id={styles.equal}>=</span>
      </div>
    </div>
  );
};
