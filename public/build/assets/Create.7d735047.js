import{E as b,G as c,o as a,c as h,w as y,L as w,a as o,m as _,n as i,e as u,v as r,x as l,t as n,I as m,b as f,i as g}from"./app.1303293e.js";import{A as k}from"./SideNavLayout.b87c5d30.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";const x=b({components:{AppLayout:k,Link:w},data(){return{url:null,form:this.$inertia.form({logo:null,nama_kategori:"",deskripsi:""})}},methods:{previewFoto(e){const s=e.target.files[0];this.form.logo=s,this.url=URL.createObjectURL(s)},submit(){this.form.post(route("kategori-layanan.store"))},backPage(){this.$inertia.get(route("kategori-layanan.index"))}}}),L={class:"flex justify-center"},C={class:"block rounded-lg shadow-lg bg-white min-w-full"},$=o("div",{class:"py-3 px-6 border-b border-gray-300"},[o("h5",{class:"text-gray-900 text-xl font-medium"}," Buat Kategori Layanan ")],-1),j={class:"p-6"},B={class:"form-group mb-6"},U={class:"grid grid-cols-2"},V={class:"flex justify-start"},K={class:"relative pt-5"},N=o("label",{for:"logo",class:"form-label inline-block mb-2 text-gray-700"},"Upload Logo",-1),S={class:"flex justify-center"},z=["src"],D=["src"],F={class:"form-group mb-6"},P=o("label",{for:"nama_kategori",class:"form-label inline-block mb-2 text-gray-700"},"Nama Kategori",-1),A={class:"form-group mb-6"},E=o("label",{for:"deskripsi",class:"form-label inline-block mb-2 text-gray-700"},"Deskripsi",-1),M={class:"py-3 px-6 border-t border-gray-300 text-gray-600"},R={class:"grid grid-cols-2"},T={class:"flex space-x-2 justify-start"},G={class:"mr-2"},I=g(" Kembali "),O={class:"flex space-x-2 justify-end"},q=["disabled"],H={class:"mr-2"},J=g(" Simpan ");function Q(e,s,W,X,Y,Z){const d=c("font-awesome-icon"),p=c("app-layout");return a(),h(p,{title:"Kategori Layanan"},{default:y(()=>[o("div",L,[o("div",C,[$,o("form",{onSubmit:s[4]||(s[4]=_((...t)=>e.submit&&e.submit(...t),["prevent"])),enctype:"multipart/form-data"},[o("div",j,[o("div",B,[o("div",U,[o("div",V,[o("div",K,[N,o("input",{type:"file",class:i(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.logo?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),onChange:s[0]||(s[0]=(...t)=>e.previewFoto&&e.previewFoto(...t)),id:"logo"},null,34)])]),o("div",S,[e.url?(a(),u("img",{key:0,src:e.url,class:"rounded",style:{width:"100px"},alt:"logo"},null,8,z)):(a(),u("img",{key:1,src:e.$page.props.asset+"/no-image.webp",class:"rounded",style:{width:"100px"},alt:"logo"},null,8,D))])]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.logo),513),[[l,e.form.errors.logo]])]),o("div",F,[P,r(o("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>e.form.nama_kategori=t),class:i(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",e.form.errors.nama_kategori?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"nama_kategori"},null,2),[[m,e.form.nama_kategori]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.nama_kategori),513),[[l,e.form.errors.nama_kategori]])]),o("div",A,[E,r(o("textarea",{class:i(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",e.form.errors.deskripsi?"focus:border-red-600 border-red-600":""]),"onUpdate:modelValue":s[2]||(s[2]=t=>e.form.deskripsi=t),id:"deskripsi",rows:"2"},null,2),[[m,e.form.deskripsi]]),r(o("div",{class:"text-red-700 text-sm mt-1"},n(e.form.errors.deskripsi),513),[[l,e.form.errors.deskripsi]])])]),o("div",M,[o("div",R,[o("div",T,[o("div",null,[o("button",{type:"button",onClick:s[3]||(s[3]=(...t)=>e.backPage&&e.backPage(...t)),class:"inline-block px-6 pt-2.5 pb-2 bg-yellow-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"},[o("span",G,[f(d,{icon:"fa-solid fa-arrow-left"})]),I])])]),o("div",O,[o("div",null,[o("button",{type:"submit",class:i([{"opacity-25":e.form.processing},"inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"]),disabled:e.form.processing},[o("span",H,[f(d,{icon:"fa-solid fa-floppy-disk"})]),J],10,q)])])])])],32)])])]),_:1})}const to=v(x,[["render",Q]]);export{to as default};