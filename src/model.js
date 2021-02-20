import image from './assets/img/image.png'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            color: 'red',
            padding: '1.5rem',
            'text-align': 'center',
        }
    }),

    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            'text-align': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Картинка'
    }),
    new ColumnsBlock( [
        '11111', '22222', '33333'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock( 'here we go with text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]