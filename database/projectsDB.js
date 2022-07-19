import labelpack from '../public/labelpackdz.png'
import bevalg from '../public/bevalg.png'
import myPortfolio from '../public/portfolio.png'


export const projectsData = [
    {
      id: 1,
      title: 'My Portfolio',
      labels: [
        {
          id: 1,
          title: 'React',
          background: '#8BB7F0'
        },
        {
          id: 2,
          title: 'Next JS',
          background: '#010100'
        },
        {
          id: 3,
          title: 'JS',
          background: '#EC008C'
        },
      ],
      background: '#0994D0',
      image: myPortfolio,
      website: '/',
      github: 'https://github.com/a-nasseur/portfolio'

    },
    {
      id: 2,
      title: 'Bevalg',
      labels: [
        {
          id: 7,
          title: 'Django',
          background: '#0D4B32'
        },
        {
          id: 8,
          title: 'JS',
          background: '#EC008C'
        },
        
      ],
      background: '#4C0A2A',
      image: bevalg,
      website: 'https://bevalg.com/fr/',
      github: ''
    },
    {
      id: 3,
      title: 'Labelpackdz',
      labels: [
        {
          id: 4,
          title: 'Node Js',
          background: '#73AB62'
        },
        {
          id: 5,
          title: 'JS',
          background: '#EC008C'
        },
        {
          id: 6,
          title: 'EJS',
          background: '#A91E50'
        },
      ],
      background: '#020E27',
      image: labelpack,
      website: 'http://labelpackdz.com/',
      github: ''

    },
    
  ]
  