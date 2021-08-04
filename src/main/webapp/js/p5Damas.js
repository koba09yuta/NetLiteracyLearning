let damas;
let mes1;
let scaleAll;
let canvas;
let pressFlag = false;
let count = 0;
let changeW;
let changeH;
let sp;
let song;
let cmd = 0;
let dBar;
let dBarSp;
let adh;
let at;
let df;
let hl;
let lifeAll = 0;
let nowPlayer;
let mode;
let tmpCmd;
//素材呼び出し
function preload() {
    enemy = loadImage('../../img/game/damas.svg');
    atN = loadImage('../../img/game/at.png');
    dfN = loadImage('../../img/game/df.png');
    hlN = loadImage('../../img/game/hl.png');
    atH = loadImage('../../img/game/atH.png');
    dfH = loadImage('../../img/game/dfH.png');
    hlH = loadImage('../../img/game/hlH.png');
    soloIcon = loadImage('../../img/game/solo.svg');
    teamIcon = loadImage('../../img/game/team.svg');
    slash = loadAnimation('../../img/game/slashAnime/z001.png', '../../img/game/slashAnime/z002.png', '../../img/game/slashAnime/z003.png', '../../img/game/slashAnime/z004.png', '../../img/game/slashAnime/z005.png', '../../img/game/slashAnime/z006.png', '../../img/game/slashAnime/z007.png', '../../img/game/slashAnime/z008.png', '../../img/game/slashAnime/z009.png');
    atack = loadAnimation('../../img/game/enemyAtack/2.png', '../../img/game/enemyAtack/3.png', '../../img/game/enemyAtack/4.png', '../../img/game/enemyAtack/5.png', '../../img/game/enemyAtack/6.png', '../../img/game/enemyAtack/7.png', '../../img/game/enemyAtack/8.png', '../../img/game/enemyAtack/9.png', '../../img/game/enemyAtack/10.png');
    atack2 = loadAnimation('../../img/game/enemyAtack2/1.png', '../../img/game/enemyAtack2/2.png', '../../img/game/enemyAtack2/3.png', '../../img/game/enemyAtack2/4.png', '../../img/game/enemyAtack2/5.png', '../../img/game/enemyAtack2/6.png', '../../img/game/enemyAtack2/7.png', '../../img/game/enemyAtack2/8.png', '../../img/game/enemyAtack2/9.png', '../../img/game/enemyAtack2/10.png');
    heal = loadAnimation('../../img/game/hlAnime/1.png', '../../img/game/hlAnime/2.png', '../../img/game/hlAnime/3.png', '../../img/game/hlAnime/4.png', '../../img/game/hlAnime/5.png', '../../img/game/hlAnime/6.png', '../../img/game/hlAnime/7.png', '../../img/game/hlAnime/8.png', '../../img/game/hlAnime/9.png', '../../img/game/hlAnime/10.png', '../../img/game/hlAnime/11.png', '../../img/game/hlAnime/12.png', '../../img/game/hlAnime/13.png', '../../img/game/hlAnime/14.png', '../../img/game/hlAnime/15.png');
    defence = loadAnimation('../../img/game/dfAnime/1.png', '../../img/game/dfAnime/2.png', '../../img/game/dfAnime/3.png', '../../img/game/dfAnime/4.png', '../../img/game/dfAnime/5.png', '../../img/game/dfAnime/6.png', '../../img/game/dfAnime/7.png', '../../img/game/dfAnime/8.png');
    song = loadSound('../../music/bgm/battle.mp3');
    slashSe = loadSound('../../music/bgm/slash.mp3');
    punchSe = loadSound('../../music/bgm/punch.mp3');
    defenceSe = loadSound('../../music/bgm/df.mp3');
    healSe = loadSound('../../music/bgm/hl.mp3');
}
//初期化
function setup() {
    //キャンバスを作成
    canvas = createCanvas(windowWidth * 0.783, windowHeight * 0.86);
    canvas.parent('pc-wrapper');
    rectMode(CENTER);

    const fileName = window.location.href.split('/').pop();
    if (fileName === "missionDamas1.html") {
        mode = "solo";
    } else if (fileName === "missionDamas2.html") {
        mode = "team";
    }

    team = createSprite();
    if (mode == "team") team.addImage(teamIcon);
    else team.addImage(soloIcon);

    //ダマス作成
    damasSp = createSprite();
    damasSp.addImage(enemy);

    terop1 = createSprite(0, 0, 300, 50);
    terop2 = createSprite(0, 0, 300, 50);

    //エフェクト
    slashSp = effectSetUp();
    atackSp = effectSetUp();
    defenceSp = effectSetUp();
    healSp = effectSetUp();

    //見えないスプライト
    sp = createSprite(0, 0, 1, 1);
    sp.shapeColor = color(0, 0, 0, 100);

    //選択肢のホバーリセット
    at = atN; df = dfN; hl = hlN;

    //ダメージバー
    dBar = new damageBar();
    dBarSp = new damageBar();
    dBarShoSp = new damageBar();

    //キャラパラメータ
    anata = new player(100, 2, 0);
    sho = new player(999, 10, 5);
    damas = new player(200, 6, 0);

    song = volumeSetUp(song);
    slashSe = volumeSetUp(slashSe);
    punchSe = volumeSetUp(punchSe);
    defenceSe = volumeSetUp(defenceSe);
    healSe = volumeSetUp(healSe);
}

