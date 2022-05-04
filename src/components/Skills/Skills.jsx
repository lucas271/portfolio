import './styles/skills.scss'
import { KeyboardArrowRight, KeyboardArrowLeft} from '@mui/icons-material';
import { useState } from 'react';

import JsIcon from '../../assets/js_icon.png'
import ReactIcon from '../../assets/react_icon.png'
import reduxIcon from '../../assets/redux_icon.png'
import sassIcon from '../../assets/sass_icon.png'
import jestIcon from '../../assets/jest_icon.png'

const Skills = () => {
    const [carouselIndex, setCarouselIndex] = useState(0)

    const handleCarouselIndexSubtraction = () => {
        if(carouselIndex === 0){
            return setCarouselIndex(4)
        }
        setCarouselIndex(carouselIndex - 1)
    }

    const handleCarouselIndexSum = () => {
        if(carouselIndex === 4){
            return setCarouselIndex(0)
        }
        setCarouselIndex(carouselIndex + 1)

        
    }
    
    return <>
        <section id="skills">
            <KeyboardArrowLeft className='arrow_left' onClick={handleCarouselIndexSubtraction}/>

            <div className='carousel_container' data-testid='carousel_container'>


                <article className={carouselIndex === 0 ? 'selected_carousel_item' : carouselIndex === 4 ? 
                'next_carousel_item': carouselIndex === 1 ? 'last_carousel_item' : 'carousel_hidden'}>
                    <img src={JsIcon} alt="" />
                    <h2>Javascript</h2>
                    <p>Tenho certo domínio da linguagem, conhecimento amplo de ES6, loopings, logica algoritmo, etc, tudo isso pode ser validado acessando meu github no icone da sessão 'home'</p>
                </article>

                
                <article className={carouselIndex === 1 ? 'selected_carousel_item' : carouselIndex === 0 ? 
                'next_carousel_item': carouselIndex === 2 ? 'last_carousel_item' : 'carousel_hidden'}>
                    <img src={ReactIcon} alt="" />
                    <h2>React</h2>
                    <p>Já usei o framework para produzir diversas aplicações, possuo certo dominio no uso de hooks como: useContext, useRef, useReducer, useState e useEffect </p>
                </article>


                <article className={carouselIndex === 2 ? 'selected_carousel_item' : carouselIndex === 1 ? 
                'next_carousel_item': carouselIndex === 3 ? 'last_carousel_item' : 'carousel_hidden'}>
                    <img src={jestIcon} alt="" />
                    <h2>Jest</h2>
                    <p>costumo utilizar TDD em todas minhas aplicações para manter o costume, tudo pode ser verificado na minha conta do github</p>
                </article>

                
                <article className={carouselIndex === 3 ? 'selected_carousel_item' : carouselIndex === 2 ? 
                'next_carousel_item': carouselIndex === 4 ? 'last_carousel_item' : 'carousel_hidden'}>
                    <img src={sassIcon} alt="" />
                    <h2>SASS</h2>
                    <p>fiz esse website utilizando sass, tecnologia que costumo aplicar em todos projetos 'mais complexos'.</p>
                </article>

                
                <article className={carouselIndex === 4 ? 'selected_carousel_item' : carouselIndex === 3 ? 
                'next_carousel_item': carouselIndex === 0 ? 'last_carousel_item' : 'carousel_hidden'}>
                    <img src={reduxIcon} alt="" />
                    <h2>Redux</h2>
                    <p>Habilidade com redux comprovada em alguns projetos pessoais, habilidade com redux-thunk e/ou redux-saga.</p>
                </article>

            </div>
            <KeyboardArrowRight className='arrow_right' onClick={handleCarouselIndexSum}/>
        </section>
    </>
}

export default Skills