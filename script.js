const drumparent=document.getElementById('parent');
drumparent.addEventListener('click',(e)=>{
    const target=e.target.innerHTML;
    pop1(target);
});
pop1(target);
const popsount=(key)=>{
    const sound=new Audio(`${key}.mp3`);
    sound.play();
}
drumparent.addEventListener('keydown',(e)=>{
    const target=e.key;
    const arr=['w','a','s','d','j','k','l'];
    if (!arr.includes(target)){
        alert('Please enter a valid string');
        return ;
    }
    pop1(target);
});





