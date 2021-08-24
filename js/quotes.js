const quotes = [
    {
        quote: "인생은 가이드 뒤를 졸졸 따라다니는 관광여행이 아니라 발길 닿는 대로 가보는 끝없는 여정이다." ,
        author: "-작자 미상-"
    },
    {
        quote: "어떤 일이든 쉬워지기 전에는 어려운 법이다." ,
        author: "-토마스 풀러-"
    },
    {
        quote: "어떻게 말할까 하고 괴로울 땐 진실을 말하라." ,
        author: "-마크 트웨인-"
    },
    {
        quote: "착한 것만으론 아무것도 할 수 없다" ,
        author: "-작자 미상-"
    },
    {
        quote: "배움을 포기하는 순간, 우리는 늙기 시작한다." ,
        author: "-셰익스피어-"
    },
    {
        quote: "새로운 지식을 얻기 원한다면, 새로운 질문의 세계를 가져야 한다." ,
        author: "-레인저-"
    },
    {
        quote: "오늘의 식사는 내일로 미루지 않으면서 오늘 할 일을 내일로 미루는 사람이 많다." ,
        author: "-카를 힐티-"
    },
    {
        quote: "내 앞의 행복의 문이 닫히면, 내 옆의 행복의 문이 열릴 것이다." ,
        author: "카를 힐티-"
    },
    {
        quote: "아웃사이더가 되는 것을 두려워 말고, 기성체제에 도전하고 비난에 굴복하지 말라",
        author: "-도날드 트럼프-"
    },
    {
        quote: "아웃사이더가 되는 것을 두려워 말고, 기성체제에 도전하고 비난에 굴복하지 말라",
        author: "-도날드 트럼프-"
    },
    {
        quote: "제발 정신 좀 차리세요.",
        author: "-국민의힘[이준석]-"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;




