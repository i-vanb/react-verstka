import logo from './rosneft-logo.png';
import './css/App.css';
import vk from './img/vk.svg'
import instagram from './img/instagram.svg'
import fb from './img/facebook.svg'
import challenge1 from './img/challenge-logo-1.svg'
import challenge2 from './img/challenge-logo-2.svg'
import challenge3 from './img/challenge-logo-3.svg'
import date from './img/date.png'
import location from './img/location.png'
import reward from './img/reward.png'
import illustration1 from './img/illustration1.png'
import illustration2 from './img/illustration2.png'
import illustration3 from './img/illustration3.png'
import mthon2020 from './img/marathon-2020.svg'
import mthongon from './img/marathon-hexagon.svg'
import mthonlines from './img/marathon-lines.svg'
import back1 from './img/backs/hexagon-gradient-5.png'
import back2 from './img/backs/hexagon-gradient-2(1).png'



function App() {
    return (
        <div className='App_container'>
            <div className="content-container">
                <header className="header">
                    <a className="header__logo" href="/">
                        <img src={logo} alt="logo" width="115px"/>
                    </a>
                    <nav className="header__nav">
                        <a className="header__nav__link is-animated is-active" href="#">Главная</a>
                        <a className="header__nav__link is-animated" href="#">Организаторы</a>
                        <a className="header__nav__link is-animated" href="#">Правила</a>
                        <a className="header__nav__link is-animated" href="#">#ПульсМарафон</a>
                        <a className="header__nav__link is-animated" href="#">rn.digital</a>
                    </nav>
                </header>
            </div>

            <div className='content-wrapper'>
                <aside className='sidebar'>
                    <section className='sidebar__invite'>
                        <h2>Марафон <br/>ИТ-соревнований</h2>
                        <img className='gon' src={mthongon} alt='marathon logo'/>
                        <img className='year' src={mthon2020} alt='marathon logo'/>
                        <img className='lines' src={mthonlines} alt='marathon logo'/>
                        <p>Роснефть приглашает разработчиков и аналитиков принять участие в одном из трёх
                            соревнований
                            <img className='back' src={back2}/>
                        </p>

                        <img className='back' src={back1}/>
                    </section>
                    <section className='sidebar__content'>
                        <h3>#ПульсМарафон</h3>
                        <section className='sidebar__content_article'>
                            <h4>Отложение высвобождает пегматитовый сталагмит</h4>
                            <p>Базис эрозии, основываясь большей частью на сейсмических данных, глобален. Эоловое
                                засоление ослабляет комплекс. Лагуна, так же, как и в других...</p>
                            <a href='#'>читать дальше</a>
                        </section>
                        <section className='sidebar__content_article'>
                            <h4>Плато смещает аллит, что, однако, не уничтожило доледниковую</h4>
                            <p>Пока магма остается в камере, углефикация сдвигает меловой мусковит. Вулканическое
                                стекло, скажем, за 100 тысяч лет, сменяет глетчерный приток, причем, вероятно...</p>
                            <a href='#'>читать дальше</a>
                        </section>
                        <footer className='sidebar__footer'>
                            <button className='sidebar__footer_btn'>
                                Ко всем новостям
                            </button>
                            <p>По всем вопросам:</p>
                            <a href='#'>IT-RD.knpk@bnipi.rosneft.ru</a>

                            <div className="sidebar__footer__socials">
                                <a href="#" target="_blank" rel="nofollow">
                                    <img src={vk} alt="vkontakte link"/>
                                </a>
                                <a href="#" target="_blank" rel="nofollow">
                                    <img src={fb} alt="facebook link"/>
                                </a>
                                <a href="#" target="_blank" rel="nofollow">
                                    <img src={instagram} alt="instagram link"/>
                                </a>
                            </div>
                        </footer>
                    </section>
                </aside>
                <main className='main'>
                    <section className='main__card'>
                        <div className='main__card_logo'>
                            <img src={challenge1} alt="challenge-icon"/>
                        </div>
                        <div className='main__card_describe'>
                            <h3 className='main__card_describe_title'>
                                Хакатон трёх городов
                            </h3>
                            <div className='main__card_describe_text'>
                                Хакатон для молодых аналитиков и разработчиков. Постройте оптимальный путь по сложной
                                поверхности
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={date} alt="date-icon"/>
                                <p>24–25 сентября</p>
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={location} alt="location-icon"/>
                                <p>Уфа, Самара и Казань</p>
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={reward} alt="reward-icon"/>
                                <p className='main__card_describe_reward-text'>
                                    Призовой фонд — 289 000 ₽</p>
                            </div>
                            <button>Подробнене</button>
                        </div>
                        <div className='main__card_img'>
                            <img src={illustration1} alt="challenge-image"/>
                        </div>
                    </section>

                    <section className='main__card'>
                        <div className='main__card_logo'>
                            <img src={challenge2} alt="challenge-icon"/>
                        </div>
                        <div className='main__card_describe'>
                            <h3 className='main__card_describe_title'>
                                Хакатон по робототехнике
                            </h3>
                            <div className='main__card_describe_text'>
                                Хакатон для программистов-робототехников. Разработайте роботизированное решение для
                                выполнения производственной операции
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={date} alt="date-icon"/>
                                <p>16–19 октября</p>
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={location} alt="location-icon"/>
                                <p>Уфа</p>
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={reward} alt="reward-icon"/>
                                <p className='main__card_describe_reward-text'>
                                    Призовой фонд — 139 000 ₽</p>
                            </div>
                            <button>Подробнене</button>
                        </div>
                        <div className='main__card_img'>
                            <img src={illustration2} alt="challenge-image"/>
                        </div>
                    </section>

                    <section className='main__card'>
                        <div className='main__card_logo'>
                            <img src={challenge3} alt="challenge-icon"/>
                        </div>
                        <div className='main__card_describe'>
                            <h3 className='main__card_describe_title'>
                                Rosneft Proppant Check Challenge
                            </h3>
                            <div className='main__card_describe_text'>
                                Международные IT-соревнования в области ML. Определите размер зёрен пропанта по
                                фотографии
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={date} alt="date-icon"/>
                                <p>Сентябрь–ноябрь, финал — 28 ноября</p>
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={location} alt="location-icon"/>
                                <p>Москва</p>
                            </div>
                            <div className='main__card_describe_more'>
                                <img src={reward} alt="reward-icon"/>
                                <p className='main__card_describe_reward-text'>
                                    Призовой фонд — 1 142 000 ₽</p>
                            </div>
                            <button>Зарегистрироваться</button>
                        </div>
                        <div className='main__card_img'>
                            <img src={illustration3} alt="challenge-image"/>
                        </div>
                    </section>

                </main>
            </div>

        </div>
    );
}

export default App;
