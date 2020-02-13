
$(function(){
    $(function(){
        var nav=$("#footer>ul>li");
        var cont=$(".box");
    
        nav.click(function(){
            var target=$(this);
    
            // .nav>li의 부여된 인덱스 번호를 가져오는 메서드=index()
            var i=target.index();
            
            // 현재 클린된 li태그와 같은 순번(index번호)에 있는 #contents>div를 선택 처리
            var section=cont.eq(i);
    
            // 현재 클릭된 li태그와 같은 순번에 있는 div태그의 상단 위치 값을 가져옴.
            var offset=section.offset().top;
            
            // 스크롤의 위치값을 div태그의 offset 값으로 전달하여 스크롤 애니메이션 적용 처리
            $("html, body").animate({
                scrollTop : offset
            },400);
        });
    });
    // 다음버튼
    $("#next").click(function(){
        // 이미지패널 div태그의 "margin-left"속성값을 가져오기.
        var mar=$("#lsk").css("margin-left");
        console.log(mar);
        if(mar=="-380px"){
            $("#lsk").stop().animate({
                marginLeft: 0+"px"
            },"fast");
        }else{
                // 이미지패널 -600px 이동하는 애니메이션
        $("#lsk").stop().animate({
            marginLeft: parseInt($("#lsk").css("margin-left"))-380+"px"
        },"fast");
        }
        return false;
    });
        
    // 이전버튼
    $("#prev").click(function(){
        var mar1=$("#lsk").css("margin-left");
        if(mar1=="0px"){
            $("#lsk").stop().animate({
                marginLeft: -380+"px"
            },"fast");
        }else{
            $("#lsk").stop().animate({
            marginLeft: parseInt($("#lsk").css("margin-left"))+380+"px"
        },"fast");
    }
    return false;
    });
    
///////////////////////////////////////////////////////////////////////////////////////////

    $("#menu ul li dd").hide();
    $("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
    
    $("#glayLayer").click(function(){
        $(this).hide();
        $("#overLayer").hide();
    });
    
    $("#menu ul li").click(function(){
        $("#glayLayer").show();
        $("#overLayer").show().html("<img src='img/close.png' class='close' />"+$("dd",this).html()).css({
            marginTop:"-"+$("#overLayer").height()/3+"px" , 
            marginLeft:"-"+$("#overLayer").width()/2+"px" 
        });
        
        $("#overLayer img.close").click(function(){
            $("#glayLayer").hide();
            $("#overLayer").hide();
        });
        return false;
    });    
});


