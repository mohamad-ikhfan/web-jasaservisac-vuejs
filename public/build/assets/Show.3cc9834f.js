import{E as U,G as h,o as d,c as I,w as y,L as K,b,i as c,t as n,a as o,e as m,m as u,n as s,v as r,x as i,I as l,M as p}from"./app.3a833c91.js";import{A as F}from"./SideNavLayout.459f0750.js";import{A as j}from"./ActionMessage.c55be955.js";import{h as w}from"./moment.9709ab41.js";import{u as V}from"./vue-datepicker.es.21c499a3.js";import{_ as $}from"./_plugin-vue_export-helper.cdc0426e.js";const D=U({props:{karyawan:Object},components:{AppLayout:F,ActionMessage:j,Moment:w,Datepicker:V,Link:K},data(){return{url_foto:null,url_foto_ktp:null,disableInput:!0,disableUploadFoto:!0,disableUploadKtp:!0,moment:w,tanggal:this.karyawan.tanggal_lahir,form:this.$inertia.form({nama_lengkap:this.karyawan.nama_lengkap,no_hp:this.karyawan.no_hp,email:this.karyawan.email,bagian:this.karyawan.bagian,nomor_identitas:this.karyawan.nomor_identitas,tempat_lahir:this.karyawan.tempat_lahir,tanggal_lahir:this.karyawan.tanggal_lahir,jenis_kelamin:this.karyawan.jenis_kelamin,status_perkawinan:this.karyawan.status_perkawinan,rt:String(this.karyawan.rt_rw).substring(0,String(this.karyawan.rt_rw).indexOf("/")),rw:String(this.karyawan.rt_rw).substring(String(this.karyawan.rt_rw).indexOf("/")+1),kelurahan:this.karyawan.kelurahan,kecamatan:this.karyawan.kecamatan,kota:this.karyawan.kota,agama:this.karyawan.agama,pekerjaan:this.karyawan.pekerjaan,kewarganegaraan:this.karyawan.kewarganegaraan}),formFoto:this.$inertia.form({foto:""}),formKtp:this.$inertia.form({foto_ktp:""})}},methods:{previewFoto(e){const a=e.target.files[0];this.formFoto.foto=a,this.url_foto=URL.createObjectURL(a)},previewFotoKTP(e){const a=e.target.files[0];this.formKtp.foto_ktp=a,this.url_foto_ktp=URL.createObjectURL(a)},submit(e){this.form.tanggal_lahir=this.changeFormatDate(),this.form.put(route("karyawan.update",{id:e}),{onSuccess:()=>{this.disableInput=!0}})},submitFoto(e){this.formFoto.post(route("karyawan.update.file",{id:e}),{preserveScroll:!0,onSuccess:()=>{this.disableUploadFoto=!0}})},submitKtp(e){this.formKtp.post(route("karyawan.update.file",{id:e}),{preserveScroll:!0,onSuccess:()=>{this.disableUploadKtp=!0}})},backPage(){this.$inertia.get(route("karyawan.index"))},maxDate(){let e=new Date().getFullYear()-17;return new Date(new Date().setFullYear(e))},changeFormatDate(){let e=new Date(this.tanggal),a=e.getDate(),f=e.getMonth()+1,k=e.getFullYear();return String(a).length==1&&(a="0"+a),String(f).length==1&&(f="0"+f),a+"-"+f+"-"+k},enableUploadFoto(){this.disableUploadFoto=!1,this.disableUploadKtp=!0,this.disableInput=!0},enableUploadKtp(){this.disableUploadKtp=!1,this.disableUploadFoto=!0,this.disableInput=!0},enableInput(){this.disableInput=!1,this.disableUploadKtp=!0,this.disableUploadFoto=!0}}}),S={class:"flex justify-center"},T={class:"block rounded-lg shadow-lg bg-white min-w-full"},M=o("div",{class:"py-3 px-6 border-b border-gray-300"},[o("h5",{class:"text-gray-900 text-xl font-medium"}," Detail Karyawan ")],-1),C={class:"flex flex-col p-5"},P={class:"md:flex no-wrap md:-mx-2"},L={class:"w-full md:w-3/12 md:mx-2"},z={class:"p-3"},B={class:"image overflow-hidden"},N=["src"],R=["src","alt"],A={key:0,class:"text-center mb-6 space-y-2"},O=o("span",{class:"text-xs italic font-semibold"},"Foto Karyawan",-1),E={key:1,class:"form-group space-y-4 mt-3"},G=o("label",{for:"foto",class:"form-label inline-block mb-2 text-gray-700"},"Upload Foto",-1),Y=["disabled"],J={class:"mr-2"},W=c(" Upload "),q=o("div",{class:"my-2"},null,-1),H={class:"p-3"},Q={class:"image overflow-hidden"},X=["src"],Z=["src","alt"],ee={key:0,class:"text-center mb-6 space-y-2"},oe=o("span",{class:"text-xs italic font-semibold"},"Foto KTP",-1),ae={key:1,class:"form-group space-y-3"},te=o("label",{for:"foto_ktp",class:"form-label inline-block mb-2 text-gray-700"},"Upload KTP",-1),re=["disabled"],se={class:"mr-2"},ne=c(" Upload "),ie={class:"w-full md:w-9/12 mx-2"},le={class:"p-3"},de={class:"flex items-center space-x-2 font-semibold text-gray-900 leading-8"},ue={clas:"text-green-500"},me=o("span",{class:"tracking-wide"},"Data Karyawan",-1),be={class:"text-gray-700"},pe={class:"text-sm p-4"},fe={class:"grid grid-cols-2 space-x-4"},ge={class:"form-group mb-6"},ce=o("label",{class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"NIK Karyawan")],-1),he=["value"],ke={class:"form-group mb-6"},ye=o("label",{for:"no_hp",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"No. Telpon")],-1),we=["disabled"],ve={class:"grid grid-cols-2 space-x-4"},_e={class:"form-group mb-6"},xe=o("label",{for:"email",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Email")],-1),Ue=["disabled"],Ie={class:"form-group mb-6"},Ke=o("label",{class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Bagian")],-1),Fe={class:"mt-2 space-x-4"},je=["disabled","checked"],Ve=o("label",{class:"form-check-label capitalize",for:"bagian_administrasi"},"Administrasi",-1),$e=["disabled","checked"],De=o("label",{class:"form-check-label capitalize",for:"bagian_teknisi"},"Teknisi",-1),Se={class:"flex items-center space-x-2 font-semibold text-gray-900 leading-8"},Te={clas:"text-green-500"},Me=o("span",{class:"tracking-wide"},"Data KTP",-1),Ce={class:"text-gray-700"},Pe={class:"text-sm p-4"},Le={class:"grid grid-cols-2 space-x-4"},ze={class:"form-group mb-6"},Be=o("label",{for:"nomor_identitas",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Nomor Identitas")],-1),Ne=["disabled"],Re={class:"form-group mb-6"},Ae=o("label",{for:"nama_lengkap",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Nama lengkap")],-1),Oe=["disabled"],Ee={class:"grid grid-cols-2 space-x-4"},Ge={class:"form-group mb-6"},Ye=o("label",{for:"tempat_lahir",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Tempat Lahir")],-1),Je=["disabled"],We={class:"form-group mb-6"},qe=o("label",{for:"tanggal_lahir",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Tanggal Lahir")],-1),He={class:"grid grid-cols-2 space-x-4"},Qe={class:"form-group mb-6"},Xe=o("label",{class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Jenis Kelamin")],-1),Ze={class:"mt-2 space-x-4"},eo=["disabled","checked"],oo=o("label",{class:"form-check-label capitalize",for:"jk_laki"},"Laki-Laki",-1),ao=["disabled","checked"],to=o("label",{class:"form-check-label capitalize",for:"jk_perempuan"},"Perempuan",-1),ro={class:"form-group mb-6"},so=o("label",{class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Status Perkawinan")],-1),no={class:"mt-2 space-x-4"},io=["disabled","checked"],lo=o("label",{class:"form-check-label capitalize",for:"kawin"},"Kawin",-1),uo=["disabled","checked"],mo=o("label",{class:"form-check-label capitalize",for:"belum_kawin"},"Belum Kawin",-1),bo={class:"grid grid-cols-2 space-x-4"},po={class:"form-group mb-6"},fo=o("label",{class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"RT/RW")],-1),go=["disabled"],co=c(" / "),ho=["disabled"],ko={class:"form-group mb-6"},yo=o("label",{for:"kelurahan",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Kelurahan/Desa")],-1),wo=["disabled"],vo={class:"grid grid-cols-2 space-x-4"},_o={class:"form-group mb-6"},xo=o("label",{for:"kecamatan",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Kecamatan")],-1),Uo=["disabled"],Io={class:"form-group mb-6"},Ko=o("label",{for:"kota",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Kab/Kota")],-1),Fo=["disabled"],jo={class:"grid grid-cols-2 space-x-4"},Vo={class:"form-group mb-6"},$o=o("label",{for:"agama",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Agama")],-1),Do=["disabled"],So={class:"form-group mb-6"},To=o("label",{for:"pekerjaan",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Pekerjaan")],-1),Mo=["disabled"],Co={class:"grid grid-cols-1"},Po={class:"form-group mb-6"},Lo=o("label",{for:"kewarganegaraan",class:"form-label inline-block mb-2 text-gray-700"},[o("strong",null,"Kewarganegaraan")],-1),zo=["disabled"],Bo={key:0,class:"p-3"},No={key:1,class:"space-y-3 p-3"},Ro=["disabled"],Ao={class:"mr-2"},Oo=c(" Simpan ");function Eo(e,a,f,k,Go,Yo){const v=h("action-message"),g=h("font-awesome-icon"),_=h("datepicker"),x=h("app-layout");return d(),I(x,{title:"Detail Karyawan"},{default:y(()=>[b(v,{on:e.$page.props.flash.message},{default:y(()=>[c(n(e.$page.props.flash.message),1)]),_:1},8,["on"]),o("div",S,[o("div",T,[M,o("div",C,[o("div",P,[o("div",L,[o("div",z,[o("div",B,[e.url_foto?(d(),m("img",{key:0,class:"h-auto w-full mx-auto",src:e.url_foto,alt:"foto"},null,8,N)):(d(),m("img",{key:1,class:"h-auto w-full mx-auto",src:e.$page.props.asset+"/karyawan/foto/"+e.karyawan.path_foto,alt:e.karyawan.path_foto},null,8,R))]),o("form",{onSubmit:a[3]||(a[3]=u(t=>e.submitFoto(e.karyawan.id),["prevent"])),enctype:"multipart/form-data"},[e.disableUploadFoto?(d(),m("div",A,[O,o("button",{type:"button",onClick:a[0]||(a[0]=u(t=>e.enableUploadFoto(),["prevent"])),class:"inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"}," Ganti Foto ")])):(d(),m("div",E,[G,o("input",{type:"file",class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.formFoto.errors.foto?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),onChange:a[1]||(a[1]=u((...t)=>e.previewFoto&&e.previewFoto(...t),["prevent"])),id:"foto"},null,34),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.formFoto.errors.foto),513),[[i,e.formFoto.errors.foto]]),o("button",{type:"submit",class:s([{"opacity-25":e.formFoto.processing},"inline-block pt-2.5 w-full text-center pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"]),disabled:e.formFoto.processing},[o("span",J,[b(g,{icon:"fa-solid fa-upload"})]),W],10,Y),o("button",{type:"button",onClick:a[2]||(a[2]=u(t=>e.$emit(e.disableUploadFoto=!0),["prevent"])),class:"inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"}," Batal ")]))],32)]),q,o("div",H,[o("div",Q,[e.url_foto_ktp?(d(),m("img",{key:0,class:"h-auto w-full mx-auto",src:e.url_foto_ktp,alt:"foto-ktp"},null,8,X)):(d(),m("img",{key:1,class:"h-auto w-full mx-auto",src:e.$page.props.asset+"/karyawan/ktp/"+e.karyawan.path_foto_ktp,alt:e.karyawan.path_foto_ktp},null,8,Z))]),o("form",{onSubmit:a[7]||(a[7]=u(t=>e.submitKtp(e.karyawan.id),["prevent"])),enctype:"multipart/form-data"},[e.disableUploadKtp?(d(),m("div",ee,[oe,o("button",{type:"button",onClick:a[4]||(a[4]=u(t=>e.enableUploadKtp(),["prevent"])),class:"inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"}," Ganti Foto KTP ")])):(d(),m("div",ae,[te,o("input",{type:"file",class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.formKtp.errors.foto_ktp?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),onChange:a[5]||(a[5]=u((...t)=>e.previewFotoKTP&&e.previewFotoKTP(...t),["prevent"])),id:"foto_ktp"},null,34),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.formKtp.errors.foto_ktp),513),[[i,e.formKtp.errors.foto_ktp]]),o("button",{type:"submit",class:s([{"opacity-25":e.formKtp.processing},"inline-block pt-2.5 w-full text-center pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"]),disabled:e.formKtp.processing},[o("span",se,[b(g,{icon:"fa-solid fa-upload"})]),ne],10,re),o("button",{type:"button",onClick:a[6]||(a[6]=u(t=>e.$emit(e.disableUploadKtp=!0),["prevent"])),class:"inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"}," Batal ")]))],32)])]),o("div",ie,[o("div",le,[o("form",{onSubmit:a[30]||(a[30]=u(t=>e.submit(e.karyawan.id),["prevent"]))},[o("div",null,[o("div",de,[o("span",ue,[b(g,{icon:"fa-solid fa-id-card-clip"})]),me]),o("div",be,[o("div",pe,[o("div",fe,[o("div",ge,[ce,o("input",{disabled:!0,value:e.karyawan.nik,type:"number",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"},null,8,he)]),o("div",ke,[ye,r(o("input",{disabled:e.disableInput,type:"tel","onUpdate:modelValue":a[8]||(a[8]=t=>e.form.no_hp=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.no_hp?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"no_hp"},null,10,we),[[l,e.form.no_hp]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.no_hp),513),[[i,e.form.errors.no_hp]])])]),o("div",ve,[o("div",_e,[xe,r(o("input",{disabled:e.disableInput,type:"email","onUpdate:modelValue":a[9]||(a[9]=t=>e.form.email=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.email?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"email"},null,10,Ue),[[l,e.form.email]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.email),513),[[i,e.form.errors.email]])]),o("div",Ie,[Ke,o("div",Fe,[o("div",{class:s(["form-check form-check-inline space-x-2 align-middle",e.disableInput&&e.karyawan.bagian!="administrasi"?"hidden":""])},[r(o("input",{disabled:e.disableInput,class:"form-check-input",type:"radio",id:"bagian_administrasi",value:"administrasi",checked:e.form.bagian=="administrasi","onUpdate:modelValue":a[10]||(a[10]=t=>e.form.bagian=t)},null,8,je),[[p,e.form.bagian]]),Ve],2),o("div",{class:s(["form-check form-check-inline space-x-2 align-middle",e.disableInput&&e.karyawan.bagian!="teknisi"?"hidden":""])},[r(o("input",{disabled:e.disableInput,class:"form-check-input",type:"radio",id:"bagian_teknisi",value:"teknisi",checked:e.form.bagian=="teknisi","onUpdate:modelValue":a[11]||(a[11]=t=>e.form.bagian=t)},null,8,$e),[[p,e.form.bagian]]),De],2)]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.bagian),513),[[i,e.form.errors.bagian]])])])])])]),o("div",null,[o("div",Se,[o("span",Te,[b(g,{icon:"fa-solid fa-address-card"})]),Me]),o("div",Ce,[o("div",Pe,[o("div",Le,[o("div",ze,[Be,r(o("input",{disabled:e.disableInput,type:"number","onUpdate:modelValue":a[12]||(a[12]=t=>e.form.nomor_identitas=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.nomor_identitas?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"nomor_identitas"},null,10,Ne),[[l,e.form.nomor_identitas]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.nomor_identitas),513),[[i,e.form.errors.nomor_identitas]])]),o("div",Re,[Ae,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[13]||(a[13]=t=>e.form.nama_lengkap=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.nama_lengkap?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"nama_lengkap"},null,10,Oe),[[l,e.form.nama_lengkap]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.nama_lengkap),513),[[i,e.form.errors.nama_lengkap]])])]),o("div",Ee,[o("div",Ge,[Ye,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[14]||(a[14]=t=>e.form.tempat_lahir=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.tempat_lahir?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"tempat_lahir"},null,10,Je),[[l,e.form.tempat_lahir]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.tempat_lahir),513),[[i,e.form.errors.tempat_lahir]])]),o("div",We,[qe,b(_,{modelValue:e.tanggal,"onUpdate:modelValue":a[15]||(a[15]=t=>e.tanggal=t),disabled:e.disableInput,format:"dd-MM-yyyy",startDate:e.moment("01-01-2000","dd-MM-yyyy"),placeholder:"Pilih Tanggal",minDate:e.moment("01-01-1970","dd-MM-yyyy"),maxDate:e.maxDate(),position:"left",id:"tanggal_lahir"},null,8,["modelValue","disabled","startDate","minDate","maxDate"]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.tanggal_lahir),513),[[i,e.form.errors.tanggal_lahir]])])]),o("div",He,[o("div",Qe,[Xe,o("div",Ze,[o("div",{class:s(["form-check form-check-inline space-x-2 align-middle",e.disableInput&&e.karyawan.jenis_kelamin!="laki-laki"?"hidden":""])},[r(o("input",{disabled:e.disableInput,class:"form-check-input",type:"radio",id:"jk_laki",value:"laki-laki",checked:e.form.jenis_kelamin=="laki-laki","onUpdate:modelValue":a[16]||(a[16]=t=>e.form.jenis_kelamin=t)},null,8,eo),[[p,e.form.jenis_kelamin]]),oo],2),o("div",{class:s(["form-check form-check-inline space-x-2 align-middle",e.disableInput&&e.karyawan.jenis_kelamin!="perempuan"?"hidden":""])},[r(o("input",{disabled:e.disableInput,class:"form-check-input",type:"radio",id:"jk_perempuan",value:"perempuan",checked:e.form.jenis_kelamin=="perempuan","onUpdate:modelValue":a[17]||(a[17]=t=>e.form.jenis_kelamin=t)},null,8,ao),[[p,e.form.jenis_kelamin]]),to],2)]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.jenis_kelamin),513),[[i,e.form.errors.jenis_kelamin]])]),o("div",ro,[so,o("div",no,[o("div",{class:s(["form-check form-check-inline space-x-2 align-middle",e.disableInput&&e.karyawan.status_perkawinan!="kawin"?"hidden":""])},[r(o("input",{disabled:e.disableInput,class:"form-check-input",type:"radio",id:"kawin",value:"kawin",checked:e.form.status_perkawinan=="kawin","onUpdate:modelValue":a[18]||(a[18]=t=>e.form.status_perkawinan=t)},null,8,io),[[p,e.form.status_perkawinan]]),lo],2),o("div",{class:s(["form-check form-check-inline space-x-2 align-middle",e.disableInput&&String(e.form.status_perkawinan).replace(" ","_")!="belum_kawin"])},[r(o("input",{disabled:e.disableInput,class:"form-check-input",type:"radio",id:"belum_kawin",value:"belum_kawin",checked:String(e.form.status_perkawinan).replace(" ","_")=="belum_kawin","onUpdate:modelValue":a[19]||(a[19]=t=>e.form.status_perkawinan=t)},null,8,uo),[[p,e.form.status_perkawinan]]),mo],2)]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.status_perkawinan),513),[[i,e.form.errors.status_perkawinan]])])]),o("div",bo,[o("div",po,[fo,o("div",null,[r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[20]||(a[20]=t=>e.form.rt=t),minlength:"2",maxlength:"3",class:s(["form-control inline w-14 pr-0 p-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.rt?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"rt"},null,10,go),[[l,e.form.rt]]),co,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[21]||(a[21]=t=>e.form.rw=t),minlength:"2",maxlength:"3",class:s(["form-control inline w-14 pr-0 p-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.rw?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"rw"},null,10,ho),[[l,e.form.rw]])]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.rt)+" "+n(e.form.errors.rw),513),[[i,e.form.errors.rt||e.form.errors.rw]])]),o("div",ko,[yo,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[22]||(a[22]=t=>e.form.kelurahan=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.kelurahan?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"kelurahan"},null,10,wo),[[l,e.form.kelurahan]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.kelurahan),513),[[i,e.form.errors.kelurahan]])])]),o("div",vo,[o("div",_o,[xo,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[23]||(a[23]=t=>e.form.kecamatan=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.kecamatan?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"kecamatan"},null,10,Uo),[[l,e.form.kecamatan]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.kecamatan),513),[[i,e.form.errors.kecamatan]])]),o("div",Io,[Ko,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[24]||(a[24]=t=>e.form.kota=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.kota?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"kota"},null,10,Fo),[[l,e.form.kota]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.kota),513),[[i,e.form.errors.kota]])])]),o("div",jo,[o("div",Vo,[$o,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[25]||(a[25]=t=>e.form.agama=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.agama?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"agama"},null,10,Do),[[l,e.form.agama]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.agama),513),[[i,e.form.errors.agama]])]),o("div",So,[To,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[26]||(a[26]=t=>e.form.pekerjaan=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.pekerjaan?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"pekerjaan"},null,10,Mo),[[l,e.form.pekerjaan]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.pekerjaan),513),[[i,e.form.errors.pekerjaan]])])]),o("div",Co,[o("div",Po,[Lo,r(o("input",{disabled:e.disableInput,type:"text","onUpdate:modelValue":a[27]||(a[27]=t=>e.form.kewarganegaraan=t),class:s(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.kewarganegaraan?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"kewarganegaraan"},null,10,zo),[[l,e.form.kewarganegaraan]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.kewarganegaraan),513),[[i,e.form.errors.kewarganegaraan]])])])])])]),e.disableInput?(d(),m("div",Bo,[o("button",{type:"button",onClick:a[28]||(a[28]=u(t=>e.enableInput(),["prevent"])),class:"inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"}," Ubah data karyawan ")])):(d(),m("div",No,[o("button",{type:"submit",class:s([{"opacity-25":e.form.processing},"inline-block pt-2.5 w-full text-center pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"]),disabled:e.form.processing},[o("span",Ao,[b(g,{icon:"fa-solid fa-save"})]),Oo],10,Ro),o("button",{type:"button",onClick:a[29]||(a[29]=u(t=>e.$emit(e.disableInput=!0),["prevent"])),class:"inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"}," Batal ")]))],32)])])])])])])]),_:1})}const Zo=$(D,[["render",Eo]]);export{Zo as default};
