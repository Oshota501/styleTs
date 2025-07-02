
class BackGroundKishoi{
    public elm ;
    private color = [
        function(flag){
            if(flag){
                return "rgba(255, 8, 8, 0.247)";
            }else{
                return "rgba(222, 255, 8, 0.25)";
            }
        },
        function(flag){
            if(flag){
                return "rgba(90, 255, 8, 0.25)";
            }else{
                return "rgba(8, 24, 255, 0.25)";
            }
        },
        function(flag){
            if(flag){
                return "rgba(255, 255, 255, 0.25)";
            }else{
                return "rgba(0, 0, 0, 0.25)";
            }
        },

    ] ;
    private gradient(flag,n,t){
        let text = "linear-gradient("+n+"deg,";
        for(let i = 0 ; i < 20 ; i++){
            text += this.color[t](flag) +",";
            text += this.color[t](!flag) +",";
        }
        text += this.color[t](flag);
        text += ")";
        return text ;
    }
    private f = true ;
    public start(){
        setInterval(()=>{
            this.elm.style.background = this.gradient(this.f,20,0)+","+this.gradient(this.f,80,1)+","+this.gradient(this.f,120,2);
            if(this.f){
                this.f=false;
            }else{
                this.f=true;
            }
        },100);
    }
}
