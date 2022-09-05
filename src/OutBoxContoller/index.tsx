


export default class OutBoxController{
    color: string
    text: string
    constructor(){
        this.color = "none"
        this.text = ""
    }
   getColor(){
    return this.color
   }
   setColor(color: string){
    this.color = color
   }
   getText(){
    return this.text
   }
   setText(text: string){
    this.text = text
   }
}