class BackGroundKishoi{
    public elms ;
    public color = [
        "rgba(255, 8, 8, 0.247)",
        "rgba(222, 255, 8, 0.25)",
        "rgba(90, 255, 8, 0.25)",
        "rgba(8, 24, 255, 0.25)",
        "rgba(255, 255, 255, 0.25)",
        "rgba(0, 0, 0, 0.25)",
    ] ;
    private gradient(n,useN){
        let text = "linear-gradient("+n+"deg,";
        if(this.f){
            for(let i = 0 ; i < 20 ; i++){
                text += this.color[useN*2] +",";
                text += this.color[useN*2+1] +",";
            }
            text += this.color[useN*2];
        }else{
            for(let i = 0 ; i < 20 ; i++){
                text += this.color[useN*2+1] +",";
                text += this.color[useN*2] +",";
            }
            text += this.color[useN*2+1];
        }
        
        text += ")";
        return text ;
    }
    private f = true ;
    public start(){
        setInterval(()=>{
            for(let i = 0 ; i < this.elms.length ; i++){
                this.elms[i].style.background = this.gradient(20,0)+","+this.gradient(80,1)+","+this.gradient(120,2);
                if(this.f){
                    this.f=false;
                }else{
                    this.f=true;
                }
            }
        },100);
    }
}
class TextDenger{
    public elms ;

}
