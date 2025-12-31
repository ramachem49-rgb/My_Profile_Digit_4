/* particle effect */
for(let i=0;i<40;i++){
  const p=document.createElement("div");
  p.className="particle";
  p.innerText="*";
  p.style.left=Math.random()*100+"vw";
  p.style.animationDuration=3+Math.random()*5+"s";
  p.style.opacity=Math.random();
  document.body.appendChild(p);
}