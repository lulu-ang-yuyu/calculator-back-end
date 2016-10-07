/**
 * Created by Cathy on 16/9/22.
 */

var num=0,result=0,numshow="0";
var operate=0; //判断输入状态的标志
var calcul=0; //判断计算状态的标志
var quit=0; //防止重复按键的标志
var functionNum =0; //判断当前的
var specialFuncNum = 0;


function mycalculator(num) {

    functionNum = num;

    // 初始化，把所有的input的值都变为空
    document.getElementById('amount1').value = '';
    document.getElementById('amount2').value = '';
    document.getElementById('amount3').value = '';
    document.getElementById('amount4').value = '';
    document.getElementById('amount5').value = '';
    document.getElementById('functionRusult').value = '';

    // 让所有的输入框都出现(不再是隐身状况)
    document.getElementById("funcParam1").style.display="inline";
    document.getElementById("amount1").style.display="inline";
    document.getElementById("funcParam2").style.display="inline";
    document.getElementById("amount2").style.display="inline";
    document.getElementById("funcParam3").style.display="inline";
    document.getElementById("amount3").style.display="inline";
    document.getElementById("funcParam4").style.display="inline";
    document.getElementById("amount4").style.display="inline";
    document.getElementById("funcParam5").style.display="inline";
    document.getElementById("amount5").style.display="inline";
    switch (num)
    {
        case 1:
        {
            document.getElementById('funcIntroduce').innerHTML = "DGM法：这是一个基于现金流的权益成本算法，适用于股价可以公允价值计量且每年都有股息分红的公司，它假设股息增长率固定不变";
            document.getElementById('funcParam1').innerHTML = "请输入本期每股分红";
            document.getElementById('funcParam2').innerHTML = "请输入股息增长率(小数形式)";
            document.getElementById('funcParam3').innerHTML = "请输入本期股价";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";
            // 参数

        }break;
        case 2:
        {
            document.getElementById('funcIntroduce').innerHTML = "CAPM法：该方法假设所有投资者都以证券投资组合的方式进行投资，从而分散非系统性风险，剩下不能被分散的系统风险。CAPM模型计算一个最低回报率来补偿系统性风险。";
            document.getElementById('funcParam1').innerHTML = "请输入无风险利率(小数形式)";
            document.getElementById('funcParam2').innerHTML = "请输入市场利率(小数形式)";
            document.getElementById('funcParam3').innerHTML = "请输入该个股对于整个资本市场波动的敏感性";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";
        }break;
        case 3:
        {
            document.getElementById('funcIntroduce').innerHTML = "不可赎回债券：该方法利用每年的现金流流出，来估计债券成本。适用于债券公允价值被可靠计量的情况。";
            document.getElementById('funcParam1').innerHTML = "请输入债券年利率";
            document.getElementById('funcParam2').innerHTML = "请输入税率";
            document.getElementById('funcParam3').innerHTML = "请输入本期债券的市场价值";
            document.getElementById("funcParam4").innerHTML = "请输入债券面值"
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";
        }break;
        case 4:
        {
            document.getElementById('funcIntroduce').innerHTML = "Asset valuation:适用于公司破产清算时的公司估值，此时所有资产及负债都用可变现净值来计量。";
            document.getElementById('funcParam1').innerHTML = "请输入公司所有资产的可变现净值";
            document.getElementById('funcParam2').innerHTML = "请输入公司所有负债的可变现净值";
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
            document.getElementById('funcParam1').innerHTML = "请输入未来现金流持续年限";
            document.getElementById('funcParam2').innerHTML = "请输入第n年产生的现金流";
            document.getElementById('funcParam3').innerHTML = "请输入市场利率(小数形式)";
            document.getElementById("funcParam4").style.display="none";
            document.getElementById("amount4").style.display="none";
            document.getElementById("funcParam5").style.display="none";
            document.getElementById("amount5").style.display="none";

        }break;
        case 6:
        {
            document.getElementById('funcIntroduce').innerHTML = "P/E估值：适用于未上市公司（或股价不能被公允计量的公司），相似公司的经营模式、经营杠杆、财务杠杆都要与该公司接近。";
            document.getElementById('funcParam1').innerHTML = "请输入相似公司的P/E值";
            document.getElementById('funcParam2').innerHTML = "请输入公司的预测年净收入";
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
            document.getElementById('funcParam1').innerHTML = "请输入现金流在几个月后流入/出";
            document.getElementById('funcParam2').innerHTML = "请输入以外币形式表现的未来现金流";
            document.getElementById('funcParam3').innerHTML = "请输入本国年利率(小数形式)";
            document.getElementById("funcParam4").innerHTML="请输入外国年利率(小数形式)";
            document.getElementById("funcParam5").innerHTML="请输入即期汇率";

        }break;
        case 8:
        {
            document.getElementById('funcIntroduce').innerHTML = "货币市场对冲策略：这是一个有点复杂的三言两语讲不太清的方法。";
            document.getElementById('funcParam1').innerHTML = "请输入未来流入现金流";
            document.getElementById('funcParam2').innerHTML = "预计几个月后收钱";
            document.getElementById('funcParam3').innerHTML = "请输入即期汇率";
            document.getElementById("funcParam4").innerHTML="请输入外币借款利率(小数形式)";
            document.getElementById("funcParam5").innerHTML="请输入本币存款利率(小数形式)";

        }break;
        case 9:
        {
            document.getElementById('funcIntroduce').innerHTML = "货币市场对冲策略：这是一个有点复杂的三言两语讲不太清的方法。";
            document.getElementById('funcParam1').innerHTML = "CF-未来流出现金流";
            document.getElementById('funcParam2').innerHTML = "n-预计几个月后收钱";
            document.getElementById('funcParam3').innerHTML = "spot rate-即期汇率";
            document.getElementById("funcParam4").innerHTML="i1-外币存款利率(小数形式)";
            document.getElementById("funcParam5").innerHTML="i2-本币借款利率(小数形式)";

        }break;
        case 10:
        {
             document.getElementById('funcIntroduce').innerHTML = "不可赎回债券:该方法利用两个不同折现率来折现每年流出现金流从而估计债券成本,不要求公允价值能被可靠计量";
             document.getElementById('funcParam1').innerHTML = "请输入每年利息";
             document.getElementById('funcParam2').innerHTML = "请输入未来现金流持续的时间";
             document.getElementById('funcParam3').innerHTML = "请输入预计最小成本(小数形式);
             document.getElementById("funcParam4").innerHTML="请输入预计最大成本(小数形式)";
             document.getElementById("funcParam5").innerHTML="请输入债券面值";

        }
    }
    // var paramS = new Array();
    // paramS[0] = "Saab";
    // paramS[1] = "Volvo";
    // paramS[2] = "BMW";


    // specialCalculat(paramS)
}

