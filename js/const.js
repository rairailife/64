const questions = {
  '1':  {'question': '自分の労働に対して、正当な賃金を支払われていると感じる', 'reverse': false},
  '2':  {'question': '1年ごとの賃金の増え方に満足している', 'reverse': false},
  '3':  {'question': '諸手当に満足している', 'reverse': false},
  '4':  {'question': 'いまの会社は、公平な昇進システムを採用している', 'reverse': false},
  '5':  {'question': '今の会社では、仕事のパフォーマンスが昇進の重要な要素である', 'reverse': false},
  '6':  {'question': '自分にも昇進のチャンスがあり、その事実に満足している', 'reverse': false},
  '7':  {'question': '今の会社で昇進できた人は、他の会社に移っても同じように昇進するだろう', 'reverse': false},
  '8':  {'question': '今の上司やマネージャーは私に不公平だ', 'reverse': true},
  '9':  {'question': '今の上司やマネージャーは、部下の感情に興味を示さない', 'reverse': true},
  '10': {'question': '今の上司やマネージャーは、部下の能力開発を重要な仕事のひとつと考えている', 'reverse': false},
  '11': {'question': '今の上司やマネージャーは、自分の部下になんの相談もせずに意思決定をする', 'reverse': true},
  '12': {'question': '今の上司やマネージャーは、私を意思決定のプロセスに参加させ、アイデアや意見を出すようにうながしてくれる', 'reverse': false},
  '13': {'question': '自分がいまの会社から受けるメリットに満足していない', 'reverse': true},
  '14': {'question': 'いまの会社から受けているメリットは、他の会社や組織で受けられるメリットと同じぐらいが良い', 'reverse': false},
  '15': {'question': 'いまの会社から受けているメリットは、同僚と同じぐらいのレベルだ', 'reverse': false},
  '16': {'question': 'なんかしらのトラブルに起きた人に対して、いまの会社や組織が提供する補償に満足している', 'reverse': false},
  '17': {'question': '会社が提供する設備や備品に満足している', 'reverse': false},
  '18': {'question': 'いまの会社が提供する社食、または周辺の食事環境に満足している', 'reverse': false},
  '19': {'question': 'いまの会社は、社員の健康に気をつかってくれている', 'reverse': false},
  '20': {'question': 'いまの会社への通勤状態に満足している', 'reverse': false},
  '21': {'question': '私が良い働きをしたときは、会社がしっかりと認めてくれる', 'reverse': false},
  '22': {'question': '自分の働きが感謝されているとは思えない', 'reverse': true},
  '23': {'question': '自分の努力が報われているとは感じられない', 'reverse': true},
  '24': {'question': 'いまの会社には、従業員の良い働きに対して報いるためのシステムがある', 'reverse': false},
  '25': {'question': 'いまの会社の報酬や評価システムは、公平に運営されている', 'reverse': false},
  '26': {'question': '一緒に働いている人たちのことが好きだ', 'reverse': false},
  '27': {'question': '一緒に働いている人の能力が低いせいで、自分はより多く働かねばならない', 'reverse': true},
  '28': {'question': '同僚と一緒に過ごす時間は楽しい', 'reverse': false},
  '29': {'question': 'いまの会社には言い争いやケンカが多い', 'reverse': true},
  '30': {'question': '上司や同僚とは円滑な人間関係を築くことができている', 'reverse': false},
  '31': {'question': '組織内のコミュニケーションは全体的に良い', 'reverse': false},
  '32': {'question': '仕事の割り当てが満足に説明されることがない', 'reverse': true},
  '33': {'question': '組織のゴールがよくわからない', 'reverse': true},
  '34': {'question': '組織のなかで何が起きているのかがわからないと感じることが多い', 'reverse': true},
  '35': {'question': '仕事でやるべきことが多すぎる', 'reverse': true},
  '36': {'question': '会社内のルールの多くが、良い仕事をする妨げになっている', 'reverse': true},
  '37': {'question': 'いまの労働環境におおむね満足している', 'reverse': false},
  '38': {'question': 'いまの会社は必要な装備を提供してくれる', 'reverse': false},
  '39': {'question': 'いまの会社は法律で定められた労働時間や休暇を守っている', 'reverse': false},
  '40': {'question': '社内の研修やトレーニングプログラムにより自信がついた', 'reverse': false},
  '41': {'question': 'いまの会社は満足な量の職業訓練やガイダンスを提供している', 'reverse': false},
  '42': {'question': '会社の研修やトレーニングプログラムによりモチベーションが上がった', 'reverse': false},
  '43': {'question': '会社の研修やトレーニングプログラムにより仕事のスキルが高まった', 'reverse': false},
  '44': {'question': '会社の研修やトレーニングプログラムにより、世の中の変化について行けるようになった', 'reverse': false},
  '45': {'question': '会社の研修やトレーニングプログラムにより仕事の満足度が上がった', 'reverse': false},
  '46': {'question': 'いまの会社はプロとしての技能を高めるためのチャンスを提供してくれる', 'reverse': false},
  '47': {'question': 'いまの会社が提供してくれるキャリア形成の機会に満足している', 'reverse': false},
  '48': {'question': 'いまの仕事のせいで、家族や友人と過ごす時間が減っている', 'reverse': true},
  '49': {'question': 'プライベートでの役割を果たすための時間を、いまの会社はサポートしてくれていない', 'reverse': true},
  '50': {'question': 'いまの仕事のせいで、十分な睡眠や健康的な食事と運動に割く時間がないと感じる', 'reverse': true},
  '51': {'question': '自分が手がけた仕事が最終的にどうなったかをちゃんと知ることができない', 'reverse': true},
  '52': {'question': 'いまの会社は私が好きでない仕事を指示してくるため、あまり幸福でないと感じる', 'reverse': true},
  '53': {'question': '私のマネージャーや上司が厳しすぎるデッドラインを設定するため、ストレスを感じる', 'reverse': true},
  '54': {'question': '組織のゴールを達成するために、すべての部署が協力し合っている', 'reverse': false},
  '55': {'question': '自分のパフォーマンスについて、気楽に提案やコメントができる', 'reverse': false},
  '56': {'question': '組織内のコミュニケーションやチームワークは良好だと思う', 'reverse': false},
  '57': {'question': '仕事にあたって、チームメイトから十分な励ましや協力を得られている', 'reverse': false},
  '58': {'question': '仕事のゴールの内容と目的を明確に理解できている', 'reverse': false},
  '59': {'question': '自分の仕事と責任の内容を明確に説明できる', 'reverse': false},
  '60': {'question': '私のマネージャーや上司は、部下に積極的な意思決定を任せてくれる', 'reverse': false},
  '61': {'question': '私のマネージャーや上司は、組織の意思決定に関する情報収集を任せてくれる', 'reverse': false},
  '62': {'question': '私がすべきタスクに関する重要な決定を、自分で自由に行うことができる', 'reverse': false},
  '63': {'question': 'いまの会社に守られていると感じる', 'reverse': false},
  '64': {'question': 'いまの会社では、簡単に解雇されることはないと感じられる', 'reverse': false},
};

const answer = {
  1: '全く当てはまらない',
  2: '当てはまらない',
  3: 'よくわからない',
  4: '当てはまる',
  5: 'かなり当てはまる',
};

// 給与と福利厚生の満足度
const welfare = [1, 2, 3, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 55];

// 労働環境の満足度
const environment = [26, 27, 28, 29, 35, 36, 67, 38, 54, 55];

// キャリアと昇進機会への満足度
const carrier = [4, 5, 6, 46, 47];

// 上司やリーダーシップへの満足度
const leadership = [8, 9, 10, 60, 61];

// 社内コミュニケーションへの満足度
const communication = [31, 32, 58, 59];

// ワークライフバランスへの満足度
const workLifeBalance = [48, 49, 50, 51, 52];

// 社内の能力開発への満足度
const ability = [41, 42, 43, 44];

// チームワークと職場の安心感への満足度
const safety = [56, 57, 63, 64];