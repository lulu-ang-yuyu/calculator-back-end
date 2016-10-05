/**
 * Created by Shawn on 16/9/22.
 */

var num=0,result=0,numshow="0";
var operate=0; //判断输入状态的标志
var calcul=0; //判断计算状态的标志
var quit=0; //防止重复按键的标志
var specialFuncNum = 0;

function mycalculator(num) {


    document.getElementById("funcParam4").style.display="inline";
    document.getElementById("amount4").style.display="inline";
    document.getElementById("funcParam5").style.display="inline";
    document.getElementById("amount5").style.display="inline";
    switch (num)
    {
        case 1:
        {
            document.getElementById('funcIntroduce').innerHTML = "DGM法：这是一个基于现金流的权益成本算法，适用于股价可以公允价值计量且每年都有股息分红的公司，它假设股息增长率固定不变";
            document.getElementById('funcParam1').innerHTML = "d0-本期每股分红";
            document.getElementById('funcParam2').innerHTML = "g-股息增长率";
            document.getElementById('funcParam3').innerHTML = "p0-本期股价";

            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";
            // 参数

        }break;
        case 2:
        {
            document.getElementById('funcIntroduce').innerHTML = "CAPM法：该方法假设所有投资者都以证券投资组合的方式进行投资，从而分散非系统性风险，剩下不能被分散的系统风险。CAPM模型计算一个最低回报率来补偿系统性风险。";
            document.getElementById('funcParam1').innerHTML = "Rf-无风险利率";
            document.getElementById('funcParam2').innerHTML = "Rm-市场利率";
            document.getElementById('funcParam3').innerHTML = "β-个股对于整个资本市场波动的敏感性";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";
        }break;
        case 3:
        {
            document.getElementById('funcIntroduce').innerHTML = "不可赎回债券：该方法利用每年的现金流流出，来估计债券成本。适用于债券公允价值被可靠计量的情况。";
            document.getElementById('funcParam1').innerHTML = "i-债券年利率";
            document.getElementById('funcParam2').innerHTML = "t-税率";
            document.getElementById('funcParam3').innerHTML = "p0-本期债券的市场价值";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";
        }break;
        case 4:
        {
            document.getElementById('funcIntroduce').innerHTML = "Asset valuation:适用于公司破产清算时的公司估值，此时所有资产及负债都用可变现净值来计量。";
            document.getElementById('funcParam1').innerHTML = "n-未来现金流持续年限";
            document.getElementById('funcParam2').innerHTML = "NRV of liability-公司所有负债的可变现净值";
            document.getElementById("funcParam3").style.display="none";
            document.getElementById("amount3").style.display="none";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";
        }break;
        case 5:
        {

            document.getElementById('funcIntroduce').innerHTML = "DCF：利用未来现金流的现值来对公司进行估值。";
            document.getElementById('funcParam1').innerHTML = "n-未来现金流持续年限";
            document.getElementById('funcParam2').innerHTML = "CFn-第n年产生的现金流";
            document.getElementById('funcParam3').innerHTML = "i-年利率";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";



        }break;
        case 6:
        {
            document.getElementById('funcIntroduce').innerHTML = "DIE估值：适用于未上市公司（或股价不能被公允计量的公司），相似公司的经营模式、经营杠杆、财务杠杆都要与该公司接近。";
            document.getElementById('funcParam1').innerHTML = "P/E-几个相似公司的P/E值平均数";
            document.getElementById('funcParam2').innerHTML = "Earnings-该公司的预测年净收入";

            document.getElementById("funcParam3").style.display="none";
            document.getElementById("amount3").style.display="none";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";

        }break;
        case 7:
        {
            document.getElementById('funcIntroduce').innerHTML = "远期汇率合约：该方法用本国的和他国的通胀指数来预测远期汇率，并生成一个合约，将未来汇率固定为远期汇率。";
            document.getElementById('funcParam1').innerHTML = "n-未来现金流在n个月后流入/流出";
            document.getElementById('funcParam2').innerHTML = "Overseas CF-以外币形式表现的未来现金流";
            document.getElementById('funcParam3').innerHTML = "i1-本国年利率";
            document.getElementById("funcParam4").innerHTML="i2-外国年利率";
            document.getElementById("funcParam5").innerHTML="spot rate";


        }break;
        case 8:
        {
            document.getElementById('funcIntroduce').innerHTML = "货币市场对冲策略：这是一个有点复杂的三言两语讲不太清的方法。";
            document.getElementById('funcParam1').innerHTML = "CF-未来流入现金流";
            document.getElementById('funcParam2').innerHTML = "n-预计几个月后收钱";
            document.getElementById('funcParam3').innerHTML = "spot rate-即期汇率";
            document.getElementById("funcParam4").innerHTML="i1-外币借款利率";
            document.getElementById("funcParam5").innerHTML="i2-本币存款利率";

        }break;
        case 9:
        {
            document.getElementById('funcIntroduce').innerHTML = "货币市场对冲策略：这是一个有点复杂的三言两语讲不太清的方法。";
            document.getElementById('funcParam1').innerHTML = "CF-未来流出现金流";
            document.getElementById('funcParam2').innerHTML = "n-预计几个月后收钱";
            document.getElementById('funcParam3').innerHTML = "spot rate-即期汇率";
            document.getElementById("funcParam4").innerHTML="i1-外币存款利率";
            document.getElementById("funcParam5").innerHTML="i2-本币借款利率";

        }break;
    }
    var paramS = new Array();
    paramS[0] = "Saab";
    paramS[1] = "Volvo";
    paramS[2] = "BMW";


    specialCalculat(paramS)
}

