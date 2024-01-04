import React from 'react'
import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import '../styles/about.css'

export default function About() {

    return(
        <>
            <PageHeading heading="About Ray Chu"/>
            <main>
                <div id="about-page">

                    <section>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor, placeat, omnis praesentium molestiae soluta beatae vel alias facilis exercitationem, repudiandae ipsa enim esse sunt quod quibusdam quasi sed? Provident distinctio accusamus ex laboriosam consequatur vitae aspernatur explicabo in cum incidunt dolorum fuga magni velit obcaecati laudantium mollitia, dolores animi cupiditate! Ut quam necessitatibus non maxime perferendis, animi eaque ipsum asperiores, vitae repellendus, dolorum distinctio!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quia ad eum id quod iste praesentium nemo aperiam, cumque porro obcaecati inventore nam itaque doloribus ipsa impedit repellat perspiciatis minima officia quos ducimus modi autem distinctio explicabo! Maxime nemo quam rem. Voluptatum, explicabo? Architecto laboriosam veritatis ratione mollitia reprehenderit dolorum saepe, molestiae iste voluptate et nesciunt culpa quam modi? Aspernatur adipisci quia iste nihil accusamus porro voluptas. Id adipisci rerum ducimus molestiae doloremque quod atque quam et quasi maiores corrupti vitae soluta pariatur quis perspiciatis cumque sint excepturi illum magnam quos dolores, impedit, sit eveniet natus. Fuga aut deleniti ipsum. Consequuntur ad distinctio eum quis, explicabo accusamus? Dignissimos natus molestias atque similique perspiciatis nobis hic temporibus laborum ut, obcaecati magni nisi! Laborum accusamus officiis eum.</p>
                    </section>

                    <aside>
                        <h1 id='about-logo'>R.C</h1>
                        <p>Ray Chu is an <strong className=''>awarding winning</strong> ecommerce platform designed to sell almost anything. Our promise is to provide anyone to either purchase or sell products seamlessly.</p>
                        <Link to='/contact' title='Contact Us'><button className='classical-cta'>Any Questions?</button></Link>
                    </aside>

                </div>
            </main>
        </>
    )
}