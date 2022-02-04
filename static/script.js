// Nav-Bar Open
var $els = $('.menu a, .menu header');
var count = $els.length;                //13
var grouplength = Math.ceil(count/3);    //5

console.log(count)
console.log(grouplength)


var groupNumber = 0;
var i = 1;

 $('.menu').css('--count',count+'');    

function abc(){
    $els.each(function(j){
        if ( i > grouplength ) {
            groupNumber++;
            i=1;
        }
        $(this).attr('data-group',groupNumber);    
        i++;                                        
    });
}

abc()

$('.menu footer button').on('click',function(e){
    
    e.preventDefault();
    $els.each(function(j){
        $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
        $(this).css('--delay-in',j*.1+'s');
        $(this).css('--delay-out',(count-j)*.1+'s');
    });
    $('.menu').toggleClass('closed');
    e.stopPropagation();

    
});
// Nav-Bar Close

// Page-5 Counter Open
var project = setInterval(projectCompleted, 10)
        var client = setInterval(ActiveClients, 10)
        var coffee = setInterval(cupsCoffee, 10)
        var clients = setInterval(happyClients, 10)
        let count1 = 1;
        let count2 = 1;
        let count3 = 1;
        let count4 = 1;

        function projectCompleted() {
            count1++
            document.querySelector("#number1").innerHTML = count1
            if (count1 == 500) {
                clearInterval(project)
            }
        }

        function ActiveClients() {
            count2++
            document.querySelector("#number2").innerHTML = count2
            if (count2 == 89) {
                clearInterval(client)
            }
        }

        function cupsCoffee() {
            count3++
            document.querySelector("#number3").innerHTML = count3
            if (count3 == 359) {
                clearInterval(coffee)
            }
        }

        function happyClients() {
            count4++
            document.querySelector("#number4").innerHTML = count4
            if (count4 == 489) {
                clearInterval(clients)
            }
        }
        // Page-5 Counter Close

        // Page-6 +- Menu Open
        $(function(){

            $('.info').first().slideDown();
         
            $('.item').click(function(){
                $(this).next().slideDown().siblings('.info').slideUp();
            });
         });
        //  Page-6 +- Menu Close