<template>
	<div class="divider">
		<!-- 
		<NuxtImg
			src="/fig/banner.png" 
            width="906px"
            alt="研究概要" />
			-->
			<!---sizes="(max-width: 320px) 320px, (max-width: 768px) 768px, 1200px, (max-width: 906px) 906px, 1200px"-->
		<img src="https://www.hi.u-tokyo.ac.jp/cdps/jmm/fig/banner.png"
			width = "906px"
			alt= "バナー" />
		<h2>おしらせ</h2>
		<div class="notice-box">
			<table>
				<tbody>
					<tr>
						<td>
							<span class="date">2025-11-14</span><br />
							<span class="info_type">[イベント]</span>
							<span class="info_body">第3回人文学データシンポジウム「人文学データの多様性」を開催します。
							日時：2025年11月14日（金） 於：詳細ページをご確認ください<br />
							詳細は<NuxtLink to="/event">こちら</NuxtLink></span>
						</td>
					</tr>
					<tr>
						<td>
							<span class="date">2025-10-17</span><br />
							<span class="info_type">[イベント]</span>
							<span class="info_body">「歴史情報学の創成」キックオフシンポジウムを開催します。
							日時：2025年10月17日（金） 於：詳細ページをご確認ください<br />
							詳細は<NuxtLink to="/event">こちら</NuxtLink></span>
						</td>
					</tr>
					<tr>
						<td>
							<span class="date">2025-02-21</span><br />
							<span class="info_type">[イベント]</span>
							<span class="info_body">キックオフフォーラム「日本史研究に関するデータフロー確立に向けて」を開催します。
							日時：2025年2月21日（金）14:00-17:00 於：オンライン<br />
							詳細・参加登録は<NuxtLink to="/event">こちら</NuxtLink></span>
						</td>
					</tr>
					<tr>
						<td>
							<span class="date">2024-09-18</span><br />
							<span class="info_type">[イベント]</span>
							<span class="info_body">JADH2024プレシンポジウム 人文学データシンポジウム「人文学研究データに関する提供と利用のギャップ」を開催します。
							日時：2024年9月18日（水） 於：詳細ページをご確認ください<br />
							詳細は<NuxtLink to="/event">こちら</NuxtLink></span>
						</td>
					</tr>
					<tr>
						<td>
							<span class="date">2024-09-07</span><br />
							<span class="info_type">[イベント]</span>
							<span class="info_body">シンポジウム「デジタル化と歴史研究の未来―人文学・社会科学の協働」を開催します。
							日時：2024年9月7日（土）13:00-17:00 於：ハイブリッド開催<br />
							詳細は<NuxtLink to="/event">こちら</NuxtLink></span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<hr>
		<div><h3>概要</h3>
			<p>本プロジェクトの概要を示します。 [<NuxtLink to="/summary">ページへ</NuxtLink>] </p>
		</div>
		<div><h3>メンバー</h3>
			<p>本プロジェクトのメンバー一覧です。 [<NuxtLink to="/member">ページへ</NuxtLink>] </p>
		</div>
		<div><h3>研究成果</h3>
			<p>本プロジェクトおよび関連プロジェクトの研究成果の一覧です。[<NuxtLink to="/result">ページへ</NuxtLink>]</p>
		</div>
		<div><h3>イベント</h3><p>本プロジェクトに関係するイベントを掲載しています。[<NuxtLink to="/event">ページへ</NuxtLink>]</p></div>
	</div>
</template>

<style scoped>
.date {
	font-size: large;
}
.info_type {
	font-size: medium;
	color: brown;
}
.info_body {
	font-size:  medium;
}

.notice-box {
	max-height: 20rem;
	overflow-y: auto;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
}

.notice-box table {
	width: 100%;
	border-collapse: collapse;
}

.notice-box td {
	padding: 0.8rem 0;
	border-bottom: 1px solid #eee;
	line-height: 1.6;
}

@media (min-width: 906px) {
	.divider {
		/*display: flex;*/
		justify-content: space-between;
		width: 906px;
		margin: 20px auto;
		padding-top: 100px;
	}

	.container {
		width: 906px;
	}

	.aside {
		margin: 20px auto;
		width: 906px;
	}
}

@media (min-width: 820px) and (max-width: 906px) {
	.divider {
		margin: 20px auto 0;
		width: 740px;
		padding-top: 112px;
	}

	.aside {
		margin-top: 60px;
	}
}

@media (max-width: 820px) {
	.divider {
		margin: 20px 0 0;
		padding: 0 20px;
		padding-top: 112px;
		width: 100%;
	}

	.aside {
		margin-top: 60px;
		width: 100%;
	}
}
</style>