// 安全判断的输出
function printfError() {
    alert('参数错误,参数不能为空或不能为0。请重新输入');
}

function specialCalculat() {
    // document.getElementById('funcParam2').innerHTML = "g-股息增长率";

    // 获取到input输入框里面的数据，并且把获取的字符串转成float类型
    var amount1=  parseFloat( document.getElementById('amount1').value);
    var amount2=  parseFloat(document.getElementById('amount2').value);
    var amount3=  parseFloat(document.getElementById('amount3').value);
    var amount4=  parseFloat(document.getElementById('amount4').value);
    var amount5=  parseFloat(document.getElementById('amount5').value);

    // 安全判断，所有函数的第一个和第二个参数均不能为0（或者为空）
    if (amount1 == 0 || amount2 == 0 )
    {
        printfError();
        return;
    }
    switch (functionNum)
    {
        case 1:
        {
            if (amount3 == 0)
            {
                printfError();return;
            }

            // 对应公式 Ke=[d0(1+g)/p0]+g
            var result = (amount1*(1+amount2)/amount3) + amount2;

            // toFixed 保留2位小数点 , 把id 为functionRusult的输入框，赋上值。
            document.getElementById('functionRusult').value = result.toFixed(2);

        }break;
        case 2:
        {
            if (amount3 == 0)
            {
                printfError();return;
            }
            // 对应公式 Ke=Rf+β(Rm-Rf)
            var result = amount1+ amount3* (amount2 - amount1);
            document.getElementById('functionRusult').value = result.toFixed(2);
        }break;
        case 3:
        {
            // 这里t-税率，必须要在 0 ~ 1 之间取值
            if (amount2 >1 || amount2 <0 || amount3 == 0)
            {
                printfError();return;
            }

            // 对应公式 Kd=i*pv*(1-t)/p0
            var result = amount1*amount4*(1-amount2)/amount3;
            document.getElementById('functionRusult').value = result.toFixed(2);
        }break;
        case 4:
        {
            //  对应公式 value = NRV of asset - NRV of liability
            var result = amount1-amount2;
            document.getElementById('functionRusult').value = result.toFixed(2);
        }break;
        case 5:
        {
           //用一个数组存放每年现金流流入
           var myCFs=new Array();
           //把每年现金流现值加起来
           for(var i=0;i<amount1;i++)
           {
             document.getElementById('funcParam2').innerHTML = "请顺序输入每年现金流";
             myCFs[i] = amount2;
             var result = myCFs[i]/Math.pow((1+amount3),i) + result;

           }
            document.getElementById('functionRusult').value = result.toFixed(2);

       }break;
        case 6:
        {

            // 对应公式 Value=P/E值*earnings
            var result = amount1-amount2;
            document.getElementById('functionRusult').value = result.toFixed(2);
        }break;
        case 7:
        {
            if (amount3 == 0||amount4 == 0||amount5 == 0)
            {
                printfError();return;
            }
            // 对应公式 forward rate=spot rate*[(1+i2*(n/12))/(1+i1*(n/12))]
            var result = amount5 *((1+amount4*(amount1/12))/(1+amount3*(amount1/12)));
            document.getElementById('functionRusult').value = result.toFixed(2);

        }break;
        case 8:
        {
            if (amount3 == 0||amount4 == 0||amount5 == 0)
            {
                printfError();return;
            }
            // 对应公式
            // Current borrowing=CF/(1+i1*(n/12))	/*现在要借的外币*/
            // Domestic currency=current borrowing/spot rate      /*把借来的外币换成本币*/
            // Future domestic currency= Domestic currency*(1+i2*(n/12))
            var CB = amount1/(1+amount4*(amount2/12));
            var DC = CB/amount3;
            var result = DC*(1+amount5*(amount2/12));
            document.getElementById('functionRusult').value = result.toFixed(2);

        }break;
        case 9:
        {
            if (amount3 == 0||amount4 == 0||amount5 == 0)
            {
                printfError();return;
            }
            // current lending=CF/(1+外币存款利率*(n/12));
            //domestic currency=current lending/spot rare;
            //future domestic currency=domestic currency*(1+本币借款利率*(n/12));

           var CL = amount1/(amount4*(amount2/12));
           var DC = CL/amount3;
           var result = DC*(1+amount5*(amount2/12));
           document.getElementById('functionRusult').value = result.toFixed(2);
        }break;
        case 10:
        {
          //用一个数组存放每年现金流流入
           var myCFs=new Array();
          //把每年现金流现值加起来
           for(var i=0;i<amount2;i++)
           {
              myCFs[i] = amount5*amount1;
              var NPVa= myCFs[i]/Math.pow((1+amount3),i) + result;
              var NPVb = myCFs[i]/Math.pow((1+amount4),i) + result;

           }
            var result = amount3+(NPVa/(NPVb-NPVa))*(amount4-amount3);
            document.getElementById('functionRusult').value = result.toFixed(2);
        }break;
    }
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

    document.getElementById("funcParam4").style.display="none";
    document.getElementById("amount4").style.display="none";
    document.getElementById("funcParam5").style.display="none";
    document.getElementById("amount5").style.display="none";
    num=result; //存储当前值


}
function clearnote(){ //清空提示
    document.getElementById("note").innerHTML="";
}