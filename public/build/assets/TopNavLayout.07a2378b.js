import{E as f,H as m,L as _,G as d,o as r,e as l,b as o,a as e,w as s,t as c,F as b,n as p,v as w,x as y,f as g,c as u,m as v,r as x,i}from"./app.3a833c91.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const $=f({props:{title:String},components:{Head:m,Link:_},methods:{logout(){!confirm("Yakin akan Keluar?")||this.$inertia.post(route("logout"))}}}),C={class:"flex flex-col h-screen"},z={class:"sticky top-0 z-50 w-full flex flex-wrap items-center justify-between p-5 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light"},H={class:"container-fluid w-full flex flex-wrap items-center justify-between"},S=e("button",{class:"navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bars",class:"w-6",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})])],-1),j={class:"collapse navbar-collapse flex-grow items-center",id:"navbarSupportedContent"},L=["src"],M={class:"ml-2"},N={class:"navbar-nav flex flex-col pl-0 list-style-none mr-auto"},B={class:"nav-item p-1"},V=i(" Home "),A={class:"nav-item p-1"},D=i(" Dashboard "),P={key:0,class:"flex items-center relative"},E=e("span",{class:"mx-2"},"Pesanan Saya",-1),F={class:"dropdown relative"},G={class:"text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center",href:"#",id:"dropdownMenuNotification",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},T=e("span",{class:"text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"},"1",-1),U={class:"dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0","aria-labelledby":"dropdownMenuNotification"},K=i("Action"),R={class:"dropdown relative ml-5"},Y={class:"dropdown-toggle flex items-center hidden-arrow",href:"#",id:"dropdownMenuUser",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},q=["src"],I=["src"],J=["src"],O={class:"capitalize ml-2 hover:text-blue-600"},Q={class:"dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0","aria-labelledby":"dropdownMenuUser"},W={class:"mr-2"},X=i(" Profile "),Z={class:"mr-2"},ee=i(" Profile "),te={class:"mr-2"},oe=i(" Alamat "),ae={class:"mr-2"},se=i(" Logout "),re={key:1,class:"flex items-center relative"},ne=e("span",{class:"mx-2"},"Login",-1),le=e("span",{class:"mx-2"},"Registrasi",-1),ie={class:"bg-gray-100 flex-1 overflow-y-auto pb-10"},pe={class:"text-md p-5 text-right shadow-lg"},de=e("span",{class:"text-sm ml-2"},"Copyright@2022",-1);function ce(t,ge,ue,he,fe,me){const h=d("Head"),a=d("Link"),n=d("font-awesome-icon");return r(),l("div",null,[o(h,{title:t.title},null,8,["title"]),e("div",C,[e("nav",z,[e("div",H,[S,e("div",j,[o(a,{class:"flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1",href:t.route("home")},{default:s(()=>[e("img",{src:t.$page.props.asset+"/logo-cv.webp",style:{height:"20px"},alt:"logo-cv",loading:"lazy"},null,8,L),e("span",M,c(t.$page.props.app.name),1)]),_:1},8,["href"]),e("ul",N,[t.$page.props.user?(r(),l(b,{key:0},[e("li",B,[o(a,{class:p(["nav-link text-gray-500 hover:text-blue-400",t.route().current("home")?"text-blue-600":""]),href:t.route("home")},{default:s(()=>[V]),_:1},8,["class","href"])]),w(e("li",A,[o(a,{class:p(["nav-link text-gray-500 hover:text-blue-400",t.route().current("dashboard")?"text-blue-600":""]),href:t.route("dashboard")},{default:s(()=>[D]),_:1},8,["class","href"])],512),[[y,t.$page.props.user.role=="karyawan"||t.$page.props.user.role=="pemilik"]])],64)):g("",!0)])]),t.$page.props.user?(r(),l("div",P,[o(a,{class:p(["text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4",t.route().current("pesan-jasa.*")?"text-blue-600":""]),href:t.route("pesan-jasa.index")},{default:s(()=>[e("span",null,[o(n,{icon:"fa-solid fa-arrow-right-arrow-left"})]),E]),_:1},8,["class","href"]),e("div",F,[e("a",G,[e("span",null,[o(n,{icon:"fa-solid fa-bell"})]),T]),e("ul",U,[e("li",null,[o(a,{class:"dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"},{default:s(()=>[K]),_:1})])])]),e("div",R,[e("a",Y,[t.$page.props.user.role=="pengguna"&&t.$page.props.user.profile_photo_path!=null?(r(),l("img",{key:0,src:t.$page.props.asset+"/pengguna/"+t.$page.props.user.profile_photo_path,class:"rounded-full",style:{height:"25px",width:"25px"},alt:"",loading:"lazy"},null,8,q)):g("",!0),t.$page.props.user.role=="karyawan"&&t.$page.props.user.profile_photo_path!=null?(r(),l("img",{key:1,src:t.$page.props.asset+"/karyawan/foto/"+t.$page.props.user.profile_photo_path,class:"rounded-full",style:{height:"30px",width:"30px","object-fit":"cover","object-position":"top"},alt:"",loading:"lazy"},null,8,I)):(r(),l("img",{key:2,src:t.$page.props.asset+"/pengguna/Guest.jpg",class:"rounded-full",style:{height:"25px",width:"25px"},alt:"",loading:"lazy"},null,8,J)),e("span",O,c("Hi, "+t.$page.props.user.name),1)]),e("ul",Q,[e("li",null,[t.$page.props.user.role=="pelanggan"?(r(),u(a,{key:0,class:"dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100",href:t.route("profile-pelanggan.show")},{default:s(()=>[e("span",W,[o(n,{icon:"fa-solid fa-user"})]),X]),_:1},8,["href"])):(r(),u(a,{key:1,class:"dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100",href:t.route("profile-karyawan.show")},{default:s(()=>[e("span",Z,[o(n,{icon:"fa-solid fa-user"})]),ee]),_:1},8,["href"]))]),e("li",null,[t.$page.props.user.role=="pelanggan"?(r(),u(a,{key:0,class:"dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100",href:t.route("alamat-pelanggan.index")},{default:s(()=>[e("span",te,[o(n,{icon:"fa-solid fa-map-location-dot"})]),oe]),_:1},8,["href"])):g("",!0)]),e("li",null,[o(a,{class:"dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100",onClick:v(t.logout,["prevent"])},{default:s(()=>[e("span",ae,[o(n,{icon:"fa-solid fa-right-from-bracket"})]),se]),_:1},8,["onClick"])])])])])):(r(),l("div",re,[o(a,{class:p(["text-gray-500 hover:text-blue-400",t.route().current("login")?"text-blue-600":""]),href:t.route("login")},{default:s(()=>[e("span",null,[o(n,{icon:"fa-solid fa-right-to-bracket"})]),ne]),_:1},8,["class","href"]),o(a,{class:p(["text-gray-500 hover:text-blue-400",t.route().current("register")?"text-blue-600":""]),href:t.route("register")},{default:s(()=>[e("span",null,[o(n,{icon:"fa-solid fa-person-chalkboard"})]),le]),_:1},8,["class","href"])]))])]),e("main",null,[e("div",ie,[x(t.$slots,"default")])]),e("footer",pe,[e("strong",null,c(t.$page.props.app.name),1),de])])])}const we=k($,[["render",ce]]);export{we as A};
