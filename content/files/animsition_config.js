jQuery(document).ready(function($) {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in-left', //ここにアニメーションの指定をします。
    outClass              :   'fade-out-down', //ここにアニメーションの指定をします。
    inDuration            :    500,  //スピード調整
    outDuration           :    500,  //スピード調整
    linkElement           :   '.animsition-link', //リンクのaに左のclassをつけます。
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true, //ローディングアニメーションの有無
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});