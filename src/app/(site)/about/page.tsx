import Hero from '@/app/ui/hero'

export const metadata = {
  title: 'О нас',
}

export default function Page() {
  return (
    <>
      <Hero
        isParagraph={false}
        isButton={false}
        isFullHeight={false}
        title="О нас"
				imageUrl='/about.jpg'
      />
      <section className="section flex lg:flex-row flex-col flex-wrap">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="h2 w-full text-center lg:text-start">Контакты</h2>
          <p className="text-lg lg:text-xl">
            <strong>Наш телефон: </strong>
            <a href="tel:+79991234567" className="link">
              +7 (999) 123-45-67
            </a>
          </p>
          <p className="text-lg lg:text-xl">
            <strong>Наша почта: </strong>
            <a href="mailto:info@travel.com" className="text-xl link">
              info@travel.com
            </a>
          </p>
          <p className="p text-balance text-lg lg:text-xl">
            <strong>Адрес: </strong>Гродно, ул. Ожешко 22, аудитория 210
          </p>
          <p className="p text-lg lg:text-xl">
            Мы рады приветствовать вас на нашем портале, где ваши мечты о путешествиях становятся реальностью. Наша миссия – сделать ваш отдых незабываемым, предоставляя широкий спектр туристических услуг, начиная от экскурсионных туров и заканчивая индивидуальными маршрутами.
          </p>
        </div>
        <div className="lg:w-1/2 lg:m-0 my-8">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.9017882250273!2d23.83800468486957!3d53.68437578793081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd623110c4309%3A0x91184a698fa7af27!2z0YPQuy4g0K3Qu9C40LfRiyDQntC20LXRiNC60L4gMjIsINCT0YDQvtC00L3Qviwg0JPRgNC-0LTQvdC10L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1718038822284!5m2!1sru!2sby"
            width="100%"
            className="aspect-square"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section className="section full-width bg-triary-color">
        <h2 className="h2 text-center">Турфирма Travel</h2>
        <p className="p text-xl">
          &rdquo;Турфирма Travel&rdquo; – это команда профессионалов с многолетним опытом в сфере туризма. Мы сотрудничаем с лучшими отелями, авиакомпаниями и экскурсионными агентствами по всему миру, чтобы предложить вам только самые качественные и надежные услуги.
        </p>
      </section>
    </>
  )
}
