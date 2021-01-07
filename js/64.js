const questionCount = Object.keys(questions).length;
const answerCount   = Object.keys(answer).length;

/**
 * 質問のラジオボタン群を作成する。
 */
function buildRadioGroup() {
  let form = document.getElementById('test');

  for(let i = 0; i < questionCount; i++) {
    let questionNumber = (i + 1).toString();
    let myQuestion     = questions[questionNumber];
    let qSentence      = myQuestion.question;
    let isValueRevers  = myQuestion.reverse;

    let questionDiv = document.createElement('div');
    questionDiv.className = 'questionDiv';

    let questionSpan = document.createElement('span');
    questionSpan.innerHTML = questionNumber + '. ' + qSentence;

    const questionGroup = document.createElement('group');
    questionGroup.className = 'inline-radio';

    let j = 0;
    while (j < answerCount) {
      let answerNumber;
      if(!isValueRevers) { //
        answerNumber = (j + 1).toString();

      } else { // 逆順
        answerNumber = (answerCount - j).toString();
      }

      const ansDiv   = document.createElement('div');
      const ansInput = document.createElement('input');
      ansInput.type  = 'radio';
      ansInput.name  = 'Q' + questionNumber;
      ansInput.value = answerNumber;

      const ansLabel = document.createElement('label');
      ansLabel.innerHTML = answer[j + 1];

      ansDiv.appendChild(ansInput);
      ansDiv.appendChild(ansLabel);

      questionGroup.appendChild(ansDiv);

      j++;
    }

    questionDiv.appendChild(questionSpan);
    questionDiv.appendChild(questionGroup);

    form.appendChild(questionDiv);
  }

  const button   = document.createElement('input');
  button.type    = 'button';
  button.value   = '判定';
  button.onclick = calc;

  form.appendChild(button);
}

/**
 * 結果の算出を行う。
 */
