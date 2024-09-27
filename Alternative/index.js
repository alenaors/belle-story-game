const image = document.querySelector('#myImage');
const text = document.querySelector('p');
const question = document.querySelector('h2');
const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
console.log(question);

btnOne.addEventListener('click', dreamer);
btnTwo.addEventListener('click', ordinary);

function dreamer() {
    image.setAttribute("src", "reading.png");
    text.innerHTML = "Однажды отец Бэлль отправился на ярмарку и не вернулся вовремя.";
    question.innerHTML = "Что делать Бэлль?";
    btnOne.innerHTML = "Отправиться искать отца";
    btnTwo.innerHTML = "Остаться дома"
    btnOne.addEventListener("click", forest);
    btnTwo.addEventListener("click", home);
}
    function forest() {
       image.setAttribute("src", "rain.png");
       text.innerHTML = "Бэлль отправилась на поиски отца. Дорога привела ее в заброшеный замок. Отец девушки находился в плену у ужасного Чудовища. Хозяин замка с грозным рыком велел Бэлль выметаться вон.";
       question.innerHTML = "Что делать Бэлль?";
       btnOne.innerHTML = "Уговорить Чудовище оставить ее в замке вместо отца";
       btnTwo.innerHTML = "В ужасе убежать прочь"
       btnOne.addEventListener("click", castle);
       btnTwo.addEventListener("click", runAway);
    }
    function home() {
       image.setAttribute("src", "alone.png");
       text.innerHTML = "Бэлль побоялась отправиться на поиски отца. К сожалению он так и не вернулся.";
       question.innerHTML = "Как поступить Бэлль?";
       btnOne.innerHTML = "Жить в одиночестве";
       btnTwo.innerHTML = "Выйти замуж"
       btnOne.addEventListener("click", liveAlone);
       btnTwo.addEventListener("click", marryGaston);
    }
        function castle() {
            image.setAttribute("src", "inCastle.png");
            text.innerHTML = "Бэлль удалось уговорить Чудовище отпустить ее больного отца домой. Сама она осталась в замке вместо него.";
            question.innerHTML = "Как себя вести Бэлль?";
            btnOne.innerHTML = "Плакать, истерить, обвинять Чудовище";
            btnTwo.innerHTML = "Попытаться подружиться с Чудовищем и обитателями замка"
            btnOne.addEventListener("click", badEnd);
            btnTwo.addEventListener("click", happyEnd);
        }
        function runAway() {
            image.setAttribute("src", "running.png");
            text.innerHTML = "В ужасе сбежав из замка, Бэлль вернулась домой. Ее отец так и остался навсегда у Чудовища.";
            question.innerHTML = "Как поступить Бэлль?";
            btnOne.innerHTML = "Жить в одиночестве";
            btnTwo.innerHTML = "Выйти замуж";
            btnOne.addEventListener("click", drunk);
            btnTwo.addEventListener("click", marryGaston);
        }
        function marryGaston() {
            image.setAttribute("src", "married Gaston 2.png");
            text.innerHTML = "Не представляя, как ей выжить в одиночестве, Бэлль выходит замуж за Гастона, который давно от нее этого добивался.";
            question.innerHTML = "Как дальше сложится жизнь Бэлль?";
            btnOne.innerHTML = "Она сможет справиться с чувством вины перед отцом";
            btnTwo.innerHTML = "Она так и будет чувствовать себя виноватой, что оставила отца в беде"
            btnOne.addEventListener("click", gastonKids);
            btnTwo.addEventListener("click", drunk);
        }
        function liveAlone() {
            image.setAttribute("src", "granny.png");
            text.innerHTML = "После исчезновения отца Бэлль пряталась от реальности в любимых книгах. Она так и прожила всю жизнь одна. В деревне ее считали слегка чокнутой, но за добрый нрав любили и помогали по-соседски.";
            question.style = "display:none";
            btnOne.style = "display:none";
            btnTwo.style = "display:none";
            
        }
              function drunk() {
                 image.setAttribute("src", "drunk.png");
                 text.innerHTML = "Не в силах справиться с чувством вины перед отцом, Бэлль топила свое отчаяние в алкоголе. Ее жизнь была полна самобичевания и сожалений.";
                 question.style = "display:none";
                 btnOne.style = "display:none";
                 btnTwo.style = "display:none";
            
               }

               function badEnd() {
                image.setAttribute("src", "beast.png");
                text.innerHTML = "Чудовище особым терпением не отличалось. Истеричная девица была просто заперта в башне до конца ее дней.";
                question.style = "display:none";
                btnOne.style = "display:none";
                btnTwo.style = "display:none";
           
              }
              function happyEnd() {
                image.setAttribute("src", "final1.png");
                text.innerHTML = "Доброта и любовь Бэлль сотворила чудо, сняв заклятье и превратив Чудовище в принца. Впрочем, что я вам рассказываю, как раз этот финал всем хорошо известен!";
                question.style = "display:none";
                btnOne.style = "display:none";
                btnTwo.style = "display:none";
           
              }







