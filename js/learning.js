let filterBtn = document.querySelectorAll(".filterBtn")
let catid = document.querySelector(".catid")
// filterBtn[0].classList.add("activeFilterBtn")
filterBtn.forEach(element => {
    element.addEventListener("click" , function(params) {
        $(".filterBtn").removeClass("activeFilterBtn")
        element.classList.add("activeFilterBtn")
    })
    if (element.getAttribute("data-catid")==catid.innerHTML) {
        
        element.classList.add("activeFilterBtn")
    }
     if (catid.innerHTML=="") {
        filterBtn[0].classList.add("activeFilterBtn")        
    }

});


function playVideo(params) {
    
let playBtn = document.querySelectorAll(".playbtn");
playBtn.forEach((element) => {
  element.addEventListener("click", function (params) {
    console.log();
    let videoCtrl = element.previousElementSibling;
    videoCtrl.play();
    element.classList.remove("pause");
    element.classList.add("play");
    console.log(videoCtrl);
    
    videoCtrl.addEventListener("click", () => {
      videoCtrl.pause();
      element.classList.remove("play");
      element.classList.add("pause");
    });
  });
});

}
playVideo()
$(document).ready(function () {
    $(".filterBtn").click(function (e) {
        var url4 = $(this).attr("data-learning");
        // $(".learnContainer").load(url4);
      

        $.ajax({
            url: url4,
            method: 'GET',
            success: function(response) {
                // مخفی کردن لودینگ بعد از دریافت پاسخ
                $(".learnContainer").html(response);
                setTimeout(() => {
                    
                    playVideo();
                }, 500);
            },
           
        });
    });
  });


  let formSearch =document.querySelector(".formSearch")

  formSearch.addEventListener("submit" , function (e) {
    e.preventDefault()
    let q = formSearch.querySelector("input").value
    var url4 =`/load-learning.inc?type=4&q=${q}&refresh=true`
    // $(".learnContainer").load(url4);

    document.querySelector('.loadingForm').style.display = 'flex';
    console.log(url4);
    
    $.ajax({
        url: url4,
        method: 'GET',
        success: function(response) {
            // مخفی کردن لودینگ بعد از دریافت پاسخ
            document.querySelector('.loadingForm').style.display = 'none';
            $(".learnContainer").html(response);
            setTimeout(() => {
                
                playVideo();
            }, 500);
        },
        error: function() {
            document.querySelector('.loadingForm').style.display = 'none';
        }
    });
  })