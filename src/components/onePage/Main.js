import styles from './Main.module.css'
import bannerMobile from '../../image/bannermobile.jpg'
import videoMobile from '../../image/videomobile.mp4'
import { Button } from '../botao/Button'
import bannerUsabilidade from '../../image/bannerusabilidade.webp'
import { FaWineGlass, FaCoffee, FaCreditCard, FaThumbsUp, FaWater, FaClock, FaMugHot } from 'react-icons/fa';
import { IoWine, IoArrowDown } from 'react-icons/io5';
import lastBanner from '../../image/bannervendamobile.jpg'
import checkoutSeguro from '../../image/checkoutseguro.png'
import bannerDesktop from '../../image/bannerdesktop.jpg'
import { FaBeer } from 'react-icons/fa';
export function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.main1}>
                <img src={bannerMobile} alt="banner principal mobile" className={styles.bannerMobile} />
                <img src={bannerDesktop} alt="banner principal desktop" className={styles.bannerDesktop} />
            </div>
            <div className={styles.videoDesktop}>
                <div className={styles.main1}>
                    <video src={videoMobile} autoPlay muted loop />
                </div>
                <div className={styles.main1}>
                    <h1>Lavador automático de copos <br /> É o produto ideal para poupar seu tempo</h1>
                    <p>Limpeza eficiente: jatos de água potentes enxaguam completamente os resíduos em segundos. Fácil de usar: coloque a boca do copo para baixo, pressione levemente o fundo do copo, ele irá borrifar água automaticamente para limpar, depois que o copo for limpo, remova o copo e pare de borrifar água.</p>
                    <a href="#compra"><Button /></a>
                </div>
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

            </div>
            <a href="#compra"><Button /></a>
            <div className={styles.usa}>
                <h1>USABILIDADE</h1>
                <img src={bannerUsabilidade} alt="usabilidade" className={styles.usaImgMobile} />
            </div>
            <div className={styles.usaDesktop}>
                <div className={styles.usaDesktop1}>
                    <img src={bannerUsabilidade} alt="usabilidade" className={styles.usaImgDesktop} />
                </div>

                <div className={styles.usa1}>
                    <div className={styles.usa2}>
                        <FaWineGlass />
                        <h1>Copos de vinho</h1>
                    </div>
                    <div className={styles.usa2}>
                        <FaBeer />
                        <h1>Copos de cerveja</h1>
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
            <div className={styles.last} >
                <img src={lastBanner} alt="banner demonstrativo do produto" />
                <h3>De R$ 189,90 por apenas:</h3>
                <h1>R$ 99,90</h1>
                <h2>Frete grátis para todo Brasil</h2>
                <h3>Aproveite! Promoção só essa semana</h3>
                <img src={checkoutSeguro} alt="checkout seguro" id='compra' />
                <a href="https://casualhome.com.br/#/item3"><Button /></a>
            </div>
        </div>
    )
}