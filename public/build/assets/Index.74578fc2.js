import{E as y,L as w,_ as h,G as c,o as n,c as k,w as u,b as a,i as p,t as i,a as t,v as d,I as v,x,m,e as l,h as $,F as C}from"./app.3a833c91.js";import{A}from"./SideNavLayout.459f0750.js";import{P as D}from"./Pagination.41a85e9a.js";import{A as P}from"./ActionMessage.c55be955.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const S=y({props:{karyawan:Object},components:{AppLayout:A,Pagination:D,ActionMessage:P,Link:w},data(){return{search:""}},methods:{addData(){this.$inertia.get(route("akses-user.create"))},searchData:h.throttle(function(){this.$inertia.replace(this.route("akses-user.index",{search:this.search}))}),clearSearch:h.throttle(function(){this.$inertia.replace(this.route("akses-user.index",{search:""})),this.search=""}),resetPassword(e){!confirm("Reset password user ini?")||this.$inertia.post(route("akses-user.reset-password",{id:e}))}}}),j={class:"flex justify-center"},B={class:"block rounded-lg shadow-lg bg-white min-w-full"},L=t("div",{class:"py-3 px-6 border-b border-gray-300"},[t("h5",{class:"text-gray-900 text-xl font-medium"}," Akses User ")],-1),V={class:"p-6 overflow-hidden"},E={class:"grid grid-cols-2"},I={class:"flex justify-start"},M={class:"mb-3 xl:w-96"},T={class:"input-group relative flex flex-wrap items-stretch w-full mb-4 rounded"},U={class:"input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"},z={class:"flex space-x-2 justify-end"},F={class:"mr-2"},K=p(" Tambah Akses "),R={class:"flex flex-col"},G={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},O={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},q={class:"overflow-x-auto overflow-y-hidden"},H={class:"min-w-full"},J={class:"bg-white border-b"},Q=t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"}," # ",-1),W=t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"}," NIK ",-1),X=t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"}," Nama ",-1),Y=t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"}," Email ",-1),Z=t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"}," Akses ",-1),tt={scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"},et={class:"px-6 py-4 text-sm font-medium text-gray-900"},st={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},ot={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},at={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap lowercase space-x-3"},nt={key:0,class:"text-xs inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-yellow-500 text-white rounded-full"},it={key:1,class:"text-xs inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-green-500 text-white rounded-full"},rt={class:"text-sm text-gray-900 font-light px-6 py-4"},lt={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},ct=["onClick"],dt={key:1,class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},pt=t("td",{class:"px-6 py-3 text-sm font-medium text-gray-900 text-center",colspan:"5"}," No data record. ",-1),ht=[pt],ut={class:"py-3 px-6 border-t border-gray-300 text-gray-600"};function xt(e,o,mt,ft,gt,_t){const f=c("action-message"),r=c("font-awesome-icon"),g=c("Pagination"),_=c("app-layout");return n(),k(_,{title:"Akses User"},{default:u(()=>[a(f,{on:e.$page.props.flash.message},{default:u(()=>[p(i(e.$page.props.flash.message),1)]),_:1},8,["on"]),t("div",j,[t("div",B,[L,t("div",V,[t("div",E,[t("div",I,[t("div",M,[t("div",T,[d(t("input",{type:"text",class:"form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Cari","aria-label":"Cari","onUpdate:modelValue":o[0]||(o[0]=s=>e.search=s),onKeyup:o[1]||(o[1]=(...s)=>e.searchData&&e.searchData(...s))},null,544),[[v,e.search]]),d(t("button",{type:"button",class:"input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded text-blue-700",onClick:o[2]||(o[2]=m((...s)=>e.clearSearch&&e.clearSearch(...s),["prevent"]))},[t("span",null,[a(r,{icon:"fa-solid fa-xmark"})])],512),[[x,e.search]]),t("span",U,[t("span",null,[a(r,{icon:"fa-solid fa-magnifying-glass"})])])])])]),t("div",z,[t("div",null,[t("button",{type:"button",onClick:o[3]||(o[3]=(...s)=>e.addData&&e.addData(...s)),class:"inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"},[t("span",F,[a(r,{icon:"fa-solid fa-plus"})]),K])])])]),t("div",R,[t("div",G,[t("div",O,[t("div",q,[t("table",H,[t("thead",J,[t("tr",null,[Q,W,X,Y,Z,t("th",tt,[a(r,{icon:"fa-solid fa-gears"})])])]),t("tbody",null,[e.karyawan.data.length?(n(!0),l(C,{key:0},$(e.karyawan.data,(s,b)=>(n(),l("tr",{class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 capitalize text-center",key:s.id},[t("td",et,i(++b),1),t("td",st,i(s.nik),1),t("td",ot,i(s.nama_lengkap),1),t("td",at,[p(i(s.email)+" ",1),s.email_verified_at==null?(n(),l("span",nt,"email belum verfikasi")):(n(),l("span",it,"sudah verfikasi"))]),t("td",rt,i(s.role),1),t("td",lt,[t("button",{type:"button",class:"text-sm inline-block p-1.5 leading-none bg-yellow-500 text-white rounded mx-1",title:"Reset Password",onClick:m(bt=>e.resetPassword(s.nik),["prevent"])},[a(r,{icon:"fa-solid fa-rotate-left"})],8,ct)])]))),128)):(n(),l("tr",dt,ht))])])])])])])]),d(t("div",ut,[a(g,{links:e.karyawan.links},null,8,["links"])],512),[[x,e.karyawan.links.length>3]])])])]),_:1})}const Ct=N(S,[["render",xt]]);export{Ct as default};
