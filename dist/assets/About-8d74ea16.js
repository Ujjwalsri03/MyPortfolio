import{r as s,j as e,L as m,a as o,F as u,M as p}from"./index-3620bf4b.js";import j from"./Skills-f57d4169.js";const f="/assets/myimg2-52e44e4c.png",w=[{link:"www.linkedin.com/in/ujjawal-shriwastav-985378247",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",tooltip:"Connect on LinkedIn"},{link:"https://github.com/Ujjwalsri03",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",tooltip:"Connect on GitHub"},{link:"https://www.instagram.com/_ujjwal._03/",icon:"https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",tooltip:"Follow on Instagram"},{link:"mailto:Ujjawalshriwastav9771@gmail.com",icon:"https://cdn.iconscout.com/icon/free/png-512/free-mail-1299-1100772.png?f=webp&w=256",tooltip:"Email Me"}],y=()=>{const c=["Front-end Developer","React Developer"],[x,h]=s.useState(""),[r,g]=s.useState(0),[n,d]=s.useState(0);return s.useEffect(()=>{const t=c[r];if(n<=t.length){const l=setTimeout(()=>{h(t.substring(0,n+1)),d(a=>a+1)},100);return()=>clearTimeout(l)}else{const l=setTimeout(()=>{g(a=>(a+1)%c.length),d(0)},2e3);return()=>clearTimeout(l)}},[n,r]),e.jsxs("div",{className:"text-white",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-evenly h-screen w-full",children:[e.jsx("div",{className:"mb-8 md:mb-0 mt-10",children:e.jsx("img",{src:f,loading:"lazy",alt:"Ujjawal",className:"rounded-t-full rounded-b-full w-48 h-72 md:w-64 md:h-96 object-cover object-center shadow-lg"})}),e.jsxs("div",{className:"container flex text-white text-center justify-center items-center w-full md:w-1/2 h-full flex-col",children:[e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"text-white text-2xl md:text-5xl font-sans font-semibold",children:"About Me"})}),e.jsx("div",{className:"text-blue-900 text-3xl md:text-5xl font-bold my-4 md:my-8 text-center",children:e.jsx("h2",{children:x})}),e.jsx("div",{className:"text-base font-medium relative text-black w-10/12 md:w-3/4",children:e.jsx("p",{children:"I’m a React Developer skilled in creating fluid, interactive user experiences. I design dynamic, high-performance web applications with React, driven by a passion for problem-solving and ongoing development."})}),e.jsxs("div",{className:"flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5 text-white",children:[e.jsx(m,{to:"/projects",children:e.jsxs(o.Button,{variant:"gradient",color:"light-blue",className:"flex gap-2 items-center mb-2 md:mb-0",children:[e.jsx(u,{className:"text-lg"}),"Projects"]})}),e.jsx(m,{to:"https://drive.google.com/file/d/1JcqLGPjNx-7hsiO3Jf4JB6QA4Xg1wHyN/view?usp=drive_link",target:"_blank",children:e.jsxs(o.Button,{variant:"gradient",color:"light-blue",className:"flex gap-2 items-center",children:[e.jsx(p,{className:"text-white text-lg"}),"Resume"]})})]})]})]}),e.jsx("div",{className:"flex items-center w-full justify-center gap-8 my-10",children:w.map((t,i)=>e.jsx(o.Tooltip,{color:"black",content:t.tooltip,className:"bg-white text-black",children:e.jsx("a",{href:t.link,target:"_blank",rel:"noreferrer",className:"rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center",children:e.jsx("img",{src:t.icon,alt:t.tooltip,loading:"lazy",className:"p-2 text-white bg-white rounded-full"})})},i))}),e.jsx(j,{})]})};export{y as default};
