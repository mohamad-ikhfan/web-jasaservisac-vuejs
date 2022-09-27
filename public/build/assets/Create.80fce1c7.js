import{E as g,G as b,o as l,c as h,w as y,L as w,a as e,m as v,n as t,e as p,v as s,x as n,t as i,I as d,b as u,i as f}from"./app.59358596.js";import{A as _}from"./SideNavLayout.b3d2adf6.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const k=g({components:{AppLayout:_,Link:w},data(){return{url:null,form:this.$inertia.form({gambar:null,nama_sparepart:"",harga:"",keterangan:""})}},methods:{previewFoto(o){const r=o.target.files[0];this.form.gambar=r,this.url=URL.createObjectURL(r)},submit(){this.form.post(route("sparepart.store"))},backPage(){this.$inertia.get(route("sparepart.index"))}}}),C={class:"flex justify-center"},S={class:"block rounded-lg shadow-lg bg-white min-w-full"},$=e("div",{class:"py-3 px-6 border-b border-gray-300"},[e("h5",{class:"text-gray-900 text-xl font-medium"}," Tambah Sparepart ")],-1),j={class:"p-6"},U={class:"form-group mb-6"},V={class:"grid grid-cols-2"},L={class:"flex justify-start"},B={class:"relative pt-5"},N=e("label",{for:"gambar",class:"form-label inline-block mb-2 text-gray-700"},"Upload Gambar",-1),T={class:"flex justify-center"},z=["src"],F=["src"],P={class:"form-group mb-6"},A=e("label",{for:"nama_sparepart",class:"form-label inline-block mb-2 text-gray-700"},"Nama Sparepart",-1),D={class:"form-group mb-6"},E=e("label",{for:"harga",class:"form-label inline-block mb-2 text-gray-700"},"Harga",-1),G={class:"form-group mb-6"},K=e("label",{for:"keterangan",class:"form-label inline-block mb-2 text-gray-700"},"Keterangan",-1),M={class:"py-3 px-6 border-t border-gray-300 text-gray-600"},R={class:"grid grid-cols-2"},H={class:"flex space-x-2 justify-start"},I={class:"mr-2"},O=f(" Kembali "),q={class:"flex space-x-2 justify-end"},J=["disabled"],Q={class:"mr-2"},W=f(" Simpan ");function X(o,r,Y,Z,ee,oe){const m=b("font-awesome-icon"),c=b("app-layout");return l(),h(c,{title:"Tambah Sparepart"},{default:y(()=>[e("div",C,[e("div",S,[$,e("form",{onSubmit:r[5]||(r[5]=v((...a)=>o.submit&&o.submit(...a),["prevent"])),enctype:"multipart/form-data"},[e("div",j,[e("div",U,[e("div",V,[e("div",L,[e("div",B,[N,e("input",{type:"file",class:t(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",o.form.errors.gambar?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),onChange:r[0]||(r[0]=(...a)=>o.previewFoto&&o.previewFoto(...a)),id:"gambar"},null,34)])]),e("div",T,[o.url?(l(),p("img",{key:0,src:o.url,class:"rounded",style:{width:"100px"},alt:"gambar"},null,8,z)):(l(),p("img",{key:1,src:o.$page.props.asset+"/no-image.webp",class:"rounded",style:{width:"100px"},alt:"gambar"},null,8,F))])]),s(e("div",{class:"text-red-700 text-sm mt-1"},i(o.form.errors.gambar),513),[[n,o.form.errors.gambar]])]),e("div",P,[A,s(e("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=a=>o.form.nama_sparepart=a),class:t(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",o.form.errors.nama_sparepart?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"nama_sparepart"},null,2),[[d,o.form.nama_sparepart]]),s(e("div",{class:"text-red-700 text-sm mt-1"},i(o.form.errors.nama_sparepart),513),[[n,o.form.errors.nama_sparepart]])]),e("div",D,[E,s(e("input",{type:"number","onUpdate:modelValue":r[2]||(r[2]=a=>o.form.harga=a),class:t(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white",o.form.errors.harga?"focus:border-red-600 border-red-600":"border-gray-300 focus:border-blue-600 focus:outline-none"]),id:"harga"},null,2),[[d,o.form.harga]]),s(e("div",{class:"text-red-700 text-sm mt-1"},i(o.form.errors.harga),513),[[n,o.form.errors.harga]])]),e("div",G,[K,s(e("textarea",{class:t(["form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",o.form.errors.keterangan?"focus:border-red-600 border-red-600":""]),"onUpdate:modelValue":r[3]||(r[3]=a=>o.form.keterangan=a),id:"keterangan",rows:"2"},null,2),[[d,o.form.keterangan]]),s(e("div",{class:"text-red-700 text-sm mt-1"},i(o.form.errors.keterangan),513),[[n,o.form.errors.keterangan]])])]),e("div",M,[e("div",R,[e("div",H,[e("div",null,[e("button",{type:"button",onClick:r[4]||(r[4]=(...a)=>o.backPage&&o.backPage(...a)),class:"inline-block px-6 pt-2.5 pb-2 bg-yellow-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"},[e("span",I,[u(m,{icon:"fa-solid fa-arrow-left"})]),O])])]),e("div",q,[e("div",null,[e("button",{type:"submit",class:t([{"opacity-25":o.form.processing},"inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"]),disabled:o.form.processing},[e("span",Q,[u(m,{icon:"fa-solid fa-floppy-disk"})]),W],10,J)])])])])],32)])])]),_:1})}const te=x(k,[["render",X]]);export{te as default};