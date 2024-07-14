const txt = document.querySelector('#txt')
const btn = document.querySelector('#btn')
const itemss = document.getElementById('items');
btn.addEventListener('click',()=>{
    itemss.style.display='block';
    
    const it = document.createElement('li');
    it.innerHTML = `${txt.value}
    <button class="removeItem">Remove</button>
`;
it.style.listStyle=`none`;
itemss.appendChild(it);
it.querySelector('.removeItem').addEventListener('click', function() {
    it.remove();
});
})


