

$(document).ready(()=>{
    let interval = setInterval(()=>{
        console.info("interval")
        $(".site-footer").replaceWith('<footer class="site-footer"><p class="powered-by">Synergy</p><p class="powered-by"><span class="float-right" aria-hidden="true"><a href="#" class="back-to-top"><span class="button_icon"><i class="fas fa-chevron-up fa-2x"></i></span></a></span></p></footer>');  
    },200)
    
    setTimeout(()=>{
        clearInterval(interval)
    },2000)
})