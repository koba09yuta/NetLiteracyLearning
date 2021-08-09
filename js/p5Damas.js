//フレキシブル対応倍率格納変数
let scaleAll;
//ウインドウクリック判定
let pressFlag = false;
//ウインドウ遷移用コマンド格納変数
let cmd = 0;
//アタック・ディフェンス・ヒール判定
let adh;
//エフェクト終了までのスプライトの寿命を格納
let lifeAll = 0;
//チーム戦ぼうぎょコマンドでループ時に
let tmpCmd;
//素材呼び出し
function preload() {
    //選択肢（at:こうげき、df:ぼうぎょ、hl:回復）
    //N・・・ホバー前の画像、H・・・ホバー後の画像
    atN = loadImage('../img/game/at.png');
    dfN = loadImage('../img/game/df.png');
    hlN = loadImage('../img/game/hl.png');
    atH = loadImage('../img/game/atH.png');
    dfH = loadImage('../img/game/dfH.png');
    hlH = loadImage('../img/game/hlH.png');

    label1 = loadImage('../img/game/label1.svg');
    label2 = loadImage('../img/game/label2.svg');
    //ダマス
    enemy = loadImage('../img/game/damas.svg');
    //終了画面
    endWindow = loadImage('../img/game/re_window.svg');
    //チームアイコン各種
    soloIcon = loadImage('../img/game/solo.svg');
    teamIcon = loadImage('../img/game/team.svg');
    //攻撃エフェクトアニメーション
    slash = loadAnimation('../img/game/slashAnime/z001.png', '../img/game/slashAnime/z002.png', '../img/game/slashAnime/z003.png', '../img/game/slashAnime/z004.png', '../img/game/slashAnime/z005.png', '../img/game/slashAnime/z006.png', '../img/game/slashAnime/z007.png', '../img/game/slashAnime/z008.png', '../img/game/slashAnime/z009.png');
    slash2 = loadAnimation('../img/game/slashAnime2/1.png', '../img/game/slashAnime2/2.png', '../img/game/slashAnime2/3.png', '../img/game/slashAnime2/4.png', '../img/game/slashAnime2/5.png', '../img/game/slashAnime2/6.png', '../img/game/slashAnime2/7.png', '../img/game/slashAnime2/8.png', '../img/game/slashAnime2/9.png', '../img/game/slashAnime2/10.png');
    atack = loadAnimation('../img/game/enemyAtack/2.png', '../img/game/enemyAtack/3.png', '../img/game/enemyAtack/4.png', '../img/game/enemyAtack/5.png', '../img/game/enemyAtack/6.png', '../img/game/enemyAtack/7.png', '../img/game/enemyAtack/8.png', '../img/game/enemyAtack/9.png', '../img/game/enemyAtack/10.png');
    heal = loadAnimation('../img/game/hlAnime/1.png', '../img/game/hlAnime/2.png', '../img/game/hlAnime/3.png', '../img/game/hlAnime/4.png', '../img/game/hlAnime/5.png', '../img/game/hlAnime/6.png', '../img/game/hlAnime/7.png', '../img/game/hlAnime/8.png', '../img/game/hlAnime/9.png', '../img/game/hlAnime/10.png', '../img/game/hlAnime/11.png', '../img/game/hlAnime/12.png', '../img/game/hlAnime/13.png', '../img/game/hlAnime/14.png', '../img/game/hlAnime/15.png');
    defence = loadAnimation('../img/game/dfAnime/1.png', '../img/game/dfAnime/2.png', '../img/game/dfAnime/3.png', '../img/game/dfAnime/4.png', '../img/game/dfAnime/5.png', '../img/game/dfAnime/6.png', '../img/game/dfAnime/7.png', '../img/game/dfAnime/8.png');
    //BGM
    song = loadSound('../music/bgm/battle.mp3');
    ////効果音各種
    slashSe = loadSound('../music/sound_effect/slash.mp3');
    slashSe2 = loadSound('../music/sound_effect/slash2.mp3');
    punchSe = loadSound('../music/sound_effect/punch.mp3');
    defenceSe = loadSound('../music/sound_effect/df.mp3');
    healSe = loadSound('../music/sound_effect/hl.mp3');
}
//初期化
function setup() {
    //キャンバスを作成
    canvas = createCanvas(windowWidth * 0.783, windowHeight * 0.86);
    canvas.parent('pc-wrapper');

    //配置基準をオブジェクトのセンターに
    rectMode(CENTER);

    //フォント
    textFont("游ゴシック Medium");

    //モード選択
    const fileName = window.location.href.split('/').pop();
    if (fileName === "missionDamas1.html") {
        mode = "solo";
    } else if (fileName === "missionDamas2.html") {
        mode = "team";
    }

    //アイコンスプライト
    team = createSprite();
    if (mode == "team") team.addImage(teamIcon);
    else team.addImage(soloIcon);

    //ダマススプライト
    damasSp = createSprite();
    damasSp.addImage(enemy);

    //ゲーム終了画面と選択のスプライト
    endWindowSp = createSprite();
    endWindowSp.addImage(endWindow);
    labelSp1 = createSprite(0, 0, 300, 50);
    labelSp1.addImage(label1);
    labelSp2 = createSprite(0, 0, 300, 50);
    labelSp2.addImage(label2);

    //エフェクトスプライト
    slashSp = effectSetUp();
    slashSp2 = effectSetUp();
    atackSp = effectSetUp();
    defenceSp = effectSetUp();
    healSp = effectSetUp();

    //衝突用透明スプライト（マウス追従）
    sp = createSprite(0, 0, 1, 1);
    sp.shapeColor = color(0, 0, 0, 100);

    //選択肢のホバーの初期化
    at = atN; df = dfN; hl = hlN;

    //ダメージバー
    dBar = new damageBar();
    dBarSp = new damageBar();
    dBarShoSp = new damageBar();

    //キャラパラメータ
    anata = new player(100, 3, 0.8);
    sho = new player(999, 12, 3);
    damas = new player(200, 6, 6);

    //各種音源ボリューム初期化
    song = volumeSetUp(song);
    slashSe = volumeSetUp(slashSe);
    slashSe2 = volumeSetUp(slashSe2);
    punchSe = volumeSetUp(punchSe);
    defenceSe = volumeSetUp(defenceSe);
    healSe = volumeSetUp(healSe);

    turn = 0;
}
//クラス初期化
function reset() {
    //ダメージバー
    dBar = new damageBar();
    dBarSp = new damageBar();
    dBarShoSp = new damageBar();

    //キャラパラメータ
    anata = new player(100, 3, 0.8);
    sho = new player(999, 12, 3);
    damas = new player(200, 6, 6);

    turn = 0;
}
//モード切り替え（開発者確認コマンド）
/*function keyPressed() {
    if (key == "t") {
        mode = "team";
        reset();
        team.addImage(teamIcon);
    }
    if (key == "s") {
        mode = "solo";
        reset();
        team.addImage(soloIcon);
    }
}*/
//ボリュームコントロール
function volumeSetUp(bgm) {
    bgm.setVolume(0.15);
    return bgm;
}
//エフェクト初期化
function effectSetUp() {
    effectSp = createSprite();
    effectSp.shapeColor = color(0, 0, 0, 0);
    effectSp.life = 0;
    return effectSp;
}
//エフェクト描画
function effectDraw(type, life, posY, scale) {
    effectSp = createSprite();
    effectSp.addAnimation("" + type + "", type);
    effectSp.life = life;
    lifeAll = life;
    effectSp.position.x = width / 2;
    effectSp.position.y = height * posY / 8;
    effectSp.scale = scaleAll * scale;
    return effectSp;
}
//斬撃
function createSlash() {
    slashSp = effectDraw(slash, 36, 3, 0.6);
    slashSe.play();
}
//強斬撃
function createSlash2() {
    slashSp2 = effectDraw(slash2, 36, 3, 0.6);
    slashSe2.play();
}
//殴打
function createAtack() {
    atackSp = effectDraw(atack, 36, 3, 1.4);
    punchSe.play();
}
//防御
function createDefence() {
    defenceSp = effectDraw(defence, 32, 5, 2.5);
    defenceSe.play();
}
//回復
function createHeal() {
    healSp = effectDraw(heal, 60, 4, 2.5);
    healSe.play();
}
//クリックイベントでウインドウ遷移
function mousePressed() {
    //lifeAllによりエフェクト終了してからつぎのウインドウへ
    if (pressFlag && lifeAll < 0) {
        pressFlag = false;
        cmdPlay();
    }
}
//ウインドウ遷移コマンド
function cmdPlay() {
    //メニュー選択画面
    if (cmd == 0) {
        //turnカウント
        turn++;

        //攻撃
        if (adh == "at") {
            cmd = 1;
            damas.damage = damas.receive(anata.atack());
            damas.damageTotal += damas.damage;
            createSlash();
        }
        //防御
        if (adh == "df") cmd = 2;
        //回復
        if (adh == "hl") {
            cmd = 3;
            if (anata.damageTotal != 0) {
                //回復値設定
                anata.damage = anata.atack() * 2;
                anata.damageTotal -= anata.damage;
                if (anata.damageTotal < 0) {
                    anata.damage += anata.damageTotal;
                    anata.damageTotal = 0;
                }
                createHeal();
            }
        }
    }
    //主人公の行動後
    else if (cmd == 1 || cmd == 2 || cmd == 3 || cmd == 5) {
        at = atN; df = dfN; hl = hlN;
        if (damas.hp - damas.damageTotal < 1) cmd = 6;
        else if (mode == "solo" || cmd == 5) {
            //ダマスの攻撃
            if (turn != 3) {
                anata.damage = anata.receive(damas.atack());
                sho.damage = sho.receive(damas.atack());

                if (cmd == 2 || tmpCmd == 2) {
                    anata.damage = int(anata.damage/5);
                    anata.damageTotal += anata.damage;
                    sho.damageTotal += sho.damage;
                    createDefence();
                }
                else {
                    anata.damageTotal += anata.damage;
                    sho.damageTotal += sho.damage;
                    createAtack();
                }
            }
            else damas.power = 20;
            cmd = 4;
        }
        else {
            damas.damage = damas.receive(sho.atack());
            damas.damageTotal += damas.damage;
            createSlash2();
            tmpCmd = cmd;
            cmd = 5;
        }
    }
    else if (cmd == 4) {
        if (anata.hp - anata.damageTotal < 1) cmd = 7;
        else cmd = 0;
    }
    else if (cmd == 7) {
        cmd = 8;
    }
    else {
        if (adh == "re") cmd = 0;
        else if (adh == "st1") window.location.href = "./conversation1_2.html";
        else if (adh == "st2") window.location.href = "./conversation1_3.html";
        reset();
    }
}

