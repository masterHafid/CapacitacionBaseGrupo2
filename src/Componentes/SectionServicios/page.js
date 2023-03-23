import styles from './styles.module.css'

export default function Page() {
    //class='estilo' convencional
    //className='estilos' javascript
  return ( //Objeto JSX 
    <>
        <p className={styles.colorTexto}>servicios</p>
    </>
  )
}
