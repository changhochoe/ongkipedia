document.getElementById('freakin_button').addEventListener('click',() => {
    const ind_num = document.getElementById('index_nums').value;
    console.log(ind_num)
    if(ind_num<=0){
        alert("목차 수는 1 이상이어야 합니다");
        location.reload();
    } else {
        document.getElementById('hidden_content').style.display = 'flex';
    }
});