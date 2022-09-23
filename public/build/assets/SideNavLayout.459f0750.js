import{E as f,H as m,L as g,G as d,o as c,e as _,b as s,a as e,c as h,w as l,t as n,n as r,v as i,x as p,m as v,r as y}from"./app.3a833c91.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const x=f({props:{title:String},components:{Head:m,Link:g},methods:{logout(){!confirm("Yakin akan Keluar?")||this.$inertia.post(route("logout"))}}}),k={class:"w-60 h-screen shadow-md bg-white fixed py-5",id:"sidenavSecExample"},$={class:"pt-4 pb-2 px-6"},S={class:"flex items-center"},L={class:"shrink-0"},P=["src"],j={class:"grow ml-3"},D={class:"text-sm font-semibold text-blue-600 capitalize"},E={class:"text-xs text-gray-600"},C={class:"flex items-center"},A={class:"shrink-0"},B=["src"],H={class:"grow ml-3"},z={class:"text-sm font-semibold text-blue-600 capitalize"},K={class:"text-xs text-gray-600"},G=e("hr",{class:"my-2"},null,-1),M={class:"relative px-1"},N={class:"relative"},V={class:"mr-3"},J=e("span",null,"Dashboard",-1),U={class:"relative",id:"sidenavProduk"},Y={class:"mr-3"},q=e("span",null,"Daftar Layanan",-1),F={class:"ml-auto"},I={class:"relative"},O={class:"mr-3"},Q=e("span",null,"Kategori Layanan",-1),R={class:"relative"},T={class:"mr-3"},W=e("span",null,"Jenis Layanan",-1),X={class:"relative",id:"sidenavSparepart"},Z={class:"mr-3"},ee=e("span",null,"Sparepart",-1),ae={class:"ml-auto"},se={class:"relative"},te={class:"mr-3"},re=e("span",null,"Daftar Sparepart",-1),oe={class:"relative"},le={class:"mr-3"},ne=e("span",null,"Stok Sparepart",-1),ie={class:"relative",id:"sidenavPesanan"},pe={class:"mr-3"},de=e("span",null,"Pesan Layanan",-1),ce={class:"ml-auto"},ue={class:"relative"},he={class:"mr-3"},be=e("span",null,"Daftar Pesanan",-1),fe={class:"relative"},me={class:"mr-3"},ge=e("span",null,"Pesanan Masuk",-1),_e={class:"relative",id:"sidenavLaporan"},ve={class:"flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer","data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavLaporan","aria-expanded":"false","aria-controls":"collapseSidenavLaporan"},ye={class:"mr-3"},we=e("span",null,"Laporan",-1),xe={class:"ml-auto"},ke={class:"relative"},$e={class:"mr-3"},Se=e("span",null,"Lihat Laporan",-1),Le={class:"relative"},Pe={class:"mr-3"},je=e("span",null,"Buat Laporan",-1),De={class:"relative"},Ee={class:"mr-3"},Ce=e("span",null,"Data Karyawan",-1),Ae={class:"relative"},Be={class:"mr-3"},He=e("span",null,"User Akses",-1),ze={class:"relative"},Ke={class:"mr-3"},Ge=e("span",null,"Data Pelanggan",-1),Me={class:"relative pt-5"},Ne={class:"mr-3"},Ve=e("span",null,"Logout",-1),Je={class:"text-center bottom-0 absolute w-full"},Ue=e("hr",{class:"m-0"},null,-1),Ye={class:"py-2 text-md text-gray-700"},qe=e("br",null,null,-1),Fe=e("span",{class:"text-sm"},"Copyright @2022",-1),Ie={class:"ml-60 p-2 lg:p-8 bg-gray-100 static overflow-hidden min-h-screen"};function Oe(a,u,Qe,Re,Te,We){const b=d("Head"),o=d("Link"),t=d("font-awesome-icon");return c(),_("div",null,[s(b,{title:a.title},null,8,["title"]),e("aside",k,[e("div",$,[a.$page.props.user.role=="karyawan"?(c(),h(o,{key:0,href:a.route("profile-karyawan.show")},{default:l(()=>[e("div",S,[e("div",L,[e("img",{src:a.$page.props.asset+"/karyawan/foto/"+a.$page.props.user.profile_photo_path,class:"rounded-full w-10 h-10",alt:"Avatar",style:{"object-fit":"cover","object-position":"top"}},null,8,P)]),e("div",j,[e("p",D,n(a.$page.props.user.name),1),e("p",E,n(a.$page.props.user.role),1)])])]),_:1},8,["href"])):(c(),h(o,{key:1},{default:l(()=>[e("div",C,[e("div",A,[e("img",{src:a.$page.props.asset+"/pengguna/Guest.jpg",class:"rounded-full w-10 h-10",alt:"Avatar",style:{"object-fit":"cover","object-position":"top"}},null,8,B)]),e("div",H,[e("p",z,n(a.$page.props.user.name),1),e("p",K,n(a.$page.props.user.role),1)])])]),_:1}))]),G,e("ul",M,[e("li",N,[s(o,{href:a.route("dashboard"),class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("dashboard")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:l(()=>[e("span",V,[s(t,{icon:"fa-solid fa-gauge"})]),J]),_:1},8,["href","class"])]),i(e("li",U,[e("a",{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer",a.route().current("kategori-layanan.*")||a.route().current("jenis-layanan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavProduk","aria-expanded":"false","aria-controls":"collapseSidenavProduk"},[e("span",Y,[s(t,{icon:"fa-brands fa-servicestack"})]),q,e("span",F,[s(t,{icon:"fa-solid fa-angle-down"})])],2),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("kategori-layanan.*")||a.route().current("jenis-layanan.*")?"show":""]),id:"collapseSidenavProduk","aria-labelledby":"sidenavProduk","data-bs-parent":"#sidenavSecExample"},[e("li",I,[s(o,{href:a.route("kategori-layanan.index"),class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("kategori-layanan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:l(()=>[e("span",O,[s(t,{icon:"fa-solid fa-rectangle-list"})]),Q]),_:1},8,["href","class"])]),e("li",R,[s(o,{href:a.route("jenis-layanan.index"),class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("jenis-layanan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:l(()=>[e("span",T,[s(t,{icon:"fa-solid fa-rectangle-list"})]),W]),_:1},8,["href","class"])])],2)],512),[[p,a.$page.props.user.role=="karyawan"&&a.$page.props.karyawan||a.$page.props.user.role=="pemilik"]]),i(e("li",X,[e("a",{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer",a.route().current("sparepart.*")||a.route().current("stok-sparepart.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavSparepart","aria-expanded":"false","aria-controls":"collapseSidenavSparepart"},[e("span",Z,[s(t,{icon:"fa-solid fa-swatchbook"})]),ee,e("span",ae,[s(t,{icon:"fa-solid fa-angle-down"})])],2),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("sparepart.*")||a.route().current("stok-sparepart.*")?"show":""]),id:"collapseSidenavSparepart","aria-labelledby":"sidenavSparepart","data-bs-parent":"#sidenavSecExample"},[e("li",se,[s(o,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("sparepart.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),href:a.route("sparepart.index"),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:l(()=>[e("span",te,[s(t,{icon:"fa-solid fa-rectangle-list"})]),re]),_:1},8,["class","href"])]),e("li",oe,[s(o,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("stok-sparepart.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),href:a.route("stok-sparepart.index"),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary"},{default:l(()=>[e("span",le,[s(t,{icon:"fa-solid fa-rectangle-list"})]),ne]),_:1},8,["class","href"])])],2)],512),[[p,a.$page.props.user.role=="karyawan"&&a.$page.props.karyawan||a.$page.props.user.role=="pemilik"]]),e("li",ie,[e("a",{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer",a.route().current("pesanan-pelanggan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary","data-bs-toggle":"collapse","data-bs-target":"#collapseSidenavPesanan","aria-expanded":"false","aria-controls":"collapseSidenavPesanan"},[e("span",pe,[s(t,{icon:"fa-solid fa-arrow-down-up-across-line"})]),de,e("span",ce,[s(t,{icon:"fa-solid fa-angle-down"})])],2),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("pesanan-pelanggan.*")?"show":""]),id:"collapseSidenavPesanan","aria-labelledby":"sidenavPesanan","data-bs-parent":"#sidenavSecExample"},[e("li",ue,[s(o,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("pesanan-pelanggan.daftar-pesanan")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("pesanan-pelanggan.daftar-pesanan")},{default:l(()=>[e("span",he,[s(t,{icon:"fa-solid fa-rectangle-list"})]),be]),_:1},8,["class","href"])]),e("li",fe,[s(o,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("pesanan-pelanggan.pesanan-masuk")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("pesanan-pelanggan.pesanan-masuk")},{default:l(()=>[e("span",me,[s(t,{icon:"fa-solid fa-rectangle-list"})]),ge]),_:1},8,["class","href"])])],2)]),e("li",_e,[e("a",ve,[e("span",ye,[s(t,{icon:"fa-solid fa-book"})]),we,e("span",xe,[s(t,{icon:"fa-solid fa-angle-down"})])]),e("ul",{class:r(["relative accordion-collapse collapse",a.route().current("laporan-teknisi.*")?"show":""]),id:"collapseSidenavLaporan","aria-labelledby":"sidenavLaporan","data-bs-parent":"#sidenavSecExample"},[e("li",ke,[s(o,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("laporan-teknisi.index")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("laporan-teknisi.index")},{default:l(()=>[e("span",$e,[s(t,{icon:"fa-solid fa-rectangle-list"})]),Se]),_:1},8,["class","href"])]),e("li",Le,[s(o,{class:r(["flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("laporan-teknisi.create")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("laporan-teknisi.create")},{default:l(()=>[e("span",Pe,[s(t,{icon:"fa-solid fa-rectangle-list"})]),je]),_:1},8,["class","href"])])],2)]),i(e("li",De,[s(o,{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("karyawan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("karyawan.index")},{default:l(()=>[e("span",Ee,[s(t,{icon:"fa-solid fa-id-card"})]),Ce]),_:1},8,["class","href"])],512),[[p,a.$page.props.user.role=="karyawan"&&a.$page.props.karyawan||a.$page.props.user.role=="pemilik"]]),i(e("li",Ae,[s(o,{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("akses-user.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("akses-user.index")},{default:l(()=>[e("span",Be,[s(t,{icon:"fa-solid fa-user-cog"})]),He]),_:1},8,["class","href"])],512),[[p,a.$page.props.user.role=="karyawan"&&a.$page.props.karyawan||a.$page.props.user.role=="pemilik"]]),i(e("li",ze,[s(o,{class:r(["flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out",a.route().current("pelanggan.*")?"ripple-surface-primary bg-blue-100 text-blue-700":"text-gray-700"]),"data-mdb-ripple":"true","data-mdb-ripple-color":"primary",href:a.route("pelanggan.index")},{default:l(()=>[e("span",Ke,[s(t,{icon:"fa-solid fa-users"})]),Ge]),_:1},8,["class","href"])],512),[[p,a.$page.props.user.role=="karyawan"&&a.$page.props.karyawan||a.$page.props.user.role=="pemilik"]]),e("li",Me,[s(o,{class:"flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out","data-mdb-ripple":"true","data-mdb-ripple-color":"primary",onClick:u[0]||(u[0]=v(Xe=>a.logout(),["prevent"]))},{default:l(()=>[e("span",Ne,[s(t,{icon:"fa-solid fa-sign-out"})]),Ve]),_:1})])]),e("div",Je,[Ue,e("p",Ye,[e("strong",null,n(a.$page.props.app.name),1),qe,Fe])])]),e("main",null,[e("div",Ie,[y(a.$slots,"default")])])])}const aa=w(x,[["render",Oe]]);export{aa as A};
