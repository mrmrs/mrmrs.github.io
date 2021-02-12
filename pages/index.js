/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

import Head from 'next/head'
import data from '../data/index'
import Video from '../components/video'
import LinkBlock from '../components/link-block'
import Image from '../components/image'
import  sample  from 'lodash.sample'

const ImageMeta = ({...props}) => {
  return <span sx={{fontFamily: 'monospace', fontSize: 1, textAlign: 'center', display: 'block', mb: 3 }} {...props}/>
}

const videos = [
  //'0208c',
  //'0208b',
  //'0208a',
  '0207d',
  '0207c',
  '0207b',
  '0207a',
  //'0206d',
  '0206c',
  '0206b',
  '0206a',
  '0204d',
  '0204c',
  '0204b',
  //'0204a',
  '0203c',
  '0204b',
  '0204a',
  'orangewobble3',
  'orangewobble2',
  'orangewobble',
  'gold',
  'subtleripple3',
  'slowriver',
  'riverrunsthroughit',
  'marble',
  'heart-beating',
  'pearl',
  'sparkle',
  'okay026',
  '01026',
  'gradientheight',
  'gradientblend',
  'pinkwaves',
  'bendysubtlewaves',
  'liquid-gold',
  'purpleblob',
]


export default function Home() {



  return (
    <div>
      <Head>
        <title>Adam Morse - Computational designer and generative artist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

      </header>
      <main>
      <Video filename={sample(videos)}  />
        <div sx={{ pt: 4, px: 3, fontSize: [ 2,3,4 ], maxWidth: '34em', mx: 'auto'}}>
          <p>
            I'm Adam Morse, a computational designer and generative artist based in Toronto. I'm currently the co-founder of <a href="https://components.ai/" title="Components AI - Generative design tools for the web">Components AI</a>, a startup working on new types of generative design tools. 
          </p>
          <p>
            In the past I've helped design and build product at OPower, Stitch Fix, Salesforce, The Grid, and Cloudflare.
          </p>
          <section>
            <h3 sx={{ fontSize: 3, mt: 5, mb: 2 }}>Pen Plots</h3>
            <p>
              Generative SVG pieces are plotted with an Axidraw SE/A3 through Inkscape and the Axidraw CLI.
              For pens, I most often use Lamy Safari EF, Micron 01 and 005, Staedtler pigment liner 0.1.
              Ink: Mont Blanc, Iroshizuku, Diamine. 
            </p>
<Image src="https://mrmrs.s3.us-west-2.amazonaws.com/plot-1.jpg" />
    <ImageMeta>17"x11"</ImageMeta>
<Image src="https://mrmrs.s3.us-west-2.amazonaws.com/plot-6.jpg" />
    <ImageMeta >17"x11"</ImageMeta>
    <Image src="https://mrmrs.s3.us-west-2.amazonaws.com/plot-4.jpg" />
    <ImageMeta >17"x11"</ImageMeta><Image src="https://mrmrs.s3.us-west-2.amazonaws.com/plot-3.jpg" />
    <ImageMeta >17"x11"</ImageMeta>
    <div sx={{display: 'flex' }}>
      <div sx={{ width: '50%'}}>
        <Image src="https://mrmrs.s3.us-west-2.amazonaws.com/plot-2.jpg" />
        <ImageMeta >11"x17"</ImageMeta>
      </div>
      <div sx={{ width: '50%'}}>
        <Image src="https://mrmrs.s3.us-west-2.amazonaws.com/plot-5.jpg" />
        <ImageMeta >11"x17"</ImageMeta>
      </div>
    </div>
          </section>
          <section>
            <h3>3D</h3>
            <p>
              Recently I've been experimenting with material shaders and
              procedural animations. It is an attempt to make combinations of
              form and motion that relax me.
            </p>
              <Video filename={sample(videos)}  />
          </section>
          <section>
            <h3 sx={{ mt: 5 }}>Writing</h3>
            <LinkBlock href="http://components.ai/notes/logo">Designing generative logos</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/components-ai/">Components AI</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/component-styling-api/">Component styling API</LinkBlock>
            <LinkBlock href="https://color.cloudflare.design/thinking">Thinking about color</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/scalable-css/">Css and scalability</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/the-veil-of-ignorance/">The Veil of ignorance</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/dogma/">Dogma</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/too-many-tools/">Too many tools and frameworks</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/design-systems/">Design systems</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/webfonts/">Webfonts</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/developing-ui/">Developing UI</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/getting-critiqued/">Getting Critiqued</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/common-vim/" >Common Vim</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/vim-as-a-design-tool/">Vim as a design tool</LinkBlock>
            <LinkBlock href="http://mrmrs.cc/writing/what-are-classes-for/">What are classes for</LinkBlock>
          </section>
          <section sx={{pb: 6 }}>
            <h3 sx={{ mt: 5 }}>Other work</h3>
            <LinkBlock title="Visualize your CSS" href="https://cssstats.com">CSS Stats</LinkBlock>
            <LinkBlock title="A responsive CSS toolkit for building UI" href="http://tachyons.io">Tachyons</LinkBlock>
            <LinkBlock title="Contrast accessible color combos" href="https://randoma11y.com">RandomA11y</LinkBlock>
            <LinkBlock title="Post future beats" href="http://mrsjxn.com">MrsJxn</LinkBlock>
          </section>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
