document.getElementById('freakin_button').addEventListener('click',() => {
    const indexNum = document.getElementById('index_nums').value;
    console.log(indexNum)
    if(indexNum<=0){
        alert("목차 수는 1 이상이어야 합니다");
        location.reload();
    } else {
        document.getElementById('hidden_content').style.display = 'flex';
        for (let i = 1; i <= indexNum ; i++) {
            let parent = document.getElementById('freakinSelect');
            const Option = document.createElement('option');
            Option.textContent = `목차 ${i}`
            Option.value = i;
            parent.appendChild(Option)
        }
    }
});