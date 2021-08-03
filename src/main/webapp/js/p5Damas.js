let damas;
let mes1;
let scaleAll;
let canvas;
let enemyHP = 200;
let damage = 0;
let damageSp = 0;
let damageTotal = 0;
let damageTotalSp = 0;
let pressFlag = false;
let count = 0;
let changeW;
let changeH;
let sp;
let spHP;
let song;
let cmd = 0;
let dBar;
let dBarSp;
let adh;
let at;
let df;
let hl;
let lifeAll=0;

//素材呼び出し
function preload() {
    enemy = loadImage('../../img/game/damas.svg');
    atN = loadImage('../../img/game/at.png');
    dfN = loadImage('../../img/game/df.png');
    hlN = loadImage('../../img/game/hl.png');
    atH = loadImage('../../img/game/atH.png');
    dfH = loadImage('../../img/game/dfH.png');
    hlH = loadImage('../../img/game/hlH.png');
    anata = loadImage('../../img/game/anataIcon.svg');
    sho = loadImage('../../img/game/shoIcon.svg');
    slash = loadAnimation('../../img/game/slashAnime/z001.png', '../../img/game/slashAnime/z002.png', '../../img/game/slashAnime/z003.png', '../../img/game/slashAnime/z004.png', '../../img/game/slashAnime/z005.png', '../../img/game/slashAnime/z006.png', '../../img/game/slashAnime/z007.png', '../../img/game/slashAnime/z008.png', '../../img/game/slashAnime/z009.png');
    atack = loadAnimation('../../img/game/enemyAtack/2.png', '../../img/game/enemyAtack/3.png', '../../img/game/enemyAtack/4.png', '../../img/game/enemyAtack/5.png', '../../img/game/enemyAtack/6.png', '../../img/game/enemyAtack/7.png', '../../img/game/enemyAtack/8.png', '../../img/game/enemyAtack/9.png', '../../img/game/enemyAtack/10.png');
    atack2 = loadAnimation('../../img/game/enemyAtack2/1.png', '../../img/game/enemyAtack2/2.png', '../../img/game/enemyAtack2/3.png', '../../img/game/enemyAtack2/4.png', '../../img/game/enemyAtack2/5.png', '../../img/game/enemyAtack2/6.png', '../../img/game/enemyAtack2/7.png', '../../img/game/enemyAtack2/8.png', '../../img/game/enemyAtack2/9.png', '../../img/game/enemyAtack2/10.png');
    heal=loadAnimation('../../img/game/hlAnime/1.png', '../../img/game/hlAnime/2.png', '../../img/game/hlAnime/3.png', '../../img/game/hlAnime/4.png', '../../img/game/hlAnime/5.png', '../../img/game/hlAnime/6.png', '../../img/game/hlAnime/7.png', '../../img/game/hlAnime/8.png','../../img/game/hlAnime/9.png','../../img/game/hlAnime/10.png','../../img/game/hlAnime/11.png','../../img/game/hlAnime/12.png','../../img/game/hlAnime/13.png','../../img/game/hlAnime/14.png','../../img/game/hlAnime/15.png');
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

    //ダマス作成
    damas = createSprite();
    damas.addImage(enemy);

    //エフェクト
    slashSp = effectSetUp();
    atackSp = effectSetUp();
    defenceSp = effectSetUp();
    healSp = effectSetUp();

    //見えないスプライト
    sp = createSprite(0, 0, 1, 1);
    sp.shapeColor = color(0, 0, 0, 100);
    spHP = 100;

    anataIcon=createSprite();
    anataIcon.addImage(anata);
    shoIcon=createSprite();
    shoIcon.addImage(sho);


    at = atN; df = dfN; hl = hlN;

    dBar = new damageBar();
    dBarSp = new damageBar();

    song=volumeSetUp(song);
    slashSe=volumeSetUp(slashSe);
    punchSe=volumeSetUp(punchSe);
    defenceSe=volumeSetUp(defenceSe);
    healSe=volumeSetUp(healSe);

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

function effectDraw(type,life,posY,scale) {
    effectSp = createSprite();
    effectSp.addAnimation(""+type+"", type);
    effectSp.life = life;
    lifeAll=life;
    effectSp.position.x = width / 2;
    effectSp.position.y = height * posY / 8;
    effectSp.scale = scaleAll * scale;
    return effectSp;
}

function createSlash() {
    slashSp = effectDraw(slash,36,3,0.6);
    slashSe.play();
}

function createAtack() {
    atackSp = effectDraw(atack,36,3,1.4);
    punchSe.play();
}

function createDefence() {
    defenceSp = effectDraw(defence,32,5,2.5);
    defenceSe.play();
}

function createHeal() {
    healSp = effectDraw(heal,60,4,2.5);
    healSe.play();
}

function mousePressed() {
    if (pressFlag&&lifeAll<0) {
        pressFlag = false;
        console.log("press");
        if (cmd == 0) {
            if (adh == "at") {
                cmd = 1;
                damage = int(random(1, 3) * 10);
                damageTotal += damage;
                createSlash();
            }
            if (adh == "df") cmd = 2;
            if (adh == "hl") {
                cmd = 3;
                damageSp = int(random(4, 5) * 10);
                if (damageTotalSp != 0) damageTotalSp -= damageSp;
                createHeal();
            }
        }
        else if (cmd == 1 || cmd == 2 || cmd == 3) {
            at = atN; df = dfN; hl = hlN;
            damageSp = int(random(5, 6) * 10);
            if (cmd == 2) {
                damageSp = 0;
                damageTotalSp += damageSp;
                createDefence();
            }
            else {
                damageTotalSp += damageSp;
                createAtack();
            }
            cmd = 4;
        }
        else if (cmd == 4) {
            if (spHP - damageTotalSp < 1) cmd = 5;
            else cmd = 0;
        }
        else if (cmd == 5) {
            cmd = 0;
            damageTotalSp = 0;
            damageTotal = 0;
            dBar = new damageBar();
            dBarSp = new damageBar();
        }
    }
}

//描画
function draw() {
    //可変画面
    resizeCanvas(windowWidth * 0.783, windowHeight * 0.86);
    scaleAll = (canvas.height) / 500;

    //ダマスのポジション
    damas.position.x = width / 2;
    damas.position.y = height / 2;
    damas.scale = scaleAll * 0.6;
    if (slashSp.life % 15 != 13) drawSprite(damas);

    if (slashSp != null) {
        drawSprite(slashSp);
    }

    //ウインドウ1
    rectMode(CENTER);
    if (atackSp.life > 0 && atackSp.life < 30 && damageSp != 0) fill(100, 0, 0, 200);
    else if (atackSp.life > 0 && atackSp.life < 30 && damageSp == 0) fill(0, 0, 100, 200);
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
        text('あなた　HP：' + (spHP - damageTotalSp), width / 2, height * 7 / 10);
        dBarSp.bar(2.1, damageTotalSp, width * 4.92 / 6 - windowWidth * 0.5 / 2, height * 11.5 / 15 - windowHeight * 0.07 / 2, spHP);
    }

    //セリフウインドウ
    if (cmd == 1) damyWrapp(cmd);
    if (cmd == 2) damyWrapp(cmd);
    if (cmd == 3) damyWrapp(cmd);
    if (cmd == 4) damyWrapp(cmd);
    if (cmd == 5) damyWrapp(cmd);

    //敵の攻撃
    if (atackSp != null && damageSp != 0) drawSprite(atackSp);
    if (defenceSp != null && damageSp == 0) drawSprite(defenceSp);
    if (healSp != null) drawSprite(healSp);

    //ダメージバー
    dBar.bar(1, damageTotal, width / 2 - windowWidth * 0.5 / 2, height * 1 / 15 - windowHeight * 0.07 / 2, enemyHP);

    if (!song.isPlaying()) {
        song.play();
    }

    anataIcon.position.x=width/13;
    anataIcon.position.y=height *2/ 3;
    anataIcon.scale=scaleAll * 0.4;
    drawSprite(anataIcon);
    shoIcon.position.x=width/13;
    shoIcon.position.y=height*4 / 5;
    shoIcon.scale=scaleAll * 0.4;
    drawSprite(shoIcon);

    //見えないカーソル移動
    sp.position.x = mouseX;
    sp.position.y = mouseY;
    drawSprite(sp);

    lifeAll--;
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
        console.log(width / 3);
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
    if (cmd == 1) text('あなたの　こうげき！\nダマスに　' + damage + 'のダメージ　▼', width / 2, height * 7 / 9);
    else if (cmd == 2) text('あなたの　まもる！\nまもりの　たいせいに　なった！　▼', width / 2, height * 7 / 9);
    else if (cmd == 3) {
        if (damageTotalSp == 0) text("あなたの　かいふく！\nHPは　まんたんだった！　▼", width / 2, height * 7 / 9);
        else text('あなたの　かいふく！\nHPが　' + damageSp + 'かいふくした！　▼', width / 2, height * 7 / 9);
    }
    else if (cmd == 4) text('ダマスの　こうげき！\nあなたに　' + damageSp + 'のダメージ　▼', width / 2, height * 7 / 9);
    else if (cmd == 5) text('あなたは　たおれた・・・　▼', width / 2, height * 7 / 9);
    clickDamy.remove();
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