//描画
function draw() {
    //可変画面
    resizeCanvas(windowWidth * 0.783, windowHeight * 0.86);
    scaleAll = (canvas.height) / 500;

    //ダマスのポジション
    damasSp.position.x = width / 2;
    damasSp.position.y = height / 2;
    damasSp.scale = scaleAll * 0.6;
    if (slashSp.life % 15 != 13 && slashSp2.life == 0) drawSprite(damasSp);
    if (slashSp2.life % 15 != 1 && slashSp.life == 0) drawSprite(damasSp);

    if (slashSp != null) drawSprite(slashSp);
    if (slashSp2 != null) drawSprite(slashSp2);

    //ウインドウ
    rectMode(CENTER);
    if (atackSp.life > 0 && atackSp.life < 30 && anata.damage != 0) fill(100, 0, 0, 200);
    else if (defenceSp.life > 0 && defenceSp.life < 29) fill(0, 0, 100, 200);
    else fill(0, 0, 0, 200);

    rect(width / 2, height * 4 / 5, windowWidth * 0.5, windowHeight * 0.3, 20, 20, 20, 20);
    if (cmd == 0) {
        atSp = createSprite();
        dfSp = createSprite();
        hlSp = createSprite();
        battleMenu(atSp, at, 7);
        battleMenu(dfSp, df, 8);
        battleMenu(hlSp, hl, 9);

        //こうげき、まもる、かいふく選択
        let bool1 = sp.overlap(atSp, () => { adh = "at"; at = atH; });
        let bool2 = sp.overlap(dfSp, () => { adh = "df"; df = dfH; });
        let bool3 = sp.overlap(hlSp, () => { adh = "hl"; hl = hlH; });
        press(bool1 || bool2 || bool3);

        //描画とスプライト削除
        drawSprite(atSp); drawSprite(dfSp); drawSprite(hlSp);
        atSp.remove(); dfSp.remove(); hlSp.remove();

        //勇者のHP
        fill(255, 255, 255);
        text('あなた　HP：' + (anata.hp - anata.damageTotal), width / 2, height * 10.5 / 15);
        dBarSp.bar(2.1, anata.damageTotal, width * 4.92 / 6 - windowWidth * 0.5 / 2, height * 11.5 / 15 - windowHeight * 0.07 / 2, anata.hp);
        fill(255, 255, 255);
        if (mode == "team") {
            text('ショウ　HP：' + (sho.hp - sho.damageTotal), width / 2, height * 13 / 15);
            dBarShoSp.bar(2.1, sho.damageTotal, width * 4.92 / 6 - windowWidth * 0.5 / 2, height * 14 / 15 - windowHeight * 0.07 / 2, sho.hp);
        }
    }
    //セリフウインドウ
    if (cmd == 1) damyWrapp(cmd);
    if (cmd == 2) damyWrapp(cmd);
    if (cmd == 3) damyWrapp(cmd);
    if (cmd == 4) damyWrapp(cmd);
    if (cmd == 5) damyWrapp(cmd);
    if (cmd == 6) damyWrapp(cmd);
    if (cmd == 7) damyWrapp(cmd);
    if (cmd == 8) damyWrapp(cmd);

    //攻撃、防御、回復
    if (atackSp != null && anata.damage != 0) drawSprite(atackSp);
    if (defenceSp != null) drawSprite(defenceSp);
    if (healSp != null) drawSprite(healSp);

    //ダメージバー
    dBar.bar(1, damas.damageTotal, width / 2 - windowWidth * 0.5 / 2, height * 1 / 15 - windowHeight * 0.07 / 2, damas.hp);

    if (!song.isPlaying()) {
        song.play();
    }

    //アイコン配置
    iconPosition(team);

    //見えないカーソル移動
    sp.position.x = mouseX;
    sp.position.y = mouseY;
    drawSprite(sp);

    lifeAll--;
}

