import objectData from './story1ObjectData.js'

const story1_2Data = [
    {
        "mode": "conversation",
        "bgm": objectData.bgm.sample1,
        "bgimg": objectData.bgimg.roomNight,
        "title": objectData.character.akira.name,
        "text": "こんなん一人じゃ勝てないって！どうしたら勝てるかなあ？",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "さっそくフレンドぼしゅうに書きこも！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "・・・えーと、「小学生です！チームを組んで戦える強い人ぼしゅう！」っと、これでよし！！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "明日には人来てくれるといいな！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.anata.name,
        "text": "アキラの言ってたゲーム、パソコンでやるんだよな",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.anata.name,
        "text": "パソコンにインストールできたし、さっそくやってみるか！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "operation",
        "operationId": 1
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

export default story1_2Data;