function ordinary() {
    image.setAttribute("src", "dishes.png");
    text.innerHTML = "Бэлль устала бороться с общественным осуждением. Она отложила книжки и занялась вещами, которые должны интересовать приличную девушку. Например замужество. К Бэлль сватается завидный жених, первый парень на деревне Гастон. Но характер у него не сахар. Стоит ли выходить за популярного нарциссичного абъюзера или подождать предложения руки и сердца от скромного симпатичного соседа?";
    question.innerHTML = "За кого выйти замуж Бэлль?";
    btnOne.innerHTML = "За Гастона";
    btnTwo.innerHTML = "За простого скромного парня"
    btnOne.addEventListener("click", marryGastonTwo);
    btnTwo.addEventListener("click", marryGoodGuy);
}
    function marryGastonTwo() {
        image.setAttribute("src", "married Gaston1.png");
        text.innerHTML = "Выйти замуж за первого парня на деревне - мечта каждой нормальной девушки. Теперь Бэлль - уважаемая Мадам Гастон. Подружки ей завидуют. Но жить с таким, как Гастон не легко.";
        question.innerHTML = "Как дальше сложится жизнь Бэлль?";
        btnOne.innerHTML = "Она сможет смириться с характером Гастона";
        btnTwo.innerHTML = "Она поймет, что жить с таким мужчиной невозможно"
        btnOne.addEventListener("click", gastonKids);
        btnTwo.addEventListener("click", nun);
    }
    function marryGoodGuy() {
        image.setAttribute("src", "marriedGoodGuy.png");
        text.innerHTML = "Бэлль неплохо разбиралась в людях. Деньгам и статусу деспотичного Гастона она предпочла тихий семейный уют со скромным парнем, который души в ней не чаял";
        question.innerHTML = "У них будут дети?";
        btnOne.innerHTML = "Да";
        btnTwo.innerHTML = "Нет"
        btnOne.addEventListener("click", happyFamily);
        btnTwo.addEventListener("click", drunkTwo);
    }
   

         function gastonKids() {
             image.setAttribute("src", "10 kids.png");
             text.innerHTML = "Смирившись с тяжелым характером мужа, Бэлль прожила с ним всю жизнь, родив множество детей. Счастлива она в браке не была, но соседи всегда завидовали ее достатку и статусу.";
             question.style = "display:none";
             btnOne.style = "display:none";
             btnTwo.style = "display:none";
   
            }
         function nun() {
             image.setAttribute("src", "Nun.png");
             text.innerHTML = "Бэлль так и не смогла ужиться с деспотичным нарциссом Гастоном. Не в силах больше выносить жизнь с ним, она сбежала в монастырь. Возможно там, среди пыльных фолиантов монастырской библиотеки, она даже была счастлива.";
             question.style = "display:none";
             btnOne.style = "display:none";
             btnTwo.style = "display:none";
   
            }

        function happyFamily() {
            image.setAttribute("src", "happyFamily.png");
            text.innerHTML = "У Бэлль и ее мужа родились прекрасные дети. Они прожили счастливую спокойную жизнь без всяких там дурацких приключений.";
            question.style = "display:none";
            btnOne.style = "display:none";
            btnTwo.style = "display:none";
  
            }
        function drunkTwo() {
            image.setAttribute("src", "drunk.png");
            text.innerHTML = "Дети в этой семье так и не родились. Чем старше становилась Бэлль, тем больше ее мучали сожаления о несбывшемся. От скуки она стала прикладываться к бутылке.";
            question.style = "display:none";
            btnOne.style = "display:none";
            btnTwo.style = "display:none";
  
            }