$(function(){

    /*----- slideshow -----*/
    var $slides=$(".slideshow").find("img"), //모든슬라이드 이미지 선택
    slideCount=$slides.length,  //슬라이드 갯수
    currentIndex=0;
    
    /* 첫 번째 슬라이드에 페이드 인으로 표시 */
    $slides.eq(currentIndex).fadeIn();

    /* 다음 슬라이드를 표시 하는 함수 */
    function showNextSlide(){

        // 다음표시 할 슬라이드의 인덱스
        // 만약, 마지막 슬라이드라면 처음으로 돌아가기
        var nextIndex=(currentIndex+1)%slideCount;

        // 현재 슬라이드 페이드 아웃(숨김)
        $slides.eq(currentIndex).fadeOut();

        // 다음슬라이드를 페이드 인(표시)
        $slides.eq(nextIndex).fadeIn();

        // 현재 슬라이드 인덱스를 업데이트
        currentIndex=nextIndex;
    }

    /* 3초마다 showNextSlide() 함수를 호출*/
    setInterval(showNextSlide,2000);
    /*------ slideshow END -----*/

    
 /*----- 고정헤더 처리 -----*/ 
    var $window=$(window), //브라우저 창 선택자를 변수에 저장
        $header=$(".page-header"), //헤더태그 선택자를 변수에 저장

    //헤더의 기본 상단 위치 값을 가져오기
    headerOffestTop=$header.offset().top;

    /* 브라우저 창에 스크롤 이벤트를 모니터링하여 창을 스크롤 할 때마다 작업을 수행 하기*/
    $window.on("scroll",function(){
        
        //브라우저 창의 스크롤 값을 확인하고 헤더태그의 기본 위치를 지나서 있으면 헤더태그에 클래스명을 부여 or 그렇지 않으면 삭제 
        if($window.scrollTop()>headerOffestTop){
            $header.addClass("sticky");
        }else{
            $header.removeClass("sticky");
        }
    });
    /*----- 고정헤더 처리 END -----*/ 


    /*-----  tab panel 처리 -----*/
    var $tabList=$("#work").find(".tabs-nav"), //탭의 목록
        $tabAnchors=$tabList.find("a"),
        $tabPannels=$("#work").find(".tabs-panel"); //패널(내용)

        /* 탭이 클릭 되었을때 패널을 표시 */
        $tabList.on("click","a",function(event){

            //a태그의 클릭에 대한 기본 동작을 취소
            event.preventDefault();

            //클릭 된 탭을 변수에 저장
            var $this=$(this);

            //모든 패널을 비표시로 하고 클릭 된 탭에 대응하는 패널을 표시
            $tabPannels.hide();
            $($this.attr("href")).show();
        });

        /* 첫번째 탭을 선택 상태로 지정 */
        $tabAnchors.eq(0).trigger("click");
    
        /*-----  tab panel END -----*/


    /*-----  top 버튼 처리 -----*/
    $(".back-to-top").click(function(){
        $("html").animate({scrollTop},500);
    });
    /*-----  top 버튼 처리 END-----*/
});