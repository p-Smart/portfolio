// import App from 'next/app'
import '@/styles/globals.css'
import '@/styles/media.css'
import Layout from '@/components/Layout'
// import { sessionOptions } from '@/customHook/useSessionOptions'
// import { getIronSession } from 'iron-session'


export default function MyApp({ Component, pageProps}) {
  return( 
      <Layout>
        <Component {...pageProps} />
      </Layout>
   )
}



// To fetch Data for all Pages
// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext)
  
//   if (appContext.ctx.req && appContext.ctx.res) {
//     const session = await getIronSession(
//       appContext.ctx.req,
//       appContext.ctx.res,
//       sessionOptions,
//     );

//     return {
//       ...appProps,
//       session
//     };
//   }
//   return appProps
// };


// document.documentElement.addEventListener('click', (e) => {
//   // Dropdown
//   e.target.closest('.drop-down-control')!==null && e.target.closest('.drop-down-control').nextElementSibling.classList.toggle('show')
//   e.target.closest('.drop-down-container')===null && document.querySelector('.drop-down-menu').classList.remove('show')
//   if (e.target.closest('.drop-down-content')!==null){
//     let content = e.target.closest('.drop-down-content')
//     let image = content.querySelector('img')?.src
//     let text = content.querySelector('p')?.innerText
//     let control = (e.target.closest('.drop-down-container')).querySelector('.drop-down-control')
//     control.querySelector('.control-content1 img')?.setAttribute('src', image)
//     control.querySelector('.control-content2 p').innerText = text
//   }
// })










