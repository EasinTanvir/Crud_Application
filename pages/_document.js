import Document,{Html,Head,Main,NextScript} from 'next/document'

export default class MyDocument extends Document{

    render(){
        return(

            <Html>
                <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }


}