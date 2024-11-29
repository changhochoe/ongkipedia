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
            document.getElementById('selectOut').style.display = 'none';
    }
});

function deleteInput(id){
    document.getElementById(id).value=''
}




let detectTitleChange = document.getElementById('mokCha').value;
let detectContentChange = document.getElementById('naeYong').value;
let detectSelectOption = document.getElementById('freakinSelect').value;


document.getElementById('mokCha').addEventListener('click',() => {
    detectSelectOption = document.getElementById('freakinSelect').value;
    if(detectSelectOption[3] == '순'){
        alert('목차 순서를 먼저 골라주세요');
        location.reload();
    }
})

document.getElementById('naeYong').addEventListener('click',() => {
    detectSelectOption = document.getElementById('freakinSelect').value;
    if(detectSelectOption[3] == '순'){
        alert('목차 순서를 먼저 골라주세요');
        location.reload();
    }
})



document.getElementById('freakinSelect').addEventListener('click',()=>{
    detectSelectOption = document.getElementById('freakinSelect').value;
    function originalOption(id){
        document.getElementById(id).value = detectSelectOption
    }
    document.getElementById('freakinSelect').addEventListener('change',()=>{
        detectTitleChange = document.getElementById('mokCha').value;
        detectContentChange = document.getElementById('naeYong').value;
        if(detectContentChange.length >= 1 || detectTitleChange.length >= 1){
            const unsavedChange = confirm('변경사항이 저장되지 않았습니다. 그래도 변경하시겠습니까?')
            if(unsavedChange == true){
                deleteInput('mokCha');
                deleteInput('naeYong');
            } else{
                console.log(detectSelectOption)
                originalOption('freakinSelect')
            }
        }
    })    
})