function iconPosition(sp) {
    sp.position.x = width / 11;
    sp.position.y = height * 7 / 11;

    //スケール変換
    if (width / 15 > 500) sp.scale = scaleAll;
    else sp.scale = width / 750 * 0.4;
    if ((sp.height / 2 + sp.position.x) < canvas.height) drawSprite(sp);
}

function battleMenu(cmdSp, img, posY) {
    cmdSp.addImage(img);
    cmdSp.position.x = width / 3;
    cmdSp.position.y = height * posY / 10;

    //スケール変換
    if (width / 3 > 310) {
        cmdSp.scale = scaleAll * 0.25;
        textSize(scaleAll * 26);
    }
    else {
        cmdSp.scale = scaleAll * width / 750 * 0.20;
        textSize(scaleAll * width / 918 * 26);
    }
}

function damyWrapp(cmd) {
    //damyのサイズ調整
    if (width / 3 > 310) {
        textSize(scaleAll * 30);
    }
    else {
        textSize(scaleAll * width / 918 * 30);
    }

    //テキスト進行のため、ダミースクリプトを張りクリックを許可
    let clickDamy = createSprite(width / 2, height * 4 / 5, windowWidth * 0.5, windowHeight * 0.3);
    clickDamy.shapeColor = color(0, 0, 0, 0);
    let bool = sp.overlap(clickDamy,);
    press(bool);

    drawSprite(clickDamy);

    //セリフ
    textAlign(CENTER, BASELINE);
    fill(255, 255, 255);
    if (cmd == 1) {
        text('あなたの　こうげき！\nダマスに　' + damas.damage + '　のダメージ　▼', width / 2, height * 7 / 9);
    }
    else if (cmd == 2) {
        text('あなたの　まもる！\nたてを　かまえた！　▼', width / 2, height * 7 / 9);
    }
    else if (cmd == 3) {
        if (anata.damage == 0) {
            text("あなたの　かいふく！\nHPは　まんたんだった！　▼", width / 2, height * 7 / 9);
        }
        else text('あなたの　かいふく！\nHPが　' + anata.damage + '　かいふくした！　▼', width / 2, height * 7 / 9);
    }
    else if (cmd == 4) {
        if (turn == 3) text('まずい！\nダマスが　おこった！！　▼', width / 2, height * 7 / 9);
        else {
            if (mode == "solo") {
                text('ダマスの　こうげき！\nあなたに　' + anata.damage + '　のダメージ　▼', width / 2, height * 7 / 9);
            }
            else text('ダマスの　こうげき！\nあなたに　' + anata.damage + '　のダメージ\nショウに　' + sho.damage + '　のダメージ　▼', width / 2, height * 6 / 8);
        }
    }
    else if (cmd == 5) {
        text('ショウの　こうげき！\nダマスに　' + damas.damage + '　のダメージ　▼', width / 2, height * 7 / 9);
    }
    else if (cmd == 6) {
        text('ダマスを　たおした！！　▼', width / 2, height * 7 / 9);
        adh = "st2";
    }
    else text('あなたは　たおれた・・・　▼', width / 2, height * 7 / 9);

    if (cmd == 8) {
        endWindowSp.position.x = width / 2;
        endWindowSp.position.y = height / 2;
        endWindowSp.scale = scaleAll * width / 1500 * 1.2;
        drawSprite(endWindowSp);
        labelSp1.position.x = width / 2;
        if (mode == "solo") labelSp1.position.y = height * (7.5 - (width / 1000)) / 15;
        else labelSp1.position.y = height * 7.5 / 15;
        labelSp1.shapeColor = color(100, 0, 0, 0);
        labelSp2.position.x = width / 2;
        labelSp2.position.y = height * (7.5 + (width / 1000)) / 15;
        labelSp2.shapeColor = color(100, 0, 0, 0);
        labelSp1.scale = scaleAll * width / 750 * 0.30;
        labelSp2.scale = scaleAll * width / 750 * 0.30;

        let bool1 = sp.overlap(labelSp1, () => adh = "re");
        let bool2 = sp.overlap(labelSp2, () => adh = "st1");

        drawSprite(labelSp1);
        if (mode == "solo") {
            drawSprite(labelSp2);
            press(bool1 || bool2);
        }
        else press(bool1);

    }
    clickDamy.remove();
}

