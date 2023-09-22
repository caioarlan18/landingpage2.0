import styles from './Main.module.css'
import bannerMobile from '../../image/bannermobile.jpg'
import videoMobile from '../../image/videomobile.mp4'
import { Button } from '../botao/Button'
import bannerUsabilidade from '../../image/bannerusabilidade.webp'
import { FaWineGlass, FaCoffee, FaCreditCard, FaThumbsUp, FaWater, FaClock, FaMugHot } from 'react-icons/fa';
import { IoWine, IoArrowDown } from 'react-icons/io5';


export function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.main1}>
                <img src={bannerMobile} alt="banner principal mobile" />
            </div>
            <div className={styles.main1}>
                <video src={videoMobile} autoPlay muted loop />
            </div>
            <div className={styles.main1}>
                <h1>Lavador automático de copos <br /> É o produto ideal para poupar seu tempo</h1>
                <p>Limpeza eficiente: jatos de água potentes enxaguam completamente os resíduos em segundos. Fácil de usar: coloque a boca do copo para baixo, pressione levemente o fundo do copo, ele irá borrifar água automaticamente para limpar, depois que o copo for limpo, remova o copo e pare de borrifar água.</p>
                <Button />
            </div>
            <div className={styles.bene}>
                <h1>BENEFÍCIOS</h1>
                <p>Conheça as vantagens do lavador automático</p>
            </div>
            <div className={styles.bene1}>
                <div className={styles.bene2}>
                    <FaClock />
                    <h1>Economiza seu tempo</h1>
                </div>
                <div className={styles.bene2}>
                    <FaWater />
                    <h1>Economia de água</h1>
                </div>
                <div className={styles.bene2}>
                    <FaThumbsUp />
                    <h1>Poupa esforço</h1>
                </div>
                <div className={styles.bene2}>
                    <FaCreditCard />
                    <h1>Custo benefício</h1>

                </div>
                <Button />
            </div>
            <div className={styles.usa}>
                <h1>USABILIDADE</h1>
                <img src={bannerUsabilidade} alt="usabilidade" />
            </div>
            <div className={styles.usa1}>
                <div className={styles.usa2}>
                    <FaWineGlass />
                    <h1>Copos de vinho</h1>
                </div>
                <div className={styles.usa2}>
                    <FaCoffee />
                    <h1>Xicáras de café</h1>
                </div>
                <div className={styles.usa2}>
                    <FaMugHot />
                    <h1>Xicáras de chá</h1>
                </div>
                <div className={styles.usa2}>
                    <IoWine />
                    <h1>Taças</h1>
                </div>
                <div className={styles.usa2}>
                    <IoArrowDown />
                    <h1>Entre outros</h1>
                </div>
            </div>
        </div>
    )
}