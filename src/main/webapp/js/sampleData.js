const objectData = {
    "character": {
        "you": {
            "name": "あなた",
            "pose1": "<img src='../../img/people/you.svg'>"
        },
        "nyateracy": {
            "name": "ニャテラシー",
            "pose1": "<img src='../../img/nyateracy/nyateracy_1.svg'>"
        },
        "akira": {
            "name": "アキラ",
            "pose1": "<img src='../../img/people/akira.svg'>",
            "pose2": "<img src='../../img/people/akira.svg' style='transform: scale(-1, 1);'>"
        }
    },
    "img": {
        "dragonHunter": "<img src='../../img/other/dragon_hunter.svg' style='height: 90vh;'>",
        "phone": "<img src='../../img/other/phone.svg' style='height: 60vh;'>"
    },
    "bgimg": {
        "roadNoon": "url(../../img/background/residential_area_noon.jpg)",
        "roomEvening": "url(../../img/background/pc_room_evening.jpg)",
        "roomNight": "url(../../img/background/pc_room_night.jpg)"
    },
    "bgm": {
        "sample1": "../../music/bgm/なんでしょう？.mp3",
        "sample2": "../../music/bgm/パステルハウス.mp3",
    }
}


const storyData = [
    {
        "mode": "conversation",
        "bgm": objectData.bgm.sample1,
        "bgimg": objectData.bgimg.roadNoon,
        "title": "【通学路】",
        "text": "（友達のアキラ君とゲームの話中）",
        "mostLeft": objectData.character.you.pose1,
        "centerLeft": objectData.character.akira.pose2,
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "なぁなぁ、おまえんちパソコンあるだろ？",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "おすすめだからこのゲーム入れてみなよ！フレンドになろうぜ！？",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": objectData.img.dragonHunter
    },
    //1問目:問題の原因が理解できているか
    {
        "mode": "selection",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "どうしてこんなことになったかわかる？",
        "selection1": {
            "selection": "ゲームの敵を倒せなかった",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection2": {
            "selection": "チャット機能を利用した",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection3": {
            "selection": "フレンドを信用した",
            "answer": true,
            "title": objectData.character.nyateracy.name,
            "text": "その通り！知らない人を信用して言われるがままにソフトをインストールしてしまったんだ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
    },
    //２問目:顔の見えない人とやりとりについて
    {
        "mode": "selection",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "顔の見えない人とのやりとりについて、正しいのはどれ？",
        "selection1": {
            "selection": "知らない人とつながってしまうゲームをいっさいしない",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。あぶないつかいかたをしないようにしようね",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection2": {
            "selection": "こじんじょうほうを伝えると自分のことを知ってもらえてよい",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でもこじんじょうほうは伝えちゃだめだよ",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection3": {
            "selection": "こじんじょうほうがわかる書きこみをすると、悪い人に利用されてしまうかもしれない",
            "answer": true,
            "title": objectData.character.nyateracy.name,
            "text": "その通り！",
            "nyateracy": objectData.character.nyateracy.pose1
        },
    },
    //３問目:オンライン機器の正しい使い方
    {
        "mode": "selection",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "正しいパソコンの使い方はどれ？",
        "selection1": {
            "selection": "たのしいことはどんどんする",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection2": {
            "selection": "とくに問題がなさそうなので勝手に判断して行動した",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection3": {
            "selection": "勝手にソフトをダウンロードしたりしない",
            "answer": true,
            "title": objectData.character.nyateracy.name,
            "text": "その通り！",
            "nyateracy": objectData.character.nyateracy.pose1
        },
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "今回のような被害をランサムウェアというよ。ゲームのチートツールを装ってプレイヤーにダウンロードさせるんだ。",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": objectData.character.nyateracy.pose1,
        "img": ""
    },
    {
        "mode": "operation"
    }
]
export default storyData;