function calc() {
  const TYPE = {'welfare': 'welfare',
                'environment': 'environment',
                'carrier': 'carrier',
                'leadership': 'leadership',
                'communication': 'communication',
                'workLifeBalance': 'workLifeBalance',
                'ability': 'ability',
                'safety': 'safety',
              };
  let resultALL    = 0;
  // 給与と福利厚生の満足度
  let resultWelfare = 0;
  let countWelfare  = 0;
  // 労働環境の満足度
  let resultEnvironment = 0;
  let countEnvironment  = 0;
  // キャリアと昇進機会への満足度
  let resultCarrier = 0;
  let countCarrier  = 0;
  // 上司やリーダーシップへの満足度
  let resultLeadership = 0;
  let countLeadership  = 0;
  // 社内コミュニケーションへの満足度
  let resultCommunication = 0;
  let countCommunication  = 0;
  // ワークライフバランスへの満足度
  let resultWorkLifeBalance = 0;
  let countWorkLifeBalance  = 0;
  // 社内の能力開発への満足度
  let resultAbility = 0;
  let countAbility  = 0;
  // チームワークと職場の安心感への満足度
  let resultSafety = 0;
  let countSafety  = 0;

  for(let i = 0; i < questionCount; i++) {
    let myID       = (i + 1).toString();
    let questionID = 'Q' + myID;

    let radios = document.getElementsByName(questionID);

    let myType = '';
    if(welfare.indexOf(Number(myID)) >= 0) {
      myType = TYPE.welfare;

    } else if(environment.indexOf(Number(myID)) >= 0) {
      myType = TYPE.environment;

    } else if(carrier.indexOf(Number(myID)) >= 0) {
      myType = TYPE.carrier;

    } else if(leadership.indexOf(Number(myID)) >= 0) {
      myType = TYPE.leadership;

    } else if(communication.indexOf(Number(myID)) >= 0) {
      myType = TYPE.communication;

    } else if(workLifeBalance.indexOf(Number(myID)) >= 0) {
      myType = TYPE.workLifeBalance;

    } else if(ability.indexOf(Number(myID)) >= 0) {
      myType = TYPE.ability;

    } else if(safety.indexOf(Number(myID)) >= 0) {
      myType = TYPE.safety;
    }

    let isNotChecked = false;
    for(var j = 0; j < radios.length; j++) {
      if(radios[j].checked) {
        isNotChecked = true;

        resultALL += Number(radios[j].value);

        switch(myType)  {
          case TYPE.welfare:
            resultWelfare += Number(radios[j].value);
            countWelfare++;
            break;

          case TYPE.environment:
            resultEnvironment += Number(radios[j].value);
            countEnvironment++;
            break;

          case TYPE.carrier:
            resultCarrier += Number(radios[j].value);
            countCarrier++;
            break;

          case TYPE.leadership:
            resultLeadership += Number(radios[j].value);
            countLeadership++;
            break;

          case TYPE.communication:
            resultCommunication += Number(radios[j].value);
            countCommunication++;
            break;

          case TYPE.workLifeBalance:
            resultWorkLifeBalance += Number(radios[j].value);
            countWorkLifeBalance++;
            break;

          case TYPE.ability:
            resultAbility += Number(radios[j].value);
            countAbility++;
            break;

          case TYPE.safety:
            resultSafety += Number(radios[j].value);
            countSafety++;
            break;
        }

        break;
      }
    }

    if(!isNotChecked) {
      alert('選択漏れがあります。（' + questionID + '）');
      return false;
    }
  }

  let totalResult;
  if(64 <= resultALL && resultALL <= 192) {
    totalResult = '仕事にかなり不満がある。';

  } else if(193 <= resultALL && resultALL <= 256) {
    totalResult = 'やや幸福を得られていない。';

  } if(257 <= resultALL) {
    totalResult = '平均よりも高い満足度を得られている。';
  }
  console.log(totalResult);

  // 各要素の平均値
  let avWelfare         = (resultWelfare / countWelfare);
  let avEnvironment     = (resultEnvironment / countEnvironment);
  let avCarrier         = (resultCarrier / countCarrier);
  let avLeadership      = (resultLeadership / countLeadership);
  let avCommunication   = (resultCommunication / countCommunication);
  let avWorkLifeBalance = (resultWorkLifeBalance / countWorkLifeBalance);
  let avAbility         = (resultAbility / countAbility);
  let avSafety          = (resultSafety / countSafety);

  /*
    これらは平均値を算出する
    3.5より下だった場合、満足度は低め
    4を超えていればとりあえず問題なし
  */
  const avResult = function(value) {
    if(value < 3.5) {
      return '満足度は低め';

    } else if(value >= 4) {
      return '満足度は問題なし';

    } else {
      return '満足度はまぁまぁ';
    }
  };

  console.log('給与と福利厚生の満足度：' + avResult(avWelfare));
  console.log('労働環境の満足度：' + avResult(avEnvironment));
  console.log('キャリアと昇進機会への満足度：' + avResult(avCarrier));
  console.log('上司やリーダーシップへの満足度：' + avResult(avLeadership));
  console.log('社内コミュニケーションへの満足度：' + avResult(avCommunication));
  console.log('ワークライフバランスへの満足度：' + avResult(avWorkLifeBalance));
  console.log('社内の能力開発への満足度：' + avResult(avAbility));
  console.log('チームワークと職場の安心感への満足度：' + avResult(avSafety));

  let ctx = document.getElementById('stage');
  let myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        '給与と福利厚生の満足度',
        '労働環境の満足度',
        'キャリアと昇進機会への満足度',
        '上司やリーダーシップへの満足度',
        '社内コミュニケーションへの満足度',
        'ワークライフバランスへの満足度',
        '社内の能力開発への満足度',
        'チームワークと職場の安心感への満足度'
      ],
      datasets: [{
          label: '満足度',
          data: [avWelfare, avEnvironment, avCarrier, avLeadership, avCommunication, avWorkLifeBalance, avAbility, avSafety],
          backgroundColor: 'RGBA(225,95,150, 0.5)',
          borderColor: 'RGBA(225,95,150, 1)',
          borderWidth: 1,
          pointBackgroundColor: '#e91e63'
      }]
    },
    options: {
      title: {
        display: true,
        text: '結果：' + totalResult
      },
      scale:{
          ticks:{
              suggestedMin: 0, // 最小値
              suggestedMax: 5, // 最大値
              stepSize: .5,    // 刻み幅
          }
      },
      tooltips: {
        enabled: true,
        callbacks: {
          label: function(tooltipItem, data) {
            let value      = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            let averageStr = avResult(value);
            return averageStr;
          }
        }
      }
    }
  });
}