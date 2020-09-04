<template>
    <div id="header">
        <div class="main__container">
            <div class="main__left">
                <h1>Notification System</h1>
            </div> 
            <div class="main__right">
                <ul class="navs">
                    <li>
                        <router-link to="/">
                            <span class="material-icons">
                                personal_video 
                            </span>
                        </router-link> 
                    </li>
                    <!-- <li>
                        <router-link to="/Notification">
                            <span class="notif_number">
                            20
                            </span> 
                            <span class="material-icons">
                                notifications 
                            </span> 
                        </router-link>
                    </li> -->
                    <li><router-link to="/import">Export</router-link></li> 
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    * {
        margin:0px;
        padding:0;
        list-style: none;
        text-decoration:none;
        color:black; 
    }
    @media(max-width:900px){
        #header{
            padding:0px;
            margin:0px; 
            top:0px;
            
        }
        #header .main__container{
        /* background-color:red; */
        display:flex;
        justify-content: space-between;
        border-bottom:1px solid gray;
        box-shadow: 0px 0px 1.5px gray;
        padding: 5px 0;
        font-size:normal;
        margin:0px;
        
        }
        #header .main__container .main__left{
            display:flex;
            text-align: center;
            align-items:center;
            /* padding:5px; */
        }
        #header .main__container .main__left h1{
             font-size: 14px;
        }
        #header .main__container .main__right {
            padding:0;
        }
        #header .main__container .main__right ul.navs{
            display:flex; 
            margin:5px 0px;
        }
         #header .main__container .main__right ul.navs li{
             padding:0px 5px; 
             position:relative; 
         }
         
         #header .main__container .main__right ul.navs li span{
             padding-left:5px;
             font-size:18px;
         }
         #header .main__container .main__right ul.navs li .notif_number{
             position:absolute;
             /* background-color:blue; */
             border-radius:100%;
             font-size:14px;

             color:blue;
             width:13px; 
             top:-8px;
             right:-1px;
         }
    }
     @media(min-width:900px){
        #header .main__container{ 
            display:flex;
            justify-content: space-between;
            border-bottom:1px solid gray;
            box-shadow: 0 0px 2px gray;
            padding: 5px 0;
        
        }
        #header .main__container .main__left{
            font-size:.7rem;
            padding:10px;
            display:flex;
            align-content: center;
        }
        #header .main__container .main__right {
            padding:0 30px;
            /* width:50%;  */
        }
        #header .main__container .main__right .NavBurgerBar{
            display:none;
        }
        #header .main__container .main__right ul.navs{
            display:flex; 
            margin:10px 0px;
            font-size: 18px;
        }
         #header .main__container .main__right ul.navs li{
             padding:0px 10px; 
             position:relative;
               
         }
         #header .main__container .main__right ul.navs li span{
             padding-left:10px;
         }
         #header .main__container .main__right ul.navs li .notif_number{
             position:absolute;
             /* background-color:blue; */
             border-radius:100%;
             color:blue;
             width:13px; 
             top:-6px;
             right:2px;
         }
         
    }

</style>