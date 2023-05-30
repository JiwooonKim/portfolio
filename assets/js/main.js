$(function(){
    // 마우스 스토커
    function mouseFollower(e) {
        gsap.to('.cursor',0.2, {
            css: {
                left: e.clientX,
                top: e.clientY
            }
        })
    }
    $(window).on('mousemove', mouseFollower);

    // 메인비주얼 텍스트 모션
    gsap.to('.sc-visual .overflow .text',{
        y: 0,
        stagger: 0.2,
        delay: 0.5
    });

    // (공통) 스크롤마다 텍스트 올라오는 모션
    textList = document.querySelectorAll('.headline .overflow .text');
    textList.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element.parentElement,
                start: "0% 80%",
            },
            y: 0,
            ease: "cubic-bezier(.34,1.56,.64,1)",
            stagger: 0.1
        })
    });

    //  문장 올라오는 모션
    const descText = new SplitType('.desc .overflow', {types: 'words,chars'})
    gsap.set(descText.words, { yPercent: 200 })
    gsap.to(descText.words, {
        scrollTrigger:{
            trigger:".desc",
        },
        yPercent: 0,
        ease: "ease-out",
        stagger: 0.05
    })

    // sc-portfolio 스크롤시 옆에서 나오는 모션
    pofolList = document.querySelectorAll('.pofol-item .bg');
    pofolList.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "0% 80%",
                end: "100% 100%"
            },
            ease: "cubic-bezier(.34,1.56,.64,1)",
            xPercent: element.dataset.x,
            stagger: 1
        })
    })

    // sc-portfolio 스크롤시 이미지 움직이는 모션
    pofolList = document.querySelectorAll('.pofol-item .img-area img');
    pofolList.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element.parentElement,
                scrub: 2
            },
            ease: "cubic-bezier(.34,1.56,.64,1)",
            yPercent: -15,
        })
    })
    
    gsap.to('.sc-pofol .list1 .reel-list',22, {
        xPercent: -100,
        repeat: -1,
        ease: 'none'
    })
    gsap.to('.sc-pofol .list2 .reel-list',22, {
        xPercent: 100,
        repeat: -1,
        ease: 'none'
    })

    gsap.to('.sc-about .group-bg .bg-box', {
        scrollTrigger: {
            trigger: '.sc-about',
            scrub: 8
        },
        xPercent: -20
    })

    gsap.to('.footer .bg', {
        scrollTrigger: {
            trigger: '.footer .bg',
            scrub: true,
            start: '150% 50%',
            end: '250% 90%'
        },
        opacity: 0
    })
})