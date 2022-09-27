import{E as S,H as z,L,G as _,o as c,e as g,b as s,a as e,c as x,w as n,t as o,n as r,v as i,x as p,m as w,r as N,i as h,h as $,F as v}from"./app.59358596.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";import{A}from"./ActionMessage.fac309e1.js";import{h as k}from"./moment.9709ab41.js";const M=S({props:{title:String},components:{Head:z,Link:L},methods:{logout(){!confirm("Yakin akan Keluar?")||this.$inertia.post(route("logout"))}}}),C={class:"w-60 h-screen shadow-md bg-white fixed py-5",id:"sidenavSecExample"},E={class:"pt-4 pb-2 px-6"},T={class:"flex items-center"},B={class:"shrink-0"},H=["src"],Y={class:"grow ml-3"},q={class:"text-sm font-semibold text-blue-600 capitalize"},K={class:"text-xs text-gray-600"},R={class:"flex items-center"},F={class:"shrink-0"},J=["src"],V={class:"grow ml-3"},G={class:"text-sm font-semibold text-blue-600 capitalize"},I={class:"text-xs text-gray-600"},O=e("hr",{class:"my-2"},null,-1),U={class:"relative px-1"},Q={class:"relative"},W={class:"mr-3"},X=e("span",null,"Dashboard",-1),Z={class:"relative",id:"sidenavProduk"},ee={class:"mr-3"},ae=e("span",null,"Daftar Layanan",-1),se={class:"ml-auto"},te={class:"relative"},oe={class:"mr-3"},re=e("span",null,"Kategori Layanan",-1),ne={class:"relative"},le={class:"mr-3"},ie=e("span",null,"Jenis Layanan",-1),pe={class:"relative",id:"sidenavSparepart"},de={class:"mr-3"},ce=e("span",null,"Sparepart",-1),ue={class:"ml-auto"},he={class:"relative"},_e={class:"mr-3"},be=e("span",null,"Daftar Sparepart",-1),ge={class:"relative"},me={class:"mr-3"},fe=e("span",null,"Stok Sparepart",-1),ye={class:"relative",id:"sidenavPesanan"},ve={class:"mr-3"},xe=e("span",null,"Pesan Layanan",-1),we={class:"ml-auto"},$e={class:"relative"},ke={class:"mr-3"},Se=e("span",null,"Daftar Pesanan",-1),Le={class:"relative"},Pe={class:"mr-3"},je=e("span",null,"Pesanan Masuk",-1),De={class:"relative",id:"sidenavLaporan"},ze={class:"flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer","data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavLaporan","aria-expanded":"false","aria-controls":"collapseSidenavLaporan"},Ne={class:"mr-3"},Ae=e("span",null,"Laporan",-1),Me={class:"ml-auto"},Ce={class:"relative"},Ee={class:"mr-3"},Te=e("span",null,"Lihat Laporan",-1),Be={class:"relative"},He={class:"mr-3"},Ye=e("span",null,"Buat Laporan",-1),qe={class:"relative"},Ke={class:"mr-3"},Re=e("span",null,"Data Karyawan",-1),Fe={class:"relative"},Je={class:"mr-3"},Ve=e("span",null,"User Akses",-1),Ge={class:"relative"},Ie={class:"mr-3"},Oe=e("span",null,"Data Pelanggan",-1),Ue={class:"relative pt-5"},Qe={class:"mr-3"},We=e("span",null,"Logout",-1),Xe={class:"text-center bottom-0 absolute w-full"},Ze=e("hr",{class:"m-0"},null,-1),ea={class:"py-2 text-md text-gray-700"},aa=e("br",null,null,-1),sa=e("span",{class:"text-sm"},"Copyright @2022",-1),ta={class:"ml-60 p-2 lg:p-8 bg-gray-100 static overflow-hidden min-h-screen"};function oa(a,d,m,f,j,D){const y=_("Head"),l=_("Link"),t=_("font-awesome-icon");return c(),g("div",null,[s(y,{title:a.title},null,8,["title"]),e("aside",C,[e("div",E,[a.$page.props.user.role=="karyawan"?(c(),x(l,{key:0,href:a.route("profile-karyawan.show")},{default:n(()=>[e("div",T,[e("div",B,[e("img",{src:a.$page.props.asset+"/karyawan/foto/"+a.$page.props.user.profile_photo_path,class:"rounded-full w-10 h-10",alt:"Avatar",style:{"object-fit":"cover","object-position":"top"}},null,8,H)]),e("div",Y,[e("p",q,o(a.$page.props.user.name),1),e("p",K,o(a.$page.props.user.role),1)])])]),_:1},8,["href"])):(c(),x(l,{key:1},{default:n(()=>[e("div",R,[e("div",F,[e("img",{src:a.$page.props.asset+"/pengguna/Guest.jpg",class:"rounded-full w-10 h-10",alt:"Avatar",style:{"object-fit":"cover","object-position":"top"}},null,8,J)]),e("div",V,[e("p",G,o(a.$page.props.user.name),1),e("p",I,o(a.$page.props.user.role),1)])])]),_:1}))]),O,e("ul",U,[e("li",Q,[s(l,{href:a.route("dashboard"),class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("dashboard")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:n(()=>[e("span",W,[s(t,{icon:"fa-solid fa-gauge"})]),X]),_:1},8,["href","class"])]),i(e("li",Z,[e("a",{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer",a.route().current("kategori-layanan.*")||a.route().current("jenis-layanan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavProduk","aria-expanded":"false","aria-controls":"collapseSidenavProduk"},[e("span",ee,[s(t,{icon:"fa-brands fa-servicestack"})]),ae,e("span",se,[s(t,{icon:"fa-solid fa-angle-down"})])],2),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("kategori-layanan.*")||a.route().current("jenis-layanan.*")?"show":""]),id:"collapseSidenavProduk","aria-labelledby":"sidenavProduk","data-bs-parent":"#sidenavSecExample"},[e("li",te,[s(l,{href:a.route("kategori-layanan.index"),class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("kategori-layanan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:n(()=>[e("span",oe,[s(t,{icon:"fa-solid fa-rectangle-list"})]),re]),_:1},8,["href","class"])]),e("li",ne,[s(l,{href:a.route("jenis-layanan.index"),class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("jenis-layanan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:n(()=>[e("span",le,[s(t,{icon:"fa-solid fa-rectangle-list"})]),ie]),_:1},8,["href","class"])])],2)],512),[[p,a.$page.props.akses.admin||a.$page.props.akses.pemilik]]),e("li",pe,[e("a",{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer",a.route().current("sparepart.*")||a.route().current("stok-sparepart.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavSparepart","aria-expanded":"false","aria-controls":"collapseSidenavSparepart"},[e("span",de,[s(t,{icon:"fa-solid fa-swatchbook"})]),ce,e("span",ue,[s(t,{icon:"fa-solid fa-angle-down"})])],2),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("sparepart.*")||a.route().current("stok-sparepart.*")?"show":""]),id:"collapseSidenavSparepart","aria-labelledby":"sidenavSparepart","data-bs-parent":"#sidenavSecExample"},[i(e("li",he,[s(l,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("sparepart.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),href:a.route("sparepart.index"),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:n(()=>[e("span",_e,[s(t,{icon:"fa-solid fa-rectangle-list"})]),be]),_:1},8,["class","href"])],512),[[p,a.$page.props.akses.admin||a.$page.props.akses.pemilik]]),e("li",ge,[s(l,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("stok-sparepart.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),href:a.route("stok-sparepart.index"),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:n(()=>[e("span",me,[s(t,{icon:"fa-solid fa-rectangle-list"})]),fe]),_:1},8,["class","href"])])],2)]),e("li",ye,[e("a",{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer",a.route().current("pesanan-pelanggan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavPesanan","aria-expanded":"false","aria-controls":"collapseSidenavPesanan"},[e("span",ve,[s(t,{icon:"fa-solid fa-arrow-down-up-across-line"})]),xe,e("span",we,[s(t,{icon:"fa-solid fa-angle-down"})])],2),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("pesanan-pelanggan.*")?"show":""]),id:"collapseSidenavPesanan","aria-labelledby":"sidenavPesanan","data-bs-parent":"#sidenavSecExample"},[e("li",$e,[s(l,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("pesanan-pelanggan.daftar-pesanan")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("pesanan-pelanggan.daftar-pesanan")},{default:n(()=>[e("span",ke,[s(t,{icon:"fa-solid fa-rectangle-list"})]),Se]),_:1},8,["class","href"])]),e("li",Le,[s(l,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("pesanan-pelanggan.pesanan-masuk")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("pesanan-pelanggan.pesanan-masuk")},{default:n(()=>[e("span",Pe,[s(t,{icon:"fa-solid fa-rectangle-list"})]),je]),_:1},8,["class","href"])])],2)]),e("li",De,[e("a",ze,[e("span",Ne,[s(t,{icon:"fa-solid fa-book"})]),Ae,e("span",Me,[s(t,{icon:"fa-solid fa-angle-down"})])]),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("laporan-teknisi.*")?"show":""]),id:"collapseSidenavLaporan","aria-labelledby":"sidenavLaporan","data-bs-parent":"#sidenavSecExample"},[e("li",Ce,[s(l,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("laporan-teknisi.index")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("laporan-teknisi.index")},{default:n(()=>[e("span",Ee,[s(t,{icon:"fa-solid fa-rectangle-list"})]),Te]),_:1},8,["class","href"])]),i(e("li",Be,[s(l,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("laporan-teknisi.create")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("laporan-teknisi.create")},{default:n(()=>[e("span",He,[s(t,{icon:"fa-solid fa-rectangle-list"})]),Ye]),_:1},8,["class","href"])],512),[[p,a.$page.props.akses.teknisi||a.$page.props.akses.pemilik]])],2)]),i(e("li",qe,[s(l,{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("karyawan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("karyawan.index")},{default:n(()=>[e("span",Ke,[s(t,{icon:"fa-solid fa-id-card"})]),Re]),_:1},8,["class","href"])],512),[[p,a.$page.props.akses.admin||a.$page.props.akses.pemilik]]),i(e("li",Fe,[s(l,{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("akses-user.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("akses-user.index")},{default:n(()=>[e("span",Je,[s(t,{icon:"fa-solid fa-user-cog"})]),Ve]),_:1},8,["class","href"])],512),[[p,a.$page.props.akses.admin||a.$page.props.akses.pemilik]]),i(e("li",Ge,[s(l,{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("pelanggan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("pelanggan.index")},{default:n(()=>[e("span",Ie,[s(t,{icon:"fa-solid fa-users"})]),Oe]),_:1},8,["class","href"])],512),[[p,a.$page.props.akses.admin||a.$page.props.akses.pemilik]]),e("li",Ue,[s(l,{class:"flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out","data-mdb-ripple":"true","data-mdb-ripple-color":"primary",onClick:d[0]||(d[0]=w(u=>a.logout(),["prevent"]))},{default:n(()=>[e("span",Qe,[s(t,{icon:"fa-solid fa-sign-out"})]),We]),_:1})])]),e("div",Xe,[Ze,e("p",ea,[e("strong",null,o(a.$page.props.app.name),1),aa,sa])])]),e("main",null,[e("div",ta,[N(a.$slots,"default")])])])}const ra=P(M,[["render",oa]]),na=S({props:{pesanan:Object,sparepart:Object,biaya_part:String},components:{AppLayout:ra,ActionMessage:A,Moment:k,Link:L},data(){return{progress:!1,id_sparepart:String(this.pesanan.id_sparepart).split(","),qty_sparepart:String(this.pesanan.qty_sparepart).split(",")}},methods:{formatNumber(a){return Intl.NumberFormat().format(a)},formatDate(a){let d=a.substr(0,2),m=a.substr(2,2),f=a.substr(4,4);return k(f+m+d,"YYYYMMDD").locale("ID").format("DD-MM-yyyy")},orderDate(a){return a.substr(3,10)},terimaPesanan(){this.$inertia.post(route("pesanan-pelanggan.terima-pesanan",this.pesanan.no_pesanan))},tolakPesanan(){this.$inertia.post(route("pesanan-pelanggan.tolak-pesanan",this.pesanan.no_pesanan))}}}),la={class:"flex justify-center"},ia={class:"block rounded-lg shadow-lg bg-white min-w-full"},pa=e("div",{class:"py-3 px-6 border-b border-gray-300"},[e("h5",{class:"text-gray-900 text-xl font-medium"},"Lihat Pesanan")],-1),da={class:"p-6 overflow-hidden"},ca={class:"w-full"},ua={class:"flex justify-between"},ha={class:"font-bold"},_a=h(" Tanggal Pesan : "),ba={class:"text-sm font-medium uppercase"},ga={class:"font-bold"},ma=h(" Jadwal Pengerjaan : "),fa={class:"capitalize text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded"},ya={class:"font-bold"},va=h(" No. Pesanan : "),xa={class:"text-sm font-medium"},wa={class:"font-bold"},$a=h(" Status Pesanan : "),ka={class:"capitalize text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded"},Sa={class:"py-5"},La={class:"border-b border-gray-200 shadow overflow-y-auto"},Pa={class:"w-full border text-left"},ja=e("thead",{class:"bg-gray-50 text-center"},[e("tr",{class:"border"},[e("th",{class:"px-4 py-2 text-gray-500"},"#"),e("th",{class:"px-4 py-2 text-gray-500",colspan:"3"}," Keterangan "),e("th",{class:"px-4 py-2 text-gray-500 text-left"},"Harga")])],-1),Da={class:"bg-white"},za={class:"whitespace-nowrap border"},Na=e("th",{class:"px-4 py-2 text-gray-500 bg-gray-50 text-center"}," 1 ",-1),Aa=e("th",{class:"p-2 text-gray-500 bg-gray-50 font-bold"}," Layanan ",-1),Ma=e("td",{class:"p-2"},[e("div",{class:"text-gray-900"},":")],-1),Ca={class:"p-2"},Ea={class:"text-gray-900 capitalize"},Ta=e("td",null,null,-1),Ba={class:"whitespace-nowrap border"},Ha=e("th",{class:"px-4 py-2 text-gray-500 bg-gray-50 text-center"}," 2 ",-1),Ya=e("th",{class:"p-2 text-gray-500 bg-gray-50 font-bold"}," Jenis Layanan ",-1),qa=e("td",{class:"p-2"},[e("div",{class:"text-gray-900"},":")],-1),Ka={class:"p-2"},Ra={class:"text-gray-900 capitalize"},Fa={class:"p-2"},Ja={class:"text-gray-900 capitalize"},Va={class:"whitespace-nowrap border"},Ga=e("th",{class:"px-4 py-2 text-gray-500 bg-gray-50 text-center"}," 3 ",-1),Ia=e("th",{class:"p-2 text-gray-500 bg-gray-50 font-bold"}," Properti ",-1),Oa=e("td",{class:"p-2"},[e("div",{class:"text-gray-900"},":")],-1),Ua={class:"p-2"},Qa={class:"text-gray-900 capitalize"},Wa={class:"p-2"},Xa={class:"text-gray-900 capitalize"},Za={class:"whitespace-nowrap border"},es=e("th",{class:"px-4 py-2 text-gray-500 bg-gray-50 text-center"}," 4 ",-1),as=e("th",{class:"p-2 text-gray-500 bg-gray-50 font-bold"}," Tambahan ",-1),ss=e("td",{class:"p-2"},[e("div",{class:"text-gray-900"},":")],-1),ts={class:"p-2"},os={class:"text-gray-900 capitalize"},rs=["onLoadeddata"],ns={class:"p-2"},ls={class:"text-gray-900 capitalize"},is={class:"whitespace-nowrap border font-bold"},ps=e("th",{class:"px-4 py-2 text-gray-500 bg-gray-50 text-center"}," # ",-1),ds=e("th",{class:"p-2 text-gray-500 bg-gray-50 font-bold",colspan:"3"}," Total Biaya ",-1),cs={class:"p-2"},us={class:"text-gray-900 capitalize bg-gray-50"},hs={class:"flex justify-between p-4"},_s=e("h3",{class:"text-xl"},"Alamat Tujuan :",-1),bs={class:"text-xs list-disc list-inside capitalize"},gs={class:"py-3 px-6 border-t border-gray-300 text-gray-600"},ms={class:"flex items-end justify-end space-x-3"},fs=h(" Pesanan Masuk ");function ys(a,d,m,f,j,D){const y=_("action-message"),l=_("Link"),t=_("app-layout");return c(),x(t,{title:"Lihat Pesanan"},{default:n(()=>[s(y,{on:a.$page.props.flash.message},{default:n(()=>[h(o(a.$page.props.flash.message),1)]),_:1},8,["on"]),e("div",la,[e("div",ia,[pa,e("div",da,[e("div",ca,[e("div",ua,[e("div",null,[e("h6",ha,[_a,e("span",ba,o(a.formatDate(a.orderDate(a.pesanan.no_pesanan))),1)]),e("h6",ga,[ma,e("span",fa,o(a.pesanan.tanggal_booking),1)]),e("h6",ya,[va,e("span",xa,o(a.pesanan.no_pesanan),1)]),e("h6",wa,[$a,e("span",ka,o(a.pesanan.status_pesanan),1)])])]),e("div",Sa,[e("div",La,[e("table",Pa,[ja,e("tbody",Da,[e("tr",za,[Na,Aa,Ma,e("td",Ca,[e("div",Ea,o(a.pesanan.nama_kategori),1)]),Ta]),e("tr",Ba,[Ha,Ya,qa,e("td",Ka,[e("div",Ra,o(a.pesanan.nama_layanan),1)]),e("td",Fa,[e("div",Ja,o("Rp."+a.formatNumber(a.pesanan.harga)),1)])]),e("tr",Va,[Ga,Ia,Oa,e("td",Ua,[e("div",Qa,o(a.pesanan.properti),1)]),e("td",Wa,[e("div",Xa,o("Rp."+a.formatNumber(a.pesanan.biaya_properti)),1)])]),i(e("tr",Za,[es,as,ss,e("td",ts,[e("div",os,[(c(!0),g(v,null,$(a.id_sparepart.length,u=>(c(),g(v,{key:u},[(c(!0),g(v,null,$(a.sparepart,b=>i((c(),g("div",{key:b},[h(o(b.nama_sparepart)+" ",1),e("span",{class:"lowercase text-xs",onLoadeddata:vs=>a.$emit(this.biaya_sparepart+=b.harga*a.qty_sparepart[u-1])},o(a.formatNumber(b.harga)+"x"+a.qty_sparepart[u-1]),41,rs)],512)),[[p,b.id==a.id_sparepart[u-1]]])),128))],64))),128))])]),e("td",ns,[e("div",ls,o("Rp."+a.formatNumber(a.biaya_part)),1)])],512),[[p,a.pesanan.status_pesanan=="selesai"]]),e("tr",is,[ps,ds,e("td",cs,[e("div",us,o("Rp."+a.formatNumber(a.pesanan.total_tagihan)),1)])])])])])]),e("div",hs,[e("div",null,[_s,e("ul",bs,[e("li",null,"Atas Nama : "+o(a.pesanan.atas_nama),1),e("li",null,"No. Hp : "+o(a.pesanan.no_hp),1),e("li",null," Alamat Lengkap : "+o(a.pesanan.alamat_lengkap)+" . "+o(a.pesanan.patokan),1)])])])])]),e("div",gs,[e("div",ms,[s(l,{href:a.route("pesanan-pelanggan.pesanan-masuk"),class:"px-4 py-2 text-sm text-gray-600 bg-gray-100"},{default:n(()=>[fs]),_:1},8,["href"]),i(e("button",{onClick:d[0]||(d[0]=w(u=>a.terimaPesanan(),["prevent"])),class:"px-4 py-2 text-sm text-green-600 bg-green-100"}," Terima Pesanan ",512),[[p,a.pesanan.nik_penerima==null]]),i(e("button",{onClick:d[1]||(d[1]=w(u=>a.tolakPesanan(),["prevent"])),class:"px-4 py-2 text-sm text-red-600 bg-red-100"}," Tolak Pesanan ",512),[[p,a.pesanan.nik_penerima==null]])])])])])]),_:1})}const Ss=P(na,[["render",ys]]);export{Ss as default};