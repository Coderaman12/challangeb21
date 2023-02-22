
var first_animation = function(){

    var tl = gsap.timeline({
        scrollTrigger:{
                trigger:"#main",
                start:"top 0%",
                end:"bottom 80%",
                scrub:1,
                // markers:true
    
        }
    })
    
    tl
        .to("#c-circle",{
        duration:.1,
        rotate:25,
        ease:Power2.easeOut,
        },"same")
        .to("#circle img",{
        duration:1,
        x:"120%",
        y:"50%",
        rotate:360,
        stagger:.1,
        pin:true
        },"same")


        .to("#c-circle",{
            rotate:-10,
            ease:"power3",

        },"same2")
        .to("#circle img",{
            x:"200%",
            ease:"power3",
            // rotate:-40,
            stagger:.1
            },"same2")
}


first_animation();