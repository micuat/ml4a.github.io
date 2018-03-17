---
layout: chapter
title: "ニューラルネットワーク"
includes: [mathjax, jquery, convnetjs, dataset, convnet, visualizer]
header_image: "/images/headers/analytical_engine.jpg"
header_text: "“It were much to be desired, that when mathematical processes pass through the human brain instead of through the medium of inanimate mechanism, it were equally a necessity of things that the reasonings connected with operations should hold the same just place as a clear and well-defined branch of the subject of analysis, a fundamental but yet independent ingredient in the science, which they must do in studying the engine.” <a href=\"https://books.google.de/books?id=b8YUDAAAQBAJ&pg=PA16&lpg=PA16\">Sketch of the Analytical Engine (1843), Ada Lovelace</a>"
translator: "Naoto Hieda"
translator_link: "http://naotohieda.com/"
---

[English](/ml4a/neural_networks/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[中文](/ml4a/cn/neural_networks/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[español](/ml4a/es/neural_networks/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[한국어](/ml4a/ko/neural_networks/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[french](/ml4a/fr/neural_networks/)

ニューラルネットワークが発明される約一世紀前、[エイダ・ラヴレス](http://findingada.com/)が「[神経系の計算法](http://www.thelancet.com/journals/lancet/article/PIIS0140-6736(15)00686-8/fulltext?rss=yes)」という野心的な提案をしました。脳と機械の推論的なアナロジーは計算自体の哲学と同じくらい古いものの、計算機が人間のような認知機能を持つことはエイダの先生である[チャールズ・バベッジ](https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%AB%E3%82%BA%E3%83%BB%E3%83%90%E3%83%99%E3%83%83%E3%82%B8)が[解析機関](https://ja.wikipedia.org/wiki/%E8%A7%A3%E6%9E%90%E6%A9%9F%E9%96%A2)を提案するまで考えられませんでした。当時の技術者たちは彼女の複雑な図面の回路を実現することができず、エイダは自身の夢である機関が完成するのを目の当たりにすることはできませんでした。しかしながらそのアイディアは次の世紀に継承され、[アラン・チューリング](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0)により後の[「チューリング・テスト」](https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%BB%E3%83%86%E3%82%B9%E3%83%88)である[イミテーション・ゲーム](http://phil415.pbworks.com/f/TuringComputing.pdf)のインスピレーションとして参照されました。チューリングの計算の極限への熟慮は第一次AIブームに火をつけ、ニューラルネットワークの第一次黄金時代への足掛かりとなりました。

## ニューラルネットワークの誕生と再誕

最近のニューラルネットワークの復活には奇妙な背景があります。 AIの初期に密接に関連していたニューラルネットワークは、ヒトの学習過程を研究する神経科学者と認知心理学者による[神経可塑性](https://en.wikipedia.org/wiki/Hebbian_theory)の     初期の研究に影響され、1940年代後半にTuringの [B-type machines](https://en.wikipedia.org/wiki/Unorganized_machine)という形で最初に公式化されました。脳の発達のメカニズムが発見され、計算機科学者たちは活動電位と神経の逆伝播を定式化し、機械により脳のプロセスを再現しようと試みました。

今日ではニューラルネットワークは脳を正確に再現するのではなく機械学習により問題を解決する用途に限定して設計されているため、このアナロジーをあまり重視しないよう警鐘を鳴らしています。他方で[計算論的神経科学](https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E8%AB%96%E7%9A%84%E7%A5%9E%E7%B5%8C%E7%A7%91%E5%AD%A6)は、脳を忠実にモデリングするという課題に取り組んできました。しかしながら、ニューラルネットワークは単純化された生物学的ニューロンであるという比喩は何十年にもわたって存在しています。 生物学的ニューロンから人工ニューロンへの進化を以下の図に要約しました。

{% include figure_multi.md path1="/images/neuron-anatomy.jpg"
caption1="Anatomy of a biological neuron<br/>Source: <a href=\"https://askabiologist.asu.edu/neuron-anatomy\">ASU school of life sciences</a>" path2="/images/neuron-simple.jpg"
caption2="Simplified neuron body within a network<br/>Source: <a href=\"http://www.generation5.org/content/2000/nn00.asp\">Gurney, 1997. An Introduction to Neural Networks</a>" path3="/images/figures/neuron.png" caption3="Artificial neuron<br/>&nbsp;" %}

ニューラルネットワークは、[フランク・ローゼンブラット](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%AF%E3%83%BB%E3%83%AD%E3%83%BC%E3%82%BC%E3%83%B3%E3%83%96%E3%83%A9%E3%83%83%E3%83%88)が1950年代後半に[パーセプトロン](https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%BC%E3%82%BB%E3%83%97%E3%83%88%E3%83%AD%E3%83%B3)（[前章](/ml4a/machine_learning/)の線形分類器の一種）を考案したことにより大きく前進しました。米海軍の公的資金を受けて開発されたマーク１パーセプトロンは、複数のフォトセル、ポテンショメータ、およびモータを用いて画像認識を行うように設計されました。複雑な電気回路を完成させたことにより、1958年にニューヨーク・タイムズ紙はすぐにも機械が[「歩く、話す、見る、書く、自らを複製し自分の存在を認知する」](http://query.nytimes.com/gst/abstract.html?res=9D01E4D8173DE53BBC4053DFB1668383649EDE)と予測しています。

このような初期の誇大広告はサイエンスフィクション作家に何十年にもわたってインスピレーションを与えることになりましたが、その興奮は学界でははるかに落ち着いたものでした。人々はコンピュータが[ムーアの法則](https://ja.wikipedia.org/wiki/%E3%83%A0%E3%83%BC%E3%82%A2%E3%81%AE%E6%B3%95%E5%89%87)に乗っ取って異常なペースで計算能力が向上するだろうと楽観していましたが、マービン・ミンスキーとシーモア・パパートの1969年の本[「パーセプトロンズ」](https://en.wikipedia.org/wiki/Perceptrons_(book))が様々な、そして[些細な](http://users.ecs.soton.ac.uk/harnad/Hypermail/Explaining.Mind96/0140.html)制約を示し、意図せずにも学者と一般の両方の間で[関心の低下](https://en.wikipedia.org/wiki/AI_winter)を招きました。 チューリング自身でさえ、機械は2000年までに人間レベルの知性を持つだろうと言っていたのです。それは私たちが[2000年問題](https://ja.wikipedia.org/wiki/2000%E5%B9%B4%E5%95%8F%E9%A1%8C)に怯えていた年でした。

AIの冬の時代の80年代と90年代にはニューラルネットワークに数々の重要な改良がなされたにもかかわらず[[1]](http://www.iro.umontreal.ca/~vincentp/ift3395/lectures/backprop_old.pdf)[[2]](http://yann.lecun.org/exdb/publis/pdf/lecun-89e.pdf)[[3]](http://www.bioinf.jku.at/publications/older/2604.pdf)、2000年代まで注目を浴びることはなく、機械学習の商業的および産業的応用の大部分には[サポートベクターマシン](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%83%99%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%9E%E3%82%B7%E3%83%B3)やその他の手法が用いられました。 [2009年に始まり](http://www.cs.utoronto.ca/~gdahl/papers/dbnPhoneRec.pdf)、[特に2012年から顕著に](https://www.technologyreview.com/s/530561/the-revolutionary-technique-that-quietly-changed-machine-vision-forever/)、ニューラルネットワークは再び機械学習アルゴリズムの主要な手法となっています。その復活は、[畳み込み](/ml4a/convnets.html)と[リカレントニューラルネットワーク](/ml4a/RNNs.html)の発明に起因すると言っても過言ではなく、これまでの音声や画像解析の手法を劇的に上回るパフォーマンスを見せました。そして興味深いことに、以前は見られなかった多くの新しい応用や特徴があり、特にAI分野外のアーティストらの興味を惹きつけています。この本ではこれからいくつかの章にて、特に畳み込みニューラルネットワークについて詳しく見ていきます。

長年に渡って多くの学習アルゴリズムが提案されてきましたが、次の理由からここでは主にニューラルネットワークを取り扱います。

 - 驚くほど簡単で直感的な定式化のため。
 - ディープニューラルネットワークはいくつかの主要な機械学習の問題を解く上で現在の最先端技術であるため。
 - 近年の機械学習のクリエイティブなアプリケーションのほとんどはニューラルネットワークで作られているため。


## From linear classifiers to neurons

前の章から2d線形分類器または回帰器への入力は次の形式を持つことを思い出してください。

$$
\begin{eqnarray}
f(x_1, x_2) = b + w_1 x_1 + w_2 x_2
\end{eqnarray}
$$

より一般的には、任意の次元数において、

$$
\begin{eqnarray}
f(X) = b + \sum_i w_i x_i
\end{eqnarray}
$$

回帰の場合、$$f(X)$$は、入力ベクトル$$X$$が与えられたときの予測出力を与えます。 分類の場合、予測クラスは

$$
\begin{eqnarray}
  \mbox{classification} & = & \left\{ \begin{array}{ll}
  	  1 & \mbox{if } f(X) \gt 0 \\
      0 & \mbox{if } f(X) \leq 0
      \end{array} \right.
\tag{1}\end{eqnarray}
$$

それぞれの重み$$w_i$$は、$$x_i$$を乗算した入力の相対的な影響を示すものとして解釈できます。 方程式の$$b$$項は、重みに関係なく、ニューロンが1または0を発火する素因を制御するため、バイアスと呼ばれることがよくあります。 バイアスを高くすると、ニューロンは1を出力するために大きな入力を必要とし、低い方がより簡単になります。

2つのイノベーションを導入することで、この式から本格的なニューラルネットワークに到達することができます。 最初は、我々の線形識別器をニューロンまたは「ユニット」（脳の類推から解離する）に変える活性化関数の追加です。 第2の革新は、層状に順次接続されたニューロンのアーキテクチャである。 これらのイノベーションをこの順に紹介します。

## Activation function

人工的および生物学的ニューラルネットワークの両方において、ニューロンは、それが受け取る裸の入力を出力するだけではない。 代わりに、脳内の[活動電位](https://ja.wikipedia.org/wiki/%E6%B4%BB%E5%8B%95%E9%9B%BB%E4%BD%8D)の発火率と同様に、活性化機能と呼ばれるもう1つのステップがあります。 アクティベーション関数は、$$z = b + \sum_i w_i x_i$$の前の同じ加重和入力を受け取り、最後に出力する前に再び変換します。

多くの活性化機能が提案されていますが、今は2つの詳細について説明します：シグモイドとReLU。

歴史的に、[sigmoid](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%B0%E3%83%A2%E3%82%A4%E3%83%89%E9%96%A2%E6%95%B0)関数は、最も古い、最も普及したアクティベーション関数です。 これは次のように定義されます。

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

$$e$$は[ネイピア数](https://ja.wikipedia.org/wiki/%E3%83%8D%E3%82%A4%E3%83%94%E3%82%A2%E6%95%B0)を表し、おおよそ2.71828に相当します。 Sigmoidを活性化関数とするニューロンをシグモイドニューロンと呼びます。 最初に変数$$z$$を元の加重和入力に設定し、それをシグモイド関数に渡します。

$$
z = b + \sum_i w_i x_i \\
\sigma(z) = \frac{1}{1 + e^{-z}}
$$
最初は、この方程式は複雑で恣意的に見えるかもしれませんが、実際には非常に単純な形をしています。$$\sigma(z)$$の値を入力$$z$$の関数としてプロットすればわかります。

{％include figure_multi.md path1 = "/ images / figures / sigmoid.png" caption1 = "シグモイド活性化関数"％}

$$\sigma(z)$$は、以前の無制限の出力を0から1の範囲に集約して、一種の「詰め込み」関数として機能することがわかります。$$z = 0$$、$$\sigma(0) = 1/(1+e^{0}) = 1/2$$となる。 $$z$$の大きな負の値の場合、分母の$$e^{-z}$$項は指数関数的に増加し、$$\sigma(z)$$は0に近づきます。逆に、$$z$$は$$e^{-z}$$を0に縮小するので、$$\sigma(z)$$は1に近づきます。

シグモイド関数は連続的に微分可能であり、その導関数は便利に$$\sigma^\prime(z) = \sigma(z) (1-\sigma(z))$$です。これは、ニューラルネットワークを訓練するために微積分を使用する必要があるので重要ですが、今のところ心配する必要はありません。

シグモイドニューロンは、数十年にわたる大部分のニューラルネットワークの基礎であったが、近年、彼らは好意を失っている。その理由は後ほど詳しく説明しますが、要するに[勾配の消失](https://en.wikipedia.org/wiki/Vanishing_gradient_problem)のために、多くのレイヤーを訓練することが難しいニューラルネットワークを作成します。 。代わりに、ほとんどの場合、別のタイプの起動機能、整流されたリニアユニット、またはReLUを使用しています。その鈍い名前にもかかわらず、それは単に$$R(z) = max(0, z)$$として定義されます。

{% include figure_multi.md path1="/images/figures/relu.png" caption1="ReLUの起動関数" %}

言い換えれば、ReLUはすべての正の値をそのまま通過させますが、負の値を0に設定します。最近の活性化関数は牽引力を増していますが、最近のほとんどの深層ニューラルネットワークでは、ReLUまたはその[近似の変形](https://en.wikipedia.org/wiki/Rectifier_(neural_networks))。

いずれの活性化関数を使用しても、この標準図で単一のニューロンを視覚化することができ、ニューロンの動作を直感的に視覚的に表現することができます。

{% include figure_multi.md path1="/images/figures/neuron.png" caption1="An 人工ニューロン" %}

上の図は、3つの入力を持つニューロンを示し、単一の値$$y$$を出力します。これまでのように、まず入力の加重和を計算し、それを活性化関数$$\sigma$$に渡します。

$$
z = b + w_1 x_1 + w_2 x_2 + w_3 x_3 \\
y = \ sigma（z）
$$

最後の章の線形分類子と同様に、アクティベーション関数の目的が何であるか、および単に重み付けされた合計を出力することが望ましい理由が不思議に思えるかもしれません。その理由は、加重和$$z$$は、その入力に関して[線型性](https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%9E%8B%E6%80%A7)である、すなわち、各入力に対してフラットな依存性を持っているからです。これとは対照的に、非線形活性化関数は、湾曲またはそれ以外の非自明な関数をモデル化する能力を大幅に拡大します。これは次のセクションでより明確になります。

# レイヤー

ニューロンについて説明したので、ここでニューラルネットワークを定義することができます。ニューラルネットワークは、各層のすべてのニューロンが次の層のニューロンに接続するように一連のニューロン層で構成されています。

{% include figure_multi.md path1="/images/figures/neural-net.png" caption1="A 2層ニューラルネットワーク" %}

ニューラルネットワークの層数を数えると、その層に流れ込むコネクションの数だけがカウントされることに注意してください（最初のレイヤーや入力レイヤーは省略します）。したがって、上記の図は、1層の隠れた層を持つ2層のニューラルネットワークです。それは、3つの入力ニューロン、その隠れ層に2つのニューロン、および1つの出力ニューロンを含む。

私たちの計算は、左の入力レイヤーから開始し、そこから値を隠しレイヤーに渡してから、隠しレイヤーは最終値を含む最後のレイヤーに出力値を送ります。

3つの入力ニューロンは、それぞれが隠れ層の両方のニューロンに接続されているため、複数の値を送出するように見えることに注意してください。しかし実際にはニューロンごとに1つの出力値しかありません。各出力コネクションに沿ってコピーされます。ニューロンは、後続のニューロンがどれだけ送信されても​​、常に1つの値を出力します。

# 回帰

ニューラルネットワークがその層を通って出力に向かって初期入力を送るプロセスは、順方向伝搬または順方向パスと呼ばれ、このように動作する任意のニューラルネットワークは、フィードフォワードニューラルネットワークと呼ばれる。私たちがすぐに見るように、データが円で流れることを可能にするニューラルネットワークがいくつかありますが、まだ自分自身より先に進まないようにしてください...

このインタラクティブなデモでフォワードパスを説明しましょう。続行するには、右上にある[次へ]ボタンをクリックします。

{% include demo_insert.html path="/demos/simple_forward_pass/" parent_div="post" %}

# より多くのレイヤー、より表現力豊かな

隠れたレイヤーはなぜ有用なのですか？その理由は、隠れたレイヤーがなく、入力から出力に直接マッピングされている場合、出力に対する各入力の寄与は他の入力とは独立しているからです。実世界の問題では、入力変数は相互依存性が高く、組み合わせが複雑な方法で出力に影響します。隠れ層ニューロンは、最終出力下流に影響を及ぼす入力間の微妙な相互作用を捕らえることができます。
これを解釈する別の方法は、隠れたレイヤーがデータの上位レベルの「機能」または属性を表すことです。隠れ層の各ニューロンは、データの異なる中間特性を学習して入力の重み付けを変え、出力ニューロンは生の入力の代わりにこれらの関数になります。複数の隠れ層を含めることで、最終出力に達する前に元の入力データの抽象化の複数のレベルを学習する機会をネットワークに与えます。この高度な機能の概念は、隠れたレイヤーを詳しく見ると、[次の章]((/ml4a/looking_inside_neural_nets/))でより具体的になります。

アクティベーション機能は、入力と出力の間の非線形の関係を捕捉する能力を拡大することも想起されたい。レイヤーを介して複数の非線形変換を連鎖させることにより、ニューラルネットワークの柔軟性と表現力が劇的に向上します。これの証明は複雑で本書の範囲を超えていますが、非線形活性化関数（SigmoidまたはReLUを含む）と隠れた単位を持つ2層ニューラルネットワークは[汎関数近似](http://www.sciencedirect.com/science/article/pii/0893608089900208)、理論的には任意の入力 - 出力マッピングを表現することができます。このプロパティは、ニューラルネットワークを非常に強力にするものです。

# 分類

分類はどうですか？前の章では、出力を0で単純にしきい値処理することでバイナリ分類を導入しました。私たちの成果が肯定的だったなら、私たちは積極的に分類し、否定的であれば否定的に分類します。ニューラルネットワークでは、このアプローチを最終的なニューロンに適応させることが妥当であり、出力ニューロンがある閾値を上回った場合には、正に分類される。例えば、常に正であるシグモイドニューロンの閾値を0.5とすることができる。

しかし、私たちが複数のクラスを持っていたらどうなりますか？ 1つの選択肢は、各クラスに対応する出力ニューロンに区間を作成することですが、どのように[神経ネットワークがどのように訓練されるか](/ml4a/how_neural_networks_are_trained/)を見るときには問題があります。代わりに、ニューラルネットワークは、各クラスに対して1つの出力ニューロンを有することによって分類に適合される。フォワードパスを行い、予測は最高値を受け取ったニューロンに対応するクラスです。例を見てみましょう。

# 手書き数字の分類

今では、手書き数字の画像を認識してラベル付けする、ニューラルネットワークを使った実際の分類の例に取り組んでみましょう。我々は、分類精度が機械学習の共通の基準となる手書き数字の28×28ピクセルの60,000個のラベル画像を含む[MNISTデータセット](http://yann.lecun.com/exdb/mnist/)を使用する予定です研究。以下は、データセット内に見つかった画像のランダムなサンプルです。

{% include figure_multi.md path1="/images/figures/fig_mnist_groundtruth.png" caption1="MNISTの手書き数字のランダムサンプル" %}

これらの画像を分類するためにニューラルネットワークを設定する方法は、生のピクセル値を最初のレイヤ入力とし、0から9までの各桁クラスに対して1つの出力クラスを持つことです。グレースケール画像であるため、 0（黒）〜255（白）の間の輝度値を有する。全てのMNIST画像は28×28であるので、それらは784画素を含む。次の図のように、これらを単一の入力配列に展開することができます。

{% include figure_multi.md path1="/images/figures/mnist-input.png" caption1="画像をニューラルネットワークに入力する方法" %}

実現する重要なことは、このネットワークは、前の章の単純な3x2x1ネットワークよりもはるかに魅力的ですが、以前とまったく同じように動作し、さらに多くのニューロンだけで動作することです。第1の隠れ層の各ニューロンは、第1の層からのすべての入力を受け取る。出力レイヤーでは、これまでのように_ten_ニューロンだけでなく、それと隠れたレイヤーとの完全な接続を持つようになりました。 10個の出力ニューロンの各々は、1つのクラスラベルに割り当てられる。最初の数字は数字の`0`、2番目の数字は`1`などです。

ニューラルネットワークが訓練された後、我々は未知のサンプルに関連付けられた数字を同じネットワークを介して実行することによって予測することができます（詳細については、[将来の章](/ml4a/how_neural_networks_are_trained/)で説明します）出力値を観測する。予測される数字は、その出力ニューロンが最後に最大値を有する数字である。次のデモではこれが実際に動作しています。 「次へ」をクリックすると、より多くの予測を見ることができます。

{% include demo_insert.html path="/demos/forward_pass_mnist/" parent_div="post" %}

# Further reading

{% include further_reading.md title="Neural Networks and Deep Learning" author="Michael Nielsen" link="http://neuralnetworksanddeeplearning.com/" %} 

{% include further_reading.md title="A 'Brief' History of Neural Nets and Deep Learning" author="Andrey Kurenkov" link="http://www.andreykurenkov.com/writing/a-brief-history-of-neural-nets-and-deep-learning/" %} 

{% include further_reading.md title="Demo: Visualization of artificial neural networks" author="Mostafa Abdelraouf" link="http://experiments.mostafa.io/public/ffbpann/" %} 

{% include further_reading.md title="Video: Neural Networks Demystified" author="Welch Labs" link="https://www.youtube.com/watch?v=bxe2T-V8XRs" %} 

## 次の章

次の章[神経ネットワーク内を見る](/ml4a/looking_inside_neural_nets/)では、ニューラルネットワークの内部状態をより詳細に分析し、どのような情報を取得するのかについての直感を立てるとともに、 基本的なニューラルネットを使用して、後の章で説明する畳み込みレイヤーなどのより複雑な機能を導入する動機づけを構築します。
