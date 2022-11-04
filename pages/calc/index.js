import { Calc } from '@components/Calculator/Calc';
import Head from 'next/head';
import React, { useState } from 'react';
import styles from '@styles/Calculator/Calculator.module.css'

const index = () => {
  const [value, setValue] = useState('')
  const result = num => setValue(value+num)
  const evalFun = () => {if(value) {
    try {
      setValue(eval(value))
    } catch (error) {
      alert('Please enter the example correctly!')
    }
  }}
  

  const clear = () => setValue('')
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
      </Head>
      <Calc 
        clear={clear}
        evalFun={evalFun}
        setValue={setValue} 
        styles={styles} 
        value={value} 
        result={result}/>
    </div>
  );
};

export default index;