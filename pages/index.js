import pptxgen from "pptxgenjs"

let pres = new pptxgen();

// Slide 1
let slide = pres.addSlide();

let textboxText = "RELATORIA";
let textboxOpts = { x: 0.1, y: 2.7, fontSize:18, fontFace: "Open Sans" , color: 'FFFF00', fill: { color:'F1F1F1' }, align: "right",  bold:true };
slide.addText(textboxText, textboxOpts);
slide.addText("LISTENING MODEL", { x: 0.3, y: 3, fontSize:14, fontFace: "Open Sans" , color: 'FFFFFF', fill: { color:'F1F1F1' }, align:  "right" });
slide.background = {fill: "37819a"}
slide.addImage({path:"https://i.ibb.co/VDZGTwB/backgroundimg.jpg", w:"42%", h:"100%"})
slide.addImage({path:"https://i.ibb.co/VtZqzz7/stilingue.png",w:1.8, h:1.85, x:"33%", y:"36%"})

//Slide 2
let slide2 = pres.addSlide();
slide2.background = {path: "https://i.ibb.co/dDyTkHj/backgroundimg2.jpg"}

let titleSlide2 = "Agenda";
let contentSumary = ["METODOLOGIA", "DESTAQUES", "OVERVIEW", "MINHA CATEGORIA", "MINHA MARCA", "MEUS COMPARÁVEIS", "PRÓXIMOS PASSOS"]
const sumarySpace = 0.4
slide2.addText(titleSlide2, { x: 0.5, y: 1.9, fontSize:68, fontFace: "Open Sans" , color: '3E909A', fill: { color:'F1F1F1' }, align: "left",  bold:true });
slide2.addText(titleSlide2, { x: 2.8, y: 2.18, fontSize:25, fontFace: "Open Sans" , color: 'FFFFFF', fill: { color:'F1F1F1' }, align: "left",  bold:true });
contentSumary.map(content=>{
  const id = contentSumary.indexOf(content)
  slide2.addText(content, { x:4.8, y:2.2+(id*sumarySpace), fontSize:13, fontFace: "Open Sans" , color: 'FFFFFF', align: "left", breakline:true})
})

//Slide 3
sumary(0, "Agenda")
// sumary(1, "Cockpit")

//Slide 4
let slide4 = pres.addSlide()
makeLayout(slide4, null)

slide4.addText("Contexto", { x: 1.3, y: 1, fontSize:40, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });
slide4.addText("monitorado considerado", { x: 1.7, y: 1.4, fontSize:18, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });
slide4.addImage({path: "https://i.ibb.co/S5ML9CF/detalhe1.png", x:0.6, y:0.9})
slide4.addShape(pres.ShapeType.rect, {fill:{color:"F0F1F2"}, w:"100%", h:"41%", x:0, y:2.8})

