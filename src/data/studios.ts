import { Studio } from "@/types";

export const studios: Studio[] = [
  {
    id: "tokyo-001",
    name: "ナカザワダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区高田馬場4-8-4 ORAGAビル5F",
    phone: "03-5330-3811",
    website: "https://nakazawadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月 16:00〜21:00、火〜金 13:00〜21:00、土 13:00〜19:00",
    description: "高田馬場駅から徒歩1分の社交ダンス教室。初心者から競技者まで幅広く対応。",
    staff: [
      { name: "中沢 康行", role: "代表講師", photo: "https://i2.wp.com/nakazawadance.com/wp-content/uploads/2018/11/staff01.png?resize=650%2C418&ssl=1" },
      { name: "武田 満紀", role: "講師", photo: "https://i0.wp.com/nakazawadance.com/wp-content/uploads/2018/11/staff02.png?resize=650%2C426&ssl=1" },
      { name: "田原 美穂", role: "特別講師", photo: "https://i1.wp.com/nakazawadance.com/wp-content/uploads/2018/11/staff05.png?resize=650%2C418&ssl=1" },
    ],
  },
  {
    id: "tokyo-002",
    name: "銀座ソシアルダンシングアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "中央区",
    address: "東京都中央区銀座7-9-16 ロータリービル5F",
    phone: "03-3574-7010",
    website: "https://www.ginzadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "銀座7丁目の社交ダンスアカデミー。若い世代にも人気が高く、初心者クラスが充実。",
    staff: [
      { name: "高木邦洋", role: "校長" },
      { name: "高木栄子", role: "校長" },
    ],
  },
  {
    id: "tokyo-003",
    name: "得地ソシアルダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "中央区",
    address: "東京都中央区銀座4-3-13 コイズミビル3F",
    phone: "03-5250-1205",
    website: "https://www.tokuchi-dance.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜22:00、土曜 12:00〜18:00、日曜・祝祭日定休",
    description: "銀座駅B4出口より徒歩30秒。銀座中心部にある社交ダンススクール。",
  },
  {
    id: "tokyo-004",
    name: "中村俊彦ダンスアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区四谷3-8-9 三井ビル3F",
    phone: "03-5368-0941",
    website: "https://www.nakamuradance.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "四谷三丁目駅すぐ。広々としたおしゃれな空間でスタンダード・ラテン両種目に対応。",
  },
  {
    id: "tokyo-005",
    name: "安東ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区四谷1-8-14",
    phone: "03-3357-5021",
    website: "https://www.andoh-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜土 12:00〜22:00（水曜は18:30まで）、日曜定休",
    description: "四ツ谷駅2番出口から徒歩約1分。四谷エリアの老舗社交ダンス教室。",
    staff: [
      { name: "安藤利寛", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_01.jpg" },
      { name: "山口真治", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_02.jpg" },
      { name: "矢口学", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_03.jpg" },
      { name: "田中正人", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_04.jpg" },
      { name: "川原田良", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_06.jpg" },
      { name: "田澤琢人", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_07.jpg" },
      { name: "中塚裕子", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_08.jpg" },
      { name: "西田梨恵", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_09.jpg" },
      { name: "田中クルミ", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_10.jpg" },
      { name: "森彩香", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_11.jpg" },
      { name: "杉下園実", role: "インストラクター", photo: "https://www.andoh-dance.com/img/staff/img2302_12.jpg" },
    ],
  },
  {
    id: "tokyo-006",
    name: "オダケイジダンスアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区早稲田鶴巻町522 牛山第一ビル2F",
    phone: "03-6278-9976",
    website: "https://odakeiji-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜22:00、日・祝 13:00〜19:00",
    description: "統一全日本チャンピオンが経営指導する都内最大級250㎡超のダンススタジオ。",
    staff: [
      { name: "織田 慶治", role: "代表インストラクター", photo: "https://odakeiji-dance.com/wp/wp-content/themes/dance_wp/images/staff/pic_001.jpg" },
      { name: "織田 理子", role: "インストラクター", photo: "https://odakeiji-dance.com/wp/wp-content/themes/dance_wp/images/staff/pic_002.jpg" },
      { name: "関 勇人", role: "インストラクター", photo: "https://odakeiji-dance.com/wp/wp-content/uploads/2024/09/Hayato_400x500.png" },
      { name: "長谷川 真希", role: "インストラクター", photo: "https://odakeiji-dance.com/wp/wp-content/uploads/2024/09/Maki_400x500.png" },
      { name: "牧野 果礼", role: "インストラクター", photo: "https://odakeiji-dance.com/wp/wp-content/uploads/2024/09/Karen_400x500.png" },
      { name: "橋本 聡太", role: "インストラクター", photo: "https://odakeiji-dance.com/wp/wp-content/uploads/2024/09/Sota_400x500.png" },
      { name: "大山 真莉乃", role: "インストラクター", photo: "https://odakeiji-dance.com/wp/wp-content/uploads/2024/09/Marino_400x500.png" },
    ],
  },
  {
    id: "tokyo-007",
    name: "Sダンスアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区馬場下町61-4 長谷部第11ビル3F",
    phone: "03-6233-9955",
    website: "https://sdance-academy.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜22:00、土・祝 12:00〜17:00",
    description: "早稲田駅から徒歩30秒。統一全日本チャンピオンの庄司浩太・名美組が経営指導するスタジオ。",
    staff: [
      { name: "庄司 浩太", role: "代表インストラクター", photo: "https://sdance-academy.com/common/img/staff/main_staff01.webp" },
      { name: "庄司 名美", role: "代表インストラクター", photo: "https://sdance-academy.com/common/img/staff/main_staff02.webp" },
      { name: "渡邉 雄介", role: "インストラクター", photo: "https://sdance-academy.com/common/img/staff/main_staff04.webp" },
    ],
  },
  {
    id: "tokyo-008",
    name: "スドウダンスクリエイション",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "渋谷区",
    address: "東京都渋谷区神南1-13-4 井戸ビル2F A号室",
    phone: "080-3095-0108",
    website: "https://sudodance.com",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "渋谷駅ハチ公口から徒歩5分。社交ダンスのほかアルゼンチンタンゴ・サルサも開講。初心者大歓迎。",
    staff: [
      { name: "須藤将史", role: "インストラクター", photo: "https://sudodance.com/wp-content/uploads/2023/10/150_1501.jpg" },
      { name: "伊藤 沙希", role: "インストラクター", photo: "https://sudodance.com/wp-content/uploads/2023/10/headshootsaki-e1523508869461.jpg" },
      { name: "中村 誠", role: "インストラクター", photo: "https://sudodance.com/wp-content/uploads/2023/10/0082_originalE381AEE382B3E38392E3829AEE383BC-1-scaled-e1610521992888.jpg" },
      { name: "山口玲央奈", role: "インストラクター", photo: "https://sudodance.com/wp-content/uploads/2023/10/DDG6-1411-e1588857268302.jpg" },
    ],
  },
  {
    id: "tokyo-009",
    name: "クワバラダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "渋谷区",
    address: "東京都渋谷区宇田川町28-3 A2ビル7F",
    phone: "03-3477-2340",
    website: "https://kuwabaradance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 12:00〜22:00、土 12:00〜19:00、日曜定休",
    description: "渋谷駅から徒歩5分。ショーダンス世界チャンピオンと世界ラテンファイナリストが在籍する日本最高峰の社交ダンス教室。",
    staff: [
      { name: "桑原明男", role: "代表・インストラクター", photo: "https://kuwabaradance.com/images/kuwabara/kuwabaraface.png" },
      { name: "桑原佐代子", role: "代表・インストラクター", photo: "https://kuwabaradance.com/images/sayoko/sayokoface.png" },
      { name: "尚和由里子", role: "インストラクター", photo: "https://kuwabaradance.com/images/yuriko/yurikoface.png" },
      { name: "三木真", role: "インストラクター", photo: "https://kuwabaradance.com/images/miki/mikiface.png" },
      { name: "庄子洋平", role: "インストラクター", photo: "https://kuwabaradance.com/images/shoji/shojiface.png" },
      { name: "猿田雄二", role: "インストラクター", photo: "https://kuwabaradance.com/images/saruta/sarutaface.png" },
      { name: "竹内大夢", role: "インストラクター", photo: "https://kuwabaradance.com/images/takeuchi/takeuchiface.png" },
      { name: "久保田豊", role: "インストラクター", photo: "https://kuwabaradance.com/images/kubota/kubotaface.png" },
      { name: "野村直人", role: "インストラクター", photo: "https://kuwabaradance.com/images/nomura/nomuraface.png" },
      { name: "野地雅人", role: "インストラクター", photo: "https://kuwabaradance.com/images/noji/nojiface.png" },
      { name: "高橋将貴", role: "インストラクター", photo: "https://kuwabaradance.com/images/takahashi/takahashiface.png" },
      { name: "大矢健太", role: "インストラクター", photo: "https://kuwabaradance.com/images/ooya/ooyaface.png" },
      { name: "山本哲聖", role: "インストラクター", photo: "https://kuwabaradance.com/images/yamamoto/yamamoto.png" },
      { name: "小野田のぞみ", role: "インストラクター", photo: "https://kuwabaradance.com/images/nozomi/nozomiface.png" },
      { name: "久保田幸", role: "インストラクター", photo: "https://kuwabaradance.com/images/miyuki/miyukiface.png" },
      { name: "山﨑かりん", role: "インストラクター", photo: "https://kuwabaradance.com/images/karin/karinface.png" },
      { name: "中島由貴", role: "インストラクター", photo: "https://kuwabaradance.com/images/yuuki/yuukiface.png" },
      { name: "髙島琴乃", role: "インストラクター", photo: "https://kuwabaradance.com/images/kotono/kotonoface.png" },
      { name: "森大維", role: "インストラクター", photo: "https://kuwabaradance.com/images/daisuke/daisukeface.png" },
      { name: "友井田将来", role: "インストラクター", photo: "https://kuwabaradance.com/images/tomoida/tomoidaface.png" },
      { name: "大森あさみ", role: "インストラクター", photo: "https://kuwabaradance.com/images/asami/asamiface.png" },
      { name: "鈴木善子", role: "インストラクター", photo: "https://kuwabaradance.com/images/yoshiko/yoshikoface.png" },
      { name: "寿涼雅", role: "インストラクター", photo: "https://kuwabaradance.com/images/ryoka/ryokaface.png" },
    ],
  },
  {
    id: "tokyo-010",
    name: "ASダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "渋谷区",
    address: "東京都渋谷区恵比寿西2-1-10 プライムホリグチビル7F",
    phone: "03-6455-3395",
    website: "https://asdancestudio.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "恵比寿駅西口より徒歩4分。元全日本ラテンチャンピオン監修の社交ダンスクール。初心者から競技選手まで対応。",
  },
  {
    id: "tokyo-011",
    name: "タキガワダンススクール渋谷校",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "品川区",
    address: "東京都品川区西五反田2-5-2 東幸ビル8F",
    website: "https://takigawa-ds.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "五反田エリアで開講するタキガワダンススクール渋谷校。グループ・個人レッスン両対応。",
    staff: [
      { name: "滝川 洋信", role: "代表", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img01.jpg" },
      { name: "北畑 香織", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img03.jpg" },
      { name: "吹野 明日香", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img05.jpg" },
      { name: "比嘉 那美", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/uploads/2024/03/nami-h01-238x288-1.jpg" },
      { name: "神成 飛花", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/uploads/2026/01/kannari_asuka288x238-1.jpg" },
      { name: "安田 充希", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/uploads/2025/12/s-yasuda_mitsuki288x238.jpg" },
    ],
  },
  {
    id: "tokyo-012",
    name: "タキガワダンススクール池袋校",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "豊島区",
    address: "東京都豊島区池袋2-64-11 平和ビル4F",
    website: "https://takigawa-ds.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "池袋駅から徒歩6分。120㎡の大型フロアを備えた社交ダンス教室。",
    staff: [
      { name: "滝川 洋信", role: "代表", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img01.jpg" },
      { name: "北畑 香織", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img03.jpg" },
      { name: "吹野 明日香", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img05.jpg" },
      { name: "比嘉 那美", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/uploads/2024/03/nami-h01-238x288-1.jpg" },
    ],
  },
  {
    id: "tokyo-013",
    name: "サカネダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "豊島区",
    address: "東京都豊島区南池袋2-27-6 池袋第2佐々木ビル2F",
    phone: "03-3981-4357",
    website: "https://sakaneds.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "池袋駅39番出口から徒歩30秒。1979年創立の伝統ある社交ダンス教室。元全日本ファイナリストが指導。",
  },
  {
    id: "tokyo-014",
    name: "増山ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "豊島区",
    address: "東京都豊島区東池袋1-35-5 加納ビル2F",
    phone: "03-5954-1853",
    website: "https://masuyamadance555.wixsite.com/masuyamads",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 12:00〜22:00、土・祝 13:00〜18:00（予約制）",
    description: "池袋エリアの社交ダンス教室。予約制でマンツーマン指導にも対応。",
  },
  {
    id: "tokyo-015",
    name: "長谷川政義ダンスワールド",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "荒川区",
    address: "東京都荒川区西日暮里6-47-8 サンライズ21 2F",
    phone: "03-6807-8645",
    website: "https://www.hmdw.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 13:00〜21:00、土・祝 13:00〜18:00",
    description: "西日暮里エリアの社交ダンス教室。日本ボールルームダンス連盟認定登録教室。",
    staff: [
      { name: "長谷川 政義", role: "代表・インストラクター", photo: "https://www.hmdw.jp/wp-content/uploads/2024/12/ballroom-dance-teacher.webp" },
    ],
  },
  {
    id: "tokyo-016",
    name: "日暮里ニシダダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "荒川区",
    address: "東京都荒川区東日暮里5-32-10 月安第二ビル4F",
    website: "https://www.nishidadance.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "日暮里駅より徒歩5分。初心者指導に万全の体制を整えた社交ダンス教室。",
    staff: [
      { name: "西田 欣主", role: "代表・インストラクター", photo: "https://www.nishidadance.jp/_p/2948/images/pc/6e76fa0e.jpg" },
      { name: "西田 美穂", role: "インストラクター", photo: "https://www.nishidadance.jp/_p/2948/images/pc/210f24cd.JPG" },
      { name: "箱田 翔次郎", role: "インストラクター", photo: "https://www.nishidadance.jp/_p/2948/images/pc/96f03d19.jpg" },
    ],
  },
  {
    id: "tokyo-017",
    name: "The Zest",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "港区",
    address: "東京都港区元麻布3-1-35 VORT元麻布3F",
    phone: "03-6804-5640",
    website: "https://www.zest-ballroomdance-tokyo.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 12:00〜21:30、土・祝 12:00〜18:00",
    description: "六本木駅徒歩10分。都内最大規模115坪のフロアを誇る社交ダンススクール。優秀なコーチャーが集結。",
    staff: [
      { name: "結城 智史", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2022/03/s-yuki.jpeg" },
      { name: "増田 千晴", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2022/03/chiharu-masuda.jpeg" },
      { name: "廣島 悠仁", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2022/03/s-hiroshima.jpeg" },
      { name: "末安 祐一郎", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2022/03/s-sueyasu.jpeg" },
      { name: "木村 友華", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2022/03/s-kimura.jpeg" },
      { name: "瀬底 正太", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2022/03/s-sesoko-1.jpeg" },
      { name: "堀川 真琴", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2022/04/s-horikawa.jpeg" },
      { name: "中田 賢", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2023/08/IMG_0737.jpg" },
      { name: "杉原 瑠衣", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2023/08/IMG_0734.jpg" },
      { name: "濱田 琉衣", role: "インストラクター", photo: "https://www.zest-ballroomdance-tokyo.com/wp-content/uploads/2024/01/IMG_0760.jpg" },
    ],
  },
  {
    id: "tokyo-018",
    name: "IDC.Tokyo 社交ダンス・文化教養アカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "中央区",
    address: "東京都中央区銀座1-13-11 ヒュリック銀座1丁目ビル4F",
    phone: "080-5512-5353",
    website: "https://idc-tokyo.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "英国認定ICPA付属の社交ダンス・文化教養アカデミー。国際交流・英語も学べる若者向け銀座スタジオ。",
  },
  {
    id: "tokyo-019",
    name: "山岡ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "武蔵野市",
    address: "東京都武蔵野市吉祥寺1-30-1 パークヴィラ吉祥寺2F",
    phone: "0422-29-9282",
    website: "https://www.yamaoka-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "12:00〜21:00",
    description: "吉祥寺の社交ダンス教室。西荻窪・三鷹・練馬・杉並からもアクセス便利。初心者クラスが充実。",
    staff: [
      { name: "山岡 隆人", role: "代表・インストラクター", photo: "https://yamaoka-dance.com/image/photo/T-Yamaoka00.jpg" },
      { name: "山岡 真由美", role: "インストラクター", photo: "https://www.yamaoka-dance.com/image/photo/M-yamaoka00.jpg" },
    ],
  },
  {
    id: "tokyo-020",
    name: "タキガワダンススクール日暮里校",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "荒川区",
    address: "東京都荒川区西日暮里5-11-8 三共セントラルビル10F",
    website: "https://takigawa-ds.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "西日暮里駅近くのカルチャースタジオで開講するタキガワダンススクール日暮里校。",
    staff: [
      { name: "滝川 洋信", role: "代表", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img01.jpg" },
      { name: "北畑 香織", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img03.jpg" },
      { name: "吹野 明日香", role: "インストラクター", photo: "https://takigawa-ds.com/wp/wp-content/themes/takigawadance/img/staff/img05.jpg" },
    ],
  },
  // 世田谷区
  {
    id: "tokyo-021",
    name: "チャオダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "世田谷区",
    address: "東京都世田谷区成城2-35-14 こじまビル3F",
    phone: "03-6411-8637",
    website: "https://ciaodance.net/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ルンバ", "チャチャチャ", "サンバ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜21:00、土・祝 13:00〜17:00、日曜定休",
    description: "成城学園前駅南口から徒歩約1分。統一全日本ショーダンスチャンピオン在籍の実力派社交ダンス教室。",
    staff: [
      { name: "成田雅延", role: "代表・インストラクター", photo: "https://da2d2y78v2iva.cloudfront.net/1744/158511320768601.jpg" },
      { name: "元山朝香", role: "代表・インストラクター", photo: "https://da2d2y78v2iva.cloudfront.net/1744/158511350409901.jpg" },
      { name: "田中ゆう子", role: "インストラクター", photo: "https://da2d2y78v2iva.cloudfront.net/1744/158511351601901.jpg" },
      { name: "大内孝則", role: "インストラクター", photo: "https://da2d2y78v2iva.cloudfront.net/1744/158511376468201.jpg" },
      { name: "秋元奈美", role: "インストラクター", photo: "https://da2d2y78v2iva.cloudfront.net/1744/158511409948001.jpg" },
      { name: "高田光輝", role: "インストラクター", photo: "https://da2d2y78v2iva.cloudfront.net/1744/158511429847001.jpg" },
    ],
  },
  {
    id: "tokyo-022",
    name: "サムズダンススタジオ用賀",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "世田谷区",
    address: "東京都世田谷区用賀4-11-4 福島第一ビル2F",
    phone: "03-3708-3945",
    website: "https://www.sams-ds.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "用賀駅から徒歩5分。現役競技選手が親切・丁寧にレッスン。初心者からコンペ志向まで幅広く対応。",
    staff: [
      { name: "上ノ町 修", role: "インストラクター", photo: "https://www.sams-ds.com/manasys/wp-content/uploads/profile-1.jpg" },
      { name: "玉木 大介", role: "インストラクター", photo: "https://www.sams-ds.com/manasys/wp-content/uploads/tamaki.png" },
      { name: "長島 ケント", role: "インストラクター", photo: "https://www.sams-ds.com/manasys/wp-content/uploads/nagashima.png" },
      { name: "宇野 順子", role: "インストラクター", photo: "https://www.sams-ds.com/manasys/wp-content/uploads/uno.png" },
      { name: "斉藤 光明", role: "インストラクター", photo: "https://www.sams-ds.com/manasys/wp-content/uploads/saitou.png" },
      { name: "礒道 佑菜", role: "インストラクター", photo: "https://www.sams-ds.com/manasys/wp-content/uploads/isomichi.png" },
    ],
  },
  {
    id: "tokyo-023",
    name: "世田谷社交ダンス教室用賀",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "世田谷区",
    address: "東京都世田谷区玉川台2-3-12 金谷ビル2F",
    phone: "03-6388-1677",
    website: "https://setagayadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["個人", "ペア", "グループ", "体験"],
    hours: "月〜土・祝祭日 11:00〜21:00",
    description: "用賀駅南口から徒歩5分。マンツーマンレッスン中心。スタンダード・ラテン全種目対応の社交ダンス教室。",
  },
  // 目黒区
  {
    id: "tokyo-024",
    name: "DANCE navigation MEGURO",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "目黒区",
    address: "東京都目黒区下目黒1-2-21 泰山堂ビル7F",
    phone: "03-6417-0770",
    website: "https://www.dancenavi.info/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜22:00、土・祝 13:00〜19:00、日曜定休",
    description: "目黒駅から徒歩5分。初心者に徹底対応。元選手会会長指導のアットホームな社交ダンス教室。",
  },
  {
    id: "tokyo-025",
    name: "Hidemi Dancing Vida",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "目黒区",
    address: "東京都品川区上大崎2-10-32 フラワープラザビル2F",
    phone: "03-6277-4775",
    website: "https://www.yh-dancev.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "13:00〜22:00、日曜・祝日定休",
    description: "JR目黒駅東口より徒歩3分。テレビ出演カリスマコーチ「山本英美」主宰。初心者からトッププロまで対応。",
  },
  // 大田区
  {
    id: "tokyo-026",
    name: "ジェイズダンスアカデミー大森校",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "大田区",
    address: "東京都大田区山王2-8-26 東辰ビル2F",
    phone: "03-3774-7523",
    website: "https://www.js-dance.com/school/school01/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "12:00〜21:00（祝祭日は18:00まで）、日曜定休",
    description: "JR大森駅西口より徒歩1分。豊島区・大田区の2校展開。プライベート・グループ・ウェディングダンスに対応。",
  },
  {
    id: "tokyo-027",
    name: "おやまダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "大田区",
    address: "東京都大田区上池台2-32-3 第2ミスズビル2F",
    phone: "03-5499-3308",
    website: "https://oyamadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "オンライン", "体験"],
    hours: "平日 12:00〜21:00、土・祝 12:00〜18:00、日曜定休",
    description: "東急池上線・洗足池駅から徒歩1分。現役A級選手が指導するグループ・マンツーマン対応の社交ダンス教室。",
  },
  // 文京区
  {
    id: "tokyo-028",
    name: "鮫口ダンス教室",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "文京区",
    address: "東京都文京区小石川5-2-2 ワカサビルB1",
    phone: "03-5840-6306",
    website: "http://www.sameguchi-dance.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜21:00、土 13:00〜16:30、日曜定休",
    description: "茗荷谷駅から徒歩4分。都内屈指の広さを誇る桜材フロア。現役トッププロダンサーによる丁寧な指導。",
  },
  {
    id: "tokyo-029",
    name: "ノガミダンススポーツクラブ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "文京区",
    address: "東京都文京区西片1-3-18 野上ビル201",
    phone: "03-5689-6681",
    website: "https://seesaawiki.jp/w/nogamidsc/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "春日駅・後楽園駅近くの文京区西片にある社交ダンス教室。競技ダンスからパーティーダンスまで幅広く対応。",
  },
  // 台東区
  {
    id: "tokyo-030",
    name: "ハセガワダンスアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "台東区",
    address: "東京都台東区蔵前4-33-9 エニックス蔵前201",
    phone: "03-6886-3239",
    website: "https://hasegawadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "ペア", "体験"],
    hours: "月・火・木・金・土 13:00〜22:00、水・日定休（祝日は13:00〜18:00）",
    description: "蔵前駅から徒歩数分。洗練された明るいスタジオ。若者向け「青葉の会」グループレッスンも月1〜2回開催。",
  },
  {
    id: "tokyo-031",
    name: "ヨコタダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "台東区",
    address: "東京都台東区浅草橋1-19-4",
    phone: "03-5829-9558",
    website: "http://yokotadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "浅草橋駅から徒歩1分。スタンダード・ラテン全種目対応。大人から子供キッズクラスまで幅広く開講。",
  },
  // 江東区
  {
    id: "tokyo-032",
    name: "Dance Studio SORA",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "江東区",
    address: "東京都江東区大島1-39-14 シンコービル2F",
    phone: "03-5875-3248",
    website: "https://studiosora.info/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "13:00〜22:00、日曜定休",
    description: "都営新宿線・西大島駅から徒歩4分。社交ダンス・K-POPダンス・ウェディングダンス・競技ダンスに対応。",
  },
  {
    id: "tokyo-033",
    name: "江東ソシアルダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "江東区",
    address: "東京都江東区亀戸2-24-3 グランズ亀戸202",
    phone: "03-5836-6715",
    website: "https://social-dance.jp/site/105000191/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 13:00〜22:00、土・祝 13:00〜19:00、日曜定休",
    description: "亀戸駅から徒歩3分。スタンダード・ラテン全種目対応。初心者から競技選手まで通える江東区の社交ダンス教室。",
  },
  // 足立区
  {
    id: "tokyo-034",
    name: "加藤周介ダンスアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "足立区",
    address: "東京都足立区千住3-1 柏光ビル6F",
    phone: "03-5284-1452",
    website: "https://ks-da.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:30〜21:00、土 13:00〜19:00、日・祝定休",
    description: "北千住駅西口から徒歩5分。50坪の広々フロア。JDBFスタンダード・ラテン共にA級プロ所属。初心者大歓迎。",
  },
  {
    id: "tokyo-035",
    name: "SATOトータルダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "足立区",
    address: "東京都足立区千住（北千住駅西口徒歩6分）",
    website: "https://www.satototaldance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜土 12:00〜22:00",
    description: "北千住駅西口から徒歩6分。社交ダンスのほかバレエ・K-POP・ベリーダンスも開講する総合ダンスアカデミー。",
  },
  // 練馬区
  {
    id: "tokyo-036",
    name: "武田ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "練馬区",
    address: "東京都練馬区練馬1丁目（練馬駅直結ビル内）",
    phone: "03-3993-1616",
    website: "http://www.takedadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["個人", "体験"],
    hours: "12:00〜22:00（祝祭日は18:00まで）、日曜定休",
    description: "練馬駅徒歩30秒の好立地。JDC活躍競技ダンサーによるマンツーマン・オーダーメイドレッスン専門教室。",
  },
  {
    id: "tokyo-037",
    name: "白須ダンススクール大泉学園",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "練馬区",
    address: "東京都練馬区東大泉1-26-12 スクエア大泉学園310",
    phone: "03-3921-2192",
    website: "http://www.shirasu-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜21:00、土・祝 12:00〜18:00、日曜定休",
    description: "大泉学園駅北口から徒歩2分。本場英国スタイルの社交ダンス。ラテン・スタンダード基本練習会が充実。",
  },
  // 杉並区
  {
    id: "tokyo-038",
    name: "タマオキトモヒロダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "杉並区",
    address: "東京都杉並区上荻1-13-10 ハクサンビル4F",
    phone: "03-3391-5522",
    website: "https://www.tamaokidance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜22:00、土・祝 12:00〜20:00",
    description: "荻窪駅西口から徒歩2分。認知症予防にも注目される社交ダンスを楽しく学べる荻窪の人気教室。",
  },
  {
    id: "tokyo-039",
    name: "サード・ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "杉並区",
    address: "東京都杉並区西荻北3-20-2 オタニビル4F",
    phone: "03-3301-7071",
    website: "http://www.3rd-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜22:00、土 12:00〜18:00",
    description: "西荻窪駅から徒歩1分。スタンダード・ラテン全種目対応。1ヶ月無料キャンペーンで気軽に始められる杉並区の教室。",
  },
  // 中野区
  {
    id: "tokyo-040",
    name: "ゴウマダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "中野区",
    address: "東京都中野区弥生町2-21-6 中野新橋ペガサスビル302",
    phone: "03-3375-7180",
    website: "https://www.gohma-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "中野新橋駅から徒歩10秒。39年の歴史を持つ社交ダンス教室。プライベート・グループ・メダルテストコースに対応。",
  },
  // 八王子市
  {
    id: "tokyo-041",
    name: "カミヤマダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "八王子市",
    address: "東京都八王子市明神町4-6-2 山口ビル2F",
    phone: "042-642-4038",
    website: "https://www.kamiyama-d-s.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "京王八王子駅から徒歩1分。60年以上の歴史を誇る八王子の老舗社交ダンス教室。社交ダンス全種目指導。",
  },
  // 板橋区
  {
    id: "tokyo-042",
    name: "studio Li（スタジオエルアイ）",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "板橋区",
    address: "東京都板橋区板橋2-44-10 Primo Itabashi 2階",
    phone: "03-6915-5276",
    website: "https://studio-li.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "2023年2月オープン。板橋駅近くのアットホームな社交ダンス教室で、初心者からベテランまで気軽に通える。",
  },
  {
    id: "tokyo-043",
    name: "ありがダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "板橋区",
    address: "東京都板橋区成増1-28-15 林屋ビル3F",
    phone: "03-3975-4667",
    website: "http://www.ariga-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人"],
    hours: "13:00〜22:00（日曜不定休）",
    description: "成増駅近く、35坪の広くて明るいフロアが特長の社交ダンス教室。個人・グループレッスン両対応。",
  },
  // 北区
  {
    id: "tokyo-044",
    name: "中田ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "北区",
    address: "東京都北区滝野川7-7-7 サークル伊藤ビル5F",
    phone: "03-5567-0655",
    website: "https://www.nakatadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人"],
    description: "板橋区・北区エリアで展開する社交ダンススクール。グループレッスンは平日夜間・土曜午後に開催。",
  },
  {
    id: "tokyo-045",
    name: "studio Molly（スタジオモーリー）",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "北区",
    address: "東京都北区赤羽1-52-7 増渕ビル2F",
    phone: "03-4400-5980",
    website: "https://www.studio-molly.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 10:00〜22:00、土 10:00〜20:00、日曜定休",
    description: "地下鉄南北線赤羽岩淵駅から徒歩0分。2022年オープンの社交ダンススタジオで、スタンダード・ラテン両種目に対応。",
  },
  // 葛飾区
  {
    id: "tokyo-046",
    name: "dance place FELICE（ダンスプレイスフェリーチェ）",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "葛飾区",
    address: "東京都葛飾区東金町1-42-10 金町ビル5階",
    phone: "03-5876-4649",
    website: "https://danceplacefelice.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ", "ブルース", "ジルバ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月・金 10:00〜22:00、火〜木 10:00〜21:00、土 10:00〜18:00、日曜定休",
    description: "金町駅近くの社交ダンス教室。スタンダード・ラテン全種目に対応し、体験レッスンやフリーダンスタイムも充実。",
  },
  {
    id: "tokyo-047",
    name: "ダンスアカデミー亀有",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "葛飾区",
    address: "東京都葛飾区亀有4-15-6 USKスタジオ",
    phone: "090-5532-2953",
    website: "https://newlod.com/school/132208",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜21:00、土 12:00〜21:00、日曜定休",
    description: "亀有駅から徒歩10分。社交ダンス・競技ダンス両対応の教室で、初心者も丁寧な指導で安心して通える。",
  },
  // 墨田区
  {
    id: "tokyo-048",
    name: "大竹辰郎ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "墨田区",
    address: "東京都墨田区両国1-17-6 照国ビル2F",
    phone: "03-3846-2225",
    website: "http://www.otakedance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜21:00、土・祝 13:00〜18:00、日曜定休",
    description: "両国駅から徒歩2分。初心者から競技選手まで対応する社交ダンス教室。明るく通いやすい環境。",
  },
  {
    id: "tokyo-049",
    name: "折山ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "墨田区",
    address: "東京都墨田区江東橋4-29-13 第2鈴勘ビル2F",
    phone: "03-3632-7631",
    website: "https://www.oriyama-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "錦糸町駅から徒歩4分。1993年開校の歴史ある社交ダンス教室で、初心者から競技者まで幅広く指導。",
  },
  // 調布市
  {
    id: "tokyo-050",
    name: "ダンスプラザ調布",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "調布市",
    address: "東京都調布市布田4-2-1 調布スクエアービル5F",
    phone: "042-482-0004",
    website: "http://www.plazachofu.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "体験"],
    description: "調布駅から徒歩1分、50坪の広いフロアを持つ社交ダンス練習場。学生からシニアまで幅広い世代が利用する。",
  },
  // 府中市
  {
    id: "tokyo-051",
    name: "小林ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "府中市",
    address: "東京都府中市宮西町3-21-6 リンデンハイム府中2F",
    phone: "042-365-5091",
    website: "https://www.k-dance-school.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜21:00、日曜定休",
    description: "府中本町駅から徒歩5分。ラテン・ボールルーム・パーティーダンスに対応する地域密着型の社交ダンス教室。",
  },
  {
    id: "tokyo-052",
    name: "ダンスルーム伊藤",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "府中市",
    address: "東京都府中市府中町1-25-12 ゼルコバ5F",
    phone: "042-335-2630",
    website: "https://dance-room-ito.tokyo/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 11:00〜20:00、土・祝 13:00〜18:00、日曜定休",
    description: "JBDF優良認定登録教室。府中駅前の社交ダンス教室で、初心者からインストラクター志望まで対応。シニア向けプログラムも充実。",
  },
  // 三鷹市
  {
    id: "tokyo-053",
    name: "ヨシダダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "三鷹市",
    address: "東京都三鷹市上連雀2-4-3 大商ビル5階",
    phone: "0422-41-5015",
    website: "http://www.yoshida-dc.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ", "ブルース", "ジルバ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "12:00〜22:00（日曜定休）",
    description: "三鷹駅南口から徒歩5分。初級から上級まで幅広いクラスを提供する社交ダンススクール。シニア・女性限定クラスも開催。",
  },
  // 小金井市
  {
    id: "tokyo-054",
    name: "C Production Sakura Hall（さくらホール）",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "小金井市",
    address: "東京都小金井市貫井南町1-5-22 第4田中ビル2階",
    phone: "070-8984-0814",
    website: "https://www.c-production-sakurahall.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人"],
    description: "武蔵小金井駅・府中駅バスアクセスの社交ダンスホール。フリーダンス・トライアル・個人レッスンを提供するプロ運営の施設。",
  },
  // 国分寺市
  {
    id: "tokyo-055",
    name: "国分寺ウチダダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "国分寺市",
    address: "東京都国分寺市南町2-1-31 青木ビル3F",
    phone: "042-321-6626",
    website: "https://www.kokubunji-uchidadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "ジルバ", "ブルース"],
    lessonTypes: ["個人", "体験"],
    hours: "13:00〜22:00",
    description: "国分寺駅から徒歩7分。ボールルームダンス専門で、チケット制の個人レッスン中心。ジュニアスクールも併設。",
  },
  // 西東京市
  {
    id: "tokyo-056",
    name: "田無ダンス教室",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "西東京市",
    address: "東京都西東京市田無町3-3-7",
    phone: "042-466-3872",
    website: "http://www.tanasi-ds.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "西東京市田無に拠点を置く社交ダンス教室。初心者から経験者まで、マンツーマン・グループ両対応でレッスン提供。",
  },
  // 狛江市
  {
    id: "tokyo-057",
    name: "ウィルKダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "狛江市",
    address: "東京都狛江市岩戸南3-6-8",
    phone: "03-3488-2951",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ", "ジルバ", "ブルース"],
    lessonTypes: ["個人", "体験"],
    description: "狛江市岩戸南の少人数制社交ダンス教室。スタンダード・ラテン全種目に対応し、マンツーマンレッスンで丁寧に指導。",
  },
  // 多摩市
  {
    id: "tokyo-058",
    name: "マイダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "多摩市",
    address: "東京都多摩市関戸2-40-23 SIビル7F",
    phone: "042-375-2020",
    website: "https://www.mydance.co.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "多摩市関戸のSIビル7階にある社交ダンス教室。マンツーマン個人レッスンから入門〜中級クラスレッスン、フリーダンス、出張レッスンまで提供。",
  },
  // 立川市
  {
    id: "tokyo-059",
    name: "山田誠ダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "立川市",
    address: "東京都立川市曙町2-32-2 中山本社ビル3階",
    phone: "042-525-1588",
    website: "https://ymakoto-ds.themedia.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["個人", "体験"],
    hours: "火〜金 13:00〜21:00、土 12:00〜18:00、日・月定休",
    description: "立川駅北口から徒歩5分。初心者から競技ダンス志望者まで対応。無料レンタルシューズ完備。JBDF認定教室。",
  },
  // 江戸川区
  {
    id: "tokyo-060",
    name: "Tダンスプロダクション",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "江戸川区",
    address: "東京都江戸川区東小松川4-43-18 アクシスビル2F",
    phone: "03-6808-0293",
    website: "https://dancespacefunabori.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜22:00、土 13:00〜21:00、祝日 13:00〜20:00、日曜定休",
    description: "都営新宿線・船堀駅徒歩3分。約55坪の柱なしフロア、カバ桜無垢材の床。プロ講師による初心者向けレッスンあり。",
  },
  // 国分寺市（2件目）
  {
    id: "tokyo-061",
    name: "フジワラダンスアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "国分寺市",
    address: "東京都国分寺市本町3-11-1 第8千代鶴ビル4階A",
    phone: "042-312-4434",
    website: "https://newlod.com/school/132169",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 13:00〜22:00、土 13:00〜18:00、日曜定休",
    description: "国分寺駅から徒歩3分。スタンダード・ラテン全10種目に対応し、平日夜・土曜も営業する社交ダンス教室。",
  },
  // 社交ダンス教室 (tokyo-062 〜 tokyo-092)
  {
    id: "tokyo-062",
    name: "SUDO dance studio GINZA",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "中央区",
    address: "東京都中央区銀座4丁目",
    website: "https://sudodancestudioginza.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜21:00、土曜 12:00〜18:00（定休日：日曜・祝日）",
    description: "鉠座駅B4・C6出口から徒歩1分。初心者から経験者まで楽しめるクラス構成の社交ダンススタジオ。",
    staff: [
      { name: "須藤 達矢", role: "代表・講師", photo: "http://sudodancestudioginza.com/wp-content/uploads/2025/01/IMG_0226-1-683x1024.jpeg" },
      { name: "庄司 まゆ", role: "講師", photo: "http://sudodancestudioginza.com/wp-content/uploads/2025/01/IMG_1417.jpeg" },
    ],
  },
  {
    id: "tokyo-063",
    name: "二宮清ダンスアカデミー",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "中央区",
    address: "東京都中央区銀座5-14-17 鉠座USBビル201",
    phone: "03-3543-1388",
    website: "https://www.k-ninomiya-da.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "火〜金 13:00〜22:00、土 12:00〜18:00（月曜不規則営業、日曜定休）",
    description: "元全日本チャンピオン経営のダンス教室。初心者向けの丁寧な指導が特徴。",
    staff: [
      { name: "二宮 清", role: "JBDFラテンチャンピオン SA級", photo: "https://www.k-ninomiya-da.com/img/staff/img_staff01.jpg" },
      { name: "二宮 富美英", role: "JBDFラテンチャンピオン SA級", photo: "https://www.k-ninomiya-da.com/img/staff/img_staff02.jpg" },
      { name: "日暮 健二", role: "JBDFラテンA級・スタンダードB級", photo: "https://www.k-ninomiya-da.com/img/staff/img_staff03.jpg?0216" },
      { name: "藤田 洋平", role: "JBDFラテンB級・スタンダードA級", photo: "https://www.k-ninomiya-da.com/img/staff/img_staff11.jpg?0114" },
      { name: "服部 一眞", role: "JBDF ラテンA級", photo: "https://www.k-ninomiya-da.com/img/staff/img_staff12.jpg?0207" },
      { name: "長谷川 笑叶", role: "ラテンA級・スタンダードB級", photo: "https://www.k-ninomiya-da.com/img/staff/img_staff13.jpg?0216" },
    ],
  },
  {
    id: "tokyo-064",
    name: "シライシダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "港区",
    address: "東京都港区南麻布5-10-26 2F",
    phone: "03-6450-4143",
    website: "https://shiraishidance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "広尾駅から徒歩1分。天井が高くおしゃれな内装のダンススタジオ。社交ダンスを中心に多様なプログラムを提供。",
  },
  {
    id: "tokyo-065",
    name: "ダンススクール市川",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区四谷三丁目",
    website: "https://dance-school-ichikawa.net/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 11:00〜22:00、土曜 11:00〜18:00（日曜定休）",
    description: "四谷三丁目の社交ダンススクール。アットホームな雰囲気で社交ダンスを学べる。",
    staff: [
      { name: "市川 学", role: "プロフェッショナルダンス教師1級", photo: "https://dance-school-ichikawa.net/wp-content/themes/test/images/staff/manabu1.jpg" },
      { name: "市川 久", role: "プロフェッショナルダンス教師1級", photo: "https://dance-school-ichikawa.net/wp-content/themes/test/images/staff/hisashi1.jpg" },
      { name: "大島 寿子", role: "プロフェッショナルダンス教師1級", photo: "https://dance-school-ichikawa.net/wp-content/themes/test/images/staff/hisako2020.jpg" },
    ],
  },
  {
    id: "tokyo-066",
    name: "LIBERA DANCE",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区",
    website: "https://www.liberadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "ジュニアからシニアまで全世代対応の社交ダンススクール。競技ダンスにも対応。",
    staff: [
      { name: "山本 武志", role: "インターナショナルコーチ", photo: "https://liberadance.com/img/teachers/yamamoto-takeshi.png" },
      { name: "木嶋 友美", role: "アジアゴールドメダリスト", photo: "https://liberadance.com/img/teachers/kijima-tomomi.avif" },
      { name: "篠田 龍佑", role: "東京都ダンススポーツ連盟会長", photo: "https://liberadance.com/img/teachers/shinoda-ryusuke.avif" },
      { name: "篠田 沙代子", role: "WDSF-PD A級国際審判員", photo: "https://liberadance.com/img/teachers/shinoda-sayoko.avif" },
      { name: "西 恭平", role: "DSHJチャンピオン", photo: "https://liberadance.com/img/teachers/nishi-kyohei.jpg" },
      { name: "西川 真由", role: "WDSF-PD日本代表", photo: "https://liberadance.com/img/teachers/nishikawa-mayu.avif" },
    ],
  },
  {
    id: "tokyo-067",
    name: "ソシアルダンススタジオ ナリタケ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区",
    website: "https://www.sdsnaritake.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 12:30〜21:30、土・祝 12:30〜19:30（日曜定休）",
    description: "靖国通り沾いにある社交ダンススタジオ。初心者から上級者まで対応。",
    staff: [
      { name: "成竹 俊治", role: "代表・講師", photo: "https://www.sdsnaritake.com/uploads/1/4/5/3/14535348/s3142970_orig.jpg" },
      { name: "延本 紗祐里", role: "講師", photo: "https://www.sdsnaritake.com/uploads/1/4/5/3/14535348/s3142971_orig.jpg" },
    ],
  },
  {
    id: "tokyo-068",
    name: "西武新宿ダンス教室",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区",
    website: "https://sdk.themedia.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "広くて明るいスタジオ。社交ダンス・アメリカンスムースに対応した本格教室。",
  },
  {
    id: "tokyo-069",
    name: "FESSIダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "渋谷区",
    address: "東京都渋谷区幡ヶ谷",
    website: "https://fessi-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "幡ヶ谷駅から徒歩5分。元全日本チャンピオンが指導する本格社交ダンススクール。出張レッスンも対応。",
  },
  {
    id: "tokyo-070",
    name: "檜山ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "世田谷区",
    address: "東京都世田谷区",
    website: "http://hiyamadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "下高井戸駅徒歩2分。10名のインストラクターが在籍し初心者向けクラスが充実。",
  },
  {
    id: "tokyo-071",
    name: "豪徳寺ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "世田谷区",
    address: "東京都世田谷区豪徳寺1-46-16 諏訪ビル2階",
    phone: "03-3420-3069",
    website: "https://www.dance.co.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "豪徺寺駅徒歩2分。ジュニアからシニアまで幅広く対応するグループ・個人レッスン。",
  },
  {
    id: "tokyo-072",
    name: "篠田忠ダンスカレッジ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "品川区",
    address: "東京都品川区小山",
    website: "https://shinodadc.net/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "武蔵小山駅徒歩3分。1990年開設の英国式正統社交ダンス教室。初心者からプロまで対応。",
  },
  {
    id: "tokyo-073",
    name: "助川ダンス教室",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "品川区",
    address: "東京都品川区戸越銀座",
    website: "https://www.sukegawadance.co.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "戸越銀座駅徒歩3分。開業50年以上の老舗社交ダンス教室。初心者に優しい指導。",
    staff: [
      { name: "近藤 寿孝", role: "講師", photo: "https://www.sukegawadance.co.jp/wp/wp-content/uploads/2025/11/photo_kondo.jpg" },
      { name: "山本 顕治", role: "講師", photo: "https://www.sukegawadance.co.jp/wp/wp-content/uploads/2025/11/photo_yamamoto.jpg" },
      { name: "山本 菜緒", role: "講師", photo: "https://www.sukegawadance.co.jp/wp/wp-content/uploads/2025/11/Nao.jpg" },
    ],
  },
  {
    id: "tokyo-074",
    name: "西岡ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "品川区",
    address: "東京都品川区東五反田",
    website: "https://nishiokads.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 12:00〜22:00、土・祝 12:00〜18:00（日曜休業）",
    description: "五反田の社交ダンススクール。丁寧な個人指導え評判。",
  },
  {
    id: "tokyo-075",
    name: "ダンススタジオコネクト橘",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "豊島区",
    address: "東京都貊島区駒込3-3-19 ORCHID PLACE 9F",
    phone: "03-5394-2229",
    website: "https://tachibanadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜22:00、土 12:00〜20:00、祝 12:00〜18:00（日曜休業）",
    description: "JR駒込駅から徒歩2分。元全日本チャンピオン橘正幸・弘子が監修する社交ダンススタジオ。",
  },
  {
    id: "tokyo-076",
    name: "ミヤジマヒデユキダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "杉並区",
    address: "東京都杉並区永福3-57-19 永福2F",
    phone: "03-3327-2331",
    website: "http://www.miyajima-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 12:00〜22:00、土 12:00〜20:00（日曜休業）",
    description: "西永福駅北口徒歩2分。アットホームな雰囲気の社交ダンススクール。",
  },
  {
    id: "tokyo-077",
    name: "スタジオ・ハートビート",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "杉並区",
    address: "東京都杉並区荻窪",
    website: "https://www.studio-heartbeat.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "荻窪駅徒歩1分。初心者大歓迎のアットホームなダンススタジオ。",
  },
  {
    id: "tokyo-078",
    name: "H&M DANCE STUDIO",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "墨田区",
    address: "東京都墨田区錦糸1-7-9 江上ビル101",
    phone: "03-6240-4151",
    website: "https://hmdancejp.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "JR錦糸町駅北口から徒歩5分。元JCF A級の講師が経営。全身鏡・専用フロア完備。",
  },
  {
    id: "tokyo-079",
    name: "ダンススタジオ ナカイズミ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "中野区",
    address: "東京都中野区東中野1-50-4 日進ビル3階",
    phone: "03-5330-5157",
    website: "http://ds-nakaizumi.daa.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "JR東中野駅東口1分。統一全日本10ダンスチャンピオンの中泉繁先生が経営する本格教室。",
  },
  {
    id: "tokyo-080",
    name: "パレアダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "大田区",
    address: "東京都大田区南久が原2-10-3-1F",
    website: "https://www.pareadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "東急池上線久が原駅から徒歩4分。少人数制で丁寧な指導。45歳からの社交ダンス教室も開講。",
  },
  {
    id: "tokyo-081",
    name: "シマザキダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "大田区",
    address: "東京都大田区蒲田5-20-7 シャトウ蒲田3F",
    phone: "03-5703-2611",
    website: "https://shimazaki-ds.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "蒲田駅より徒歩3分。JBDF A級審査員の嶋崎千吉・恵理子が経営・指導。英国留学経験のある本格派。",
  },
  {
    id: "tokyo-082",
    name: "早坂ダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "武蔵野市",
    address: "東京都武蔵野市吉祥寺",
    website: "https://hayasaka-dance-school.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "吉祥寺駅徒歩2分。有資格講師陣による指導。お子様から大人まで対応。",
  },
  {
    id: "tokyo-083",
    name: "ダンススクールハマノ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "三鷹市",
    address: "東京都三鷹市",
    website: "https://dshamano.amebaownd.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "9:00〜21:00",
    description: "JR三鷹駅北口徒歩30秒の好立地。初心者から上級者まで楽しめる社交ダンス教室。",
    staff: [
      { name: "濱野 浩二", role: "社交ダンス講師", photo: "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/457750/1d105a3718d401b593a930fe91dd7311_8457954f15fff4a82b06614f50bcdfef.jpg?width=608" },
      { name: "野嵜 子江", role: "社交ダンス講師", photo: "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/457750/ce170e7a50464b74b5921dd2b01c4741_13a18129075af9bef4606f2dbccea92f.jpg?width=608" },
      { name: "鈴木 豊彦", role: "社交ダンス講師", photo: "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/457750/d765733d25e87636e1df61a6e15dd771_ad7be6d50630e4ebd91122b633056485.jpg?width=608" },
    ],
  },
  {
    id: "tokyo-084",
    name: "木下ダンスワールド",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "武蔵野市",
    address: "東京都武蔵野市",
    website: "https://www.kinoshita-danceworld.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 12:00〜21:00、土 13:00〜19:00（日・祝休業）",
    description: "初心者からプロフェッショナルまで社交ダンスを学べるスクール。丁寧な個人指導が好評。",
    staff: [
      { name: "木下 聡明", role: "講師", photo: "https://www.kinoshita-danceworld.com/manasys/wp-content/uploads/staff-image01.jpg" },
      { name: "山内 砂穂", role: "講師", photo: "https://www.kinoshita-danceworld.com/manasys/wp-content/uploads/staff-image02.jpg" },
    ],
  },
  {
    id: "tokyo-085",
    name: "オカダダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "立川市",
    address: "東京都立川市錦町2-2-5 青ビル3F",
    phone: "042-520-3800",
    website: "https://www.okadadancestudio.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 12:00〜21:00、土 12:00〜19:00（日曜定休）",
    description: "立川駅南口徒歩5分。初心者から競技ダンサーまで幅広く対応する社交ダンススタジオ。",
  },
  {
    id: "tokyo-086",
    name: "ダンススタジオコガ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "八王子市",
    address: "東京都八王子市",
    website: "https://dancestudiocoga.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜21:00、土 13:00〜18:00（日・祝休業）",
    description: "八王子駅南口徒歩6分。初心者から愛好家まで丁寧に指導する社交ダンス教室。",
    staff: [
      { name: "古賀 孝義", role: "講師", photo: "https://dancestudiocoga.jp/wp-content/uploads/2024/10/b4d6486cb39480529501fed7eb5f1b62_812a79d31f733aea9f6dbc19c8635e59.jpg" },
      { name: "長谷川 裕紀", role: "講師", photo: "https://dancestudiocoga.jp/wp-content/uploads/2024/10/2fd74db0648e883d77cff26593eda36e_ef5214dbf9f5fb2ef2181c86498718ad.jpg" },
    ],
  },
  {
    id: "tokyo-087",
    name: "カワハラ・ダンススタジオ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "八王子市",
    address: "東京都八王子市めじろ台",
    website: "https://www.kawaharadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パセドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "めじろ台: 平日 11:00〜18:00、土 11:00〜18:00（日曜定休）/ 浜町: 平日 12:00〜20:00、土 12:00〜18:00（日曜定休）",
    description: "めじろ台駅前。元イーストジャパンチャンピオンが運営する本格社交ダンススタジオ。",
    staff: [
      { name: "河原 央", role: "講師", photo: "https://static.wixstatic.com/media/ee901e_1c0c8ecffb5f40d98e08839df7233262.jpg/v1/fill/w_264,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee901e_1c0c8ecffb5f40d98e08839df7233262.jpg" },
    ],
  },
  {
    id: "tokyo-088",
    name: "ダンススタジオモリモト",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "町田市",
    address: "東京都町田市",
    website: "https://www.dsm-dancestudiomorimoto.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜土（祝日含）13:00〜22:00、日 11:30〜17:00",
    description: "町田の社交ダンススタジオ。初心老からプロまで個人・団体レッスンが充実。",
    staff: [
      { name: "森本 康成", role: "JCFプロラテンチャンピオン", photo: "https://static.wixstatic.com/media/c2f9b2_9d44cbe283ba40db8dc7266ab13d19fd~mv2.jpg/v1/crop/x_0,y_696,w_2784,h_2784/fill/w_183,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%A3%AE%E6%9C%AC_JPG.jpg" },
      { name: "森本 かおり", role: "JCFプロラテン SA級", photo: "https://static.wixstatic.com/media/c2f9b2_9d44cbe283ba40db8dc7266ab13d19fd~mv2.jpg/v1/crop/x_0,y_696,w_2784,h_2784/fill/w_183,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%A3%AE%E6%9C%AC_JPG.jpg" },
      { name: "八重樫 寛由", role: "JCFラテンA級・スタンダードA級", photo: "https://static.wixstatic.com/media/c2f9b2_c82849cf068f4d669f7cb5fbcd112db8~mv2.jpg/v1/crop/x_0,y_696,w_2784,h_2784/fill/w_183,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E5%85%AB%E9%87%8D%E6%A8%AB_JPG.jpg" },
      { name: "中村 康之", role: "JDCスタンダードA級", photo: "https://static.wixstatic.com/media/5ff64a_9cd22708d9dd4f15adc07c5610ac0b42~mv2.jpg/v1/crop/x_0,y_168,w_554,h_554/fill/w_183,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_0341_edited.jpg" },
      { name: "水口 保惠", role: "元JDCラテンA級", photo: "https://static.wixstatic.com/media/5ff64a_e1fa6c88a8d54ef98ec2e097fb4e8179~mv2.jpg/v1/crop/x_560,y_828,w_1969,h_1968/fill/w_183,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3980.jpg" },
    ],
  },
  {
    id: "tokyo-089",
    name: "大塚出ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "府中市",
    address: "東京都府中市",
    phone: "042-319-1583",
    website: "http://izurudance.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "平日 13:00〜21:00、土 13:00〜17:00（日曜休館）",
    description: "府中駅徒歩2分。「enjoy dancing enjoy life」がモットーの社交ダンススクール。",
    staff: [
      { name: "大塚 出", role: "JCFプロラテンチャンピオン", photo: "http://izurudance.com/wp-content/uploads/2012/09/20101106-983-681x1024.jpg" },
      { name: "安齋 沙織", role: "JCFプロラテンチャンピオン", photo: "http://izurudance.com/wp-content/uploads/2012/09/20101106-983-681x1024.jpg" },
    ],
  },
  {
    id: "tokyo-090",
    name: "飛鳥ダンススクール",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "調布市",
    address: "東京都調布市つつじヶ丘",
    website: "https://asukabc.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "つつじヶ丘駅北口徒歩3分。子供から大人まで楽しめる社交ダンス教室。",
  },
  {
    id: "tokyo-091",
    name: "Ballroom Dancing Studio IMAMURA",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "日野市",
    address: "東京都日野市多摩平1-2-6 野口ビル4F",
    phone: "042-514-9801",
    website: "http://studioimamura.com/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    description: "JR豊田駅北口から徒歩60秒。約72坪の開放感あふれるフロア。20年以上の経験を持つ講師が指導。",
  },
  {
    id: "tokyo-092",
    name: "石原ダンスクラブ",
    prefecture: "tokyo",
    prefectureName: "東京都",
    city: "新宿区",
    address: "東京都新宿区四谷",
    website: "http://ishiharadance.jp/",
    danceStyles: ["ワルツ", "タンゴ", "フォックストロット", "クイックステップ", "ヴィエニーズワルツ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループ", "個人", "体験"],
    hours: "月〜金 13:00〜21:00、土 13:00〜18:00（日・年末年始定休）",
    description: "50年以上の歴史を持つ四谷の社交ダンス教室。初心者から大会出場者まで幅広く対応。",
  },

  // 社交ダンス教室 (hokkaido-001 〜 hokkaido-010)
  {
    id: "hokkaido-001",
    name: "ユニバーサルダンススタジオ",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市北区",
    address: "北海道札幌市北区新琴似8条1丁目2-3",
    phone: "011-709-0139",
    website: "https://universal-dancestudio.com/",
    danceStyles: ["ワルツ", "タンゴ", "スローフォックストロット", "クイックステップ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループレッスン", "個人レッスン"],
    hours: "月・火・木: 12:00〜21:00 / 水・金・土: 10:00〜21:00（祝日は18:00まで）/ 日曜定休",
    description: "1996年創業の森下ダンススクールを前身とする社交ダンス教室。子供からシニアまで幅広い年齢層に対応。地下鉄南北線麻生駅徒歩5分、JR学園都市線新琴似駅徒歩3分。",
    staff: [
      { name: "森下 博", role: "インストラクター", photo: "" },
      { name: "森下 環", role: "インストラクター", photo: "" },
      { name: "平田 篤", role: "代表・インストラクター", photo: "" },
      { name: "平田 祐史子", role: "インストラクター", photo: "" },
      { name: "中島 敏彦", role: "インストラクター", photo: "" },
      { name: "中島 麻由美", role: "インストラクター", photo: "" },
    ],
  },
  {
    id: "hokkaido-002",
    name: "ニシハラダンススタジオ",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市白石区",
    address: "北海道札幌市白石区東札幌2条4丁目3-8 東札幌ビル2F",
    phone: "011-376-1281",
    website: "https://nishiharadance.com/",
    danceStyles: ["ワルツ", "タンゴ", "スローフォックストロット", "ルンバ", "チャチャチャ", "サンバ"],
    lessonTypes: ["グループレッスン", "個人レッスン"],
    hours: "11:00〜20:00 / 日曜・祝日定休",
    description: "2018年2月に白石区にオープン。ダイエットや健康維持、競技会出場まで幅広いニーズに対応。初心者大歓迎。",
    staff: [
      { name: "西原 誠", role: "代表・インストラクター", photo: "" },
      { name: "西原 実佳", role: "インストラクター", photo: "" },
    ],
  },
  {
    id: "hokkaido-003",
    name: "みやもとダンススタジオ札幌",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市豊平区",
    address: "北海道札幌市豊平区平岸3条12丁目1-30 ランドビル南平岸2F",
    phone: "011-376-1009",
    website: "https://miyamoto-dance.net/",
    danceStyles: ["ワルツ", "タンゴ", "ルンバ", "チャチャチャ", "サンバ"],
    lessonTypes: ["グループレッスン", "個人レッスン", "フロアレンタル"],
    hours: "",
    description: "社交ダンスとダンシングリズムダンスの教室。多くの方にダンスの楽しさを広めることを目指す。駐車場1台分あり。",
    staff: [
      { name: "宮本 和幸", role: "インストラクター（北海道ボールルームダンス連盟理事・プロインストラクター1級）", photo: "" },
      { name: "宮本 万里子", role: "インストラクター（プロインストラクター1級・元全道プロラテンファイナリスト）", photo: "" },
    ],
  },
  {
    id: "hokkaido-004",
    name: "中泉ダンススタジオ",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市西区",
    address: "北海道札幌市西区西町北6丁目2-15 クレシェンド302",
    phone: "011-590-1209",
    website: "https://nakaizumi-ds.com/",
    danceStyles: ["ワルツ", "タンゴ", "スローフォックストロット", "クイックステップ", "ルンバ", "チャチャチャ", "サンバ", "パソドブレ", "ジャイブ"],
    lessonTypes: ["グループレッスン", "個人レッスン"],
    hours: "12:00〜20:00 / 日曜定休",
    description: "JBDF公認の社交ダンス教室。地下鉄東西線発寒南駅から徒歩3分。スタンダードA級・ラテンアメリカンB級の講師陣が指導。",
    staff: [
      { name: "中泉 匡央", role: "インストラクター（スタンダードA級・ラテンアメリカンB級）", photo: "" },
      { name: "中泉 知里", role: "インストラクター（スタンダードA級・ラテンアメリカンB級）", photo: "" },
    ],
  },
  {
    id: "hokkaido-005",
    name: "MDCダンスアカデミー",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市中央区",
    address: "北海道札幌市中央区北1条西22丁目3-18 MDC表参道ビル1F",
    phone: "011-612-2113",
    website: "https://mda-s.com/",
    danceStyles: ["ワルツ", "タンゴ", "スローフォックストロット", "ルンバ", "チャチャチャ", "サンバ"],
    lessonTypes: ["グループレッスン", "個人レッスン", "競技ダンス"],
    hours: "",
    description: "円山エリアの明るく清潔なダンススクール。初心者から発表会・競技会出場を目指す方まで対応。元全日本ラテンセミファイナリストが指導。駐車場2台分あり（要予約）。地下鉄東西線円山公園駅徒歩8分。",
    staff: [
      { name: "前久保 天博", role: "インストラクター（元全日本ラテンセミファイナリスト）", photo: "" },
      { name: "大滝 舞莉", role: "インストラクター", photo: "" },
    ],
  },
  {
    id: "hokkaido-006",
    name: "TAKEダンスファクトリー",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市東区",
    address: "北海道札幌市東区北24条東16丁目1-4 ロイヤル元町7F",
    phone: "011-787-0486",
    website: "https://takedan.jp/",
    danceStyles: ["ワルツ", "タンゴ", "スローフォックストロット", "ルンバ", "チャチャチャ", "サンバ", "パーティーダンス"],
    lessonTypes: ["グループレッスン", "個人レッスン"],
    hours: "11:00〜21:00（平日・土曜）/ 日曜定休",
    description: "地下鉄東豊線元町駅から徒歩1分（約70m）の好立地。JBDFインストラクターが丁寧に指導する社交ダンス教室。",
    staff: [
      { name: "TAKESHI（たけ先生）", role: "JBDFインストラクター", photo: "" },
      { name: "NORIKO（のりこ先生）", role: "JBDFインストラクター", photo: "" },
    ],
  },
  {
    id: "hokkaido-007",
    name: "ダンススタジオミカ",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市北区",
    address: "北海道札幌市北区麻生町5丁目1-3 麻生ビル2F",
    phone: "011-700-9001",
    website: "https://dance-mika.com/",
    danceStyles: ["ワルツ", "タンゴ", "ルンバ", "チャチャチャ"],
    lessonTypes: ["グループレッスン", "個人レッスン", "ジュニアレッスン"],
    hours: "10:00〜20:00（月〜土）/ 日曜定休（日曜ダンスホールあり）",
    description: "地下鉄南北線麻生駅3番出口から徒歩1分。5歳から15歳のジュニアレッスンも開講。気さくな雰囲気で初心者も安心。",
    staff: [
      { name: "畠山 美香", role: "代表・インストラクター", photo: "" },
    ],
  },
  {
    id: "hokkaido-008",
    name: "テルコ・ダンススタジオ",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市北区",
    address: "北海道札幌市北区北35条西5丁目1-15",
    phone: "011-736-3330",
    website: "https://teruko-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "ルンバ", "チャチャチャ", "フラダンス"],
    lessonTypes: ["グループレッスン", "個人レッスン", "ジュニアレッスン", "無料体験レッスン"],
    hours: "10:00〜21:00（月〜土）/ 日曜定休",
    description: "社交ダンスとフラダンスを指導。無料体験レッスン・見学随時受付。地下鉄南北線北34条駅から徒歩3分。ダンス講師歴30年以上、元北海道ラテンチャンピオンが指導。",
    staff: [
      { name: "中山 晶子", role: "代表・インストラクター（元北海道ラテンチャンピオン）", photo: "" },
      { name: "星 由紀乃", role: "インストラクター", photo: "" },
    ],
  },
  {
    id: "hokkaido-009",
    name: "ソシアルダンススクール木明",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "札幌市中央区",
    address: "北海道札幌市中央区南1条西11丁目327-20 アジャイル南1条ビルB1F",
    phone: "011-209-2228",
    website: "https://www.kimei-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "スローフォックストロット", "ルンバ", "チャチャチャ", "サンバ"],
    lessonTypes: ["グループレッスン", "個人レッスン"],
    hours: "11:00〜20:00（月〜土ヷ祝日）/ 日曜定休",
    description: "JBDF公認の社交ダンススクール。札幌中心部・大通エリアの好立地。西11丁目駅から徒歩3分。",
    staff: [
      { name: "木明 ひとし", role: "インストラクター（商業インストラクター1級）", photo: "" },
      { name: "江里川 恵美", role: "インストラクター", photo: "" },
    ],
  },
  {
    id: "hokkaido-010",
    name: "旭川ダンスカンパニー",
    prefecture: "hokkaido",
    prefectureName: "北海道",
    city: "旭川市",
    address: "北海道旭川市1条通22丁目1-18",
    phone: "0166-73-4360",
    website: "https://www.asahikawa-dance.com/",
    danceStyles: ["ワルツ", "タンゴ", "スローフォックストロット", "ルンバ", "チャチャチャ", "サンバ"],
    lessonTypes: ["グループレッスン", "個人レッスン", "ピラティス", "マスターストレッチ"],
    hours: "",
    description: "旭川市の社交ダンス教室。社交ダンスのほかピラティス・マスターストレッチ・TRXも提供。2024年6月にリラクゼーションサロンも併設。あらゆる年齢・レベルに対応。",
    staff: [
      { name: "高橋 豊", role: "インストラクター", photo: "" },
      { name: "高橋 いづみ", role: "インストラクター", photo: "" },
    ],
  },
  // ç¤¾äº¤ãã³ã¹æå®¤ (aomori-001 ã aomori-020)
  {
    id: "aomori-001",
    name: "ã¢ãªã¢ãªã»ãã³ã¹ã»ã¢ã«ããã¼",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "éæ£®å¸",
    address: "éæ£®çéæ£®å¸å®æ¹2-2-5",
    phone: "017-777-8070",
    website: "https://www.adajp.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "æãé: 12:00ã21:00 / å: 12:00ã17:00 / æ¥ã»ç¥å®ä¼",
    description: "åãã­å¨æ±åãã£ã³ããªã³ï¼8ååªåï¼ã®ç¥ææ­ä¸¸ã»å©é¦çµãçµå¶ã»æå°ããJBDFèªå®æå®¤ãå­ä¾ããå¤§äººã¾ã§ãè¶£å³ã»å¥åº·ã»ãã¼ãã£ã¼ãã³ã¹ããç«¶æãã³ã¹ã¾ã§å¹åºãå¯¾å¿ãã¢ã¹ãã æãåãããé§è»å ´å®åãã¯ã³ã³ã¤ã³ä½é¨ã¬ãã¹ã³ããã",
    staff: [
      { name: "ç¥æ æ­ä¸¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" },
      { name: "ç¥æ å©é¦", role: "ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-002",
    name: "ï¼¦ã»ï¼«ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "éæ£®å¸",
    address: "éæ£®çéæ£®å¸æ³¢é¤¨å­å¿ç°34-6",
    phone: "017-783-5028",
    website: "https://www.fk-dance-studio.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³", "ãã¢ã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å­ä¾ããå¤§äººã¾ã§ãåå¿èããç«¶æé¸æã»ãã­ãã³ãµã¼å¿æã¾ã§å¯¾å¿ããJBDFèªå®æå®¤ãã¹ã¿ã³ãã¼ãã¨ã©ãã³ã®2ç¨®é¡ã®ãã³ã¹ãæå°ãåäººã»ãã¢ã»å£ä½ã¬ãã¹ã³ãªã©å¤æ§ãªå½¢å¼ã§åè¬å¯è½ã",
    staff: [
      { name: "å°ç«¹ ææ­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-003",
    name: "M&C SATOHãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "éæ£®å¸",
    address: "éæ£®çéæ£®å¸å¤å·2-2-6 èè¥¿ãã«2F",
    phone: "017-776-3170",
    website: "https://www.mc-sds.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä½è¤åã»æºä½³å­ãçµå¶ã»æå°ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ãéæ£®å¸å¤å·ã®å¥½ç«å°ã§åå¿èããä¸ç´èã¾ã§å¯¾å¿ã",
    staff: [
      { name: "ä½è¤ å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" },
      { name: "ä½è¤ æºä½³å­", role: "ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-004",
    name: "ãã¾ãããã³ã¹æå®¤",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å«æ¸å¸",
    address: "éæ£®çå«æ¸å¸é¡å®¶4ä¸ç®9-4",
    phone: "090-3758-7459",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å«æ¸å¸é¡å®¶ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ãåå¿èããçµé¨èã¾ã§ä¸å¯§ã«æå°ã",
    staff: [
      { name: "éå æå¹¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-005",
    name: "ãµã«ã¢ããã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å«æ¸å¸",
    address: "éæ£®çå«æ¸å¸åä¸1ä¸ç®2-11",
    phone: "0178-45-3121",
    website: "https://r.goope.jp/saka3121/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å«æ¸å¸åä¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªãåå¿èããç«¶æé¸æã¾ã§å¹åºãå¯¾å¿ã",
    staff: [
      { name: "åæ¬ èç¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-006",
    name: "ãµã³ããã¼ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "éæ£®å¸",
    address: "éæ£®çéæ£®å¸æ¡æ¨4-6-32",
    phone: "017-722-4646",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "éæ£®å¸æ¡æ¨ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ãé·å¹´ã®å®ç¸¾ãæã¤æå®¤ã",
    staff: [
      { name: "ä¸æ¸ æ¦å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-007",
    name: "ã½ã·ã¢ã«ãã³ã¹ã¹ã¿ã¸ãªãããªã",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å¼åå¸",
    address: "éæ£®çå¼åå¸åæ±å3-9-7 ã¤ããµåæ±ãã«2F",
    phone: "0172-27-6658",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¼åå¸åæ±ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªãåå¿èæ­è¿ãä¸å¯§ãªæå°ãç¹å¾´ã",
    staff: [
      { name: "é·å è¤å½¦", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-008",
    name: "ã¿ã¶ã¯ãã³ã¹ã«ã¼ã ",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "äºæå·åå¸",
    address: "éæ£®çäºæå·åå¸å²©æ¨çº1-12",
    phone: "0173-35-7678",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "äºæå·åå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ãå°åã«æ ¹å·®ããæå°ãè¡ãã",
    staff: [
      { name: "ç°æ¾¤ ä¿ä¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-009",
    name: "ç°ä¸­æ­å¯¿ãã³ã¹æå®¤",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å«æ¸å¸",
    address: "éæ£®çå«æ¸å¸çªçº3 NCãã«6F",
    phone: "0178-47-2775",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å«æ¸å¸çªçºã®NCãã«åã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "ç°ä¸­ æ­å£½", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-010",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ãã®",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å¼åå¸",
    address: "éæ£®çå¼åå¸å¤§çº2-11-4",
    phone: "0172-33-9255",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¼åå¸å¤§çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å ç§äºº", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-011",
    name: "ãã³ã¹ã¹ãã¼ã¸ ãµã¤ãã¦",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å«æ¸å¸",
    address: "éæ£®çå«æ¸å¸é¡å®¶4ä¸ç®15çª8å·",
    phone: "0178-79-6845",
    website: "http://dancestage-saito.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å«æ¸å¸é¡å®¶ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ãåå¿èããä¸ç´èã¾ã§å¯¾å¿ã",
    staff: [
      { name: "é½è¤ ç¢ç£¨", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-012",
    name: "ããã°ããã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å«æ¸å¸",
    address: "éæ£®çå«æ¸å¸æå´1-17-15",
    phone: "0178-44-9654",
    website: "http://www.htv-net.ne.jp/~tsunezi/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "1998å¹´éæ ¡ãå«æ¸å¸æå´ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ããæ°è»½ã«å§ãã¦ãæ¥½ããå­¦ã³ãä¸æããªãããã¢ããã¼ãåå¿èããç«¶æé¸æã¾ã§å¹åºãæå°ãã¸ã¥ãã¢ã¹ã¯ã¼ã«ããã£ãªãã£ãã¼ãã£ã¼ãªã©å°åè²¡ç®æ´»åãã",
    staff: [
      { name: "æ²¼å£ å¸å¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-013",
    name: "å¢ç°ãã³ã¹æå®¤",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å«æ¸å¸",
    address: "éæ£®çå«æ¸å¸é¦¬å ´çº8",
    phone: "0178-22-9488",
    website: "https://masudadance.crayonsite.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å«æ¸å¸é¦¬å ´çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å¢ç° åæ", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-014",
    name: "å±±æ¬ãã³ã¹æå®¤",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "éæ£®å¸",
    address: "éæ£®çéæ£®å¸æ³å·1-2-50",
    phone: "017-775-3706",
    website: "http://yamamoto-kaoru-dance.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "éæ£®å¸æ³å·ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å±±æ¬ è«", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-015",
    name: "ã¨ã·ã³ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å¼åå¸",
    address: "éæ£®çå¼åå¸æ¾åæ±4-9-4",
    phone: "0172-87-4971",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¼åå¸æ¾åæ±ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ç»å¶ ç¾å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-016",
    name: "æ©æ¬ãã³ã¹æå®¤",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "ä¸æ²¢å¸",
    address: "éæ£®çä¸æ²¢å¸ä¸­å¤®çº3ä¸ç®7-12",
    phone: "0176-53-2221",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä¸æ²¢å¸ä¸­å¤®çºã«ããç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "æ©æ¬", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-017",
    name: "ããªã¿ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "äºæå·åå¸",
    address: "éæ£®çäºæå·åå¸æ¹å­è¹è¶323-5",
    phone: "0173-34-6464",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "äºæå·åå¸ã«ããç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "æç°", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-018",
    name: "ã¯ã¤ãã¯Sãã³ã¹ã¢ã«ããã¼",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "äºæå·åå¸",
    address: "éæ£®çäºæå·åå¸æ­çº12-3F",
    phone: "0173-34-0978",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "äºæå·åå¸æ­çºã«ããç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "è¬å¸«", role: "ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-019",
    name: "å¼åãã³ã¹å­¦é¢",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å¼åå¸",
    address: "éæ£®çå¼åå¸é§åçº11-13 ã¦ãã¯ã®ã¿ã«ããã«2F",
    phone: "0172-35-8488",
    website: "https://hirosakidancegakuin.wixsite.com/hirosakidancegakuin",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¼åé§åã«ããç¤¾äº¤ãã³ã¹å­¦é¢ãé§ããã®ã¢ã¯ã»ã¹è¯å¥½ã",
    staff: [
      { name: "è¬å¸«", role: "ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "aomori-020",
    name: "å¤§æºã½ã¼ã·ã£ã«ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "aomori",
    prefectureName: "éæ£®ç",
    city: "å¼åå¸",
    address: "éæ£®çå¼åå¸è¦ªæ¹çº43 æ¨æãã«2F",
    phone: "0172-36-0567",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¼åå¸è¦ªæ¹çºã«ããç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å¤§æº", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  // ç¤¾äº¤ãã³ã¹æå®¤ (iwate-001 ã iwate-020)
  {
    id: "iwate-001",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ã ã¼ã´",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸ç·ãä¸3-19-13",
    phone: "019-656-8939",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸ç·ãä¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å²©æ ç¾åä»£", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-002",
    name: "ãã®ãã¨ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸ææ¨çº2-26 è¿ä¸ãã«2F",
    phone: "019-624-4401",
    website: "http://www.enomoto-dance.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸ææ¨çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "æ¦æ¬ å¨ä¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-003",
    name: "å°å½ãã³ã¹æå®¤",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸ä¸­ãæ©éã1ä¸ç®11-20",
    phone: "019-625-0920",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸ä¸­ãæ©éãã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å°å æ¸ç¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-004",
    name: "å°éå¯ºãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "ä¸é¢å¸",
    address: "å²©æçä¸é¢å¸ä¸é¢å­æ¡çº5-6",
    phone: "0191-26-8818",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä¸é¢å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å°éå¯º è¬äº", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-005",
    name: "ãããç¤¾äº¤ãã³ã¹æå®¤",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸ééæ©é1-36",
    phone: "019-622-7849",
    website: "https://kawai-dance.jp/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸ééæ©éã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å·äº æ®å¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-006",
    name: "ããããã³ã·ã³ã°ã¹ã¿ã¸ãª",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "åä¸å¸",
    address: "å²©æçåä¸å¸è¥å®®çº1-8-3",
    phone: "0197-61-2433",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åä¸å¸è¥å®®çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "èè°· ç¾©ä¿¡", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-007",
    name: "ã¯ãã¬ã¤ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "ä¸é¢å¸",
    address: "å²©æçä¸é¢å¸è©èå­èµ¤çªå­53",
    phone: "0191-38-2019",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä¸é¢å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "çè°· å¸ç·", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-008",
    name: "KDAã­ã¿ã«ããã³ã¹ã¢ã«ããã¼",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "åä¸å¸",
    address: "å²©æçåä¸å¸ä¸æ±éå­19å°å²86-1 2F",
    phone: "0197-77-5980",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åä¸å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "é«æ© å½°ä¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-009",
    name: "æ´ç°ãã³ã¹æå®¤",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "ä¹æå¸",
    address: "å²©æçä¹æå¸é·åçº36-4-24",
    phone: "0194-52-3932",
    website: "http://shibata-dance.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä¹æå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "æ´ç° èå¤«", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-010",
    name: "ã¿ã«ãã·ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸èå2-2-20 æ´åãã«2F",
    phone: "019-625-1858",
    website: "https://www.takahashidance.jp/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸èåã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "é«æ© æ®æ²»", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-011",
    name: "ã¿ã«ãã·ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "åä¸å¸",
    address: "å²©æçåä¸å¸å·å²¸1ä¸ç®13-25-2F",
    phone: "0197-63-8112",
    website: "https://www.takahashi-dst.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åä¸å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "é«æ© å¹¸å¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-012",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ã¿ããã",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸å¤§é2-7-18 ã¢ãªãµã¯ãã«4F",
    phone: "019-623-0011",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸å¤§éã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ç«è± åç¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-013",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ã¯ãããã",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "åä¸å¸",
    address: "å²©æçåä¸å¸æç°çº1-33 MJãã«æç°3F",
    phone: "0197-65-3118",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åä¸å¸æç°çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "æå´ è³¢äº", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-014",
    name: "ãã³ã¹ã¹ãã¼ã¹ JUN",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "åä¸å¸",
    address: "å²©æçåä¸å¸å¤§å ¤å1-5-14",
    phone: "0197-67-1136",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åä¸å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "ä½è¤ æ·³å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-015",
    name: "ä¸­æãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "å¤§è¹æ¸¡å¸",
    address: "å²©æçå¤§è¹æ¸¡å¸å¤§è¹æ¸¡çºç¬¹å´96-1",
    phone: "0192-25-0897",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤§è¹æ¸¡å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ä¸­æ çå¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-016",
    name: "ãã³ã¤ã·ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸å¤§é2-1-23 ãµã³ã¯ã¤ã¼ã³ãã«2F",
    phone: "019-652-8514",
    website: "https://www.hakoishidancestudio.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸å¤§éã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªãè¦ªå­ä¸ä»£ã§æå°ã«ãããã",
    staff: [
      { name: "ç®±ç³ åä¹", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-017",
    name: "ãã¸ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "å¥¥å·å¸",
    address: "å²©æçå¥¥å·å¸æ°´æ²¢åºå¤ªæ¥éã1-7-4",
    phone: "0197-25-3968",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¥¥å·å¸æ°´æ²¢ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "è¤ æ é", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-018",
    name: "ããªã¢ã¤ãã³ã¹ã£ã³ã°ã¹ã¿ã¸ãª",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "è±å·»å¸",
    address: "å²©æçè±å·»å¸åå·åçº133-1",
    phone: "0198-24-1875",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "è±å·»å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å å ä¸ç¾©", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-019",
    name: "ç·ãä¸ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "çå²¡å¸",
    address: "å²©æççå²¡å¸ç·ãä¸1-1-7 ãªãã£ã¹ç·ãä¸3F",
    phone: "019-665-1177",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "çå²¡å¸ç·ãä¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "èå æ¸æº", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "iwate-020",
    name: "ã¤ã¨ã¬ã·ãã³ã¹æå®¤",
    prefecture: "iwate",
    prefectureName: "å²©æç",
    city: "è±å·»å¸",
    address: "å²©æçè±å·»å¸ä¸æ¥å¸5-33",
    phone: "0198-23-4949",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "è±å·»å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å«éæ¨« ä»æ", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" },
      { name: "å«éæ¨« ç¾æµå­", role: "ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  // ç¤¾äº¤ãã³ã¹æå®¤ (miyagi-001 ã miyagi-020)
  {
    id: "miyagi-001",
    name: "ã¢ã¯ãã£ã ãã³ã¹ ã¹ã¯ã¼ã«",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºæ®åçº5-28 ã­ã¤ã¤ã«ãªãã£ã¹åä»å°6F",
    phone: "022-272-2873",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸éèåºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "æ°´è½ æ²»", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-002",
    name: "ãªãªããã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºé¦çº1-2-10 èç°ãã«2F",
    phone: "022-264-2341",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸éèåºé¦çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å¤§å ´ æ å¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-003",
    name: "ãªããã©ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºå½åçº3-6-12 ä½æ­£ç¬¬2ãã«7F",
    phone: "022-217-9080",
    website: "https://onodera-dance.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸å½åçºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å°éå¯º å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-004",
    name: "ã«ã¬ãã³ãµã¼ãºãµãã¼ã",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºå¤§çº2-10-24 La casa miaãã«2F",
    phone: "",
    website: "https://kds-sendai.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸å¤§çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ããã­ãã§ãã·ã§ãã«ã¤ã³ã¹ãã©ã¯ã¿ã¼ãæå°ã",
    staff: [
      { name: "å è³ éå¤§", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-005",
    name: "æ°ä»æ²¼ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "æ°ä»æ²¼å¸",
    address: "å®®åçæ°ä»æ²¼å¸åãè1-9-15",
    phone: "0226-23-6673",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "æ°ä»æ²¼å¸ã«ããJBDFåªè¯èªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "èå å²å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-006",
    name: "å¾è¤ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "å¤§å´å¸",
    address: "å®®åçå¤§å´å¸å¤å·åçº3-7-16",
    phone: "0229-23-5882",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤§å´å¸å¤å·ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å¾è¤ å­¦", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-007",
    name: "é½è¤ãã³ã¹ã¬ã¼ãã³",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸å®®åéåº",
    address: "å®®åçä»å°å¸å®®åéåºæ±ä»å°4-5-20",
    phone: "022-296-0039",
    website: "https://saito-dance.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸å®®åéåºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ãå¤§å°2ã¤ã®ãã­ã¢ã§åå®ããã¬ãã¹ã³ãæä¾ãã¡ã³ã£ããããå¹´éã®æ¹ã¾ã§å¹åºãå¯¾å¿ãè¦å­¦èªç±ãåå¿èå¤§æ­è¿ã",
    staff: [
      { name: "é½è¤ åæ­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" },
      { name: "é½è¤ ã¿ãã¨", role: "ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" },
      { name: "å®·ä½è¦ è£å­", role: "ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-008",
    name: "ãµã¤ãã¦ããµã·ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸æ³åº",
    address: "å®®åçä»å°å¸æ³åºå¯ºå²¡1-2-6",
    phone: "022-777-8666",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸æ³åºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "æè¤ æ­£å¿", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-009",
    name: "æ¡ä¸­ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸å¤ªç½åº",
    address: "å®®åçä»å°å¸å¤ªç½åºé·çº5-13-2 æ¡ä¸­ãã«1F",
    phone: "022-247-3805",
    website: "http://sakuranaka.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸å¤ªç½åºé·çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ãåå¿èæ­è¿ãè¦å­¦èªç±ã",
    staff: [
      { name: "æ¡ä¸­ ææ±", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-010",
    name: "ãµãã¦ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºä¸çªçº1ä¸ç®1-30 åçºéææ¥½é¤¨ãã«4F",
    phone: "022-797-6141",
    website: "http://sato-d-s.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸ä¸çªçºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ä½è¤ æ­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-011",
    name: "ã¹ã«ã¤ã¢ã¼ããã³ã¹ã¢ã«ããã¼",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "å¤§å´å¸",
    address: "å®®åçå¤§å´å¸å²©åºå±±ä¸ä¸æ å­åãå®¶37-7",
    phone: "0229-72-3529",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤§å´å¸å²©åºå±±ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "ä½ãæ¨ æ½¤", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-012",
    name: "èäºãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸è¥æåº",
    address: "å®®åçä»å°å¸è¥æåºé£åå°è·¯60-2",
    phone: "022-354-1754",
    website: "http://sugai-dance.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸è¥æåºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "èäº å­¦", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-013",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ã¨ã³ãã¦",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºä¸çªçº3-5-16 ã¢ã¯ã¢ãã«B1F",
    phone: "022-724-3525",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸ä¸çªçºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "é è¤ ç¾æµå­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-014",
    name: "T&Tãã³ã¹ã«ã³ããã¼",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºæ¥æ¥çº4-10 ã¸ã£ã³ã»ã³æ¥æ¥çºãã«5F",
    phone: "022-217-8807",
    website: "https://ttdance.net/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸éèåºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ãã¹ã¿ããã¯å¨å¡ãã­ã¤ã³ã¹ãã©ã¯ã¿ã¼ã®è³æ ¼ãä¿æãåå¿èããç¶­ç·´èã¾ã§å¯¾å¿ãè¤æ°ã®å°ä¸éé§ããã¢ã¯ã»ã¹å¯è½ã",
    staff: [
      { name: "ææ¯å¥ ç«å¼", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-015",
    name: "NAS DANCE DESIGN",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºä¸æ2ä¸ç®1-8 ä¸æç¬¬3å¹³éãã«3F",
    phone: "022-797-7922",
    website: "https://www.nas-d-design.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹", "ããã¼ãã³ã¹", "ã¦ã§ãã£ã³ã°ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸éèåºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ãTVCMãå½åå¤ã®ã¤ãã³ãã§æ´»èºããã¤ã³ã¹ãã©ã¯ã¿ã¼ãæå°ãç¤¾äº¤ãã³ã¹ã«å ãããã¼ãã³ã¹ãã¦ã§ãã£ã³ã°ãã³ã¹ãæä¾ã",
    staff: [
      { name: "é£é  è¯å¤ª", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-016",
    name: "è¥¿å¡ãã³ã¹ã¢ã¼ãã¢ã«ããã¼",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸æ³åº",
    address: "å®®åçä»å°å¸æ³åºæ³ä¸­å¤®1-18-5",
    phone: "022-772-9898",
    website: "https://ndaasendai.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸æ³ä¸­å¤®ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "è¥¿å¡ å¯¿å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-017",
    name: "åç°ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ååå¸",
    address: "å®®åçååå¸å¢ç°å­æ³ç°51-1-2F",
    phone: "022-384-9363",
    website: "https://yoshida-dance.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ååå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "åç° å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-018",
    name: "Ryu Dance Academy",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸éèåº",
    address: "å®®åçä»å°å¸éèåºåç®çº2-22 ä»åãã«2F",
    phone: "022-393-8120",
    website: "http://ryudanceacademy.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸éèåºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ãæ±æ¥æ¬é£çã©ãã³Aç´ã®é´æ¨ç«å¤ªéãæå°ã",
    staff: [
      { name: "é´æ¨ æ«å¤ªé", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-019",
    name: "ãã³ã¹æå®¤ãµã³ã©ã¤ãº",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "é»å·é¡å¤§åçº",
    address: "å®®åçé»å·é¡å¤§åçºæã®ä¸1ä¸ç®21-12",
    phone: "022-707-3377",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤§åçºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "ä¸­è¥¿ å¼å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "miyagi-020",
    name: "Dance natural A&K",
    prefecture: "miyagi",
    prefectureName: "å®®åç",
    city: "ä»å°å¸è¥æåº",
    address: "å®®åçä»å°å¸è¥æåºæ°å¯º3ä¸ç®2-7 ã¤ã«ã¿ãã«2F",
    phone: "022-349-4371",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä»å°å¸è¥æåºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "ä½è¤ åç¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  // ç¤¾äº¤ãã³ã¹æå®¤ (akita-001 ã akita-020)
  {
    id: "akita-001",
    name: "å¤§æ²ãã³ã¹ã¢ã«ããã¼",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "å¤§ä»å¸",
    address: "ç§ç°çå¤§ä»å¸æ¸ä¾å­è°·å°æ·»113-3",
    phone: "0187-63-1500",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤§ä»å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "é¿é¨ åå", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-002",
    name: "ã¯ã­ã­ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸æ±é7-4-36",
    phone: "018-832-1068",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸æ±éã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "é»æ¨ è¼ç¾ç·", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-003",
    name: "æ¡åº­ãã¼ã«ã«ã¼ã ãã³ã¹ã«ã³ããã¼",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸è¨å³¶1-5-11",
    phone: "018-863-9230",
    website: "http://csj-ds.net/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸è¨å³¶ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "æ«»åº­ å´", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-004",
    name: "ã¹ã¿ã¼ã»ãã³ã¹ã¯ã¼ã«ã",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸çå³¶1-13-6",
    phone: "018-837-9818",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸çå³¶ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "ä½ãæ¨ æ è", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-005",
    name: "studio Ca,Co.",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸å¤æå·å­å ãå157-1",
    phone: "018-863-9873",
    website: "https://studiocaco.jimdofree.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹", "ãµã«ãµ", "ããªã¼ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ãç¤¾äº¤ãã³ã¹ã«å ããµã«ãµãããªã¼ãã³ã¹ãæä¾ãJBDFãã­ãã§ãã·ã§ãã«ãã³ã¹æå¸«ãæå°ã",
    staff: [
      { name: "ä»é ããã", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-006",
    name: "ã¹ããããã³ã¹ã¬ã¼ãã³",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸åå´æ¸¯å2-4-3",
    phone: "018-846-7668",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸åå´ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "ç¥å°¾ å­å¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-007",
    name: "ã¿ãã³ã·ãã³ã¹ã¢ã«ããã¼",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸æå½¢ç°ä¸­8-10",
    phone: "090-2978-5215",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸æå½¢ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "è°·è¶ å¼å¹¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-008",
    name: "ãã³ã¹ã«ã¬ãã¸ã»ãªãªããã¿",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "æ¨ªæå¸",
    address: "ç§ç°çæ¨ªæå¸æ¨ªæçºå­å­ãå£43-14",
    phone: "0182-32-7809",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "æ¨ªæå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ãç§ç°å¸å¤§çºã«ãæå®¤ããã",
    staff: [
      { name: "å¤§æ¥å é¦è¼", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-009",
    name: "ãã³ã¹ã¹ã¯ã¼ã«ã»ã«ã¬ã¤",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸åå´æ¸¯å7-5-19",
    phone: "018-846-9332",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ã4aã",
    description: "ç§ç°å¸åå´ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å è³è°· ææ¬¡", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-010",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ãªã",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "å¤§é¤¨å¸",
    address: "ç§ç°çå¤§é¤¨å¸å¾¡æçº3-39-2",
    phone: "",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤§é¤¨å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªãç§ç°å¸ã«ãæå®¤ããã",
    staff: [
      { name: "å¥è¯ åå½¦", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-011",
    name: "ãã³ã¹ã¹ã¿ã¸ãªNOBUCO",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸åå´æ¸¯å6-4-46",
    phone: "018-847-0655",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸åå´ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ä½è¤ ä¿¡å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-012",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ãã¼ã·ãã¯",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸åºé¢å­æ¿æ©æ·»37-6",
    phone: "018-831-1919",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸åºé¢ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ä½è¤ ããª", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-013",
    name: "ãã³ã¹ã¹ã¿ã¸ãªæ¾å·",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "æ¨ªæå¸",
    address: "ç§ç°çæ¨ªæå¸èµ¤åå­ä¸­å±±48-66",
    phone: "0182-32-8718",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "æ¨ªæå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "æ¾å· å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-014",
    name: "ãã³ã¹ã¹ã¿ã¸ãªYUZAWA",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "æ¹¯æ²¢å¸",
    address: "ç§ç°çæ¹¯æ²¢å¸æ·±å å­éå17-7",
    phone: "0183-72-0210",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "æ¹¯æ²¢å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "åç° æ¾å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-015",
    name: "çå·ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸åéç¯å°11-27",
    phone: "018-874-8380",
    website: "http://minagawadancestudio.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸åéã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªãåå¿èããç«¶æé¸æã¾ã§å¹åºãå¯¾å¿ã",
    staff: [
      { name: "çå· å¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-016",
    name: "ãã­ãªã¢ããã³ã¹ã¹ã¯ã¼ã«ã»ã«ã¬ã¤",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸åºé¢å­å ¤æ·54-7",
    phone: "018-837-5837",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸åºé¢ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å è³è°· åä½³å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-017",
    name: "ä¿å£«ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸å±±çä¸­å³¶ç¸16-31 å·éä¸ãã«2F",
    phone: "018-867-2290",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸å±±çã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ä¿å£« æ¶¼å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-018",
    name: "ãã¦ã© ãã³ã¹ ã¹ã¿ã¸ãª",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "ç§ç°å¸",
    address: "ç§ç°çç§ç°å¸ä¸­å¤®1-3-20",
    phone: "018-824-4919",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç§ç°å¸ä¸­å¤®ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ä¸æµ¦ æº", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-019",
    name: "é·æ²¢ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "é¹¿è§å¸",
    address: "ç§ç°çé¹¿è§å¸è±è¼ªä¸­è±è¼ª13",
    phone: "0186-23-2348",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "é¹¿è§å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "é·æ¾¤ ä¿å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "akita-020",
    name: "ãã·ããã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "akita",
    prefectureName: "ç§ç°ç",
    city: "åç§ç°å¸",
    address: "ç§ç°çåç§ç°å¸é·¹å·£å­æ ç¶±82-5",
    phone: "0186-63-1239",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åç§ç°å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "æ¸å¶ éé", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  // ç¤¾äº¤ãã³ã¹æå®¤ (yamagata-001 ã yamagata-020)
  {
    id: "yamagata-001",
    name: "Another Step",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å¤©ç«¥å¸",
    address: "å±±å½¢çå¤©ç«¥å¸ä¸æ¥çº3-4-29-2F",
    phone: "023-654-9660",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤©ç«¥å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "åæ¬ çµ¥é", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-002",
    name: "ã¢ããã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "è¥¿æå±±é¡æ²³åçº",
    address: "å±±å½¢çè¥¿æå±±é¡æ²³åçºè°·å°å­æ±482-1",
    phone: "0237-72-7087",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "æ²³åçºã«ããJBDFåªè¯èªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "é¿é¨ æ­£åº", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-003",
    name: "ã¤ã±ããã³ã¹æå®¤",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "éç°å¸",
    address: "å±±å½¢çéç°å¸ä¸çªçº7-29",
    phone: "0234-24-5036",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "éç°å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "çç° è±", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-004",
    name: "ã¤ã±ããã­ã«ãºãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "éç°å¸",
    address: "å±±å½¢çéç°å¸æ°æ©1-4-23 ã­ã¤ã¤ã«ããã³ã2F",
    phone: "0234-26-6366",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "éç°å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "æ± ç° å¼ä¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-005",
    name: "åã½ã·ã¢ã«ãã³ã¹ã«ã³ããã¼",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "æ±ç°å·é¡åºåçº",
    address: "å±±å½¢çæ±ç°å·é¡åºåçºä½ç®å­å¤§å¡79-5",
    phone: "0234-42-3317",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åºåçºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "æ¨æ å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-006",
    name: "æ¿å£ãã³ã¹æå®¤",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å¤©ç«¥å¸",
    address: "å±±å½¢çå¤©ç«¥å¸éç°1-13-29",
    phone: "023-654-7045",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¤©ç«¥å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "æ¿å£ æµ©ä¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-007",
    name: "å°éå¯ºãã³ã¹æå®¤",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "éç°å¸",
    address: "å±±å½¢çéç°å¸ä¸å®çº1ä¸ç®11-11",
    phone: "0234-43-6628",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "éç°å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å°éå¯º ç±ç¾å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-008",
    name: "ã«ãã¿ãã³ã¹æå®¤",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å±±å½¢å¸",
    address: "å±±å½¢çå±±å½¢å¸åæ¨1-13-50",
    phone: "023-631-0589",
    website: "http://www.kamata-dance.jp/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å±±å½¢å¸åæ¨ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "éç° åä¹ç·", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-009",
    name: "ã³ã¹ã®ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å±±å½¢å¸",
    address: "å±±å½¢çå±±å½¢å¸ãããçº3-6-11",
    phone: "023-628-8537",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å±±å½¢å¸ãããçºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å°æ åä¹§", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-010",
    name: "å´å­ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "éç°å¸",
    address: "å±±å½¢çéç°å¸ä¸­çº1-10-22 ä¼æ±ãã«2F",
    phone: "0234-26-1109",
    website: "https://www.sakata-nakadori.jp/saekodancestudio/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "éç°å¸ä¸­çºã«ããJBDFåªè¯èªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "æ± ç° ããå­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-011",
    name: "éç°ã¯ã£ã¼ã³ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "éç°å¸",
    address: "å±±å½¢çéç°å¸äºçªçº12-26",
    phone: "0234-23-1020",
    website: "https://www.sakataqueen-danceschool.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "éç°å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å¥¥å±± å©æ­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-012",
    name: "ã½ã·ã¢ã«ãã³ã·ã³ã°ã«ã¯ãã¿",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å±±å½¢å¸",
    address: "å±±å½¢çå±±å½¢å¸æç¯­çº2-1-40 ãã¼ã¯ã¢ã¬ã¤ãã«2F",
    phone: "023-624-7088",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å±±å½¢å¸æç¯­çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å·è¡ ä¿¡ä¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-013",
    name: "é«æ©ãã³ã¹æå®¤",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "æ°åºå¸",
    address: "å±±å½¢çæ°åºå¸æ¬çº6-12 ã«ã¼ãµã­ãã³ã¼ã»ã³1F",
    phone: "0233-23-5963",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "æ°åºå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "é«æ© æ", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-014",
    name: "ã¿ã­ã ã©ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "é¶´å²¡å¸",
    address: "å±±å½¢çé¶´å²¡å¸éç°çº29-7",
    phone: "0235-22-7488",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "é¶´å²¡å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å¤æ¨¹æ å¿ è¼", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-015",
    name: "ã¿ã±ããã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å±±å½¢å¸",
    address: "å±±å½¢çå±±å½¢å¸éç¡«çº2-14-33",
    phone: "023-633-8773",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å±±å½¢å¸éç ²çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "æ­¦ç° æ¿å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-016",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ABIKO",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "åé½å¸",
    address: "å±±å½¢çåé½å¸èµ¤æ¹¯2764-4",
    phone: "0238-50-2341",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "åé½å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å®å­«å­ å", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-017",
    name: "ãã³ã¹ã¹ã¿ã¸ãªå¾è¤",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å±±å½¢å¸",
    address: "å±±å½¢çå±±å½¢å¸åæ¥çº1-5-19",
    phone: "023-624-5103",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å±±å½¢å¸åæ¥çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "é«æ© éå¹¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-018",
    name: "ãã³ã¹ã¹ã¿ã¸ãªå°æ",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å¯æ²³æ±å¸",
    address: "å±±å½¢çå¯æ²³æ±å¸ä¸­å¤®1-8-51 å¯æä¸­å¤®ãã«3F",
    phone: "0237-84-5884",
    website: "https://kobayashidance.tonosama.jp/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å¯æ²³æ±å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å°æ ç¹ç¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-019",
    name: "ãã³ã¹ã¹ã¿ã¸ãª Juneri",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "ç±³æ²¢å¸",
    address: "å±±å½¢çç±³æ²¢å¸åè¥¿4-1-41",
    phone: "0238-49-9827",
    website: "https://juneri.net/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç±³æ²¢å¸ã«ããJBDFåªè¯èªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "æ å· æ½¤", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "yamagata-020",
    name: "DANCE ZONE",
    prefecture: "yamagata",
    prefectureName: "å±±å½¢ç",
    city: "å±±å½¢å¸",
    address: "å±±å½¢çå±±å½¢å¸åæ¨1-10-45 åãã«3å·é¤¨2F",
    phone: "023-625-0277",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "å±±å½¢å¸åæ¨ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "é´æ¨ è£ç¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  // ç¤¾äº¤ãã³ã¹ã®æå®¤ (fukushima-001 ã fukushima-020)
  {
    id: "fukushima-001",
    name: "ç§å±±ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ä¼æ´¥è¥æ¾å¸",
    address: "ç¦å³¶çä¼æ´¥è¥æ¾å¸æ®åçº2-35",
    phone: "0242-32-2011",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä¼æ´¥è¥æ¾å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "ç§å±± ä»å¿", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-002",
    name: "ã¤ãã¦ã¨ãã·ãã­ãã³ã¹ã¯ã¼ã«ã",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "é¡å±±å¸",
    address: "ç¦å³¶çé¡å±±å¸è¥¿ãå2-12-1 MAROãã«2F",
    phone: "024-934-5228",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "é¡å±±å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "äºä¸ ä¿ºéº¿", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-003",
    name: "ããããã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ãããå¸",
    address: "ç¦å³¶çãããå¸æ³çé²2-11-10",
    phone: "0246-88-7650",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ãããå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å¾è¤ æ´å¹³", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-004",
    name: "ä¸éãã³ã¹æå®¤",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ãããå¸",
    address: "ç¦å³¶çãããå¸å¹³å­åçº58 èéãã«1F",
    phone: "0246-23-9427",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ãããå¸å¹³ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "å¢æ·µ æå¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-005",
    name: "ã«ãã³ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ä¼æ´¥è¥æ¾å¸",
    address: "ç¦å³¶çä¼æ´¥è¥æ¾å¸é¦¬å ´çº1-33",
    phone: "0242-25-2442",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ä¼æ´¥è¥æ¾å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "éå­ æå¤«", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-006",
    name: "èæ± ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ãããå¸",
    address: "ç¦å³¶çãããå¸å°åæµéç°å­æ³çº41-18",
    phone: "0246-58-1885",
    website: "http://kikuchidanceschool.com/",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ãããå¸å°åæµã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ãã¹ã¿ããç´¹ä»ãã¼ã¸ããã",
    staff: [
      { name: "èæ±  çå²", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-007",
    name: "ã¯ãã³ã½ã·ã¢ã«ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ç¦å³¶å¸",
    address: "ç¦å³¶çç¦å³¶å¸å«å³¶çº5-5",
    phone: "090-2980-3267",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç¦å³¶å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å®ä½è¦ ä¹ç¾å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-008",
    name: "é¡å±±ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "é¡å±±å¸",
    address: "ç¦å³¶çé¡å±±å¸è¹ç°çº4-16",
    phone: "024-933-8072",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "é¡å±±å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "å°é åé", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-009",
    name: "ä½ãæ¨ãããããã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ç¦å³¶å¸",
    address: "ç¦å³¶çç¦å³¶å¸ä¸åº­åçºä¸21-7",
    phone: "024-591-5276",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç¦å³¶å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "ä½ãæ¨ æ¸é", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-010",
    name: "ç½æ²³ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ç½æ²³å¸",
    address: "ç¦å³¶çç½æ²³å¸å¤§å­é³·å±æ©å6",
    phone: "0248-24-2150",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç½æ²³å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "æ¯å±± æ´ä¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-011",
    name: "ã¹ã«ã¤ãã³ã¹æå®¤",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ç¦å³¶å¸",
    address: "ç¦å³¶çç¦å³¶å¸æ­çº7-21 è¦ªåãã«2F",
    phone: "024-531-5121",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç¦å³¶å¸æ­çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "ä½ãæ¨ åº·å­", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-012",
    name: "ã¹ãã¦ãã³ã¹ã¹ã¯ã¼ã«",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ãããå¸",
    address: "ç¦å³¶çãããå¸æ³çºä¸å·å­å®®ãä¸21-1",
    phone: "0246-56-8321",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ãããå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¯ã¼ã«ã",
    staff: [
      { name: "é è¤ å´è¡", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-013",
    name: "ç«è±ãã³ã¹ã¢ã«ããã¼",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "é è³å·å¸",
    address: "ç¦å³¶çé è³å·å¸é£é¦®çº122",
    phone: "0248-73-3555",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "é è³å·å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "ç«è± å¯¦", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-014",
    name: "ãã³ã¹ã¹ã¿ã¸ãªANZAI",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ç¦å³¶å¸",
    address: "ç¦å³¶çç¦å³¶å¸æ³çºå­å ãå25-5",
    phone: "024-559-4242",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç¦å³¶å¸æ³çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å®æ ç§æ", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-015",
    name: "ãã³ã¹ã¹ã¿ã¸ãª GEN",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "äºæ¬æ¾å¸",
    address: "ç¦å³¶çäºæ¬æ¾å¸è¥å®®2-164-5",
    phone: "0243-22-5735",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "äºæ¬æ¾å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å®é½ æºå¸", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-016",
    name: "ãã³ã¹ã¹ã¿ã¸ãª ã»ã¬ãã¼ã",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ãããå¸",
    address: "ç¦å³¶çãããå¸å¹³åçº58 èéãã«2F",
    phone: "0246-22-2971",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ãããå¸å¹³ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "é«é åç¾", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-017",
    name: "ãã³ã¹ã¹ã¿ã¸ãªã»ããªã¼ã ",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ãããå¸",
    address: "ç¦å³¶çãããå¸ææ²»å£å°2-1",
    phone: "0246-22-5366",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ãããå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "å¿è³ ç¾æ´¥é", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-018",
    name: "ã«ãã®ãã³ã¹æå®¤",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ç¦å³¶å¸",
    address: "ç¦å³¶çç¦å³¶å¸ä¸­çº4-20 ã¿ããããã«5F",
    phone: "024-521-6971",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ç¦å³¶å¸ä¸­çºã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹æå®¤ã",
    staff: [
      { name: "æ°é éå¿", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-019",
    name: "è¥¿ãã³ã¹ã¹ã¿ã¸ãª",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "ãããå¸",
    address: "ç¦å³¶çãããå¸æ³çºæ»å°»å­èä¿£26",
    phone: "0246-75-2297",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "ãããå¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¹ã¿ã¸ãªã",
    staff: [
      { name: "è¥¿ éå¼", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
  {
    id: "fukushima-020",
    name: "ãã³ãã»ã¢ã¼ããã³ã¹ã¢ã«ããã¼",
    prefecture: "fukushima",
    prefectureName: "ç¦å³¶ç",
    city: "é¡å±±å¸",
    address: "ç¦å³¶çé¡å±±å¸å¯ç°çºå­ä¸èµ¤æ²¼24-13",
    phone: "024-952-7665",
    website: "",
    danceStyles: ["ç¤¾äº¤ãã³ã¹"],
    lessonTypes: ["ã°ã«ã¼ãã¬ãã¹ã³", "åäººã¬ãã¹ã³"],
    hours: "ãåãåãããã ãã",
    description: "é¡å±±å¸ã«ããJBDFèªå®ã®ç¤¾äº¤ãã³ã¹ã¢ã«ããã¼ã",
    staff: [
      { name: "æ¬ç° æµ©", role: "ä»£è¡¨ã»ã¤ã³ã¹ãã©ã¯ã¿ã¼", photo: "" }
    ]
  },
];

export function getStudiosByPrefecture(prefecture: string): Studio[] {
  return studios.filter((s) => s.prefecture === prefecture);
}

export function getStudioById(id: string): Studio | undefined {
  return studios.find((s) => s.id === id);
}
