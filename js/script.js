window.onload = function(){
    // 클론코드 관련 안내
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    modal_close.click(function(){
        modal.stop().fadeOut(200);
    });

    // 메뉴 
    const gnb = $('.gnb');
    let header = $('.header');
    

    // 메뉴를 작성
    function MakeMenu(_mainmenu, _mainlink, _submenu, _sublink){
        this.mainmenu = _mainmenu;
        this.mainlink = _mainlink;
        this.submenu = _submenu;
        this.sublink = _sublink;
    }

    let menu_data = [
        new MakeMenu('회사소개', '#', '인사말,STX건설,기업문화,STX건설연혁,조직안내,윤리경영,안전·환경·품질경영,찾아오시는 길', '#,#,#,#,#,#,#,#'),
        new MakeMenu('사업분야', '#', '건축사업,주택사업,토목사업,플랜트/공작기계사업,해외사업', '#,#,#,#,#'),
        new MakeMenu('사회공헌', '#', '나눔의생각,주요활동분야,활동현황', '#,#,#'),
        new MakeMenu('홍보센터', '#', '홍보동영상,홍보브로슈어,STX건설뉴스', '#,#,#'),
        new MakeMenu('고객지원', '#', '자주묻는질문, 고객문의', '#,#'),
        new MakeMenu('채용정보', '#', '채용안내, 채용공고, 채용FAQ', '#,#,#')

    ];

    let menu_total = menu_data.length;
    let menu_li = '';
    for(let i = 0; i < menu_total; i++){
        menu_li += '<li></li>';
    }
    gnb.html(menu_li);
    let menu_lis = gnb.find('>li');
    $.each(menu_lis, function(index, item){
        
        let temp = menu_data[index];
        let cate = '<a href='; 
        cate += temp.mainlink; 
        cate += '>'; 
        cate += temp.mainmenu; 
        cate += '</a>';
        cate += '<ul class=submenu>';
        let temp_sub = (temp.submenu).split(',');

        let temp_sub_link = (temp.sublink).split(',');

        let temp_sub_lis = '';

        for(let i = 0; i < temp_sub.length; i++){
            temp_sub_lis += '<li>';

            temp_sub_lis += '<a href=';
            temp_sub_lis += temp_sub_link[i];
            temp_sub_lis += '>';

            temp_sub_lis += temp_sub[i];
            temp_sub_lis += '</a>';
            temp_sub_lis += '</li>';
        }
        
        cate += temp_sub_lis;
        cate += '</ul>';

        $(this).html(cate);
    });


    // 내용 더보기 버튼 기능
    let visual_bt = $('.visual-bt');
    let part_pos = $('.part').offset().top;
    visual_bt.click(function(){
        $('html').animate({
            scrollTop : part_pos
        });
    });
};