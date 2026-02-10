import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Верхняя текстура */}
      <div className={styles.textureTop}></div>

      {/* Имена пары */}
      <section className={styles.names}>
        <h1 className={styles.roman}>Роман</h1>
        <h1 className={styles.tatyana}>Татьяна</h1>
        <p className={styles.ampersand}>&</p>
      </section>

      {/* Фото пары */}
      <section className={styles.couplePhoto}>
        <Image
          src="/couple.jpg"
          alt="Роман и Татьяна"
          width={394}
          height={400}
          priority
          unoptimized
        />
      </section>

      {/* Приглашение */}
      <section className={styles.invitation}>
        <div className={styles.weddingDayText}>
          <Image
            src="/wedding-day.png"
            alt="wedding day"
            width={308}
            height={45}
            unoptimized
          />
        </div>
        <h2 className={styles.invitationTitle}>Дорогие, близкие нам люди!</h2>
        <div className={styles.invitationText}>
          <p>
            Совсем скоро наступит самый счастливый момент - день нашей свадьбы!
          </p>
          <p>
            Наши сердца сольются в единую мелодию и зазвучат в унисон. И в это
            важное для нас событие мы хотим окружить себя самыми дорогими
            людьми.
          </p>
          <p>
            Ваше присутствие сделает этот праздник по-настоящему особенным, ведь
            разделить радость с близкими — это лучший подарок, который мы можем
            получить.
          </p>
        </div>
      </section>

      {/* Дата и время */}
      <section className={styles.dateTime}>
        <div className={styles.dateImage}>
          <Image
            src="/date-22.png"
            alt="22 апреля"
            width={263}
            height={58}
            unoptimized
          />
        </div>
        <div className={styles.timeDetails}>
          <div className={styles.timeItem}>
            <span className={styles.time}>13:40</span>
            <span className={styles.timeLabel}>роспись</span>
            <span className={styles.timeLocation}>
              ул. Малая Покровская, д. 9
            </span>
          </div>
          <div className={styles.timeItem}>
            <span className={styles.time}>17:30</span>
            <span className={styles.timeLabel}>сбор гостей</span>
          </div>
        </div>
      </section>

      {/* Закат и локация */}
      <section className={styles.location}>
        <div className={styles.sunsetImage}>
          <Image
            src="/sunset.jpg"
            alt="закат"
            width={394}
            height={692}
            unoptimized
          />
        </div>
        <h3 className={styles.locationTitle}>Локация</h3>
        <p className={styles.locationAddress}>
          Село Большая Ельня
          <br />
          Магистральная, 54
        </p>
      </section>

      {/* Dress code */}
      <section className={styles.dressCode}>
        <h3 className={styles.dressCodeTitle}>Dress code</h3>
        <div className={styles.colorCircles}>
          <Image
            src="/colors.png"
            alt="цветовая гамма"
            width={352}
            height={65}
            unoptimized
          />
        </div>
        <p className={styles.dressCodeText}>
          Нам будет особенно приятно видеть вас в нарядах цветовой гаммы нашей
          свадьбы
        </p>
        <p className={styles.dressCodeMen}>
          Для мужчин будет уместен классический костюм и светлая рубашка
        </p>
      </section>

      {/* Детали */}
      <section className={styles.details}>
        <div className={styles.detailsLine}></div>
        <h3 className={styles.detailsTitle}>Детали</h3>
        <p className={styles.detailsText}>
          Просим подтвердить своё присутствие до <u>1 марта.</u> Для нас очень
          важно знать, кто сможет разделить с нами этот особенный день.
        </p>
        <p className={styles.contactText}>
          По всем вопросам и предложениям вы всегда можете обратиться к нашему
          ведущему: <br />
          <strong>+7 910 886 7996 Борис</strong>
          <br />
          Мы будем благодарны сюрпризам
        </p>
      </section>

      {/* Заключение */}
      <section className={styles.conclusion}>
        <div className={styles.conclusionImage}>
          <Image
            src="/img-3292-3.jpg"
            alt="свадьба"
            width={394}
            height={400}
            unoptimized
          />
        </div>
        <h3 className={styles.conclusionTitle}>Дорогие гости!</h3>
        <p className={styles.conclusionText}>
          Для нас нет ничего ценнее, чем провести этот день с близкими людьми.
          Мы будем счастливы вашему присутствию. Если вы решите дополнить его
          знаком внимания, мы примем его с благодарностью и теплом.
        </p>
        <p className={styles.conclusionEnd}>
          С нетерпением ждём встречи с вами!
        </p>
      </section>

      {/* Нижняя текстура */}
      <div className={styles.textureBottom}></div>
    </div>
  );
}
