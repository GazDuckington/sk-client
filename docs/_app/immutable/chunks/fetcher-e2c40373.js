const n="ya29.bwLu0ruxXdXe_RMOSYgfiCPORNMHLkf9rCDmV1rKtWu90TuF1d8B2SmdUlrjeOWNYThkgMM";async function r(a){try{const t=await fetch(a,{method:"GET",headers:{"Content-Type":"application/json",Authorization:n}}),o=await t.json();if(t.ok)return o}catch(t){console.log(t)}}async function c(a,t){try{const o=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Authorization:n},body:JSON.stringify({data:t})}),e=await o.json();if(o.ok)return e}catch(o){console.log(o)}}export{r as g,c as p};
