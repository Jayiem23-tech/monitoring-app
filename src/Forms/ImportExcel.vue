<template>
    <div class="main__importExcel">
        <button  @click = "csvToDb" v-if="btnShow"> Import </button>
        <div>
            <input type="file" name="" id="inputfile" @change = "loadCSV($event)"> 
            <h3 class="success">{{msg}}</h3>
        </div> 
    </div>
</template> 
<script>
import axios from 'axios'; 
export default { 
  data(){
      return{  
          parse_header: [],
          parse_csv:[],
          sortOrders:{},
          datas:[],
          msg:'',
          btnShow:false
      };
  },
  methods:{ 
      csvToDb(){
            axios.post("https://arcane-sands-90385.herokuapp.com/api/monitoring/imports",{ 
              array: this.datas
          }).then(response=>{
            //   console.log(response.data);
              this.msg = response.data;
          }).catch(error => {
              console.log(error.response.data.message); 
          })
      },
      csvJSON(csv){ 
          let vm = this 
          let lines = csv.split("\n")
          let result = []
          let headers = lines[0].split(",")
          vm.parse_header = lines[0].split(",")
          lines[0].split(",").forEach(function(key){
              vm.sortOrders[key] = 1
          })
          lines.map(function(line , indexLine){
            if(indexLine < 1) return //jump Header Line
            let obj = {}
            let currentline = line.split(",") 
            
            headers.map(function(header , indexHeader){
                obj[header] = currentline[indexHeader]
            })
            result.push(obj)
          }) 
        // console.log(result);
        vm.datas = result;
        return result
      },
    //   to load the csv file
      loadCSV(e){ 
          let vm = this 
          if (e.target.files[0]) {
              this.btnShow = true;
          }else{
              this.btnShow = false;
          }
          if(window.FileReader){
              let reader = new FileReader();
              reader.readAsText(e.target.files[0]);
            //   Handle errors load
            reader.onload = (event) => {
                let csv = event.target.result; 
                vm.parse_csv = vm.csvJSON(csv)
            };
            reader.onerror = (evt) => {
                if (evt.target.error.name == "NotReadableError") {
                    alert("Cannot read File");
                }
            };
          }else{
              alert("FileReader are not supported in this browser");
          } 
      },
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .main__importExcel{
     display:flex;
     justify-content: center;
     padding:20px ;
     margin:20px;
     border:1px solid gray;
 }
 .main__importExcel button,.main__importExcel input{ 
     padding:5px;
     border-radius: 5px;
     margin:10px
 }
 .main__importExcel button{
     background-color:green;
     color:white;
     cursor:pointer;
 }
 .main__importExcel input .success{
     color:green;
 }
 .main__importExcel input .error{
     color:green;
 }
</style>
