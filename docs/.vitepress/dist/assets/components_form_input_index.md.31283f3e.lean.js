import{g as t,_ as r,c as D,a,b as o,d as c,t as F,e,r as y,o as i}from"./app.dbbb272d.js";t("123");t("");t("");t("");t("");t("");t("");t("");t("");const J=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"可清空数据","slug":"可清空数据","link":"#可清空数据","children":[]},{"level":2,"title":"带图标","slug":"带图标","link":"#带图标","children":[]},{"level":2,"title":"自定义 Focus 颜色","slug":"自定义-focus-颜色","link":"#自定义-focus-颜色","children":[]},{"level":2,"title":"密码类型","slug":"密码类型","link":"#密码类型","children":[]},{"level":2,"title":"不同尺寸","slug":"不同尺寸","link":"#不同尺寸","children":[]},{"level":2,"title":"输入长度限制","slug":"输入长度限制","link":"#输入长度限制","children":[]}],"relativePath":"components/form/input/index.md"}'),C={name:"components/form/input/index.md"},u=a("h1",{id:"input-输入框",tabindex:"-1"},[c("Input 输入框 "),a("a",{class:"header-anchor",href:"#input-输入框","aria-hidden":"true"},"#")],-1),d=a("p",null,"数据输入框类型，通过键盘输入字符",-1),A=a("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),m=a("p",null,"输入框的基本使用",-1),h={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},_=e("",3),E={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},g=e("",3),v={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},q=e("",3),f={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},b=e("",3),x={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},V=e("",3),T={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},S=e("",3),k={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},P=e("",3),I={class:"box",style:{border:"1px solid #c0c0c2","border-radius":"5px",padding:"20px 10px"}},N=e("",1);function U(s,l,w,R,z,$){const p=y("sl-input");return i(),D("div",null,[u,d,A,m,a("div",h,[a("div",null,[o(p,{type:"text",placeholder:"基本使用"}),c(" "+F(s.input_val1),1)])]),_,a("div",E,[a("div",null,[o(p,{type:"text",placeholder:"禁用状态",modelValue:s.input_val2,"onUpdate:modelValue":l[0]||(l[0]=n=>s.input_val2=n),disabled:""},null,8,["modelValue"])])]),g,a("div",v,[a("div",null,[o(p,{type:"text",placeholder:"可清空",modelValue:s.input_val3,"onUpdate:modelValue":l[1]||(l[1]=n=>s.input_val3=n),clearable:""},null,8,["modelValue"])])]),q,a("div",f,[a("div",null,[o(p,{type:"text",placeholder:"带左侧图标",modelValue:s.input_val4,"onUpdate:modelValue":l[2]||(l[2]=n=>s.input_val4=n),iconPos:"left",iconName:"search"},null,8,["modelValue"]),o(p,{style:{"margin-top":"10px"},type:"text",placeholder:"带右侧图标",modelValue:s.input_val5,"onUpdate:modelValue":l[3]||(l[3]=n=>s.input_val5=n),iconPos:"right",iconName:"search"},null,8,["modelValue"])])]),b,a("div",x,[a("div",null,[o(p,{type:"text",placeholder:"Focus 颜色自定义",modelValue:s.input_val6,"onUpdate:modelValue":l[4]||(l[4]=n=>s.input_val6=n),focusColor:"#53ae26"},null,8,["modelValue"]),o(p,{style:{"margin-top":"10px"},type:"text",placeholder:"Focus 颜色自定义",modelValue:s.input_val6,"onUpdate:modelValue":l[5]||(l[5]=n=>s.input_val6=n),focusColor:"#f56c6c"},null,8,["modelValue"])])]),V,a("div",T,[a("div",null,[o(p,{type:"password",placeholder:"密码",modelValue:s.input_val7,"onUpdate:modelValue":l[6]||(l[6]=n=>s.input_val7=n),showPassword:""},null,8,["modelValue"])])]),S,a("div",k,[a("div",null,[o(p,{type:"text",placeholder:"普通尺寸",modelValue:s.input_val8,"onUpdate:modelValue":l[7]||(l[7]=n=>s.input_val8=n)},null,8,["modelValue"]),o(p,{type:"text",style:{"margin-top":"10px"},placeholder:"小尺寸",modelValue:s.input_val8,"onUpdate:modelValue":l[8]||(l[8]=n=>s.input_val8=n),size:"small"},null,8,["modelValue"]),o(p,{type:"text",style:{"margin-top":"10px"},placeholder:"迷你尺寸",modelValue:s.input_val8,"onUpdate:modelValue":l[9]||(l[9]=n=>s.input_val8=n),size:"mini"},null,8,["modelValue"])])]),P,a("div",I,[a("div",null,[o(p,{type:"text",placeholder:"限制了字数",modelValue:s.input_val9,"onUpdate:modelValue":l[10]||(l[10]=n=>s.input_val9=n),maxlength:"5"},null,8,["modelValue"])])]),N])}const O=r(C,[["render",U]]);export{J as __pageData,O as default};