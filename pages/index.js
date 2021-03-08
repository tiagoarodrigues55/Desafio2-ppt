import pptxgen from "pptxgenjs"
// import logo from '../assets/stilingue.png'
// import background1 from '../assets/backgroundimg.jpg'

// 1. Create a new Presentation
let pres = new pptxgen();

// 2. Add a Slide
let slide = pres.addSlide();

// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide

let textboxText = "RELATORIA";
let textboxOpts = { x: 0.1, y: 2.7, fontSize:18, fontFace: "Open Sans" , color: 'FFFF00', fill: { color:'F1F1F1' }, align: "right",  bold:true };
slide.addText(textboxText, textboxOpts);
slide.addText("LISTENING MODEL", { x: 0.3, y: 3, fontSize:14, fontFace: "Open Sans" , color: 'FFFFFF', fill: { color:'F1F1F1' }, align:  "right" });
slide.background = {fill: "37819a"}
slide.addImage({path:"https://i.ibb.co/VDZGTwB/backgroundimg.jpg" , w:"42%", h:"100%"})
slide.addImage({path:"https://i.ibb.co/VtZqzz7/stilingue.png" ,w:1.8, h:1.85, x:"33%", y:"36%"})

// 4. Save the Presentation
pres.writeFile("Desafio2.pptx");


export default function Home(){
return <div>Hello World</div>

}
