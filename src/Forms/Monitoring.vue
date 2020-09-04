<template>
    <div class="main__monitoring">
         
        <div class="center">
             <div class="search">
                <input type="text" name="search" id="search" placeholder="Search by Account Name .." v-model="search">
            </div>
             <div class="card"  v-for="data in filterDatas" :key="data">
                 <div class="card-header">
                    <h1>Owner : {{data.owner}}     ||    Account Name : {{data.acct_name}}</h1>
                 </div>
                 <div class="card-body">
                     <div class="card-items">
                        <div class="card-items-data">
                             <p>Asp start date : {{data.asp_start_date}}</p>
                             <p>Asp end date : {{data.asp_end_date}}</p>
                             <p>Asp price : {{data.asp_price}}</p>
                             <p>Status : {{data.status}}</p>
                             <p>Type of support : {{data.type_of_support}}</p>
                             <p>Sap system audit : {{data.sap_system_audit}}</p>
                             <p>Software audit : {{data.software_audit}}</p>
                             <p>Type of server : {{data.type_of_server}}</p>
                             <p>Server av : {{data.server_av}}</p>
                             <p>Client av : {{data.client_av}}</p>
                             <p>Office 365 : {{data.office_365}}</p>
                             <p>Firewall : {{data.firewall}}</p>
                             <p>Backup storage : {{data.Backup_storage}}</p>
                             <p>Ups : {{data.Ups}}</p>
                             <p>Veritas : {{data.Veritas}}</p>
                             <p>Infra recommendations : {{data.Infra_recommendations}}</p>
                             <p>Product inquiry : {{data.product_inquiry}}</p>
                             <p>Client type : {{data.Client_type}}</p>
                             <p>Remarks : {{data.Remarks}}</p>
                             <p>Software Version : {{data.software_version}}</p> 
                        </div>
                         <div class="card-items-data">
                             <p>Account Creation Date : {{data.acct_creation_date}}</p> 
                             <p>Account Type : {{data.acct_type}}</p>
                             <p>Branch : {{data.branch}}</p>
                             <p>Reseller : {{data.Reseller}}</p>
                             <p>Industry : {{data.industry}}</p>
                             <p>Size : {{data.size}}</p>
                             <p>Address : {{data.address}}</p>
                             <p>Contact Person : {{data.contact_person}}</p>
                             <p>Phone : {{data.phone}}</p>
                             <p>Email : {{data.email}}</p> 
                             <p>bp number : {{data.email}}</p>
                             <p>Batch : {{data.email}}</p>
                             <p>Licience : {{data.licience}}</p> 
                         </div>  
                     </div>
                 </div>
             </div>
        </div>
        <div class="right">
            <div class="title">
                <h2>Notification</h2>
            </div>
            <div class="notification">
                <div class="notif_data" v-for="item in notifDatas" :key="item.id">
                    <h1>Hello Notif</h1>
                    <p>{{item.data}}</p>
                </div> 
                 
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default { 
  data(){
      return{ 
          notifNo:0,
          notifDatas:[],
          getRecords:[],
          filterData:[],
          search:''
      };
  },
  methods:{ 
      
      getNotify(){
            axios.get("https://arcane-sands-90385.herokuapp.com/api/getNotify" 
            ).then(response=>{
              this.notifNo = response.data.count;
              this.notifDatas = response.data.data;
          }).catch(error => {
              console.log(error.response.data.message); 
          })
      },
      getAlldata(){
          axios.get("https://arcane-sands-90385.herokuapp.com/api/ShowAll" 
            ).then(response=>{ 
            //   console.log(response.data);
              this.getRecords = response.data
          }).catch(error => {
              console.log(error.response.data.message); 
          })
      }
    },
    mounted(){
        this.getNotify();
        this.getAlldata();
    },
    computed:{
        filterDatas:function(){ 
            // console.log(this.search);
             let data =  this.getRecords.filter(datas => {  
                   return datas.acct_name.toLowerCase().match(this.search.toLowerCase());
            });  
            
            // console.log(data);  
            return data;                       
        }
    }

}
</script>
<style scoped>
    *{
        margin:0px;
        padding:0px;
        font-size:13px;
        font-weight: normal;
    }
    .main__monitoring{
        display:grid;
        grid-template-columns: 75% 20%; 
        /* justify-items: center; */
    }
    .main__monitoring .center .search{
        display:flex;
        justify-content: center;
        width:1fr;
        background-color:#1877f2;
    }
    .main__monitoring .center .search input{
        width:400px;
        padding:5px 0px;
        margin:5px 0px;
    }
    
    
    .main__monitoring .center .card{
       border-radius: 10px;
        margin:15px;
        padding:15px; 
        border:1px solid gray;
        padding:10px;
        box-shadow: 0 0px 2px gray; 
        /* background-color:red; */
    }
    .main__monitoring .center .card .card-header{
        box-shadow: 0 0px 2px gray;  
        padding:10px;
    }
    .main__monitoring .center .card .card-body{
        box-shadow: 0 0px 2px gray;
        padding:10px;     
    } 
    .main__monitoring .center .card .card-body .card-items{
        display:flex;
    }
    .main__monitoring .right{ 
        position:fixed;
        bottom:0px;
        right:5px;
        width:25%;
        height: 85vh;
        /* border-radius: 10px;  */
        /* background-color:green; */
        border-bottom:1px solid gray;
        box-shadow: 0 0px 2px gray;
        overflow:auto;
    }
    .main__monitoring .right .title{
        background-color:blue;  
        height: 30px;
    }
   
    .main__monitoring .right .notification .notif_data{ 
        padding:5px; 
        border-bottom:1px solid gray;
        box-shadow: 0 0px 2px gray;
    }
    .main__monitoring .right .notification .notif_data:hover{
        background-color:gray;
        cursor:pointer;
    }
</style>