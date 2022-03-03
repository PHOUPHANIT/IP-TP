class KhmerDate {
    private date = new Date();
    constructor(dateTime: string) {
       this.date = new Date(dateTime);
       var LastDate: number = this.date.getTime() / 1000;
       console.log("Last Date: ",dateTime);
       this.currentTimeStamp(LastDate);
    }
 
    private currentDate = new Date();
    res: string;
    currentTimeStamp(LastDate: number) {
       var currentSeconds: number = (this.currentDate.getTime() / 1000) + 7 * 60 * 60;
       let result: number = currentSeconds - LastDate;
       console.log("Current Date: ",this.currentDate);
       console.log("result: ",result);
       
       if(result>=0){

          if (result >= 2592000) {
                 this.res = (Math.floor(result / 2592000)).toString()+" ខែមុន";        
           } else if (result >= 604800) {
                this.res = (Math.floor(result / 604800)).toString()+" សប្តាហ៍មុន";
           } else if (result >= 86400) {
                this.res = (Math.floor(result / 86400)).toString()+" ថ្ងៃមុន";
           } else if (result >= 3600) {
                this.res = (Math.floor(result / 3600)).toString()+" ម៉ោងមុន";
           } else if (result >= 60) {
                this.res = (Math.floor(result / 60)).toString()+" នាទីមុន";
           } else {
                this.res = "មុននេះបន្តិច";
           }
             this.changeNumber();
       }else {
           console.log("Error!");
       }

    }
 
    changeNumber() {
       this.res = this.res.replace('1', '១');
       this.res = this.res.replace('2', '២');
       this.res = this.res.replace('3', '៣');
       this.res = this.res.replace('4', '៤');
       this.res = this.res.replace('5', '៥');
       this.res = this.res.replace('6', '៦');
       this.res = this.res.replace('7', '៧');
       this.res = this.res.replace('8', '៨');
       this.res = this.res.replace('9', '៩');
     }
 
    getDate(): string {
       return this.res;
    }
 }
 
 export {
    KhmerDate
 }
 