function keyPressed() {
    if (key == "t") {
        mode = "team";
        //ダメージバー
        dBar = new damageBar();
        dBarSp = new damageBar();
        dBarShoSp = new damageBar();

        //キャラパラメータ
        anata = new player(100, 2, 0);
        sho = new player(999, 10, 5);
        damas = new player(200, 6, 0);

        team.addImage(teamIcon);
    }
    if (key == "s") {
        mode = "solo";
        //ダメージバー
        dBar = new damageBar();
        dBarSp = new damageBar();
        dBarShoSp = new damageBar();

        //キャラパラメータ
        anata = new player(100, 2, 0);
        sho = new player(999, 10, 5);
        damas = new player(200, 6, 0);

        team.addImage(soloIcon);
    }
}

function volumeSetUp(bgm) {
    bgm.setVolume(0.1);
    return bgm;
}

function effectSetUp() {
    effectSp = createSprite();
    effectSp.shapeColor = color(0, 0, 0, 0);
    effectSp.life = 0;
    return effectSp;
}

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

function createSlash() {
    slashSp = effectDraw(slash, 36, 3, 0.6);
    slashSe.play();
}

function createAtack() {
    atackSp = effectDraw(atack, 36, 3, 1.4);
    punchSe.play();
}

function createDefence() {
    defenceSp = effectDraw(defence, 32, 5, 2.5);
    defenceSe.play();
}

function createHeal() {
    healSp = effectDraw(heal, 60, 4, 2.5);
    healSe.play();
}

function mousePressed() {
    if (pressFlag && lifeAll < 0) {
        pressFlag = false;
        console.log("press");
        cmdPlay();
    }
}