slide4.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"0.1%", h:"66%", x:1.1, y:1.4})
const content1Slide4 = "Esta análise tem como foco as menções coletadas em plataformas sociais e portais de notícias online a respeito de CONTEXTO com foco em GRUPO1, GRUPO2, GRUPO3 e categorizações TEMA1, TEMA2, TEMA3."
const content2Slide4 = "Ao analisarmos a categoria, observamos o contexto de busca geral, englobando todos os termos de busca e extraindo destaques do conjunto total de menções coletadas para encontrar sinergias que ajudem na fotografia do setor como um todo. Pode ser uma seção ausente de alguns relatórios a depender da característica do cliente e da estrutura de busca."
const content3Slide4 = "Foco na marca/termos principal da coleta, comparando-a com ela mesma em termos de performance. Os temas destacados aqui são prioritariamente de interesse da(s) marca(s) do cliente."
const content4Slide4 = "Após uma análise focada na marca e seus atributos advindos do listening, extrapolamos as comparações para observar como os concorrentes / comparáveis se saíram em métricas similares a fim de relativizar o ponto de vista anterior."
slide4.addText(content1Slide4, { x: 1.7, y: 2.2, w:"38%", fontSize:10, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left" })

const paragraphsSlide4 = [
  {title:"MINHA CATEGORIA", content: content2Slide4, space:0, y:4.15}, 
  {title:"MINHA MARCA", content:content3Slide4, space:2.5, y:3.8},
  {title:"MEUS COMPARÁVEIS", content:content4Slide4, space:5, y:3.9}
]

paragraphsSlide4.map(({title, content, space, y})=>{
  makeSlide4(title, content, space, y)
})

function makeSlide4(title, content, space, y){
  slide4.addText(title, { x: 1.8 + space, y: 3.2, fontSize:8, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left", bold:true })
  slide4.addText(content, { x: 1.8 + space, y,w:"22%", fontSize:8, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left" })
  slide4.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"0.1%", h:"31%", x:1.8 + space, y:3.2})
  slide4.addShape(pres.ShapeType.ellipse, {fill: { type: "solid", color: "F0F1F2" } ,w:"1%", h:"2%",x:1.75 + space, y:3.3})
}

slide4.addText("CANAIS MONITORADOS", { x: 6.5, y: 1.3, fontSize:7, fontFace: "Open Sans" , color: '36819a', fill: { color:'36819a' }, align: "left", bold:true })
slide4.addText("Twitter, Facebook, Instagram, YouTube, Blogs, Portais, etc", {w:"20%", x: 6.5, y: 1.5, fontSize:8, fontFace: "Open Sans" , color: '000000', fill: { color:'000000' }, align: "left"})
slide4.addText("PERÍODO DESSA ANÁLISE", { x: 6.5, y: 2, fontSize:7, fontFace: "Open Sans" , color: '36819a', fill: { color:'36819a' }, align: "left", bold:true })
slide4.addText("Auto preenchido", {w:"20%", x: 6.5, y: 2.15, fontSize:8, fontFace: "Open Sans" , color: '000000', fill: { color:'000000' }, align: "left"})

//Slide 5
sumary(1, "Agenda")


//Slide6
let slide6 = pres.addSlide()
makeLayout(slide6)
slide6.addText("Destaques", { x: 1.3, y: 1, fontSize:40, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });
slide6.addText("e principais insights", { x: 1.7, y: 1.4, fontSize:18, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });

slide6.addImage({path: "https://i.ibb.co/rcP0c3W/detalhe2.png", x:1.4, y:1.6, w:"25%", h:"45%"})
slide6.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"21.4%", h:"0.15%", x:0, y:2.84})

const contentSlide6 = [
  {
    number: "1",
    content: "Revisitar as metas/objetivos do período e destacar pontos fortes e fracos da análise. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    y:0
  },
  {
    number: "2",
    content: "Apontar os destaques em relação às marcas individualmente e ao contexto geral. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    y:1
  },
  {
    number: "3",
    content: "Explorar outliers e ocorrências incomuns ou promissoras. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    y:2
  },
]
contentSlide6.map(({number, content, y})=>makeSlide6(number, content, y))
function makeSlide6(number, content, y){
  slide6.addImage({path: "https://i.ibb.co/j4wkgfS/detalhe3.png", x:4.6, y:1.65 + y, w:"4%", h:"10%"})
  slide6.addText(number, { x: 4.7, y: 1.9 + y, fontSize:18, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true })
  slide6.addText(content, { x: 5, y: 2.1 + y, w:"44%", fontSize:10, fontFace: "Open Sans" , color: '000000', fill: { color:'000000' }, align: "left" })
}

//Slide 7
sumary(2, "Agenda")

//Slide 8
let slide8 = pres.addSlide()
makeLayout(slide8, null)



// 4. Save the Presentation
pres.writeFile("Desafio2.pptx");

function makeLayout(slide, selected){
  slide.addShape(pres.ShapeType.rect, { fill: { color: "58CCBE" }, w:"100%", h:"10%", x:0, y:"90%" });
  slide.addImage({path: "https://i.ibb.co/W51R8Cm/logo.png", w:"12%", h:"5%", x:"45%", y:"93%"})
  slide.addShape(pres.ShapeType.rect, { fill: { color: "f2f2f2" }, w:"100%", h:"6%", x:0, y:0 });
  const topBarSpace = 1.3
  contentSumary.map(content=>{
    const id = contentSumary.indexOf(content) 
    slide.addText(content, { x:0.5+(topBarSpace*id), y:0.2, fontSize:7, fontFace: "Open Sans" , color: '9c9c9c', align: "left"})
  })
}
function sumary(themeId, title){
  let slide = pres.addSlide();
slide.background = {path: "https://i.ibb.co/dDyTkHj/backgroundimg2.jpg"}

let titleSlide = title;
let contentSlide = ["METODOLOGIA", "DESTAQUES", "OVERVIEW", "MINHA CATEGORIA", "MINHA MARCA", "MEUS COMPARÁVEIS", "PRÓXIMOS PASSOS"]
slide.addText(titleSlide, { x: 0.5, y: 1.9, fontSize:68, fontFace: "Open Sans" , color: '3E909A', fill: { color:'F1F1F1' }, align: "left",  bold:true });
slide.addText(titleSlide, { x: 2.8, y: 2.18, fontSize:25, fontFace: "Open Sans" , color: 'FFFFFF', fill: { color:'F1F1F1' }, align: "left",  bold:true });
contentSlide.map(content=>{
  const id = contentSlide.indexOf(content)
  id === themeId ?  slide.addText(content, { x:4.8, y:2.2+(id*sumarySpace), fontSize:13, fontFace: "Open Sans" , color: 'FFFF00', align: "left", breakline:true, bold:true}) :   slide.addText(content, { x:4.8, y:2.2+(id*sumarySpace), fontSize:13, fontFace: "Open Sans" , color: 'FFFFFF', align: "left", breakline:true})
})
}


export default function Home(){
return <div>Hello World</div>

}
