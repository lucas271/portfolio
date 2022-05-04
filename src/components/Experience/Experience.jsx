import experienceImg from '../../assets/experience.png'
import './styles/experience.scss'

const Experience = () => {
    return <>
        <section id="experience">
            <article>
                <h2>Experiência</h2>
                <img src={experienceImg} alt="" />
                <p> Completamente focada em projetos pessoais, em busca da primeira oportunidade de emprego!</p>
            </article>
        </section>
    </>
}

export default Experience