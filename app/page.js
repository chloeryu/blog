import Image from "next/image"
import styles from './page.module.css'
import Link from 'next/link'
import 작명 from '/public/book0.png'


export default function Home() {
  let 책 = ['구글애드센스로 돈벌기', '깃허브입문', '프론트엔드 웹 디자인 입문']
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        책.map((a, i) => {
          return (
            <div className="book" key={i}>
              <img src={'/book' + i + '.png'} className='book-img' alt="구글애드센스로 돈벌기" />
              <h4>{a}<p>글</p></h4>
            </div>
          )
        })}

    </div>
  )
}
