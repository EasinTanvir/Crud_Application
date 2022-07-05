const {PHASE_DEVELOPMENT_SERVER} =require('next/constants')

module.exports=(phase)=>{

  if(phase===PHASE_DEVELOPMENT_SERVER){

 return {
  env:{
    username:'tanvir',
    password:'tanvir',
    clusters:'cluster0',
    server:'stream',
    GOOGLE_CLIENT_ID:'287318004412-hoovft07nfduuplp0g4hkf4gq13mhfqj.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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' ,
  }

 }
}

return {
  env:{
    username:'tanvir',
    password:'tanvir',
    clusters:'cluster0',
    server:'Prostream',
    GOOGLE_CLIENT_ID:'287318004412-hoovft07nfduuplp0g4hkf4gq13mhfqj.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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',
  }

 }





}