function cmdPlay() {
    console.log(cmd);
    if (cmd == 0) {
        if (adh == "at") {
            cmd = 1;
            damas.damage = damas.receive(anata.atack());
            damas.damageTotal += damas.damage;
            createSlash();
        }
        if (adh == "df") cmd = 2;
        if (adh == "hl") {
            cmd = 3;
            if (anata.damageTotal != 0) {
                anata.damageTotal -= anata.hp / 2;
                createHeal();
            }
        }
    }
    else if (cmd == 1 || cmd == 2 || cmd == 3 || cmd == 5) {
        at = atN; df = dfN; hl = hlN;
        console.log(mode);
        if (damas.hp - damas.damageTotal < 1) cmd = 6;
        else if (mode == "solo" || cmd == 5) {
            anata.damage = anata.receive(damas.atack());
            sho.damage = sho.receive(damas.atack());
            if (cmd == 2 || tmpCmd == 2) {
                anata.damage = 0;
                anata.damageTotal += anata.damage;
                sho.damageTotal += sho.damage;
                createDefence();
            }
            else {
                anata.damageTotal += anata.damage;
                sho.damageTotal += sho.damage;
                createAtack();
            }
            cmd = 4;
        }
        else {
            damas.damage = damas.receive(sho.atack());
            damas.damageTotal += damas.damage;
            createSlash();
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
        console.log(adh);
        if (adh == "re") cmd = 0;
        else if (adh == "st1")window.location.href = "./conversation1_2.html";
        else if (adh == "st2") window.location.href = "./conversation1_3.html";
        anata.damageTotal = 0;
        damas.damageTotal = 0;
        sho.damageTotal = 0;
        dBar = new damageBar();
        dBarSp = new damageBar();
        dBarShoSp = new damageBar();
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
    if (slashSp.life % 15 != 13) drawSprite(damasSp);

    if (slashSp != null) {
        drawSprite(slashSp);
    }

    //ウインドウ1
    rectMode(CENTER);
    if (atackSp.life > 0 && atackSp.life < 30 && anata.damage != 0) fill(100, 0, 0, 200);
    else if (defenceSp.life > 0 && defenceSp.life < 29 && anata.damage == 0) fill(0, 0, 100, 200);
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
        if (bool1 || bool2 || bool3) pressFlag = true;
        else {
            pressFlag = false;
            at = atN; df = dfN; hl = hlN;
        }

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

    //敵の攻撃
    if (atackSp != null && anata.damage != 0) drawSprite(atackSp);
    if (defenceSp != null && anata.damage == 0) drawSprite(defenceSp);
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
    sp.position.x = width / 15;
    sp.position.y = height * 8 / 11;

    //スケール変換
    if (width / 15 > 500) sp.scale = scaleAll * 0.4;
    else sp.scale = scaleAll * width / 750 * 0.20;
    drawSprite(sp);
}

function battleMenu(cmdSp, img, posY) {
    cmdSp.addImage(img);
    cmdSp.position.x = width / 3;
    cmdSp.position.y = height * posY / 10;

    //スケール変換
    if (width / 3 > 310) {
        cmdSp.scale = scaleAll * 0.25;
        textSize(scaleAll * 20);
    }
    else {
        cmdSp.scale = scaleAll * width / 750 * 0.20;
        textSize(scaleAll * width / 918 * 20);
    }
}

function damyWrapp(cmd) {
    //damyのサイズ調整
    if (width / 3 > 310) {
        textSize(scaleAll * 25);
    }
    else {
        console.log(width / 3);
        textSize(scaleAll * width / 918 * 20);
    }

    //テキスト進行のため、ダミースクリプトを張りクリックを許可
    let clickDamy = createSprite(width / 2, height * 4 / 5, windowWidth * 0.5, windowHeight * 0.3);
    clickDamy.shapeColor = color(0, 0, 0, 0);
    let bool = sp.overlap(clickDamy, () => console.log("hit"));
    if (bool) pressFlag = true;
    else pressFlag = false;
    drawSprite(clickDamy);

    //セリフ
    textAlign(CENTER, BASELINE);
    fill(255, 255, 255);
    if (cmd == 1) text('あなたの　こうげき！\nダマスに　' + damas.damage + '　のダメージ　▼', width / 2, height * 7 / 9);
    else if (cmd == 2) text('あなたの　まもる！\nまもりの　たいせいに　なった！　▼', width / 2, height * 7 / 9);
    else if (cmd == 3) {
        if (anata.damageTotal == 0) text("あなたの　かいふく！\nHPは　まんたんだった！　▼", width / 2, height * 7 / 9);
        else text('あなたの　かいふく！\nHPが　' + anata.hp / 2 + '　かいふくした！　▼', width / 2, height * 7 / 9);
    }
    else if (cmd == 4) {
        if (mode == "solo") text('ダマスの　こうげき！\nあなたに　' + anata.damage + '　のダメージ　▼', width / 2, height * 7 / 9);
        else text('ダマスの　こうげき！\nあなたに　' + anata.damage + '　のダメージ\nショウに　' + sho.damage + '　のダメージ　▼', width / 2, height * 6 / 8);
    }
    else if (cmd == 5) text('ショウの　こうげき！\nダマスに　' + damas.damage + '　のダメージ　▼', width / 2, height * 7 / 9);
    else if (cmd == 6) {
        text('ダマスを　たおした！！　▼', width / 2, height * 7 / 9);
        adh = "st2";
    }
    else text('あなたは　たおれた・・・　▼', width / 2, height * 7 / 9);

    if (cmd == 8) {
        fill(100, 100, 200, 250);
        rect(width / 2, height / 2, windowWidth * 0.3, windowHeight * 0.3);
        fill(250, 250, 250);
        text("再挑戦", width / 2, height * 4 / 9);
        terop1.position.x = width / 2;
        terop1.position.y = height * 4 / 9;
        terop1.shapeColor = color(0, 0, 0, 0);
        fill(250, 250, 0);
        text("あきらめる", width / 2, height * 5 / 9);
        terop2.position.x = width / 2;
        terop2.position.y = height * 5 / 9;
        terop2.shapeColor = color(0, 0, 0, 0);
        drawSprite(terop1);
        drawSprite(terop2);
        let bool1 = sp.overlap(terop1, () => adh = "re");
        let bool2 = sp.overlap(terop2, () => adh = "st1");
        if (bool1 || bool2) pressFlag = true;
        else pressFlag = false;
    }

    clickDamy.remove();
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