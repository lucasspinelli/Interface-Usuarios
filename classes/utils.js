class Utils {

   static dateFormat(date){ //Conseguimos usar sem instancia-lo

        return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();

    }

}