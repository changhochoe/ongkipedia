<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $_GET['title']?> - 옹키피디아</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <header>
        <div class="top_container">
            <div class="top_content_logo">
                <a href="index.html">
                    <img src="logo2.png" alt="로고" height="60px">
                </a>
                <div style="display: flex; margin-left: 20px;font-size: 38px;">
                    옹키피디아 : <?php echo $_GET['title']?>
                </div>
            </div>
            <div class="top_content_right">
                <div class="top_content_document">
                    <a href="document_edit.html">
                        문서 편집/개설
                    </a>
                </div>
                <div class="top_content_right_search">
                    <input type="text" 
                    style="width: 270px; height: 40px;border: solid, grey, 2px ; border-radius: 3px; font-size: 18px;"
                    placeholder="여기에서 검색">
                </div>
                <div style="width: 20p"></div>
                <div class="top_content_right_blank">
                    <a href="login.html">
                        <img src="profile.img.webp" alt="회원가입" 
                        style="height: 50px; border: solid, rgb(205, 204, 204),2px;border-radius: 3px;"
                        onclick="document.getElementById('popup_shii').style.display = 'block';">
                    </a>
                </div>
            <div style="width: 20px;"></div>
            </div>
        </div>
    </header>
    <div class="center">
        <div class="center_in">
            <?php
                echo file_get_contents("data/".$_GET['title'])
            ?>
        </div>
    </div>
</body>
</html>