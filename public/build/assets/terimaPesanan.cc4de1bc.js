import{E as k,G as p,o as n,c as f,w as c,L as v,b as y,i as $,t as a,a as s,m as g,e as i,f as z,v as d,x as m,h as b,F as u,n as l,K as N}from"./app.b6dea2fd.js";import{A}from"./SideNavLayout.4a2b4e68.js";import{A as B}from"./ActionMessage.c49ab3d5.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const C=k({props:{pesanan:Object,teknisi:Object},components:{AppLayout:A,Link:v,ActionMessage:B},data(){return{teknisi_count:1,form:this.$inertia.form({tanggal_tugas:this.pesanan.tanggal_booking,teknisi_nik:[]})}},methods:{submit(){this.form.post(route("pesanan-pelanggan.alokasi_teknisi",this.pesanan.no_pesanan))}}}),V={class:"flex justify-center"},w={class:"block rounded-lg shadow-lg bg-white min-w-full"},P=s("div",{class:"py-3 px-6 border-b border-gray-300"},[s("h5",{class:"text-gray-900 text-xl font-medium"}," Penugasan Teknisi ")],-1),S={class:"p-5"},T={class:"grid grid-cols-2 space-x-4"},j={class:"p-5"},K={key:0},M={class:"grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"},D=s("div",{class:"font-semibold"}," Nomor Pesanan ",-1),E={class:"grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"},F=s("div",{class:"font-semibold"}," Kategori Layanan ",-1),O={class:"capitalize"},U={class:"grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"},G=s("div",{class:"font-semibold"}," Nama Layanan ",-1),H={class:"capitalize"},J={class:"grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"},q=s("div",{class:"font-semibold"}," Jenis Properti ",-1),I={class:"capitalize"},Q={class:"grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"},R=s("div",{class:"font-semibold"}," Tgl Booking ",-1),W={class:"capitalize"},X={class:"grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-gray-300"},Y=s("div",{class:"font-semibold"},"Alamat",-1),Z={class:"capitalize"},x=s("div",{class:"form-label mb-2 text-gray-700"},[s("strong",null,"Alokasi Teknisi")],-1),ss=["onUpdate:modelValue"],es=["selected","value","disabled"],as={class:"capitalize"},os={class:"mt-3"},ts=["disabled"],ns={class:"grid grid-cols-2"},is=s("div",null,[s("button",{type:"button",class:"px-6 py-2.5 text-sm bg-gray-200 text-blue-500 rounded"}," Kembali ")],-1),rs={class:"text-right"},ds=["disabled"];function ls(e,r,ps,cs,gs,ms){const _=p("action-message"),h=p("app-layout");return n(),f(h,{title:"Buat Laporan"},{default:c(()=>[y(_,{on:e.$page.props.flash.message},{default:c(()=>[$(a(e.$page.props.flash.message),1)]),_:1},8,["on"]),s("div",V,[s("div",w,[P,s("div",S,[s("form",{onSubmit:r[1]||(r[1]=g((...o)=>e.submit&&e.submit(...o),["prevent"]))},[s("div",T,[s("div",j,[e.pesanan?(n(),i("div",K,[s("div",M,[D,s("div",null,a(e.pesanan.no_pesanan),1)]),s("div",E,[F,s("div",O,a(e.pesanan.nama_kategori),1)]),s("div",U,[G,s("div",H,a(e.pesanan.nama_layanan),1)]),s("div",J,[q,s("div",I,a(e.pesanan.properti),1)]),s("div",Q,[R,s("div",W,a(e.pesanan.tanggal_booking),1)]),s("div",X,[Y,s("div",Z,[s("div",null," Nama : "+a(e.pesanan.atas_nama),1),s("div",null," No. Hp : "+a(e.pesanan.no_hp),1),s("div",null," Alamat : "+a(e.pesanan.alamat_lengkap),1),s("div",null," Patokan : "+a(e.pesanan.patokan),1)])])])):z("",!0)]),d(s("div",null,[s("div",null,[x,(n(!0),i(u,null,b(e.teknisi_count,o=>(n(),i("div",{class:"form-group my-5",key:o},[d(s("select",{class:l(["form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",e.form.errors.teknisi_nik&&!e.form.teknisi_nik[o-1]?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),"onUpdate:modelValue":t=>e.form.teknisi_nik[o-1]=t},[(n(!0),i(u,null,b(e.teknisi,t=>(n(),i("option",{class:"capitalize",key:t,selected:t.nik==e.form.teknisi_nik[o-1],value:t.nik,disabled:t.penugasan=="di tugaskan"},[s("span",as,a(t.nik+" : "+t.nama+" ("+t.penugasan+")"),1)],8,es))),128))],10,ss),[[N,e.form.teknisi_nik[o-1]]]),d(s("div",{class:"text-red-700 text-sm mt-1"},a(e.form.errors.teknisi_nik),513),[[m,e.form.errors.teknisi_nik&&!e.form.teknisi_nik[o-1]]])]))),128)),s("div",os,[s("button",{onClick:r[0]||(r[0]=g(o=>e.$emit(e.teknisi_count++),["prevent"])),class:l(["px-4 py-1 5 bg-blue-500 text-gray-50 text-xs rounded-lg",{"opacity-25":e.teknisi_count==e.teknisi.length}]),disabled:e.teknisi_count==e.teknisi.length}," Tambah Baris ",10,ts)])])],512),[[m,e.pesanan]])]),s("div",ns,[is,s("div",rs,[s("button",{type:"submit",class:l(["px-6 py-2.5 text-sm bg-blue-500 text-gray-50 rounded",{"opacity-25":e.form.processing}]),disabled:e.form.processing}," Selesai ",10,ds)])])],32)])])])]),_:1})}const ks=L(C,[["render",ls]]);export{ks as default};