function specialCalculat(paramArr) {
    // document.write("<p>" + paramArr[0]+ "</p>");
    // document.getElementById('functionRusult').innerHTML =  paramArr[0];

    // document.getElementById('funcParam2').innerHTML = "g-股息增长率";
    // document.getElementById('funcParam3').innerHTML = "p0-本期股价";
}


function command(num){
    var str=String(document.calculator.numScreen.value); //获得当前显示数据
    str=(str!="0") ? ((operate==0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
    str=str + String(num); //给当前值追加字符
    document.calculator.numScreen.value=str; //刷新显示
    operate=0; //重置输入状态
    quit=0; //重置防止重复按键的标志
}
function dzero(){
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? ((operate==0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0";
    document.calculator.numScreen.value=str;
    operate=0;
}
function dot(){
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
    for(i=0; i<=str.length;i++){ //判断是否已经有一个点号
        if(str.substr(i,1)==".") return false; //如果有则不再插入
    }
    str=str + ".";
    document.calculator.numScreen.value=str;
    operate=0;
}
function del(){ //退格
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? str : "";
    str=str.substr(0,str.length-1);
    str=(str!="") ? str : "0";
    document.calculator.numScreen.value=str;
}
function clearscreen(){ //清除数据
    num=0;
    result=0;
    numshow="0";
    document.calculator.numScreen.value="0";
}
function plus(){ //加法
    calculate(); //调用计算函数
    operate=1; //更改输入状态
    calcul=1; //更改计算状态为加
}
function minus(){ //减法
    calculate();
    operate=1;
    calcul=2;
}
function times(){ //乘法
    calculate();
    operate=1;
    calcul=3;
}
function divide(){ //除法
    calculate();
    operate=1;
    calcul=4;
}
function persent(){ //求余
    calculate();
    operate=1;
    calcul=5;
}
function equal(){
    calculate(); //等于
    operate=1;
    num=0;
    result=0;
    numshow="0";
}
//
function calculate(){
    numshow=Number(document.calculator.numScreen.value);
    if(num!=0 && quit!=1){ //判断前一个运算数是否为零以及防重复按键的状态
        switch(calcul){ //判断要输入状态
            case 1:result=num+numshow;break; //计算"+"
            case 2:result=num-numshow;break; //计算"-"
            case 3:result=num*numshow;break;
            case 4:if(numshow!=0){result=num/numshow;}else{document.getElementById("note").innerHTML="被除数不能为零！"; setTimeout(clearnote,4000)} break;
            case 5:result=num%numshow;break;
        }
        quit=1; //避免重复按键
    }
    else{
        result=numshow;
    }
    numshow=String(result);
    document.calculator.numScreen.value=numshow;
    // document.getElementById('functionRusult').value = 222;

    document.getElementById('funcIntroduce').innerHTML = "Ke=[d0(1+g)/p0]+g";
    document.getElementById('funcParam1').innerHTML = "d0-本期每股分红";
    document.getElementById('funcParam2').innerHTML = "g-股息增长率";
    document.getElementById('funcParam3').innerHTML = "p0-本期股价";
    // document.getElementById("funcParam4").style.visibility="hidden";
    // document.getElementById("amount4").style.visibility="hidden";
    // document.getElementById("funcParam5").style.visibility="hidden";
    // document.getElementById("amount5").style.visibility="hidden";
    // document.getElementById("funcParam6").style.visibility="hidden";
    // document.getElementById("amount6").style.visibility="hidden";


    document.getElementById("funcParam4").style.display="none";
    document.getElementById("amount4").style.display="none";
    document.getElementById("funcParam5").style.display="none";
    document.getElementById("amount5").style.display="none";
    num=result; //存储当前值


}
function clearnote(){ //清空提示
    document.getElementById("note").innerHTML="";
}