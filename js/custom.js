// header select 
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        // console.log(selectedOption);
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});
// responsive header select 
const resOptionMenu = document.querySelector(".responsive-select-menu"),
       resSelectBtn = resOptionMenu.querySelector(".select-btn"),
       resOptions = resOptionMenu.querySelectorAll(".option"),
       resSBtn_text = resOptionMenu.querySelector(".sBtn-text");

       resSelectBtn.addEventListener("click", () => resOptionMenu.classList.toggle("active"));       

       resOptions.forEach(option =>{
       option.addEventListener("click", ()=>{
       let selectedOption = option.querySelector(".option-text").innerText;
    //    console.log(selectedOption);
       resSBtn_text.innerText = selectedOption;

        resOptionMenu.classList.remove("active");
    });
});
// nav search 
    let searchInput=document.querySelector(".search-input"),
    searchBox=document.querySelector(".search-box"),
    closeIcon = document.querySelector(".close-icon");

    searchInput.addEventListener("click", function(){
        searchBox.classList.toggle("s-active");
    });
    closeIcon.addEventListener("click", function(){
        searchBox.classList.remove("s-active");
    });

    //res nav open/close

    // function noScroll() {
    //     window.scrollTo(0, 0);
    // }
    let openRes= document.querySelector(".open-nav"),
        closeRes= document.querySelector(".close-nav"),
        resNav= document.querySelector(".responsive-nav");

        openRes.addEventListener("click", function(){
            resNav.classList.toggle("active");
            // window.addEventListener("scroll", noScroll);
        });
        closeRes.addEventListener("click", function(){
            resNav.classList.remove("active");
        });

       


    // index-swiper 
    var swiper = new Swiper(".mainSwiper", {
        grabCursor: true,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3500,
            pauseOnMouseEnter:true,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

    //   dep slider 
    const myCustomSlider = document.querySelectorAll('.slide-content');

    for( i=0; i< myCustomSlider.length; i++ ) {
    
    myCustomSlider[i].classList.add('slide-content-' + i);

    var slider = new Swiper('.slide-content-' + i, {
    /* Options */
        grabCursor: true,
        slidesPerView: 4,
        loop: true,
        spaceBetween: 25,
        loopFillGroupWithBlank: true,
        centerSlider: 'true',
        fade:'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        navigation: {
            nextEl: "#swiper-button-next-" + i,
            prevEl: "#swiper-button-prev-" + i,
          },
          breakpoints: {
            0: {
                slidesPerView: 1, 
            },
            576: {
                slidesPerView: 2, 
            },
            768: {
                slidesPerView: 3, 
            },
            1200: {
                slidesPerView: 4, 
            },
          },
    });

    }
















    // var swiper = new Swiper(".slide-content", {
    //     grabCursor: true,
    //     slidesPerView: 4,
    //     loop: true,
    //     spaceBetween: 25,
    //     loopFillGroupWithBlank: true,
    //     centerSlider: 'true',
    //     fade:'true',
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       },
    //       breakpoints: {
    //         0: {
    //             slidesPerView: 1, 
    //         },
    //         576: {
    //             slidesPerView: 2, 
    //         },
    //         768: {
    //             slidesPerView: 3, 
    //         },
    //         1200: {
    //             slidesPerView: 4, 
    //         },
    //       },
    //   });
        
