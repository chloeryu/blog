import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  let 책 = ['구글애드센스로 돈벌기', '깃허브입문', '프론트엔드 웹 디자인 입문']
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        책.map(() => {
          return (
            <div className="book">
              <h4>{책[0]} $40</h4>
            </div>
          )
        })}

    </div>
  )
}
