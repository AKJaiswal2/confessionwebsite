
// document.getElementById('change').innerHTML=k;
let dynamic=document.querySelector('.container2');
let count=0;
function confessions()
{
    let k=document.getElementById('confession').value;
    let fetch=document.querySelector('.container2').innerHTML;
    dynamic.innerHTML=`<div class="card">
    <div class="title">
     <h1>Anonymus</h1>
    </div>
    <div class="des">
     <p id="change">${k}</p>
    </div>
    <div class="form">
    <textarea name="paragraph_text" cols="35" rows="1" id="rep" placeholder="Reply...."></textarea><button onclick="display()">send</button>
    </div>
    <p id="kk"></p>
</div>`+fetch;
} 
function display()
{
    let rep="Replies : "+document.getElementById('rep').value;
    let dp = document.getElementById('kk');
    dp.innerHTML=rep;
}