function press(bool) {
    if (bool) {
        pressFlag = true;
        cursor(HAND);
    }
    else {
        pressFlag = false;
        cursor(ARROW);
        at = atN; df = dfN; hl = hlN;
    }
}

class player {
    constructor(hp, power, defence) {
        this.hp = hp;
        this.power = power;
        this.defence = defence;
        this.damage = 0;
        this.damageTotal = 0;
    }
    atack() {
        return int(random(this.power - 1, this.power) * 10);
    }
    receive(atack) {
        return int(atack * (1 - this.defence / 10));
    }
}

class damageBar {
    constructor() {
        this.tempDamage = 0;
    }
    bar(barWidth, damage, x, y, hp) {
        rectMode(CORNER);
        fill(200, 200, 200, 70);
        rect(x, y, windowWidth * 0.5 / barWidth, windowHeight * 0.07 / barWidth);

        let dmCheck = this.zeroCare(hp, damage);
        fill(255, 0, 0, 180);
        if (windowWidth * 0.5 - this.tempDamage > windowWidth * 0.5 * (dmCheck / hp)) {
            rect(x, y, (windowWidth * 0.5 - this.tempDamage) / barWidth, windowHeight * 0.07 / barWidth);
            this.tempDamage += 4;
        } else rect(x, y, windowWidth * 0.5 * (dmCheck / hp) / barWidth, windowHeight * 0.07 / barWidth);

        fill(0, 255, 0, 180);
        rect(x, y, windowWidth * 0.5 * (dmCheck / hp) / barWidth, windowHeight * 0.07 / barWidth);
    }
    zeroCare(hp, damage) {
        if (hp - damage < 0) return 0;
        else return hp - damage;
    }
}