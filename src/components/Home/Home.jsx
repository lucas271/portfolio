import './styles/home.scss'
import githubIcon from '../../assets/github.svg'

const Home = () => {
    return <>
        <div className='presentation_container'>
            <div className='person_image_container'>
            </div>

            <article>
                    <h1>Quem sou eu?</h1>
                    <p>Meu nome é lucas, Um dev apaixonado, e disposto a dar o melhor. 
                    Sempre de mente aberta para novos conhecimentos, e experiências.
                    </p>
            </article>

            <div className='presentation_footer'>
                <span>dê uma olhada no meu</span>
                <a href="https://github.com/lucas271" target='_blank' rel='noreferrer'>
                    <img src={githubIcon} alt="" />
                </a> 
            </div>
        </div>

    </>
}

export default Home