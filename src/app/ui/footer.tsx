import Link from 'next/link'
import { fetchCategories } from '../data/categories-data'
import { auth } from '@/auth'

export default async function Footer() {
  const session = await auth()
  const isAuth = session?.user ? true : false
  const categories = await fetchCategories(null)
  return (
    <footer className="flex sm:flex-row sm:flex-wrap lg:flex-nowrap flex-col items-start gap-8 sm:gap-0 lg:gap-8 section py-8 lg:full-width bg-secondary-color">
      <div className="sm:w-1/2 lg:w-1/3 lg:mx-0">
        <h3 className="h3 text-text-secondary">Направления</h3>
        <ul className="flex flex-col gap-2 flex-grow-0 flex-shrink-0 flex-wrap max-h-[10rem]">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/${category.alias}`}
                className="link text-text-secondary hover:text-primary-500 active:text-text-secondary"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-1/2 lg:w-1/3 lg:mx-auto sm:mx-0 flex">
        <div className="w-full">
          <h3 className="h3 text-text-secondary">Навигация</h3>
          <nav>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/#"
                  className="link text-text-secondary hover:text-primary-500 active:text-text-secondary"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="link text-text-secondary hover:text-primary-500 active:text-text-secondary"
                >
                  Все туры
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="link text-text-secondary hover:text-primary-500 active:text-text-secondary"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="link text-text-secondary hover:text-primary-500 active:text-text-secondary"
                >
                  Отзывы
                </Link>
              </li>
              {isAuth && (
                <li>
                  <Link
                    href="/profile"
                    className="link text-text-secondary hover:text-primary-500 active:text-text-secondary"
                  >
                    Личный кабинет
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="w-full">
          <h3 className="h3 text-text-secondary">Наши контакты</h3>
          <div className="flex flex-col gap-2">
            <a
              className="link text-text-secondary hover:text-primary-500 active:text-text-secondary p-0"
              href="tel:+79991234567"
            >
              +375 (33) 33-33-333
            </a>
            <a
              className="link text-text-secondary hover:text-primary-500 active:text-text-secondary p-0"
              href="mailto:info@travel.com"
            >
              info@travel.com
            </a>
            <p className="font-semibold text-text-secondary">
              Адрес: Гродно, ул. Ожешко 22, аудитория 210
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-full lg:w-1/3 mx-auto">
        <h2 className="h2 text-text-secondary">Турфирма Travel</h2>
        <div className='relative'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.9017882250273!2d23.83800468486957!3d53.68437578793081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd623110c4309%3A0x91184a698fa7af27!2z0YPQuy4g0K3Qu9C40LfRiyDQntC20LXRiNC60L4gMjIsINCT0YDQvtC00L3Qviwg0JPRgNC-0LTQvdC10L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1718038822284!5m2!1sru!2sby"
            width="100%"
            height="200"
            loading="lazy"
          ></iframe>
        </div>
      </div>      
    </footer>
  )
}
