class calculator{
    constructor(current,previous){
        this.current=current
        this.previous=previous
    }
    getPrevious(){return this.previous}
    getCurrent(){return this.current}
    setPrevious(prev){this.previous=prev}
    setCurrrent(cur){this.current=cur}
    DisplayNumber(number){
        var val =this.current.textContent
         //verify if the number is 0 or not
         if(val=="0"){
            this.current.textContent=number;
        }
        else{
            val=val+number
            this.current.textContent=val

        }
        
    }
    Decimale(){
        if(this.current.textContent.indexOf(".") ==-1)
        this.current.textContent= this.current.textContent+"."

    }
    clear(){
        this.current.textContent="0"
        this.previous.textContent=""
    }
    delete(){
        this.current.textContent= (this.current.textContent).slice(0,-1);
            if(this.current.textContent=="" &&  this.previous.textContent!=""){
                this.current.textContent= this.previous.textContent
                this.previous.textContent=""
            }
            else{
                this.current.textContent="0"
            }
    }
    ChooseOperation(op){
        this.previous.textContent=this.current.textContent+op
        this.current.textContent="0"
        this.operation=op
       
    }
    Error(msg){
        this.current.textContent=msg
        this.previous.textContent=""
    }
    Operation(){
        const prev = parseFloat(this.previous.textContent.split(this.operation)[0])
        const cur = parseFloat(this.previous.textContent.split(this.operation)[1])
        var result=0;
        if (isNaN(prev) || isNaN(cur)) return
        switch (this.operation) {
          case '+':
            result = prev + cur
            break
          case '%':
            result = prev % cur
            break
          case '-':
            result = prev - cur
            break
          case '*':
            result = prev * cur
            break
          case "^":
                result = Math.pow(prev,cur)
                console.log(result)
                break
          case '÷':
              if(cur==0) {
                this.Error("division by zero  imposible")
                return 
              } 
              result = prev / cur
            break
          default:
              this.Error("select operation")
            return
        }
        this.operation = undefined
        this.current.textContent=""+Number(result).toLocaleString("en")
        this.previous.textContent=""

       
    }
    EqualOperation(){
        this.previous.textContent=this.previous.textContent+this.current.textContent
        this.Operation()
    }    

}

const number = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[data-operation]')
const equal = document.querySelector('[data-equal]')
const deleteB = document.querySelector('[data-delete]')
const Clear= document.querySelector('[data-clear]')
var current=document.querySelector(".result .current-operand")
var previous=document.querySelector(".result .previous-operand")
var cal=new calculator(current,previous)
var numberOfClick=0
number.forEach(button => {
    button.addEventListener('click', (e) => {
        var num1=e.target.textContent
      cal.DisplayNumber(num1)
    })
  })
  deleteB.addEventListener('click',(e)=>{
    cal.delete()
  }) 
  Clear.addEventListener("click",(e)=>{
      cal.clear()
  })
  operation.forEach(button => {
    button.addEventListener('click', (e) => {
        cal.ChooseOperation(e.target.textContent)
    })
  })
  
  equal.addEventListener("click",(e)=>{
     cal.EqualOperation()
  })
